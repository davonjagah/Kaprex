import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// Public auth pages
const AUTH_PATHS = ["/signin", "/signup", "/account-type"];

// Protected dashboard pages
const DASHBOARD_PATHS = ["/", "/portfolio", "/profile", "/transactions"];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  // Normalize path: strip trailing slash and lowercase
  const cleanPath = pathname.replace(/\/+$/, "").toLowerCase() || "/";

  const isAuthPage = AUTH_PATHS.some(
    (path) => cleanPath === path || cleanPath.startsWith(path + "/"),
  );

  const isDashboardPage = DASHBOARD_PATHS.some(
    (path) => cleanPath === path || cleanPath.startsWith(path + "/"),
  );

  console.log({
    cleanPath,
    tokenExists: !!token,
    isAuthPage,
    isDashboardPage,
    token,
  });

  // ✅ If authenticated user tries to access an auth page, redirect to dashboard
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // ✅ If unauthenticated user tries to access a protected page, redirect to signin
  if (!token && isDashboardPage) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  return NextResponse.next();
}

// ✅ Clean matcher: excludes only static files and API routes
export const config = {
  matcher: ["/((?!api|_next|.*\\.(?:svg|png|jpg|jpeg|webp|ico|json|txt)).*)"],
};
