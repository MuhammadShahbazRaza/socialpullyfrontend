import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GoogleAnalytics from './GoogleAnalytics';
import JsonLd from '@/components/JsonLd';
import { generateWebsiteSchema, generateOrganizationSchema, generateSoftwareApplicationSchema } from '@/lib/schema';
import './globals.css';




export const metadata = {
  metadataBase: new URL('https://SocialPully.com'),
  title: {
    default: 'SocialPully - Free Video Downloader for Instagram, TikTok, Facebook, YouTube',
    template: '%s | SocialPully'
  },
  description: 'Download videos from Instagram Reels, TikTok, Facebook, YouTube, Twitter and 15+ platforms. Free, fast, HD quality, no watermark. Best online video downloader 2024.',
  keywords: ['instagram reel downloader', 'tiktok video downloader', 'facebook video download', 'youtube downloader', 'social media video downloader', 'video downloader online', 'download instagram reels', 'download tiktok videos', 'fb video downloader'],
  robots: {
    index: false,
    follow: false,
  },
  authors: [{ name: 'SocialPully' }],
  creator: 'SocialPully',
  publisher: 'SocialPully',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://SocialPully.com',
    siteName: 'SocialPully',
    title: 'SocialPully - Free Video Downloader',
    description: 'Download videos from any social media platform. Free, fast, and secure.',
    images: ['/og-image.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SocialPully - Free Video Downloader',
    description: 'Download videos from Instagram, TikTok, Facebook, YouTube',
    images: ['/twitter-image.jpg']
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  }
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
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}