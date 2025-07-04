"use client";

import React from "react";
import BalanceAndAccounts from "../../../components/shared/BalanceAndAccounts";
import { SolanaIcon } from "@repo/ui/icons";
import { useAuth } from "../../../contexts/AuthContext";
import { Typography } from "@repo/ui/atoms";

// const transactions = [
//   {
//     type: "sell",
//     icon: <UsdIcon className="w-8 h-8" />,
//     title: "Sold 0.01 BTC",
//     subtitle: "Sold 0.04 BTC for GHC 24,000",
//     date: "12th March, 2025 | 3:45pm",
//     status: "Completed",
//   },
//   {
//     type: "buy",
//     icon: <UsdIcon className="w-8 h-8" />,
//     title: "Bought 0.01 BTC",
//     subtitle: "Bought 0.04 BTC for GHC 24,000",
//     date: "12th March, 2025 | 3:45pm",
//     status: "In Progress",
//   },
//   {
//     type: "send",
//     icon: <WalletIcon className="w-8 h-8" />,
//     title: "Sent 0.01 BTC",
//     subtitle: "Sent Bitcoin to 38ZctGJ...QFTEBm",
//     date: "12th March, 2025 | 3:45pm",
//     status: "In Progress",
//   },
//   {
//     type: "receive",
//     icon: <WalletIcon className="w-8 h-8" />,
//     title: "Received 10.01 USDT",
//     subtitle: "Received Bitcoin from 38ZctGJ...QFTEBm",
//     date: "12th March, 2025 | 3:45pm",
//     status: "In Progress",
//   },
// ];

export default function Portfolio() {
  const { virtualAccounts, accounts } = useAuth();

  return (
    <>
      <BalanceAndAccounts accounts={accounts!} />
      <div className="bg-white rounded-2xl p-6">
        {virtualAccounts?.data?.transactionHistory.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between border-b last:border-0 py-4"
          >
            <div className="flex items-start gap-4">
              <SolanaIcon className="h-12 w-12" />
              <div>
                <Typography variant="body" className="font-nohemi text-base">
                  {tx.amount} {tx.currency} {tx.notification}
                </Typography>
                <Typography variant="body" className="text-gray-400 text-sm">
                  {tx.source.payment_rail}
                </Typography>
                <Typography variant="body" className="text-gray-400 text-xs">
                  {new Date(tx.date).toLocaleString()}
                </Typography>
              </div>
            </div>
            <div>
              <Typography
                variant="body"
                className={`font-nohemi text-base ${tx.status === "completed" || tx.status === "complete" ? "text-green-500" : "text-red-400"}`}
              >
                {tx.status}
              </Typography>
            </div>
          </div>
        ))}
        {virtualAccounts?.data?.transactionHistory.length === 0 && (
          <div className="text-center text-gray-400 py-8 font-nohemi">
            No transactions found.
          </div>
        )}
      </div>
      {/* <TransactionsCard transactions={transactions} /> */}
    </>
  );
}
