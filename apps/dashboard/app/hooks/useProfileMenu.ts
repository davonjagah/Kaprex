import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

export type ProfileOption = "profile" | "switch-account" | "logout";

export function useProfileMenu() {
  const [selected, setSelected] = useState<ProfileOption | "">("");
  const router = useRouter();

  const onChange = useCallback(
    (value: ProfileOption) => {
      setSelected(value);
      switch (value) {
        case "logout":
          signOut();
          break;
        case "profile":
          router.push("/profile");
          break;
        case "switch-account":
          console.log("Switch account clicked");
          break;
      }
    },
    [router],
  );

  return { selected, onChange };
}
