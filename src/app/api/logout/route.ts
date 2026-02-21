import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "logged out" });

  const cookieOpts = {
    path: "/",
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
  };

  res.cookies.set("accessToken", "", cookieOpts);
  res.cookies.set("refreshToken", "", cookieOpts);
  res.cookies.set("user", "", cookieOpts);

  return res;
}
