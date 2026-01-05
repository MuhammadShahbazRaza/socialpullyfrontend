import DownloadForm from '@/components/DownloadForm';
import PlatformCard from '@/components/PlatformCard';
import { Instagram, Facebook, Music, Youtube, Twitter, Mail } from 'lucide-react';

export const metadata = {
  title: 'Free Video Downloader - Instagram, TikTok, Facebook, YouTube',
  description: 'Download videos from Instagram Reels, TikTok, Facebook, YouTube in HD quality. Free, fast, no watermark. Support for 15+ social media platforms.',
};

const platforms = [
  { name: 'Instagram', icon: Instagram, href: '/instagram-reel-downloader', color: 'purple' },
  { name: 'TikTok', icon: Music, href: '/tiktok-video-downloader', color: 'black' },
  { name: 'Facebook', icon: Facebook, href: '/facebook-video-downloader', color: 'blue' },
  { name: 'YouTube', icon: Youtube, href: '/youtube-video-downloader', color: 'red' },
  { name: 'Twitter', icon: Twitter, href: '/twitter-video-downloader', color: 'sky' },
  { name: 'Pinterest', icon: Mail, href: '/pinterest-video-downloader', color: 'rose' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Download Videos from <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Any Platform</span>
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Free Instagram Reel Downloader, TikTok Video Saver, Facebook Video Download, YouTube Downloader - All in One Place
          </p>
          
          <DownloadForm />
        </div>
      </section>

      {/* Ad Space */}
      <div className="container mx-auto px-4 my-8">
        <div className="bg-gray-100 h-24 flex items-center justify-center text-gray-400">
          Google AdSense Banner 728x90
        </div>
      </div>

      {/* Platforms Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Supported Platforms</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform) => (
              <PlatformCard key={platform.name} {...platform} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2>Best Free Video Downloader for All Social Media Platforms</h2>
            <p>
              SocialPully is the most comprehensive online video downloader that supports Instagram Reels, TikTok videos, Facebook content, YouTube videos, Twitter media, and 15+ other social platforms. Our tool is 100% free, requires no registration, and delivers high-quality downloads without watermarks.
            </p>
            
            <h3>Why Choose SocialPully Video Downloader?</h3>
            <ul>
              <li><strong>Instagram Reel Downloader:</strong> Save Instagram Reels, Stories, and IGTV videos in original HD quality</li>
              <li><strong>TikTok Video Downloader:</strong> Download TikTok videos without watermark in HD and 4K</li>
              <li><strong>Facebook Video Download:</strong> Save Facebook videos, Reels, and Watch content easily</li>
              <li><strong>YouTube Downloader:</strong> Download YouTube videos and Shorts in multiple formats</li>
              <li><strong>Multi-Platform Support:</strong> Works with Twitter, Pinterest, LinkedIn, Reddit, Snapchat, Vimeo</li>
            </ul>

            <h3>How to Download Instagram Reels, TikTok Videos, and More</h3>
            <ol>
              <li>Copy the video URL from Instagram, TikTok, Facebook, or any supported platform</li>
              <li>Paste the link into the SocialPully downloader above</li>
              <li>Select your preferred quality (360p, 720p HD, 1080p Full HD, or 4K)</li>
              <li>Click "Download" and save the video to your device instantly</li>
            </ol>

            <h3>Features That Make SocialPully the Best Video Downloader</h3>
            <p>
              Our Instagram reel downloader and TikTok video saver tool offers unmatched speed and quality. Whether you need to download Facebook videos for offline viewing or save YouTube content for later, SocialPully handles it all with ease. The interface is intuitive, making video downloads accessible to everyone.
            </p>
          </article>
        </div>
      </section>

      {/* Ad Space */}
      <div className="container mx-auto px-4 my-8">
        <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-400">
          Google AdSense Large Rectangle 336x280
        </div>
      </div>
    </div>
  );
}
