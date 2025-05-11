import useSWR from "swr";
import { IUserPool } from "../api/types";

const fetcher = (publicKey: string) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user-pool`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userWallet: publicKey }),
  }).then((res) => res.json());

export const useUserPool = (publicKey?: string | null) => {
  const shouldFetch = !!publicKey;
  const { data, error, isLoading } = useSWR(
    shouldFetch ? ["userPool", publicKey] : null,
    () => fetcher(publicKey!),
  );

  return {
    userPool: data as IUserPool | null,
    isLoading,
    isError: error,
  };
};
