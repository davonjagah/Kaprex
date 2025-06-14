"use client";

import { SessionProvider } from "next-auth/react";
import SWRSetup from "../SWRSetup/SWRSetup";
import { ToastProvider } from "@repo/ui/toasts";

const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <SWRSetup>
        {children}
        <ToastProvider />
      </SWRSetup>
    </SessionProvider>
  );
};

export default RootProviders;
