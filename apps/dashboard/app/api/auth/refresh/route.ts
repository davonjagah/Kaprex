import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const refresh = req.cookies.get("refresh")?.value;
  if (!refresh) {
    return NextResponse.json(null, { status: 401 });
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/auth/refresh`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh_token: refresh }),
    },
  );

  if (!res.ok) {
    // On refresh failure, clear out the cookies
    const out = NextResponse.json(null, { status: 401 });
    out.cookies.delete({ name: "access", path: "/" });
    out.cookies.delete({ name: "refresh", path: "/" });
    return out;
  }

  const { tokens } = await res.json();
  const out = NextResponse.json(tokens);

  out.cookies.set({
    name: "access",
    value: tokens.access_token,
    httpOnly: true,
    path: "/",
    maxAge: 15 * 60, // 15 minutes
    sameSite: "lax",
  });
  out.cookies.set({
    name: "refresh",
    value: tokens.refresh_token,
    httpOnly: true,
    path: "/",
    maxAge: 7 * 24 * 3600, // 7 days
    sameSite: "lax",
  });

  return out;
}
