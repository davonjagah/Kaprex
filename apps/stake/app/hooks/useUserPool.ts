import useSWR from "swr";
import { IUserPool } from "../api/types";
import { useAppKitAccount } from "@reown/appkit/react";

const fetcher = (publicKey: string) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user-pool`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userWallet: publicKey }),
  }).then((res) => res.json());

export const useUserPool = () => {
  const { address } = useAppKitAccount();
  const shouldFetch = !!address;
  const { data, error, isLoading, mutate } = useSWR(
    shouldFetch ? ["userPool", address] : null,
    () => fetcher(address!),
  );

  return {
    userPool: data as IUserPool,
    isLoading,
    isError: error,
    refetch: mutate,
  };
};
