import { IStakePoolStats } from "../api/types";

export const COINGECKO_URL =
  "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd";

export const getStakePoolStats = async (): Promise<IStakePoolStats> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/stake-pool`,
    {
      cache: "no-store",
    },
  );

  const resSOL = await fetch(COINGECKO_URL);
  const dataSOL = await resSOL.json();

  if (!res.ok) throw new Error("Failed to fetch stake pool stats");

  const data = await res.json();

  return { ...data, solPrice: dataSOL.solana?.usd ?? 0 };
};
