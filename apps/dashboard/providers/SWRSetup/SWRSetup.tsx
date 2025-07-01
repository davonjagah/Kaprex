"use client";

import { SWRConfig } from "swr";
import { swrFetcher } from "../../lib/fetcher";
import { AuthProvider } from "../../contexts/AuthContext";
import { UserProfileResponse } from "../../types/api/user";

const SWRSetup = ({
  children,
  initialUser,
  switchedAccountType,
}: {
  children: React.ReactNode;
  initialUser: UserProfileResponse;
  switchedAccountType: "individual" | "business" | undefined;
}) => {
  return (
    <SWRConfig
      value={{
        fetcher: swrFetcher,
        fallback: { "/auth/profile": initialUser },
      }}
    >
      <AuthProvider
        initialProfile={initialUser}
        initialSwitchedAccountType={switchedAccountType || "individual"}
      >
        {children}
      </AuthProvider>
    </SWRConfig>
  );
};

export default SWRSetup;
