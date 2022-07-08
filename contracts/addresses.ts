import { Mainnet, Rinkeby, Ropsten, Kovan, Polygon, Goerli } from "@usedapp/core";

export const ETH_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
export const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000';

export const CHAIN_SETTINGS = {
  [Mainnet.chainId]: {
    VIDYA_TOKEN_ADDRESS: '0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30',
    WETH_ADDRESS: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    UNISWAPV2_ROUTER02_ADDRESS: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    UNISWAPV2_FACTORY2_ADDRESS: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    UNISWAPV2_ERC20_ADDRESS: "0xece5022b744d87071fe96e599cc4bebc977bc260",
  },
  [Rinkeby.chainId]: {
    VIDYA_TOKEN_ADDRESS: '0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30',
    WETH_ADDRESS: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    UNISWAPV2_ROUTER02_ADDRESS: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    UNISWAPV2_FACTORY2_ADDRESS: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    UNISWAPV2_ERC20_ADDRESS: "0xece5022b744d87071fe96e599cc4bebc977bc260",
  },
  [Ropsten.chainId]: {
    VIDYA_TOKEN_ADDRESS: '0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30',
    WETH_ADDRESS: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    UNISWAPV2_ROUTER02_ADDRESS: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    UNISWAPV2_FACTORY2_ADDRESS: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    UNISWAPV2_ERC20_ADDRESS: "0xece5022b744d87071fe96e599cc4bebc977bc260",
  },
  [Goerli.chainId]: {
    VIDYA_TOKEN_ADDRESS: '0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30',
    WETH_ADDRESS: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    UNISWAPV2_ROUTER02_ADDRESS: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    UNISWAPV2_FACTORY2_ADDRESS: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    UNISWAPV2_ERC20_ADDRESS: "0xece5022b744d87071fe96e599cc4bebc977bc260",
  },
  [Kovan.chainId]: {
    VIDYA_TOKEN_ADDRESS: '0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30',
    WETH_ADDRESS: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    UNISWAPV2_ROUTER02_ADDRESS: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    UNISWAPV2_FACTORY2_ADDRESS: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    UNISWAPV2_ERC20_ADDRESS: "0xece5022b744d87071fe96e599cc4bebc977bc260",
  },
  [Polygon.chainId]: {
    VIDYA_TOKEN_ADDRESS: '0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30',
    WETH_ADDRESS: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    UNISWAPV2_ROUTER02_ADDRESS: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    UNISWAPV2_FACTORY2_ADDRESS: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    UNISWAPV2_ERC20_ADDRESS: "0xece5022b744d87071fe96e599cc4bebc977bc260",
  }
}