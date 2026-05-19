Below is the optimized `next.config.js` configuration for SocialPully with the requested SEO and security enhancements:

```javascript
const nextConfig = {
  // Existing Next.js configurations remain intact
  reactStrictMode: true,
  swcMinify: true,

  // Security headers configuration
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
    ];
  },

  // Image optimization settings
  images: {
    domains: ['socialpully.com', 'cdn.socialpully.com'], // Add all trusted domains
  },

  // Caching headers for static assets
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      },
    ];
  },

  // Compression enabled
  compress: true,

  // Redirect www to non-www
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.socialpully.com' }],
        permanent: true,
        destination: 'https://socialpully.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
```

### Explanation:

1. **Security Headers**: Added headers like X-Content-Type-Options, X-Frame-Options, X-Robots-Tag, etc. in the `headers` function for enhanced security.

2. **Caching Headers**: Implemented caching for static assets with a cache-control header to ensure better performance.

3. **Image Optimization**: Specified domains for image optimization to ensure only trusted sources can serve images.

4. **Compression**: Enabled gzip compression for better performance.

5. **URL Redirection**: Implemented 301 redirect from www to non-www to enforce consistent URL usage. 

Feel free to adjust any of the settings according to specific business needs.