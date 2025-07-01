import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const current = req.cookies.get("accountType")?.value ?? "individual";
  const nextType = current === "individual" ? "business" : "individual";

  const res = NextResponse.json({ accountType: nextType });

  res.cookies.set({
    name: "accountType",
    value: nextType,
    httpOnly: false,
    path: "/",
    maxAge: 30 * 24 * 3600,
    sameSite: "lax",
  });
  return res;
}
