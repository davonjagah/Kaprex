import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { UserProfile } from "../../../../types/api/user";

export async function POST(req: NextRequest) {
  const { email, password, loginOTP } = (await req.json()) as {
    email: string;
    password: string;
    loginOTP?: string;
  };

  // 1. Proxy to backend
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_AUTH_URL}/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        loginOTP ? { email, password, loginOTP } : { email, password },
      ),
    },
  );

  const data = await res.json().catch(() => ({}));

  if (
    (!res.ok &&
      (data.message === "OTP_REQUIRED" || data.error === "OTP_REQUIRED")) ||
    (res.ok && !data.tokens)
  ) {
    return NextResponse.json({ otpRequired: true }, { status: 202 });
  }

  if (!res.ok) {
    return NextResponse.json({ message: data.message || res.statusText });
  }

  const { user, tokens } = data as {
    user: UserProfile;
    tokens: { access_token: string; refresh_token: string };
  };

  const response = NextResponse.json({ user });

  response.cookies.set("access", tokens.access_token, {
    httpOnly: true,
    path: "/",
    maxAge: 7 * 24 * 3600, // 7 days
    sameSite: "lax",
  });
  response.cookies.set("refresh", tokens.refresh_token, {
    httpOnly: true,
    path: "/",
    maxAge: 7 * 24 * 3600,
    sameSite: "lax",
  });
  return response;
}
