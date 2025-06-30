import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const cookies = req.cookies;
  let accessToken = cookies.get("access")?.value;
  const refreshToken = cookies.get("refresh")?.value;

  const unauthorized = () => {
    const res = NextResponse.json(
      { error: "Not authenticated" },
      { status: 401 },
    );
    res.cookies.delete({ name: "access", path: "/" });
    res.cookies.delete({ name: "refresh", path: "/api/auth" });
    return res;
  };

  const fetchProfile = (token: string) =>
    fetch(`${process.env.BACKEND_AUTH_URL}/users/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });

  // 1️⃣ Try initial profile fetch if we have an access token
  let profileRes: Response | null = null;
  if (accessToken) {
    profileRes = await fetchProfile(accessToken);
  }

  // 2️⃣ If missing/expired, try refresh
  if (!profileRes || profileRes.status === 401) {
    if (!refreshToken) {
      return unauthorized();
    }
    // Refresh the tokens
    const refreshRes = await fetch(
      `${process.env.BACKEND_AUTH_URL}/auth/refresh`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token: refreshToken }),
      },
    );
    // if (!refreshRes.ok) {
    //   return unauthorized();
    // }

    const tokens = await refreshRes.json();
    console.log(refreshToken, "refreshRes", tokens);
    accessToken = tokens.access_token;

    // Retry profile fetch with new access token
    profileRes = await fetchProfile(accessToken!);
    if (!profileRes.ok) {
      return unauthorized();
    }

    // If successful, read user and accounts, then set cookies
    const user = await profileRes.json();

    // const accountsRes = await fetch(
    //   `${process.env.BACKEND_AUTH_URL}/bridge/virtual-accounts`,
    //   { headers: { Authorization: `Bearer ${accessToken}` } }
    // );
    // const accounts = accountsRes.ok
    //   ? await accountsRes.json()
    //   : accountsRes.status === 404
    //     ? null
    //     : undefined;

    const response = NextResponse.json({ user, accounts: null });

    // Update cookies with refreshed tokens
    response.cookies.set({
      name: "access",
      value: tokens.access_token,
      httpOnly: true,
      path: "/",
      maxAge: 15 * 60,
      sameSite: "lax",
    });
    response.cookies.set({
      name: "refresh",
      value: tokens.refresh_token,
      httpOnly: true,
      path: "/",
      maxAge: 7 * 24 * 3600,
      sameSite: "lax",
    });

    return response;
  }

  // 3️⃣ If initial fetch succeeded
  const user = await profileRes.json();
  const accountsRes = await fetch(
    `${process.env.BACKEND_AUTH_URL}/bridge/virtual-accounts`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
  const accounts = accountsRes.ok
    ? await accountsRes.json()
    : accountsRes.status === 404
      ? null
      : undefined;

  return NextResponse.json({ user, accounts });
}
