"use client";

import { createContext, useContext } from "react";
import useSWR from "swr";
import { swrFetcher } from "../lib/fetcher";
import { UserProfileResponse } from "../types/api/user";

interface AuthContextType {
  user: UserProfileResponse;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null as unknown as UserProfileResponse,
  loading: true,
});

interface AuthProviderProps {
  children: React.ReactNode;
  initialUser: UserProfileResponse;
}

export function AuthProvider({ children, initialUser }: AuthProviderProps) {
  const { data: user, error } = useSWR<UserProfileResponse>(
    "/api/auth/profile",
    swrFetcher,
    {
      fallbackData: initialUser,
    },
  );

  const loading = !user && !error;
  return (
    <AuthContext.Provider
      value={{
        user: user ?? (null as unknown as UserProfileResponse),
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
