import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Redirect common misspellings and old URLs
  const redirects = {
    '/instagram': '/instagram-reel-downloader',
    '/tiktok': '/tiktok-video-downloader',
    '/facebook': '/facebook-video-downloader',
    '/youtube': '/youtube-video-downloader',
    '/ig': '/instagram-reel-downloader',
    '/fb': '/facebook-video-downloader',
    '/yt': '/youtube-video-downloader',
  };

  if (redirects[pathname]) {
    return NextResponse.redirect(new URL(redirects[pathname], request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
