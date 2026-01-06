import { NextResponse } from "next/server";

const redirects = {
  "/instagram": "/instagram-reel-downloader",
  "/tiktok": "/tiktok-video-downloader",
  "/facebook": "/facebook-video-downloader",
  "/youtube": "/youtube-video-downloader",
  "/ig": "/instagram-reel-downloader",
  "/fb": "/facebook-video-downloader",
  "/yt": "/youtube-video-downloader",
};

export function middleware(request) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  const target = redirects[pathname];
  if (!target) return NextResponse.next();

  // Avoid redirect loops
  if (pathname === target) return NextResponse.next();

  // Build redirect using nextUrl (edge safe)
  const redirectUrl = url.clone();
  redirectUrl.pathname = target;

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: [
    // exclude: api, next internals, and any file with an extension (e.g., .png, .txt, .xml)
    "/((?!api|_next|favicon.ico|robots.txt|sitemap.xml).*)(?<!\\..*)",
  ],
};
