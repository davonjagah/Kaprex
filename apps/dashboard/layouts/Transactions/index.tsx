"use client";

import React from "react";
import FAQCard from "../../components/FAQCard";
import PromoCard from "../../components/PromoCard";
import TabSwitcher from "../../components/shared/TabSwitcher/TabSwitcher";

interface TransactionLayoutProps {
  children: React.ReactNode;
  title: string;
}

const TABS = [
  { label: "Fund", value: "fund", href: "/transactions/fund" },
  { label: "Pay", value: "pay", href: "/transactions/pay" },
  {
    label: "Buy Crypto",
    value: "buy-crypto",
    href: "/transactions/buy-crypto",
  },
  {
    label: "Sell Crypto",
    value: "sell-crypto",
    href: "/transactions/sell-crypto",
  },
];

export default function TransactionLayout({
  children,
  title,
}: TransactionLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-3">
      <div className="flex-1 lg:max-w-2/3">
        <TabSwitcher tabs={TABS} />
        <div className="bg-white rounded-2xl shadow py-6 px-4 md:px-10">
          <h1 className="font-nohemi text-4xl mb-6 font-normal">{title}</h1>
          {children}
        </div>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-col gap-6 lg:w-1/3">
        <FAQCard />
        <PromoCard />
      </div>
    </div>
  );
}
