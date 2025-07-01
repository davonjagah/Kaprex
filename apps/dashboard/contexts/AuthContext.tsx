// AuthContext.tsx
"use client";

import { createContext, useContext, useState } from "react";
import useSWR from "swr";
import { swrFetcher } from "../lib/fetcher";
import type { UserProfile, UserProfileResponse } from "../types/api/user";
import { VirtualAccountsResponse } from "../types/api/wallets";

export type User = UserProfile | null;
export type Accounts = VirtualAccountsResponse | null;

interface AuthContextType {
  user: User;
  accounts: Accounts;
  loading: boolean;
  setSwitchedAccountType: (t: "individual" | "business") => void;
  switchedAccountType: "individual" | "business";
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  accounts: null,
  loading: true,
  setSwitchedAccountType: () => {},
  switchedAccountType: "individual",
});

interface AuthProviderProps {
  children: React.ReactNode;
  initialProfile: UserProfileResponse;
  initialSwitchedAccountType: "individual" | "business";
}

export function AuthProvider({
  children,
  initialProfile,
  initialSwitchedAccountType = "individual",
}: AuthProviderProps) {
  const { data: profile, error } = useSWR<UserProfileResponse>(
    "/auth/profile",
    swrFetcher,
    { fallbackData: initialProfile },
  );

  const loading = !profile && !error;
  const user = profile?.user ?? null;
  const accounts = profile?.accounts ?? null;
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
