import Link from 'next/link';
import { Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

// Inline SocialPully logo — matches Navigation exactly
function SocialPullyLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#footerLogoGrad)" />
      <path
        d="M32 16c-5.5 0-10 3.1-10 8 0 3.8 2.8 6.2 7 7.5l4 1.2c2.5 0.8 3.5 1.8 3.5 3.3 0 1.8-1.8 3-4.5 3-2.8 0-5-1.3-6.2-3.5l-4.5 2.6C22.9 42.3 27 45 32.5 45c6 0 10.5-3.3 10.5-8.5 0-4-2.8-6.5-7.5-8l-3.8-1.1c-2.2-0.7-3.2-1.6-3.2-3 0-1.6 1.6-2.7 4-2.7 2.2 0 4 1 5.2 2.8l4.3-2.5C40.3 18.8 36.6 16 32 16z"
        fill="white"
      />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Platforms': [
      { href: '/instagram-reel-downloader', label: '📸 Instagram Downloader' },
      { href: '/tiktok-video-downloader', label: '🎵 TikTok Downloader' },
      { href: '/facebook-video-downloader', label: '📘 Facebook Downloader' },
      { href: '/youtube-video-downloader', label: '▶️ YouTube Downloader' },
      { href: '/twitter-video-downloader', label: '🐦 Twitter Downloader' },
      { href: '/pinterest-video-downloader', label: '📌 Pinterest Downloader' },
    ],
    'Resources': [
      { href: '/blog', label: 'Blog' },
      { href: '/about', label: 'About Us' },
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/faq', label: 'FAQ' },
    ],
    'Legal': [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms-of-service', label: 'Terms of Service' },
      { href: '/dmca', label: 'DMCA' },
      { href: '/contact', label: 'Contact' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/socialpully' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/socialpully' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/socialpully' },
    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@socialpully' },
  ];

  return (
    <footer style={{ background: '#0a0a0a', color: '#fff' }}>
      {/* Top section */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-10">

            {/* Brand */}
            <div>
              <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px', textDecoration: 'none' }}>
                <SocialPullyLogo size={38} />
                <span style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.4rem',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.01em',
                }}>
                  SocialPully
                </span>
              </Link>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '20px' }}>
                The fastest free video downloader for Instagram, TikTok, Facebook, YouTube and 15+ platforms. No watermark, HD quality.
              </p>
              {/* Trust badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['25M+ Downloads', '4.9★ Rated', '180+ Countries'].map(badge => (
                  <span key={badge} style={{
                    background: 'rgba(99,102,241,0.12)',
                    border: '1px solid rgba(99,102,241,0.25)',
                    color: '#818cf8',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                  }}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  marginBottom: '16px',
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#9ca3af',
                }}>
                  {category}
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        style={{
                          color: '#6b7280',
                          fontSize: '0.875rem',
                          transition: 'color 0.2s',
                          textDecoration: 'none',
                        }}
                        className="hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p style={{ color: '#4b5563', fontSize: '0.8rem' }}>
            © {currentYear} SocialPully. All rights reserved. Download videos responsibly &amp; respect copyright laws.
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                className="hover:bg-indigo-600 hover:border-indigo-600"
              >
                <Icon size={16} color="#9ca3af" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
