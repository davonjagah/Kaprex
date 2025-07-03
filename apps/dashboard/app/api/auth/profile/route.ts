import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { VirtualAccountsResponse } from "../../../../types/api/wallets";

export const runtime = "edge";

export const revalidate = 60;

export async function GET(req: NextRequest) {
  const access = req.cookies.get("access")?.value;
  if (!access) {
    return NextResponse.json(null, { status: 401 });
  }

  // 1️⃣ Fetch the user profile
  const profileRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/users/profile`,
    { headers: { Authorization: `Bearer ${access}` } },
  );
  if (!profileRes.ok) {
    return NextResponse.json(null, { status: profileRes.status });
  }
  const user = await profileRes.json();

  // 2️⃣ Fetch virtual accounts
  const accountsRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/wallets/main`,
    { headers: { Authorization: `Bearer ${access}` } },
  );

  let accounts: { data: VirtualAccountsResponse } | null = null;
  if (accountsRes.ok) {
    accounts = await accountsRes.json();
  } else if (accountsRes.status !== 404) {
    // propagate any unexpected error
    return NextResponse.json(null, { status: accountsRes.status });
  }

  // 3️⃣ Return both in one payload
  return NextResponse.json({ user, accounts: accounts?.data ?? null });
}
