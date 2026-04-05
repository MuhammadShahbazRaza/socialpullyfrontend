export async function GET() {
  const robots = `User-agent: *
Allow: /

# Block API routes — not meant for indexing
Disallow: /api/

# Block duplicate Instagram route (canonical is /instagram-reels-downloader)
Disallow: /instagram-reel-downloader

# Sitemap
Sitemap: https://socialpully.com/sitemap.xml`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
