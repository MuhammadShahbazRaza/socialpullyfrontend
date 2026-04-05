import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GoogleAnalytics from './GoogleAnalytics';
import JsonLd from '@/components/JsonLd';
import { generateWebsiteSchema, generateOrganizationSchema, generateSoftwareApplicationSchema } from '@/lib/schema';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://socialpully.com'),
  title: {
    default: 'SocialPully - Free Video Downloader for Instagram, TikTok, Facebook, YouTube',
    template: '%s | SocialPully'
  },
  description: 'Download videos from Instagram Reels, TikTok, Facebook, YouTube, Twitter and 15+ platforms. Free, fast, HD quality, no watermark. Best online video downloader 2025.',
  keywords: [
    'instagram reel downloader',
    'tiktok video downloader',
    'facebook video download',
    'youtube downloader',
    'social media video downloader',
    'video downloader online',
    'download instagram reels',
    'download tiktok videos',
    'fb video downloader',
    'no watermark video downloader',
    'free video downloader',
  ],
  authors: [{ name: 'SocialPully', url: 'https://socialpully.com' }],
  creator: 'SocialPully',
  publisher: 'SocialPully',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://socialpully.com',
    siteName: 'SocialPully',
    title: 'SocialPully - Free Video Downloader',
    description: 'Download videos from any social media platform. Free, fast, HD quality, no watermark.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SocialPully - Free Video Downloader',
    description: 'Download videos from Instagram, TikTok, Facebook, YouTube without watermark',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }) {
  const websiteSchema = generateWebsiteSchema();
  const organizationSchema = generateOrganizationSchema();
  const softwareSchema = generateSoftwareApplicationSchema();

  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
        <JsonLd data={websiteSchema} />
        <JsonLd data={organizationSchema} />
        <JsonLd data={softwareSchema} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
