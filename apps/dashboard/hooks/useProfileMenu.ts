"use client";

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import api from "../lib/api";
import { useAccountSwitcher } from "./useAccountSwitcher";

export type ProfileOption = "profile" | "switch-account" | "logout";

export function useProfileMenu() {
  const [selected, setSelected] = useState<ProfileOption | "">("");
  const { isSwitching, switchAccount } = useAccountSwitcher();
  const router = useRouter();

  const logout = useCallback(async (): Promise<void> => {
    await api.post("/auth/logout");
    router.replace("/signin");
  }, [router]);

  const onChange = useCallback(
    (value: ProfileOption) => {
      setSelected(value);
      switch (value) {
        case "logout":
          logout();
          break;
        case "profile":
          router.push("/profile");
          break;
        case "switch-account":
          switchAccount();
          break;
      }
    },
    [logout, router, switchAccount],
  );

  return { selected, onChange, isSwitching };
}
