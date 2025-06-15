import React from "react";
import TransactionsCard from "../../components/shared/TransactionsCard/TransactionsCard";
import BalanceAndAccounts from "../../components/shared/BalanceAndAccounts";

export default function Portfolio() {
  return (
    <>
      <BalanceAndAccounts />
      <TransactionsCard />
    </>
  );
}
