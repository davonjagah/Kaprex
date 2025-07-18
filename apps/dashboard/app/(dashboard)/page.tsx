"use client";

import React from "react";
import Features from "../../components/Dashboard/Features/Features";
import BalanceAndAccounts from "../../components/shared/BalanceAndAccounts";
import BusinessDashboard from "../../components/Business";
import { useAuth } from "../../contexts/AuthContext";

export default function Home() {
  const { switchedAccountType, accounts } = useAuth();

  return (
    <>
      {switchedAccountType === "individual" ? (
        <>
          <BalanceAndAccounts accounts={accounts!} />
          <Features />
        </>
      ) : (
        <BusinessDashboard accounts={accounts!} />
      )}
    </>
  );
}
