import {  useCalls } from "@usedapp/core";
import { BigNumber, Contract } from "ethers";

import { useAccount } from "@/hooks/useAccount";
import { CHAIN_GENERATOR_SETTINGS } from "@/contracts/generator";
import VAULT_ABI from '@/contracts/abis/vaultAbi.json';
import { formatEther } from "@ethersproject/units";
import { IGeneratorStats } from "@/common/providers/GeneratorProvider";
import { getResults } from "@/contracts/helpers";

export const useGeneratorStats = (): IGeneratorStats => {
  const { chainId } = useAccount();

  const defaultValues = {
    totalDistributed: 0,
    rewardRate: 0,
    totalPriority: 0
  }

  const calls = chainId === 1 && [
    {
      contract: new Contract(CHAIN_GENERATOR_SETTINGS[chainId].vaultAddress, VAULT_ABI),
      method: "totalDistributed",
      args: []
    },
    {
      contract: new Contract(CHAIN_GENERATOR_SETTINGS[chainId].vaultAddress, VAULT_ABI),
      method: "vidyaRate",
      args: []
    },
    {
      contract: new Contract(CHAIN_GENERATOR_SETTINGS[chainId].vaultAddress, VAULT_ABI),
      method: "totalPriority",
      args: []
    },
  ] || [];

  const responses = useCalls(calls, {refresh: 'everyBlock', isStatic: false})
  const results = getResults(responses, defaultValues);

  const totalDistributed = parseFloat(formatEther(results[0]?.[0] || BigNumber.from(0)) || '0');
  const rewardRate = parseFloat(formatEther(results[1]?.[0] || BigNumber.from(0)) || '0');
  const totalPriority = parseFloat(formatEther(results[2]?.[0] || BigNumber.from(0)) || '0');

  return {
    totalDistributed,
    rewardRate,
    totalPriority
  }
}