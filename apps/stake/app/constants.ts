export const STAKE_CONSTANTS = {
  MIN_STAKE_AMOUNT: 0.1,
  MIN_SOL_RESERVE: 0.01,
  DECIMAL_PLACES: 3,
  NETWORK: "mainnet-beta",
} as const;

export const ERROR_MESSAGES = {
  INSUFFICIENT_BALANCE: "Insufficient balance for this operation",
  INVALID_AMOUNT: "Please enter a valid amount",
  WALLET_NOT_CONNECTED: "Please connect your wallet to continue",
  NETWORK_ERROR: "Network error. Please try again",
  TRANSACTION_FAILED: "Transaction failed. Please try again",
} as const;
