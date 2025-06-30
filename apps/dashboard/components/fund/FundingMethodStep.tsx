"use client";

import { Typography } from "@repo/ui/atoms";
import { Dropdown } from "@repo/ui/molecules";

const fundMethods = [
  { label: "Bank Transfer", value: "bank" },
  { label: "Card", value: "card" },
  { label: "Mobile Money", value: "mobile" },
];

interface FundingMethodStepProps {
  selectedMethod: string;
  onMethodChange: (method: string) => void;
}

export default function FundingMethodStep({
  selectedMethod,
  onMethodChange,
}: FundingMethodStepProps) {
  return (
    <>
      <Typography variant="body" className="font-nohemi mb-4">
        How do you want to fund?
      </Typography>
      <div className="mb-8">
        <Dropdown
          options={fundMethods}
          value={selectedMethod}
          onChange={onMethodChange}
          className="w-full"
          labelClassName="w-full rounded-full border border-gray-300 py-4 pl-6 pr-10 text-lg font-nohemi text-black bg-white flex items-center justify-between"
          dropdownClassName="w-full"
        />
      </div>
    </>
  );
}
