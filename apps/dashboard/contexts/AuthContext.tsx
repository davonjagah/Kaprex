// AuthContext.tsx
"use client";

import { createContext, useContext, useState } from "react";
import useSWR from "swr";
import { swrFetcher } from "../lib/fetcher";
import type { UserProfile, UserProfileResponse } from "../types/api/user";
import {
  VirtualAccountsResponse,
  VirtualAccountTransactions,
} from "../types/api/wallets";

export type User = UserProfile | null;
export type Accounts = VirtualAccountsResponse | null;

interface AuthContextType {
  user: User;
  accounts: Accounts;
  loading: boolean;
  setSwitchedAccountType: (t: "individual" | "business") => void;
  switchedAccountType: "individual" | "business";
  virtualAccounts: VirtualAccountTransactions | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  accounts: null,
  loading: true,
  setSwitchedAccountType: () => {},
  switchedAccountType: "individual",
  virtualAccounts: null,
});

interface AuthProviderProps {
  children: React.ReactNode;
  initialProfile: UserProfileResponse;
  initialSwitchedAccountType: "individual" | "business";
  initialVirtualAccounts: VirtualAccountTransactions;
}

export function AuthProvider({
  children,
  initialProfile,
  initialSwitchedAccountType = "individual",
  initialVirtualAccounts,
}: AuthProviderProps) {
  const { data: profile, error } = useSWR<UserProfileResponse>(
    "/auth/profile",
    swrFetcher,
    {
      fallbackData: initialProfile,
      revalidateIfStale: true,
      dedupingInterval: 60000,
    },
  );
  const { data: virtualAccounts, error: virtualAccountsError } =
    useSWR<VirtualAccountTransactions>(
      "/accounts/virtual-accounts",
      swrFetcher,
      {
        fallbackData: initialVirtualAccounts,
        revalidateIfStale: true,
        dedupingInterval: 60000,
      },
    );

  const loading = !profile && !error && !virtualAccountsError;
  const user = profile?.user ?? null;
  const accounts = profile?.accounts ?? null;
  const virtualAccountsData = virtualAccounts ?? null;
  const [switchedAccountType, setSwitchedAccountType] = useState(
    initialSwitchedAccountType,
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        accounts,
        loading,
        switchedAccountType,
        setSwitchedAccountType,
        virtualAccounts: virtualAccountsData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
