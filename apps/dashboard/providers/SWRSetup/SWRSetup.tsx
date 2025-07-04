"use client";

import { SWRConfig } from "swr";
import { swrFetcher } from "../../lib/fetcher";
import { AuthProvider } from "../../contexts/AuthContext";
import { UserProfileResponse } from "../../types/api/user";
import { VirtualAccountTransactions } from "../../types/api/wallets";

const SWRSetup = ({
  children,
  initialUser,
  switchedAccountType,
  virtualAccounts,
}: {
  children: React.ReactNode;
  initialUser: UserProfileResponse;
  switchedAccountType: "individual" | "business" | undefined;
  virtualAccounts: VirtualAccountTransactions;
}) => {
  return (
    <SWRConfig
      value={{
        fetcher: swrFetcher,
        fallback: {
          "/auth/profile": initialUser,
          "/accounts/virtual-accounts": virtualAccounts,
        },
        dedupingInterval: 60000,
        revalidateOnFocus: false,
      }}
    >
      <AuthProvider
        initialProfile={initialUser}
        initialSwitchedAccountType={switchedAccountType || "individual"}
        initialVirtualAccounts={virtualAccounts}
      >
        {children}
      </AuthProvider>
    </SWRConfig>
  );
};

export default SWRSetup;
