"use client";

import React from "react";
import TransactionTabSwitcher from "../TransactionTabSwitcher/TransactionTabSwitcher";
import FAQCard from "../../FAQCard";
import PromoCard from "../../PromoCard";

interface TransactionLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function TransactionLayout({
  children,
  title,
}: TransactionLayoutProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-3">
      <div className="flex-1 lg:max-w-2/3">
        <TransactionTabSwitcher />
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
