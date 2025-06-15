"use client";

import { Button, IconButton, Typography } from "@repo/ui/atoms";
import { Eye, EyeOff, Minus, Plus, ShoppingCart, Tag } from "lucide-react";
import React, { useState } from "react";

export default function BalanceCard() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  return (
    <div className="flex-1 bg-white rounded-xl shadow-sm py-6 px-4 md:py-8.5 md:px-8 flex flex-col justify-between w-full md:w-[59.41%]">
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
          className="font-normal tracking-tight font-nohemi text-[36px] md:text-[64px]"
        >
          {isBalanceVisible ? "1,000,234.56" : "****"}
        </Typography>
        <Typography
          variant="body"
          className="text-gray-400 font-nohemi text-base md:text-[32px]"
        >
          USD
        </Typography>
      </div>

      <Typography
        variant="body"
        className="text-green-500 font-sans text-xs md:text-base mb-8"
      >
        {isBalanceVisible ? "+27,972.00 (2.14%)" : "****"}
      </Typography>

      <div className="flex justify-center md:justify-start gap-10 mt-2">
        <IconButton variant="primary" label="Fund" size="lg">
          <Plus className="w-4 md:w-7 h-4 md:h-7" />
        </IconButton>
        <IconButton variant="primary" label="Pay" size="lg">
          <Minus className="w-4 md:w-7 h-4 md:h-7" />
        </IconButton>
        <IconButton
          variant="secondary"
          label="Buy Crypto"
          labelMobile="Buy"
          size="lg"
        >
          <ShoppingCart className="w-4 md:w-7 h-4 md:h-7" />
        </IconButton>
        <IconButton
          variant="secondary"
          label="Sell Crypto"
          labelMobile="Sell"
          size="lg"
        >
          <Tag className="w-4 md:w-7 h-4 md:h-7" />
        </IconButton>
      </div>
    </div>
  );
}
