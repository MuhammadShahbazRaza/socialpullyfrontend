import { NextResponse } from "next/server";

const redirects = {
  // Singular → plural fix (ghost page cleanup)
  "/instagram-reel-downloader": "/instagram-reels-downloader",
  // Short URL aliases
  "/instagram": "/instagram-reels-downloader",
  "/tiktok": "/tiktok-video-downloader",
  "/facebook": "/facebook-video-downloader",
  "/youtube": "/youtube-video-downloader",
  "/ig": "/instagram-reels-downloader",
  "/fb": "/facebook-video-downloader",
  "/yt": "/youtube-video-downloader",
  "/dmca": "/contact",
  "/privacy": "/privacy-policy",
  "/tos": "/terms-of-service",
};

export function middleware(request) {
  const url = request.nextUrl;
  const target = redirects[url.pathname];
  if (!target) return NextResponse.next();

  const redirectUrl = url.clone();
  redirectUrl.pathname = target;
  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: [
    "/instagram-reel-downloader",
    "/instagram",
    "/tiktok",
    "/facebook",
    "/youtube",
    "/ig",
    "/fb",
    "/yt",
    "/dmca",
    "/privacy",
    "/tos",
  ],
};
