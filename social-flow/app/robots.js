export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://socialpully.com/sitemap.xml',
    host: 'https://socialpully.com',
  };
}
