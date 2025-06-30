import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, password, customerType } = await req.json();
  const res = await fetch(`${process.env.BACKEND_AUTH_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, customerType }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }));
    return NextResponse.json({ error: err.message }, { status: res.status });
  }
  const data = await res.json();

  const response = NextResponse.json({ user: data.user });
  response.cookies.set("access", data.tokens.access_token, {
    httpOnly: true,
    path: "/",
    maxAge: 15 * 60,
    sameSite: "lax",
  });
  response.cookies.set("refresh", data.tokens.refresh_token, {
    httpOnly: true,
    path: "/",
    maxAge: 7 * 24 * 3600,
    sameSite: "lax",
  });
  return response;
}
