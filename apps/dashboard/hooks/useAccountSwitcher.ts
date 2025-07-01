import { useCallback, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { notifyError } from "@repo/ui/toasts";
import api from "../lib/api";
export function useAccountSwitcher() {
  const { setSwitchedAccountType } = useAuth();
  const [isSwitching, setIsSwitching] = useState(false);

  const switchAccount = useCallback(async () => {
    setIsSwitching(true);
    const res = await api.post("/auth/switch-account");
    console.log(res, "res!!!");

    if (res.status === 200) {
      const { accountType } = (await res.data) as {
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
