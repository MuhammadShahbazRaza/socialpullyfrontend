export default function sitemap() {
  const baseUrl = 'https://socialpully.com';
  const today = new Date().toISOString().split('T')[0];

  return [
    { url: `${baseUrl}/`,                              lastModified: today, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${baseUrl}/instagram-reels-downloader`,    lastModified: today, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/tiktok-video-downloader`,       lastModified: today, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/facebook-video-downloader`,     lastModified: today, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/youtube-video-downloader`,      lastModified: today, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/twitter-video-downloader`,      lastModified: today, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/pinterest-video-downloader`,    lastModified: today, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${baseUrl}/blog`,                          lastModified: today, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${baseUrl}/faq`,                           lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/how-it-works`,                  lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about`,                         lastModified: today, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`,                       lastModified: today, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`,                lastModified: today, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`,              lastModified: today, changeFrequency: 'yearly',  priority: 0.3 },
  ];
}
