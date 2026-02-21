import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    const loginResponse = await fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const result = await loginResponse.json();

    if (!loginResponse.ok) {
      return NextResponse.json(
        { message: result.message || "Login failed" },
        { status: 401 },
      );
    }

    const response = NextResponse.json({
      username: result.username,
      avatar: result.image,
    });

    response.cookies.set("accessToken", result.accessToken, {
      httpOnly: true,
      maxAge: 60 * 45,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    response.cookies.set("refreshToken", result.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    response.cookies.set(
      "user",
      JSON.stringify({ username: result.username, avatar: result.image }),
      {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      },
    );

    return response;
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
