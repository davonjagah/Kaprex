import React from "react";
import { Button, Typography } from "@repo/ui/atoms";

interface Transaction {
  type: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  date: string;
  status: string;
}

const statusColor = (status: string) =>
  status === "Completed" ? "text-green-500" : "text-gray-400";

const TransactionsCard = ({
  transactions,
}: {
  transactions: Transaction[];
}) => (
  <div className="mt-8">
    <div className="flex items-center justify-between mb-4">
      <Typography
        variant="h6"
        className="text-gray-500 text-base font-nohemi font-normal"
      >
        Your Transactions
      </Typography>
      <Button variant="outline" className="text-primary border-primary">
        View all transactions &gt;
      </Button>
    </div>
    <div className="flex flex-col gap-4 md:gap-9 bg-white rounded-2xl shadow p-4 md:p-10">
      {transactions.map((tx, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-between ${idx !== transactions.length - 1 ? " border-b-2 border-gray-100 pb-4 md:pb-9" : ""}`}
        >
          <div className="flex items-center gap-5">
            {tx.icon}
            <div className="max-w-[200px] md:max-w-full">
              <Typography variant="body" className="font-nohemi mb-2">
                {tx.title}
              </Typography>
              <Typography
                variant="body"
                className="text-[#726D8C] font-medium text-sm mb-6"
              >
                {tx.subtitle}
              </Typography>
              <Typography
                variant="body"
                className="text-[#C0BDCB] font-medium text-xs"
              >
                {tx.date}
              </Typography>
            </div>
          </div>
          <div className={`text-xs font-semibold ${statusColor(tx.status)}`}>
            {tx.status}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TransactionsCard;
