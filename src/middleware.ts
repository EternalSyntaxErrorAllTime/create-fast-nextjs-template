"use node";
export const runtime = "nodejs";
import "server-only";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getSessionServer } from "@auth";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  const session = await getSessionServer();

  // If authorized, do not allow access to `/user/auth`
  if (pathname.startsWith("/user/auth") && session?.user) {
    url.pathname = "/user/profile";
    return NextResponse.redirect(url);
  }

  // If not authorized, do not allow access to `/user/profile`
  if (pathname.startsWith("/user/profile") && !session?.user) {
    url.pathname = "/user/auth";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/user/auth", "/user/profile"],
};
