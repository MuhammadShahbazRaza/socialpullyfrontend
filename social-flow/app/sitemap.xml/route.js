export async function GET() {
  const baseUrl = 'https://SocialPully.com';
  
  const routes = [
    '',
    '/instagram-reel-downloader',
    '/tiktok-video-downloader',
    '/facebook-video-downloader',
    '/youtube-video-downloader',
    '/twitter-video-downloader',
    '/pinterest-video-downloader',
    '/about',
    '/blog'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}