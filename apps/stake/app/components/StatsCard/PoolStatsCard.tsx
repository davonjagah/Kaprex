import React from "react";
import { Typography } from "@repo/ui/atoms";
import { KsolSolIcon } from "@repo/ui/icons";
import { IStakePoolStats } from "../../api/types";
import { formatUsd } from "../../utils/common";

interface PoolStatsCardProps {
  stats: IStakePoolStats;
  solPrice: number | null;
}

const PoolStatsCard = ({ stats, solPrice }: PoolStatsCardProps) => {
  const safeSolPrice = solPrice ?? 0;
  const ksolToSol = stats.conversionRate ?? 0;
  const ksolUsdPrice = ksolToSol * safeSolPrice;
  const totalKsolUsdValue = (stats.totalKSOLSupply ?? 0) * ksolUsdPrice;
  const totalStakedSol = (stats.totalStakedSOL ?? 0) * ksolToSol;

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <KsolSolIcon />
          <div>
            <Typography variant="h4">1 kSOL</Typography>
            <Typography variant="body" className="text-gray-500 font-medium">
              {ksolToSol.toFixed(2)} SOL
            </Typography>
          </div>
        </div>
        <Typography variant="h4">{formatUsd(ksolUsdPrice)}</Typography>
      </div>
      <hr className="border-gray-100 border-t-2" />
      <Typography variant="body" className="font-nohemi text-gray-light my-2">
        Total supply
      </Typography>
      <hr className="border-gray-100 border-t-2" />
      <div className="flex items-center justify-between mt-4">
        <div>
          <Typography variant="h4">
            {stats.totalKSOLSupply.toFixed(2)} kSOL
          </Typography>
          <Typography variant="body" className="text-gray-500 font-medium">
            {totalStakedSol.toFixed(2)} SOL
          </Typography>
        </div>
        <Typography variant="h4">{formatUsd(totalKsolUsdValue)}</Typography>
      </div>
    </div>
  );
};

export default PoolStatsCard;
