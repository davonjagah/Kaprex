"use client";

import { SWRConfig } from "swr";
import { swrFetcher } from "../../lib/fetcher";
import { AuthProvider } from "../../contexts/AuthContext";
import { UserProfileResponse } from "../../types/api/user";

const SWRSetup = ({
  children,
  initialUser,
}: {
  children: React.ReactNode;
  initialUser: UserProfileResponse;
}) => {
  return (
    <SWRConfig
      value={{
        fetcher: swrFetcher,
        fallback: { "/api/auth/profile": initialUser },
        dedupingInterval: 60 * 1000,
      }}
    >
      <AuthProvider initialUser={initialUser}>{children}</AuthProvider>
    </SWRConfig>
  );
};

export default SWRSetup;
