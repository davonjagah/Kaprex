"use client";

import { Button, Typography } from "@repo/ui/atoms";
import { Dropdown } from "@repo/ui/molecules";
import { useAuth } from "../../contexts/AuthContext";
import { CopyIcon } from "@repo/ui/icons";
import { useState } from "react";

const mockAccount = {
  name: "Operations",
  balance: 8000,
  deposits: 1234.56,
  withdrawals: 1234.56,
  details: {
    accountName: "Prime OTC",
    bankName: "Lead Bank",
    accountNumber: "0011223456",
    routingNumber: "0011223456",
    accountType: "Personal Checking",
    accountAddress: "9450 Southwest Gemini Drive, Beaverton, OR, 97008, USA",
  },
};

const currencies = [
  { label: "USD ($)", value: "usd" },
  { label: "EUR (€)", value: "eur" },
];

interface CurrencyStepProps {
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
}

export default function CurrencyStep({
  selectedCurrency,
  onCurrencyChange,
}: CurrencyStepProps) {
  const { virtualAccounts } = useAuth();

  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const accountDetailsArray = [
    { label: "Account Name", value: virtualAccounts?.data.accountName },
    { label: "Bank Name", value: virtualAccounts?.data.bankName },
    { label: "Account Number", value: mockAccount.details.accountNumber },
    { label: "Routing Number", value: mockAccount.details.routingNumber },
    { label: "Account Type", value: virtualAccounts?.data.swiftCode },
    { label: "Address", value: virtualAccounts?.data.bank_address },
  ];
  return (
    <div className="max-w-[498px]">
      <Typography variant="body" className="font-nohemi mb-4">
        What currency do you want to fund with?
      </Typography>
      <div className="mb-8">
        <Dropdown
          options={currencies}
          value={selectedCurrency}
          onChange={onCurrencyChange}
          className="w-full"
          labelClassName="w-full rounded-full border border-gray-300 py-4 pl-6 pr-10 text-lg font-nohemi text-black bg-white flex items-center justify-between"
          dropdownClassName="w-full"
        />
      </div>
      <div className="bg-[#F5F5F7] text-base font-nohemi rounded-2xl p-4">
        <Typography
          variant="h2"
          className="font-nohemi text-xl md:text-2xl font-normal mb-4"
        >
          Account Details
        </Typography>
        <div className="space-y-4">
          {accountDetailsArray.map((item) => (
            <div key={item.label}>
              <Typography
                variant="body"
                className="text-gray-400 font-nohemi text-xs"
              >
                {item.label}
              </Typography>
              <div className="flex items-center justify-between gap-2">
                <Typography variant="body" className="font-nohemi">
                  {item.value}
                </Typography>
                <Button
                  variant="text"
                  size="sm"
                  className="text-black"
                  onClick={async () => {
                    await navigator.clipboard.writeText(item.value ?? "");
                    setCopiedLabel(item.label);
                    setTimeout(() => setCopiedLabel(null), 1000);
                  }}
                >
                  {copiedLabel === item.label ? (
                    "Copied!"
                  ) : (
                    <CopyIcon className="text-gray-100" />
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
