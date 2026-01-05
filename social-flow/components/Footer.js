import Link from 'next/link';
import { Download } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Platforms': [
      { href: '/instagram-reel-downloader', label: 'Instagram Downloader' },
      { href: '/tiktok-video-downloader', label: 'TikTok Downloader' },
      { href: '/facebook-video-downloader', label: 'Facebook Downloader' },
      { href: '/youtube-video-downloader', label: 'YouTube Downloader' },
      { href: '/twitter-video-downloader', label: 'Twitter Downloader' },
      { href: '/pinterest-video-downloader', label: 'Pinterest Downloader' },
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
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
                <Download className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold">SocialPully</span>
            </div>
            <p className="text-gray-400 text-sm">
              Free online video downloader for Instagram, TikTok, Facebook, YouTube and 15+ platforms.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} SocialPully. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Download videos responsibly. Respect copyright laws.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}