'use client';
import Link from 'next/link';
import { Download, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

// Inline SocialPully logo — no image file dependency
function SocialPullyLogo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="url(#navLogoGrad)" />
      <path
        d="M32 16c-5.5 0-10 3.1-10 8 0 3.8 2.8 6.2 7 7.5l4 1.2c2.5 0.8 3.5 1.8 3.5 3.3 0 1.8-1.8 3-4.5 3-2.8 0-5-1.3-6.2-3.5l-4.5 2.6C22.9 42.3 27 45 32.5 45c6 0 10.5-3.3 10.5-8.5 0-4-2.8-6.5-7.5-8l-3.8-1.1c-2.2-0.7-3.2-1.6-3.2-3 0-1.6 1.6-2.7 4-2.7 2.2 0 4 1 5.2 2.8l4.3-2.5C40.3 18.8 36.6 16 32 16z"
        fill="white"
      />
    </svg>
  );
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/instagram-reel-downloader', label: 'Instagram', icon: '📸' },
    { href: '/tiktok-video-downloader', label: 'TikTok', icon: '🎵' },
    { href: '/facebook-video-downloader', label: 'Facebook', icon: '📘' },
    { href: '/youtube-video-downloader', label: 'YouTube', icon: '▶️' },
    { href: '/blog', label: 'Blog', icon: null },
    { href: '/about', label: 'About', icon: null },
  ];

  return (
    <nav
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,1)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 1px 40px rgba(0,0,0,0.08)' : '0 1px 0 rgba(0,0,0,0.06)',
        transition: 'all 0.3s ease',
        position: 'sticky',
        top: 0,
        zIndex: 999,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
            <SocialPullyLogo size={36} />
            <span style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: '1.45rem',
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.01em',
            }}>
              SocialPully
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#374151',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  textDecoration: 'none',
                }}
                className="hover:bg-indigo-50 hover:text-indigo-600"
              >
                {link.icon && <span style={{ fontSize: '0.8rem' }}>{link.icon}</span>}
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/tiktok-video-downloader"
              className="hidden md:flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: 'white',
                padding: '8px 18px',
                borderRadius: '10px',
                fontSize: '0.875rem',
                fontWeight: 600,
                transition: 'all 0.2s',
                boxShadow: '0 4px 15px rgba(99,102,241,0.3)',
                textDecoration: 'none',
              }}
            >
              <Download size={16} />
              Download Free
            </Link>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div style={{ borderTop: '1px solid #f3f4f6', paddingBottom: '12px', paddingTop: '8px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 8px',
                  color: '#374151',
                  fontWeight: 500,
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                }}
                className="hover:bg-indigo-50 hover:text-indigo-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.icon && <span>{link.icon}</span>}
                {link.label}
              </Link>
            ))}
            <Link
              href="/tiktok-video-downloader"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: 'white',
                padding: '12px',
                borderRadius: '10px',
                fontWeight: 600,
                marginTop: '8px',
                textDecoration: 'none',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={16} />
              Download Free
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
