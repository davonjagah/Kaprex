"use client";

import StakeForm from "../components/StakeForm";
import StatsCard from "../components/StatsCard/StatsCard";
import { IStakePoolStats } from "../api/types";
import type { TStakeFormProps } from "../components/StakeForm";

type TStakeProps = TStakeFormProps & {
  stats: IStakePoolStats;
};

const Stake = ({ stats, ...stakeFormProps }: TStakeProps) => {
  return (
    <main className="min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 justify-center py-12 md:py-21">
        <StakeForm {...stakeFormProps} />
        <StatsCard stats={stats!} statsLoading={!stats} />
      </div>
    </main>
  );
};

export default Stake;
