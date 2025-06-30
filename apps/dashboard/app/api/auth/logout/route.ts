// app/api/auth/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete({ name: "access", path: "/" });
  response.cookies.delete({ name: "refresh", path: "/" });
  return response;
}
