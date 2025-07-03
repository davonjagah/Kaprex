import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export const revalidate = 60;

export async function GET(req: NextRequest) {
  const access = req.cookies.get("access")?.value;
  if (!access) {
    return NextResponse.json(null, { status: 401 });
  }

  const virtualAccountsRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/users/virtual-accounts/eur`,
    { headers: { Authorization: `Bearer ${access}` } },
  );

  if (!virtualAccountsRes.ok) {
    return NextResponse.json(null, { status: virtualAccountsRes.status });
  }
  const virtualAccounts = await virtualAccountsRes.json();

  return NextResponse.json({ data: virtualAccounts });
}
