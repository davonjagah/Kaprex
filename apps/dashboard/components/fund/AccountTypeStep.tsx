"use client";

import { Typography } from "@repo/ui/atoms";
import { BankIcon, CryptoIcon } from "@repo/ui/icons";

const accountOptions = [
  {
    label: "Virtual Account",
    value: "virtual",
    icon: <BankIcon />,
    description: "Send from your Kaprex USD or Euro balance",
  },
  {
    label: "Crypto",
    value: "crypto",
    icon: <CryptoIcon />,
    description: "Send from your crypto wallet balance",
  },
];

interface AccountTypeStepProps {
  selectedAccountType: string;
  onAccountTypeChange: (type: string) => void;
}

export default function AccountTypeStep({
  selectedAccountType,
  onAccountTypeChange,
}: AccountTypeStepProps) {
  return (
    <>
      <Typography variant="body" className="font-nohemi mb-4">
        What account do you want to fund?
      </Typography>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {accountOptions.map((opt) => {
          const selected = selectedAccountType === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => onAccountTypeChange(opt.value)}
              className={`flex-1 rounded-2xl border-2 p-4 md:p-6 flex flex-row md:flex-col gap-3 md:gap-0 items-center transition-all md:max-w-[204px] h-[153px] ${
                selected
                  ? "border-primary bg-[#FFF7F3]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="mb-2">{opt.icon}</div>
              <div className="text-left md:text-center">
                <Typography
                  variant="body"
                  className={`font-nohemi mb-1 ${
                    selected ? "text-primary font-medium " : "text-black"
                  }`}
                >
                  {opt.label}
                </Typography>
                <Typography variant="body" className="text-[#7C7B80] text-sm">
                  {opt.description}
                </Typography>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
