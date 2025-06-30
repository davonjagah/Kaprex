export interface Wallet {
  id: string;
  state: "LIVE" | string;
  walletSetId: string;
  custodyType: "DEVELOPER" | string;
  refId: string;
  name: string;
  address: string;
  blockchain: "SOL-DEVNET" | string;
  accountType: "EOA" | string;
  updateDate: string; // ISO timestamp
  createDate: string; // ISO timestamp
}

export interface TokenInfo {
  id: string;
  blockchain: "SOL-DEVNET" | string;
  tokenAddress?: string;
  standard?: string;
  name: string;
  symbol: string;
  decimals: number;
  isNative: boolean;
  updateDate: string;
  createDate: string;
}

export interface BalanceItem {
  token: TokenInfo;
  amount: string;
  updateDate: string;
}

export interface VirtualAccountsResponse {
  wallet: Wallet;
  balances: BalanceItem[];
}
