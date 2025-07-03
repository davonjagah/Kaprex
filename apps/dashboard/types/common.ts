export type Tab = {
  label: string;
  value: string;
  href: string;
};

export type BankTransfer = {
  type: "Bank Transfer";
  isDefault: boolean;
  accountName: string;
  accountNumber: string;
  bank: string;
};

export type MobileMoney = {
  type: "Mobile Money";
  isDefault: boolean;
  accountName: string;
  accountNumber: string;
  networkProvider: string;
};

export type PayoutMethod = BankTransfer | MobileMoney;

export type FormState = {
  type: PayoutMethod["type"];
  bank: string;
  networkProvider: string;
  accountNumber: string;
  accountName: string;
};
