import { getAllBlogPosts } from '@/lib/blog-posts';

export async function GET() {
  const baseUrl = 'https://socialpully.com';

  const staticRoutes = [
    { path: '',                            priority: '1.0', freq: 'daily',   lastmod: '2026-04-08' },
    { path: '/tiktok-video-downloader',    priority: '0.9', freq: 'weekly',  lastmod: '2026-04-08' },
    { path: '/instagram-reels-downloader', priority: '0.9', freq: 'weekly',  lastmod: '2026-04-08' },
    { path: '/facebook-video-downloader',  priority: '0.9', freq: 'weekly',  lastmod: '2026-04-08' },
    { path: '/youtube-video-downloader',   priority: '0.9', freq: 'weekly',  lastmod: '2026-04-08' },
    { path: '/twitter-video-downloader',   priority: '0.9', freq: 'weekly',  lastmod: '2026-04-08' },
    { path: '/pinterest-video-downloader', priority: '0.9', freq: 'weekly',  lastmod: '2026-04-08' },
    { path: '/blog',                       priority: '0.8', freq: 'weekly',  lastmod: '2026-04-08' },
    { path: '/faq',                        priority: '0.7', freq: 'monthly', lastmod: '2026-04-08' },
    { path: '/how-it-works',               priority: '0.7', freq: 'monthly', lastmod: '2026-04-08' },
    { path: '/about',                      priority: '0.6', freq: 'monthly', lastmod: '2026-04-08' },
    { path: '/contact',                    priority: '0.6', freq: 'monthly', lastmod: '2026-04-08' },
    { path: '/privacy-policy',             priority: '0.4', freq: 'yearly',  lastmod: '2026-04-08' },
    { path: '/terms-of-service',           priority: '0.4', freq: 'yearly',  lastmod: '2026-04-08' },
  ];

  // Dynamically include all blog posts
  const blogPosts = getAllBlogPosts();
  const blogRoutes = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: '0.7',
    freq: 'monthly',
    lastmod: post.date || '2026-04-08',
  }));

  const allRoutes = [...staticRoutes, ...blogRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allRoutes.map(({ path, priority, freq, lastmod }) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
