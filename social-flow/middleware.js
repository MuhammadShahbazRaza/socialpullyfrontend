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
  const target = redirects[url.pathname];
  if (!target) return NextResponse.next();

  const redirectUrl = url.clone();
  redirectUrl.pathname = target;
  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: ["/instagram", "/tiktok", "/facebook", "/youtube", "/ig", "/fb", "/yt"],
};
