"use client";

import React from "react";
import KYCBanner from "../components/shared/KYCBanner/KYCBanner";
import BalanceAndAccounts from "../components/shared/BalanceAndAccounts";
import Features from "../components/Dashboard/Features/Features";

export default function Home() {
  return (
    <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6">
      <KYCBanner />
      <BalanceAndAccounts />
      <Features />
    </div>
  );
}
