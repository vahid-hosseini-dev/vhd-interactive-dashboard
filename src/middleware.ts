import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value || null;

  const protectedRoutes = ["/dashboard", "/products", "/games"];
  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route),
  );

  if (isProtected && !accessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/products/:path*", "/games/:path*"],
};
