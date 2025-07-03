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

export interface TransactionHistoryItem {
  id: string;
  type: string;
  amount: string;
  currency: string;
  status: string;
  date: string;
  notification: string;
  source: {
    sender_name: string;
    reference: string;
    payment_rail: string;
  };
}
export interface VirtualAccountTransactions {
  id: string;
  virtualAccountId: string;
  status: string;
  currency: string;
  iban: string;
  accountNumber: string | null;
  routingNumber: string | null;
  swiftCode: string;
  bankName: string;
  bankCode: string | null;
  accountName: string;
  payment_rails: string[];
  payment_rail: string;
  bank_address: string;
  bank_beneficiary_address: string | null;
  description: string;
  walletId: string | null;
  metadata: {
    createdAt: string;
    bridgeAccountId: string;
  };
  expiresAt: string | null;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
  transactionHistory: TransactionHistoryItem[];
}
