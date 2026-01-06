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
  const { pathname } = request.nextUrl;

  // Skip files like .png, .js, .css, .xml
  if (pathname.includes(".")) {
    return NextResponse.next();
  }

  const target = redirects[pathname];
  if (!target) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = target;

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    "/((?!api|_next|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
