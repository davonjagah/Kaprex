import { headers } from "next/headers";
import Accounts from "../../../../components/Business/Accounts";

export default async function AccountPage() {
  const cookieHeader = (await headers()).get("cookie") || "";

  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/accounts/virtual-accounts`,
    {
      headers: { cookie: cookieHeader },
      cache: "force-cache",
      next: { revalidate: 60 },
    },
  );

  const accounts = res.ok ? await res.json() : null;

  return <Accounts accounts={accounts} />;
}
