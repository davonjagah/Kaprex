import { cookies, headers } from "next/headers";
import SWRSetup from "../SWRSetup/SWRSetup";
import { UserProfileResponse } from "../../types/api/user";

const RootProviders = async ({ children }: { children: React.ReactNode }) => {
  const cookieHeader = (await headers()).get("cookie") || "";

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/profile`, {
    headers: { cookie: cookieHeader },
    cache: "force-cache",
    next: { revalidate: 60 },
  });

  const virtualAccountsRes = await fetch(
    `${process.env.NEXTAUTH_URL}/api/accounts/virtual-accounts`,
    {
      headers: { cookie: cookieHeader },
      cache: "force-cache",
      next: { revalidate: 60 },
    },
  );

  const virtualAccounts = virtualAccountsRes.ok
    ? await virtualAccountsRes.json()
    : null;

  const initialUser: UserProfileResponse = res.ok ? await res.json() : null;

  const switchedAccountType = (await cookies()).get("accountType")?.value as
    | "individual"
    | "business"
    | undefined;

  return (
    <SWRSetup
      initialUser={initialUser}
      switchedAccountType={switchedAccountType}
      virtualAccounts={virtualAccounts}
    >
      {children}
    </SWRSetup>
  );
};

export default RootProviders;
