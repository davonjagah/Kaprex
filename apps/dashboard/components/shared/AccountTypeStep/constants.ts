import { BankIcon, CryptoIcon } from "@repo/ui/icons";
import { AccountOption } from "./AccountTypeStep";

export const FUND_ACCOUNT_OPTIONS: AccountOption[] = [
  {
    label: "Bank Transfer",
    value: "bank",
    icon: BankIcon,
    description: "Add money via a simple bank transfer",
  },
  {
    label: "Crypto",
    value: "crypto",
    icon: CryptoIcon,
    description: "Deposit via wallet address",
  },
];

export const PAY_ACCOUNT_OPTIONS: AccountOption[] = [
  {
    label: "Virtual Account",
    value: "virtual",
    icon: BankIcon,
    description: "Pay from your Kaprex USD or Euro balance",
  },
  {
    label: "Crypto",
    value: "crypto",
    icon: CryptoIcon,
    description: "Pay from your crypto wallet balance",
  },
];

export const BUY_CRYPTO_ACCOUNT_OPTIONS: AccountOption[] = [
  {
    label: "Bank Account",
    value: "bank",
    icon: BankIcon,
    description: "Buy crypto using your bank account",
  },
  {
    label: "Card",
    value: "card",
    icon: CryptoIcon,
    description: "Buy crypto using your card",
  },
];

export const SELL_CRYPTO_ACCOUNT_OPTIONS: AccountOption[] = [
  {
    label: "Bank Account",
    value: "bank",
    icon: BankIcon,
    description: "Receive funds in your bank account",
  },
  {
    label: "Virtual Account",
    value: "virtual",
    icon: CryptoIcon,
    description: "Receive funds in your Kaprex balance",
  },
];
