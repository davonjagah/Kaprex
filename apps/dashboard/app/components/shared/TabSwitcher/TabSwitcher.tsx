"use client";

import React, { useMemo } from "react";
import { Typography } from "@repo/ui/atoms";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Dropdown } from "@repo/ui/molecules";
import { Tab } from "../../../types/common";

export default function TabSwitcher({ tabs }: { tabs: Tab[] }) {
  const router = useRouter();
  const pathname = usePathname();

  const activeTab = useMemo(() => {
    const exact = tabs.find((tab) => tab.href === pathname);
    if (exact) return exact;

    const byLength = [...tabs].sort((a, b) => b.href.length - a.href.length);
    const prefixed = byLength.find((tab) => pathname.startsWith(tab.href));
    if (prefixed) return prefixed;

    return tabs[0];
  }, [pathname, tabs]);

  return (
    <>
      {/* Desktop Tab Switcher */}
      <div className="hidden sm:flex justify-start bg-white rounded-3xl px-11 pt-6 mb-3.5">
        {tabs.map((tab) => {
          const isActive = activeTab && activeTab.value === tab.value;
          return (
            <Link
              key={tab.value}
              href={tab.href}
              className={`pr-9 transition-all ${
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
          options={tabs.map((tab) => ({ label: tab.label, value: tab.value }))}
          value={
            activeTab?.value ||
            (tabs.length > 0 ? (tabs[0] as { value: string }).value : "")
          }
          onChange={(val) => {
            const tab = tabs.find((t) => t.value === val);
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
