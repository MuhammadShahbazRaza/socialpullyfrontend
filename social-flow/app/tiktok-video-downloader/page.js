import DownloadForm from '@/components/DownloadForm';

export const metadata = {
  title: 'TikTok Video Downloader - Download TikTok Videos Without Watermark Free',
  description: 'Free TikTok video downloader. Save TikTok videos without watermark in HD, 4K quality. No app, no login required. Fast TikTok download online.',
  robots: {
    index: false,
    follow: false,
  },
  keywords: ['tiktok video downloader', 'download tiktok videos', 'tiktok downloader no watermark', 'save tiktok videos', 'tiktok mp4 download'],
};

export default function TikTokDownloader() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">TikTok Video Downloader</span>
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Download TikTok Videos Without Watermark - Free, Fast, HD Quality
          </p>
          
          <DownloadForm platform="tiktok" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2>Best TikTok Video Downloader - No Watermark, HD Quality</h2>
            <p>
              Download TikTok videos without watermark using SocialPully's free TikTok downloader. Save TikTok videos in HD and 4K quality directly to your device. No app installation, no login required - just paste the TikTok link and download.
            </p>

            <h3>How to Download TikTok Videos Without Watermark</h3>
            <ol>
              <li>Open TikTok and find the video you want to download</li>
              <li>Tap the Share button and select "Copy Link"</li>
              <li>Paste the TikTok video link in our downloader above</li>
              <li>Select "No Watermark" option and choose quality</li>
              <li>Click Download - your TikTok video saves instantly!</li>
            </ol>

            <h3>Why Choose Our TikTok Downloader?</h3>
            <ul>
              <li><strong>No Watermark:</strong> Download TikTok videos without the TikTok watermark</li>
              <li><strong>HD & 4K Quality:</strong> Save videos in original quality up to 4K resolution</li>
              <li><strong>MP4 Format:</strong> Downloaded TikTok videos in universal MP4 format</li>
              <li><strong>No App Required:</strong> Download TikTok videos directly in browser</li>
              <li><strong>Unlimited Downloads:</strong> Download as many TikTok videos as you want</li>
              <li><strong>Works on All Devices:</strong> iPhone, Android, PC, Mac compatible</li>
            </ul>

            <h3>TikTok Video Downloader Features</h3>
            <p>
              Our TikTok downloader removes watermarks automatically while preserving the original video quality. Whether you want to save TikTok videos for offline viewing, create compilations, or repost content (with credit), SocialPully makes it simple and fast.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}