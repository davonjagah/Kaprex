"use client";

import { useSession } from "next-auth/react";
import { SWRConfig } from "swr";
import { backendFetcher } from "../../lib/fetcher";

const SWRSetup = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const token = session?.accessToken;

  return (
    <SWRConfig
      value={{
        fetcher: (key: string) => backendFetcher(key, token),
        onError: (err) => console.error("SWR Error:", err),
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRSetup;
