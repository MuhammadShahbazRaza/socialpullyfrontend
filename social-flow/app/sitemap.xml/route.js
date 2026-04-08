export async function GET() {
  const baseUrl = 'https://socialpully.com';

  const routes = [
    { path: '',                              priority: '1.0', freq: 'daily'   },
    { path: '/tiktok-video-downloader',      priority: '0.9', freq: 'weekly'  },
    { path: '/instagram-reel-downloader',    priority: '0.9', freq: 'weekly'  },
    { path: '/instagram-reels-downloader',   priority: '0.9', freq: 'weekly'  },
    { path: '/facebook-video-downloader',    priority: '0.9', freq: 'weekly'  },
    { path: '/youtube-video-downloader',     priority: '0.9', freq: 'weekly'  },
    { path: '/twitter-video-downloader',     priority: '0.9', freq: 'weekly'  },
    { path: '/pinterest-video-downloader',   priority: '0.9', freq: 'weekly'  },
    { path: '/faq',                          priority: '0.7', freq: 'monthly' },
    { path: '/how-it-works',                 priority: '0.6', freq: 'monthly' },
    { path: '/blog',                         priority: '0.6', freq: 'weekly'  },
    { path: '/about',                        priority: '0.5', freq: 'monthly' },
    { path: '/contact',                      priority: '0.6', freq: 'monthly' },
    { path: '/privacy-policy',              priority: '0.4', freq: 'yearly'  },
    { path: '/terms-of-service',            priority: '0.4', freq: 'yearly'  },
  ];

  const today = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes.map(({ path, priority, freq }) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${today}</lastmod>
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
