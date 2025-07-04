"use client";

import { useCallback, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { notifyError } from "@repo/ui/toasts";
import api from "../lib/api";
import { useRouter } from "next/navigation";

export function useAccountSwitcher() {
  const { setSwitchedAccountType } = useAuth();
  const [isSwitching, setIsSwitching] = useState(false);
  const router = useRouter();

  const switchAccount = useCallback(async () => {
    setIsSwitching(true);
    try {
      const res = await api.post<{ accountType: "individual" | "business" }>(
        "/auth/switch-account",
      );

      // success?
      const { accountType } = res.data;
      setSwitchedAccountType(accountType);

      // triggers new SSR fetch or middleware re‐run
      router.refresh();
      router.push("/");
    } catch (err: unknown) {
      notifyError(
        err instanceof Error
          ? err.message
          : "Something went wrong while switching.",
      );
    } finally {
      setIsSwitching(false);
    }
  }, [setSwitchedAccountType, router]);

  return { switchAccount, isSwitching };
}
