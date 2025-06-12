"use client";
import React, { useState } from "react";
import { Dropdown } from "@repo/ui/atoms";

const stables = [
  { flag: "🇺🇸", currency: "USD", amount: "1,025", rate: "60 GHC" },
  { flag: "🇪🇺", currency: "EUR", amount: "140,025", rate: "60 GHC" },
];

const crypto = [
  { flag: "🪙", currency: "BTC", amount: "0.5", rate: "30,000 USD" },
  { flag: "🪙", currency: "ETH", amount: "10", rate: "2,000 USD" },
];

const options = [
  { label: "Stables", value: "stables" },
  { label: "Crypto", value: "crypto" },
];

type AccountType = "stables" | "crypto";

export default function AccountsCard() {
  const [type, setType] = useState<AccountType>("stables");
  const accounts = type === "stables" ? stables : crypto;

  return (
    <div className="w-full md:w-[40.59%] flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2 relative">
        <span className="text-gray-500 text-sm">Accounts</span>
        <Dropdown
          options={options}
          value={type}
          onChange={(val) => setType(val as AccountType)}
          className=""
        />
      </div>
      <div className="flex flex-col gap-2">
        {accounts.map((acc) => (
          <div
            key={acc.currency}
            className="flex items-center bg-white border border-[#DDDCE4] justify-between rounded-full h-[60px] md:h-[89px] p-2.5 md:px-5 md:py-[3.5] hover:bg-gray-50 transition cursor-pointer"
          >
            <span className="text-2xl mr-2">{acc.flag}</span>
            <span className="flex-1 text-gray-700 font-medium">
              {acc.amount}
            </span>
            <span className="text-xs text-gray-400">
              {acc.currency} - {acc.rate}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
