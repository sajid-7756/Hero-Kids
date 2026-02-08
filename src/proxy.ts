import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  // 1. If the user is trying to access a protected route
  if (
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/contact") ||
    pathname.startsWith("/profile")
  ) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      // Verify the token using jose
      await jwtVerify(token, secret);

      return NextResponse.next();

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // Token is invalid or expired
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  }

  // 2. Prevent logged-in users from seeing the login/register pages
  if (token && (pathname === "/login" || pathname === "/register")) {
    try {
      await jwtVerify(token, secret);

      return NextResponse.redirect(new URL("/", req.url));

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // If token is invalid, let them stay on login
      return NextResponse.next();
    }
  }

  NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register", "/profile"],
};
