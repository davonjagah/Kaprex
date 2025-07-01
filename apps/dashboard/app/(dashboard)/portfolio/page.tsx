import React from "react";
import BalanceAndAccounts from "../../../components/shared/BalanceAndAccounts";
import TransactionsCard from "../../../components/shared/TransactionsCard/TransactionsCard";
import { UsdIcon, WalletIcon } from "@repo/ui/icons";

const transactions = [
  {
    type: "sell",
    icon: <UsdIcon className="w-8 h-8" />,
    title: "Sold 0.01 BTC",
    subtitle: "Sold 0.04 BTC for GHC 24,000",
    date: "12th March, 2025 | 3:45pm",
    status: "Completed",
  },
  {
    type: "buy",
    icon: <UsdIcon className="w-8 h-8" />,
    title: "Bought 0.01 BTC",
    subtitle: "Bought 0.04 BTC for GHC 24,000",
    date: "12th March, 2025 | 3:45pm",
    status: "In Progress",
  },
  {
    type: "send",
    icon: <WalletIcon className="w-8 h-8" />,
    title: "Sent 0.01 BTC",
    subtitle: "Sent Bitcoin to 38ZctGJ...QFTEBm",
    date: "12th March, 2025 | 3:45pm",
    status: "In Progress",
  },
  {
    type: "receive",
    icon: <WalletIcon className="w-8 h-8" />,
    title: "Received 10.01 USDT",
    subtitle: "Received Bitcoin from 38ZctGJ...QFTEBm",
    date: "12th March, 2025 | 3:45pm",
    status: "In Progress",
  },
];

export default function Portfolio() {
  return (
    <>
      <BalanceAndAccounts />
      <TransactionsCard transactions={transactions} />
    </>
  );
}
