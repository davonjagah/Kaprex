"use client";

import React from "react";
import BalanceAndAccounts from "../components/shared/BalanceAndAccounts";
import Features from "../components/Dashboard/Features/Features";

export default function Home() {
  return (
    <>
      <BalanceAndAccounts />
      <Features />
    </>
  );
}
