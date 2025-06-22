import { signOut } from "next-auth/react";
import { useState, useCallback } from "react";
export type ProfileOption = "profile" | "switch-account" | "logout";

export function useProfileMenu() {
  const [selected, setSelected] = useState<ProfileOption | "">("");

  const onChange = useCallback((value: ProfileOption) => {
    setSelected(value);
    switch (value) {
      case "logout":
        signOut();
        break;
      case "profile":
        console.log("My Profile clicked");
        break;
      case "switch-account":
        console.log("Switch account clicked");
        break;
    }
  }, []);

  return { selected, onChange };
}
