import {  useCalls } from "@usedapp/core";
import { BigNumber, Contract } from "ethers";
import { CHAIN_GENERATOR_SETTINGS } from "@/contracts/generator";
import VAULT_ABI from '@/contracts/abis/vaultAbi.json';
import VIDYA_ABI from '@/contracts/abis/vidyaAbi.json';

import { formatEther } from "@ethersproject/units";
import { useAccount } from "@/hooks/useAccount";
import { IPoolState } from "@/common/providers/GeneratorProvider";
import { useReserves, useTotalSupply } from "../uniswap/usePoolContract";

export interface IGeneratorPoolStats {
  tellerBalance?: number;
  tellerPriority?: number;
  distributionRate?: number;
  apr?: number;
}

export const useGeneratorPoolCtx = (pool: IPoolState, rewardRate:number, totalPriority: number): IGeneratorPoolStats => {
  const { chainId } = useAccount();
  const { reserve0 } = useReserves(pool?.lptoken && pool.lptoken);
  const totalSupply = useTotalSupply(pool?.lptoken && pool.lptoken);

  const calls = chainId === 1 && pool && pool.teller && [
    {
      contract: new Contract(CHAIN_GENERATOR_SETTINGS[chainId].vaultAddress, VAULT_ABI),
      method: "tellerPriority",
      args: [pool.teller]
    },
    {
      contract: new Contract(pool?.lptoken ? pool.lptoken : pool.token, VIDYA_ABI),
      method: "balanceOf",
      args: [pool.teller]
    },
  ] || [];

  const results = useCalls(calls, {refresh: 'never', isStatic: false})

  results.forEach((result, index) => {
    if (result && result.error) {
      console.error(result.error);
      return;
    }
  });

  const tellerPriority = parseFloat(formatEther(results[0]?.value?.[0] || BigNumber.from(0)) || '0');
  const tellerBalance = parseFloat(formatEther(results[1]?.value?.[0] || BigNumber.from(0)) || '0');
  
  let rwt = 0;
  if(pool?.lptoken) {
    const lmao = (reserve0 * 2) * (tellerBalance/totalSupply);
    rwt = (rewardRate * 60 * 60 * 24 * 365 * tellerPriority) / (totalPriority * lmao) * 100;
  }
  else {
    rwt = (rewardRate * 60 * 60 * 24 * 365 * tellerPriority) / (totalPriority * tellerBalance) * 100;
  }

  let distributionRate = (rewardRate / totalPriority * tellerPriority) * 13;

  return { tellerPriority, tellerBalance, distributionRate, apr:rwt }
}