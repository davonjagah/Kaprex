"use client";

import React from "react";
import { Typography } from "@repo/ui/atoms";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Dropdown } from "@repo/ui/molecules";

const TABS = [
  { label: "Fund", value: "fund", href: "/fund" },
  { label: "Pay", value: "pay", href: "/pay" },
  { label: "Buy Crypto", value: "buy-crypto", href: "/buy-crypto" },
  { label: "Sell Crypto", value: "sell-crypto", href: "/sell-crypto" },
];

export default function TabSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const activeTab =
    TABS.find((tab) => pathname.startsWith(tab.href)) || TABS[0];

  return (
    <>
      {/* Desktop Tab Switcher */}
      <div className="hidden sm:flex justify-start bg-white rounded-3xl px-11 pt-6 mb-3.5">
        {TABS.map((tab) => {
          const isActive = activeTab && activeTab.value === tab.value;
          return (
            <Link
              key={tab.value}
              href={tab.href}
              className={`relative pr-9 transition-all ${
                isActive ? "text-black font-bold" : "text-gray-400"
              }`}
            >
              <Typography
                variant="body"
                className={`font-nohemi border-b-4 pb-5 ${
                  isActive ? " border-b-primary " : "border-b-transparent"
                }`}
              >
                {tab.label}
              </Typography>
            </Link>
          );
        })}
      </div>
      {/* Mobile Dropdown Tab Switcher */}
      <div className="sm:hidden mb-4">
        <Dropdown
          options={TABS.map((tab) => ({ label: tab.label, value: tab.value }))}
          value={
            activeTab?.value ||
            (TABS.length > 0 ? (TABS[0] as { value: string }).value : "")
          }
          onChange={(val) => {
            const tab = TABS.find((t) => t.value === val);
            if (tab) router.push(tab.href);
          }}
          className="w-full"
          labelClassName="w-full rounded-3xl border border-gray-500 p-6 font-nohemi text-black bg-white justify-between"
          dropdownClassName="w-full bg-white shadow-sm rounded-md p-4 font-nohemi text-gray-400"
          optionsClassName="text-lg"
        />
      </div>
    </>
  );
}
