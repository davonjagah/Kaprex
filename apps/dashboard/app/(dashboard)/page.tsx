"use client";

import React from "react";
import Features from "../../components/Dashboard/Features/Features";
import BalanceAndAccounts from "../../components/shared/BalanceAndAccounts";

export default function Home() {
  return (
    <>
      <BalanceAndAccounts />
      <Features />
    </>
  );
}
