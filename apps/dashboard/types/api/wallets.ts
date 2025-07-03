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

export interface Token {
  id: string;
  blockchain: string;
  name: string;
  symbol: string;
  decimals: number;
  isNative: boolean;
  updateDate: string;
  createDate: string;
}
export interface BalanceItem {
  token: Token;
  amount: string;
  updateDate: string;
}

export interface VirtualAccountsResponse {
  kaprexId: string;
  walletId: string;
  name: string;
  provider: string;
  type: string;
  status: string;
  network: string;
  walletAddress: string;
  payoutId: string | null;
  description: string;
  externalWalletId: string;
  metadata: {
    id: string;
    name: string;
    refId: string;
    state: string;
    address: string;
    blockchain: string;
    createDate: string;
    updateDate: string;
    accountType: string;
    custodyType: string;
    walletSetId: string;
  };
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
  balances: BalanceItem[];
}

export interface FundingAccount {
  id: string;
  status: string;
  developer_fee_percent: string;
  customer_id: string;
  source_deposit_instructions: {
    currency: string;
    iban: string;
    bic: string;
    account_holder_name: string;
    bank_name: string;
    bank_address: string;
    payment_rail: string;
    payment_rails: string[];
  };
  destination: {
    currency: string;
    payment_rail: string;
    address: string;
  };
}
