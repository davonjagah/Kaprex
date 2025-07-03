"use client";

import { Button, IconButton, Typography } from "@repo/ui/atoms";
import { Eye, EyeOff, Minus, Plus, ShoppingCart, Tag } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { BalanceItem } from "../../../../../types/api/wallets";
import { Dropdown } from "@repo/ui/molecules";

export default function BalanceCard({ balances }: { balances: BalanceItem[] }) {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [selectedCurrency, setSelectedCurrency] = useState(
    balances.length > 0 ? balances[0]?.token.symbol || "USDC" : "USDC",
  );

  const selectedBalance =
    balances.length > 0
      ? parseFloat(
          balances.find((b) => b.token.symbol === selectedCurrency)?.amount ||
            "0.00",
        )
      : 0.0;

  const getDisplayLabel = (symbol: string) => {
    if (symbol === "USDC") return "USD";
    if (symbol === "EURC") return "EUR";
    return symbol;
  };

  const currencyOptions =
    balances.length > 0
      ? balances.slice(0, 2).map((b) => ({
          label: getDisplayLabel(b.token.symbol),
          value: b.token.symbol,
        }))
      : [
          { label: "USD", value: "USDC" },
          { label: "EUR", value: "EURC" },
        ];

  return (
    <div className="flex-1 bg-white rounded-xl shadow-sm py-6 px-4 lg:py-8.5 lg:px-8 flex flex-col justify-between w-full lg:w-[59.41%]">
      <div className="flex items-center justify-between mb-2">
        <Typography
          variant="body"
          className="font-nohemi flex items-center gap-2"
        >
          Total Balance{" "}
          <Button
            size="lg"
            variant="text"
            onClick={() => setIsBalanceVisible(!isBalanceVisible)}
            className=" hover:text-gray-600 transition-colors w-6 h-6 p-0"
          >
            {isBalanceVisible ? (
              <Eye className="w-4 h-4" stroke="#94A3B8" />
            ) : (
              <EyeOff className="w-4 h-4" stroke="#94A3B8" />
            )}
          </Button>
        </Typography>
      </div>
      <div className="flex gap-2 items-center">
        <Typography
          variant="h2"
          className="font-normal tracking-tight font-nohemi text-[36px] lg:text-[64px]"
        >
          {isBalanceVisible
            ? selectedBalance.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : "****"}
        </Typography>
        <div className="min-w-[80px]">
          <Dropdown
            options={currencyOptions}
            value={selectedCurrency}
            onChange={setSelectedCurrency}
            className="text-black font-nohemi text-base lg:text-[32px] bg-transparent border-none shadow-none px-2 py-1 h-auto min-w-[80px]"
            showChevron={true}
            dropdownClassName="w-32"
          />
        </div>
      </div>

      <div className="flex justify-center lg:justify-start gap-10 mt-2">
        <Link href="/transactions/fund">
          <IconButton variant="primary" label="Fund" size="lg">
            <Plus className="w-4 md:w-7 h-4 md:h-7" />
          </IconButton>
        </Link>
        <Link href="/transactions/pay">
          <IconButton variant="primary" label="Pay" size="lg">
            <Minus className="w-4 md:w-7 h-4 md:h-7" />
          </IconButton>
        </Link>
        <Link href="/transactions/buy-crypto">
          <IconButton
            variant="secondary"
            label="Buy Crypto"
            labelMobile="Buy"
            size="lg"
          >
            <ShoppingCart className="w-4 md:w-7 h-4 md:h-7" />
          </IconButton>
        </Link>
        <Link href="/transactions/sell-crypto">
          <IconButton
            variant="secondary"
            label="Sell Crypto"
            labelMobile="Sell"
            size="lg"
          >
            <Tag className="w-4 md:w-7 h-4 md:h-7" />
          </IconButton>
        </Link>
      </div>
    </div>
  );
}
