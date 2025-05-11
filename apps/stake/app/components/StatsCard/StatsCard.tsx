"use client";

import React from "react";
import { Typography } from "@repo/ui/atoms";
import { IStakePoolStats, IUserPool } from "../../api/types";
import StatsCardSkeleton from "./StatsCardSkeleton";
import PoolStatsCard from "./PoolStatsCard";
import UserStakeCard from "./UserStakeCard";

type TStatsCardProps = {
  userPool: IUserPool;
  userPoolLoading: boolean;
  stats: IStakePoolStats;
  statsLoading: boolean;
};

const StatsCard = ({
  userPool,
  userPoolLoading,
  stats,
  statsLoading,
}: TStatsCardProps) => {
  return (
    <aside className="flex-1 md:max-w-[35.313rem]">
      <div className="bg-gray rounded-2xl shadow-sm p-2.5 md:p-6">
        {statsLoading ? (
          <StatsCardSkeleton />
        ) : (
          <PoolStatsCard stats={stats} solPrice={stats.solPrice} />
        )}

        <Typography
          variant="body"
          className="font-nohemi text-gray-500 mt-6 mb-2"
        >
          Your Stake:
        </Typography>
        {userPoolLoading ? (
          <StatsCardSkeleton />
        ) : (
          <UserStakeCard userPool={userPool} solPrice={stats.solPrice} />
        )}
      </div>
    </aside>
  );
};

export default StatsCard;
