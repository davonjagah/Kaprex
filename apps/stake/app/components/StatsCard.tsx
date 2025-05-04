"use client";

import { Typography } from "@repo/ui/atoms";
import { KsolIcon, KsolSolIcon, SolanaIcon } from "@repo/ui/icons";
import React from "react";

const StatsCard = () => {
  return (
    <aside className="flex-1 md:max-w-[35.313rem]">
      <div className="bg-gray rounded-2xl shadow-sm p-2.5 md:p-6">
        {/* 1 kSOL Rate */}
        <div className="bg-white rounded-2xl p-5 border border-gray-300">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <KsolSolIcon />
              <div>
                <Typography variant="h4">1 kSOL</Typography>
                <Typography
                  variant="body"
                  className="text-gray-500 font-medium"
                >
                  1.0006 SOL
                </Typography>
              </div>
            </div>
            <Typography variant="h4">$145</Typography>
          </div>
          <hr className="border-gray-100 border-t-2" />
          <Typography
            variant="body"
            className="font-nohemi text-gray-light my-2"
          >
            Total supply
          </Typography>
          <hr className="border-gray-100 border-t-2" />
          {/* Total Supply */}
          <div className="flex items-center justify-between mt-4">
            <div>
              <Typography variant="h4">25.223 kSOL</Typography>
              <Typography variant="body" className="text-gray-500 font-medium">
                25.238 SOL
              </Typography>
            </div>
            <Typography variant="h4">$36,400.00</Typography>
          </div>
        </div>

        {/* Your Stake */}
        <Typography
          variant="body"
          className="font-nohemi text-gray-500 mt-6 mb-2"
        >
          Your Stake:
        </Typography>
        <div className="bg-white border border-gray-300 rounded-xl p-4 mb-2 flex items-center gap-3">
          <KsolIcon />
          <div className="flex-1">
            <Typography variant="h4">Kaprex Staked SOL</Typography>
            <Typography variant="body" className="text-gray-500 font-medium">
              kSOL
            </Typography>
          </div>
          <div className="text-right">
            <Typography variant="h4">0.00</Typography>
            <Typography variant="body" className="text-gray-500 font-medium">
              $0.00
            </Typography>
          </div>
        </div>
        <div className="bg-white border border-gray-300 rounded-xl p-4 mb-2 flex items-center gap-3">
          <SolanaIcon className="h-15 w-15" />
          <div className="flex-1">
            <Typography variant="h4">SOL</Typography>
            <Typography variant="body" className="text-gray-500 font-medium">
              SOL
            </Typography>
          </div>
          <div className="text-right">
            <Typography variant="h4">0.00</Typography>
            <Typography variant="body" className="text-gray-500 font-medium">
              $0.00
            </Typography>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default StatsCard;
