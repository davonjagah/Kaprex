import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Public auth pages
const AUTH_PATHS = ["/signin", "/signup", "/account-type"];

// Individual‐only pages
const INDIVIDUAL_ONLY = ["/portfolio", "/earn", "/cards", "/merchant"];

// Pages you protect for authenticated users (both contexts)
const PROTECTED = ["/", "/portfolio", "/profile", "/transactions"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access")?.value;
  const accountType = req.cookies.get("accountType")?.value || "individual";
  const { pathname } = req.nextUrl;

  // normalize (strip trailing slash, lowercase)
  const cleanPath = pathname.replace(/\/+$/, "").toLowerCase() || "/";

  // is this an auth page?
  const isAuthPage = AUTH_PATHS.some(
    (p) => cleanPath === p || cleanPath.startsWith(p + "/"),
  );

  // is this a protected page?
  const isProtected = PROTECTED.some(
    (p) => cleanPath === p || cleanPath.startsWith(p + "/"),
  );

  // Signed‐in users shouldn’t see auth pages
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Unauthenticated users must sign in
  if (!token && isProtected) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // Business‐mode users can’t access individual‐only pages
  const isIndividualOnly = INDIVIDUAL_ONLY.some(
    (p) => cleanPath === p || cleanPath.startsWith(p + "/"),
  );
  if (accountType === "business" && isIndividualOnly) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // otherwise, allow
  return NextResponse.next();
}

export const config = {
  matcher: [
    // everything except nextjs internals and static assets
    "/((?!api|_next|.*\\.(?:svg|png|jpg|jpeg|webp|ico|json|txt)).*)",
  ],
};
