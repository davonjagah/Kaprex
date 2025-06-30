"use client";

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import api from "../lib/api";

export type ProfileOption = "profile" | "switch-account" | "logout";

export function useProfileMenu() {
  const [selected, setSelected] = useState<ProfileOption | "">("");
  const router = useRouter();

  const logout = useCallback(async (): Promise<void> => {
    await api.post("/api/auth/logout");
    router.push("/signin");
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
          console.log("Switch account clicked");
          break;
      }
    },
    [logout, router],
  );

  return { selected, onChange };
}
