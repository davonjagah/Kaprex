import React from "react";
import { Typography } from "@repo/ui/atoms";
import { KsolIcon, SolanaIcon } from "@repo/ui/icons";
import { IUserPool } from "../../api/types";
import { formatUsd } from "../../utils/common";

interface UserStakeCardProps {
  userPool: IUserPool;
  solPrice: number | null;
}

const UserStakeCard = ({ userPool, solPrice }: UserStakeCardProps) => {
  const safeSolPrice = solPrice ?? 0;
  const ksolToSol = userPool.conversionRate ?? 0;
  const userKsolUsdValue = userPool.userKSOLBalance * safeSolPrice * ksolToSol;
  const userSolUsdValue = userPool.userSOLBalance * safeSolPrice;

  return (
    <>
      <div className="bg-white border border-gray-300 rounded-xl p-4 mb-2 flex items-center gap-3">
        <KsolIcon />
        <div className="flex-1">
          <Typography variant="h4">Kaprex Staked SOL</Typography>
          <Typography variant="body" className="text-gray-500 font-medium">
            kSOL
          </Typography>
        </div>
        <div className="text-right">
          <Typography variant="h4">
            {userPool.userKSOLBalance.toFixed(2)}
          </Typography>
          <Typography variant="body" className="text-gray-500 font-medium">
            {formatUsd(userKsolUsdValue)}
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
          <Typography variant="h4">
            {userPool.userSOLBalance.toFixed(2)}
          </Typography>
          <Typography variant="body" className="text-gray-500 font-medium">
            {formatUsd(userSolUsdValue)}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default UserStakeCard;
