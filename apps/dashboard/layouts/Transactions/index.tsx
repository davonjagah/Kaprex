"use client";

import React from "react";
import FAQCard from "../../components/FAQCard";
import PromoCard from "../../components/PromoCard";
import TabSwitcher from "../../components/shared/TabSwitcher/TabSwitcher";
import {
  BUSINESS_TRANSACTION_TABS,
  INDIVIDUAL_TRANSACTION_TABS,
} from "../../constants/navigation";
import { useAuth } from "../../contexts/AuthContext";

interface TransactionLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function TransactionLayout({
  children,
  title,
}: TransactionLayoutProps) {
  const { switchedAccountType } = useAuth();

  return (
    <div className="flex flex-col lg:flex-row gap-3">
      <div className="flex-1 lg:max-w-2/3">
        <TabSwitcher
          tabs={
            switchedAccountType === "individual"
              ? INDIVIDUAL_TRANSACTION_TABS
              : BUSINESS_TRANSACTION_TABS
          }
        />
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
