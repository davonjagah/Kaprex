"use client";

import { Typography } from "@repo/ui/atoms";
import { Dropdown } from "@repo/ui/molecules";

const currencies = [
  { label: "USD ($)", value: "usd" },
  { label: "EUR (€)", value: "eur" },
  { label: "GHS (₵)", value: "ghs" },
];

interface CurrencyStepProps {
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
}

export default function CurrencyStep({
  selectedCurrency,
  onCurrencyChange,
}: CurrencyStepProps) {
  return (
    <>
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
      <div className="text-gray-400 text-base font-nohemi">Bank Details</div>
    </>
  );
}
