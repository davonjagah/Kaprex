"use client";
import React from "react";
import { ShoppingCart, Tag } from "lucide-react";

const PromoCard = () => (
  <div className="bg-black rounded-2xl p-6 text-white flex flex-col gap-4">
    <div className="text-lg font-bold">Buy & Sell Crypto</div>
    <div className="text-primary text-sm mb-2 cursor-pointer">Go &gt;</div>
    <div className="flex items-center gap-2">
      <ShoppingCart className="bg-primary text-white rounded-full p-1 w-8 h-8" />
      <Tag className="bg-primary text-white rounded-full p-1 w-8 h-8" />
    </div>
    <div className="flex flex-col gap-2 mt-4">
      <div className="bg-white text-black rounded-lg px-4 py-2 flex items-center gap-2">
        <span className="w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
        Solana
      </div>
      <div className="bg-white text-black rounded-lg px-4 py-2 flex items-center gap-2">
        <span className="w-4 h-4 bg-green-400 rounded-full" />
        USDT
      </div>
      <div className="bg-white text-black rounded-lg px-4 py-2 flex items-center gap-2">
        <span className="w-4 h-4 bg-blue-400 rounded-full" />
        USDC
      </div>
    </div>
  </div>
);

export default PromoCard;
