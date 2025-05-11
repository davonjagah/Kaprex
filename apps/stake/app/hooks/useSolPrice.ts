import { COINGECKO_URL } from "../utils/stakePool";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useSolPrice = () => {
  const { data, error, isLoading } = useSWR(COINGECKO_URL, fetcher);

  return {
    solPrice: data?.solana?.usd ?? 0,
    isLoading,
    error,
  };
};

export default useSolPrice;
