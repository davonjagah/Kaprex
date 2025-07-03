// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Public auth pages
const AUTH_PATHS = ["/signin", "/signup", "/account-type"];

// Pages only individuals may see
const INDIVIDUAL_ONLY = ["/portfolio", "/earn", "/cards", "/merchant"];

// Pages only business users may see
const BUSINESS_ONLY = ["/accounts"];

// Pages accessible to any signed-in user
const PROTECTED = ["/", "/portfolio", "/profile", "/transactions"];

export function middleware(req: NextRequest) {
  const token = req.cookies.get("access")?.value;
  const accountType = req.cookies.get("accountType")?.value || "individual";
  const { pathname } = req.nextUrl;

  // normalize path (strip trailing slash, lowercase)
  const cleanPath = (pathname.replace(/\/+$/, "") || "/").toLowerCase();

  // 1) Redirect signed-in users off auth pages
  const isAuthPage = AUTH_PATHS.some(
    (p) => cleanPath === p || cleanPath.startsWith(p + "/"),
  );
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 2) Redirect unauthenticated users onto sign-in
  const isProtected = PROTECTED.some(
    (p) => cleanPath === p || cleanPath.startsWith(p + "/"),
  );
  if (!token && isProtected) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // 3) Prevent business users from hitting individual-only pages
  const isIndividualOnly = INDIVIDUAL_ONLY.some(
    (p) => cleanPath === p || cleanPath.startsWith(p + "/"),
  );
  if (accountType === "business" && isIndividualOnly) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 4) Prevent individual users from hitting business-only pages
  const isBusinessOnly = BUSINESS_ONLY.some(
    (p) => cleanPath === p || cleanPath.startsWith(p + "/"),
  );
  if (accountType === "individual" && isBusinessOnly) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // otherwise, let them through
  return NextResponse.next();
}

export const config = {
  matcher: [
    // everything except nextjs internals & static assets
    "/((?!api|_next|.*\\.(?:svg|png|jpg|jpeg|webp|ico|json|txt)).*)",
  ],
};
