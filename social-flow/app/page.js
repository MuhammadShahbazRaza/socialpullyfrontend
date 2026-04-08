import Link from 'next/link';
import DownloadForm from '@/components/DownloadForm';
import { Instagram, Facebook, Music, Youtube, Twitter } from 'lucide-react';

export const metadata = {
  title: 'SocialPully - Free Video Downloader | Instagram, TikTok, Facebook, YouTube',
  description: 'Download videos from Instagram Reels, TikTok, Facebook, YouTube, Twitter and Pinterest in HD quality. Free, no watermark, no sign-up. Works on all devices.',
  alternates: {
    canonical: 'https://socialpully.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const platforms = [
  {
    name: 'Instagram Reels',
    icon: '📸',
    href: '/instagram-reels-downloader',
    desc: 'Save Reels without watermark',
    color: '#c13584',
    bg: 'rgba(193,53,132,0.08)',
  },
  {
    name: 'TikTok Videos',
    icon: '🎵',
    href: '/tiktok-video-downloader',
    desc: 'HD TikTok downloads, no watermark',
    color: '#fe2c55',
    bg: 'rgba(254,44,85,0.08)',
  },
  {
    name: 'Facebook Videos',
    icon: '📘',
    href: '/facebook-video-downloader',
    desc: 'Public & private Facebook video save',
    color: '#1877f2',
    bg: 'rgba(24,119,242,0.08)',
  },
  {
    name: 'YouTube Videos',
    icon: '▶️',
    href: '/youtube-video-downloader',
    desc: 'YouTube & Shorts in up to 4K',
    color: '#ff0000',
    bg: 'rgba(255,0,0,0.08)',
  },
  {
    name: 'Twitter / X Videos',
    icon: '🐦',
    href: '/twitter-video-downloader',
    desc: 'Download Twitter and X videos fast',
    color: '#1da1f2',
    bg: 'rgba(29,161,242,0.08)',
  },
  {
    name: 'Pinterest Videos',
    icon: '📌',
    href: '/pinterest-video-downloader',
    desc: 'Save Pinterest video pins easily',
    color: '#e60023',
    bg: 'rgba(230,0,35,0.08)',
  },
];

const features = [
  { icon: '🚫', title: 'No Watermark', desc: 'Clean downloads with no platform branding or username overlays.' },
  { icon: '📺', title: 'HD & 4K Quality', desc: 'We preserve the original upload resolution — up to 4K where available.' },
  { icon: '⚡', title: 'Fast Processing', desc: 'Most downloads complete in under 5 seconds on any connection.' },
  { icon: '🔒', title: 'Private & Secure', desc: 'We never store your videos or share your data with anyone.' },
  { icon: '📱', title: 'All Devices', desc: 'Works on iPhone, Android, Windows, Mac — any browser, no app needed.' },
  { icon: '💸', title: '100% Free', desc: 'No subscriptions, no hidden fees, no registration required. Ever.' },
];

const steps = [
  { num: '01', title: 'Copy the URL', desc: 'Open the video on Instagram, TikTok, YouTube, or any supported platform and copy the link.' },
  { num: '02', title: 'Paste & Download', desc: 'Paste the URL into the box above and hit Download. Done in seconds.' },
  { num: '03', title: 'Save to Device', desc: 'Your file downloads directly to your phone, tablet, or computer in HD quality.' },
];

const FONT = "'Outfit', sans-serif";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: '#fff' }}>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(160deg, #0a0a0a 0%, #130f1f 50%, #0a0a0a 100%)', padding: '72px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div className="container mx-auto px-4" style={{ maxWidth: '820px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.35)', color: '#818cf8', padding: '6px 18px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '24px', letterSpacing: '0.03em' }}>
            🚀 15+ Platforms · 25M+ Downloads · Always Free
          </div>

          <h1 style={{ fontFamily: FONT, fontWeight: 900, fontSize: 'clamp(2.2rem, 6vw, 3.6rem)', color: '#fff', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.02em' }}>
            Download Videos from{' '}
            <span style={{ background: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Any Platform
            </span>
          </h1>

          <p style={{ color: '#9ca3af', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '40px', maxWidth: '560px', margin: '0 auto 40px' }}>
            Free HD downloader for Instagram Reels, TikTok, Facebook, YouTube, Twitter and Pinterest. No watermark, no sign-up, works on every device.
          </p>

          <DownloadForm />

          <p style={{ color: '#4b5563', fontSize: '0.8rem', marginTop: '20px' }}>
            Supports Instagram · TikTok · Facebook · YouTube · Twitter/X · Pinterest
          </p>
        </div>
      </section>

      {/* PLATFORMS GRID */}
      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container mx-auto px-4" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: FONT, fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0a0a0a', marginBottom: '10px' }}>
              Pick Your Platform
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1rem' }}>One click takes you straight to that downloader — no searching needed.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {platforms.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '18px 20px',
                  borderRadius: '14px',
                  background: p.bg,
                  border: `1px solid ${p.color}22`,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                className="hover:shadow-md"
              >
                <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{p.icon}</span>
                <div>
                  <p style={{ fontFamily: FONT, fontWeight: 700, color: '#0a0a0a', fontSize: '0.95rem', marginBottom: '2px' }}>{p.name}</p>
                  <p style={{ color: '#6b7280', fontSize: '0.8rem' }}>{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '72px 0', background: '#f9fafb' }}>
        <div className="container mx-auto px-4" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: FONT, fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0a0a0a', marginBottom: '10px' }}>
            Download in 3 Steps
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '48px' }}>No technical knowledge needed. If you can copy a link, you can use SocialPully.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div key={s.num} style={{ background: '#fff', borderRadius: '16px', padding: '28px 24px', border: '1px solid #e5e7eb', textAlign: 'left' }}>
                <div style={{ fontFamily: FONT, fontWeight: 900, fontSize: '2rem', color: '#e5e7eb', marginBottom: '12px', lineHeight: 1 }}>{s.num}</div>
                <p style={{ fontFamily: FONT, fontWeight: 700, color: '#0a0a0a', marginBottom: '8px', fontSize: '1rem' }}>{s.title}</p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.6' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: '72px 0', background: '#fff' }}>
        <div className="container mx-auto px-4" style={{ maxWidth: '960px' }}>
          <h2 style={{ fontFamily: FONT, fontWeight: 800, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#0a0a0a', textAlign: 'center', marginBottom: '10px' }}>
            Why People Use SocialPully
          </h2>
          <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: '48px' }}>Built for speed and simplicity — nothing to install, nothing to pay.</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} style={{ padding: '24px', borderRadius: '14px', border: '1px solid #f3f4f6', background: '#fafafa' }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '12px' }}>{f.icon}</div>
                <p style={{ fontFamily: FONT, fontWeight: 700, color: '#0a0a0a', marginBottom: '6px', fontSize: '0.95rem' }}>{f.title}</p>
                <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: '1.6' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO TEXT BLOCK — indexing focused */}
      <section style={{ padding: '60px 0', background: '#f9fafb' }}>
        <div className="container mx-auto px-4" style={{ maxWidth: '780px' }}>
          <h2 style={{ fontFamily: FONT, fontWeight: 800, fontSize: '1.5rem', color: '#0a0a0a', marginBottom: '14px' }}>
            Free Online Video Downloader for Every Platform
          </h2>
          <p style={{ color: '#4b5563', lineHeight: '1.85', marginBottom: '16px', fontSize: '0.925rem' }}>
            SocialPully is a free online video downloader that works across Instagram, TikTok, Facebook, YouTube, Twitter/X, and Pinterest. There is nothing to install — just paste a link and your video downloads in seconds, in HD quality, with no watermark attached.
          </p>
          <p style={{ color: '#4b5563', lineHeight: '1.85', marginBottom: '16px', fontSize: '0.925rem' }}>
            Whether you want to save an Instagram Reel for offline viewing, download a TikTok without the TikTok logo, grab a Facebook video someone shared, or pull a YouTube clip in 4K — SocialPully handles it all from a single page. Works on iPhone, Android, Windows, and Mac without any extensions or apps.
          </p>
          <p style={{ color: '#4b5563', lineHeight: '1.85', fontSize: '0.925rem' }}>
            We do not store your videos, require a login, or charge anything. Over 25 million downloads have been processed since launch. Pick a platform above or paste any link into the downloader to get started.
          </p>
        </div>
      </section>

    </div>
  );
}
