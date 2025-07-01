import { useCallback, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { notifyError } from "@repo/ui/toasts";

export function useAccountSwitcher() {
  const { setSwitchedAccountType } = useAuth();
  const [isSwitching, setIsSwitching] = useState(false);

  const switchAccount = useCallback(async () => {
    setIsSwitching(true);
    const res = await fetch("/api/auth/switch-account", {
      method: "POST",
      credentials: "include",
    });
    if (res.ok) {
      const { accountType } = (await res.json()) as {
        accountType: "individual" | "business";
      };
      setSwitchedAccountType(accountType);
    } else {
      notifyError(`Switch failed`);
    }
    setIsSwitching(false);
  }, [setSwitchedAccountType]);

  return { switchAccount, isSwitching };
}
