"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const TABS = [
  { label: "Fund", value: "fund" },
  { label: "Pay", value: "pay" },
  { label: "Buy Crypto", value: "buy-crypto" },
  { label: "Sell Crypto", value: "sell-crypto" },
];

export default function TabSwitcher() {
  const pathname = usePathname();
  const activeTab = pathname.split("/").pop();

  return (
    <div className="flex bg-[#F8F8F8] rounded-full p-1 mb-6">
      {TABS.map((tab) => (
        <Link
          key={tab.value}
          href={`/fund/${tab.value}`}
          className={`flex-1 py-3 rounded-full font-medium text-center transition-all ${
            activeTab === tab.value
              ? "bg-white text-primary shadow"
              : "text-gray-400"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
