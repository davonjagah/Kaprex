"use client";

import React from "react";
import AccountsCard from "./components/AccountsCard/AccountsCard";
import BalanceCard from "./components/BalanceCard/BalanceCard";
import { VirtualAccountsResponse } from "../../../types/api/wallets";
import { EurIcon, UsdIcon } from "@repo/ui/icons";

const BalanceAndAccounts = ({
  accounts,
}: {
  accounts: VirtualAccountsResponse;
}) => {
  const STABLE_ACCOUNTS = [
    {
      flag: (
        <UsdIcon
          className="h-10 w-10 lg:h-[60px] lg:w-[60px]"
          aria-hidden="true"
        />
      ),
      currency: "USD",
      amount:
        accounts?.balances?.find((b) => b.token.symbol === "USDC")?.amount ||
        "0.00",
    },
    {
      flag: (
        <EurIcon
          className="h-10 w-10 lg:h-[60px] lg:w-[60px]"
          aria-hidden="true"
        />
      ),
      currency: "EUR",
      amount:
        accounts?.balances?.find((b) => b.token.symbol === "EURC")?.amount ||
        "0.00",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-3.5">
      <BalanceCard balances={accounts?.balances || []} />
      <AccountsCard accounts={STABLE_ACCOUNTS} />
    </div>
  );
};

export default BalanceAndAccounts;
