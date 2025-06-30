import { headers } from "next/headers";
import SWRSetup from "../SWRSetup/SWRSetup";
import { UserProfileResponse } from "../../types/api/user";

const RootProviders = async ({ children }: { children: React.ReactNode }) => {
  const cookieHeader = (await headers()).get("cookie") || "";

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/profile`, {
    headers: { cookie: cookieHeader },
    cache: "no-store",
  });

  const initialUser: UserProfileResponse = res.ok ? await res.json() : null;

  return <SWRSetup initialUser={initialUser}>{children}</SWRSetup>;
};

export default RootProviders;
