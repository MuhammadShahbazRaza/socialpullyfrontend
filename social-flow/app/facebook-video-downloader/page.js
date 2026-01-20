import DownloadForm from '@/components/DownloadForm';

export const metadata = {
  title: 'Facebook Video Downloader - Download FB Videos, Reels Free HD',
  description: 'Free Facebook video downloader. Download Facebook videos, Reels, Watch content in HD quality. Fast, safe, no login required.',
  keywords: ['facebook video downloader', 'download facebook videos', 'fb video download', 'facebook reels downloader'],
  robots: {
    index: false,
    follow: false,
  },
};

export default function FacebookDownloader() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Facebook Video Downloader
            </span>
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Download Facebook Videos, Reels & Watch Content in HD Quality - Free & Fast
          </p>
          <DownloadForm platform="facebook" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2>Best Facebook Video Downloader - Free & HD Quality</h2>
            <p>Download Facebook videos, Reels, and Watch content easily with SocialPully's free Facebook downloader. Save videos in HD quality directly to your device without any software installation.</p>

            <h3>How to Download Facebook Videos</h3>
            <ol>
              <li>Open Facebook and find the video you want to download</li>
              <li>Click the three dots menu and select "Copy Link"</li>
              <li>Paste the Facebook video link above</li>
              <li>Select your preferred quality (HD recommended)</li>
              <li>Click Download and save to your device</li>
            </ol>

            <h3>Features of Our Facebook Video Downloader</h3>
            <ul>
              <li><strong>HD Quality Downloads:</strong> Save Facebook videos in up to 1080p HD</li>
              <li><strong>All Content Types:</strong> Download videos, Reels, Watch content, and more</li>
              <li><strong>No Registration:</strong> Download Facebook videos without login</li>
              <li><strong>Fast & Free:</strong> Lightning-fast downloads at no cost</li>
              <li><strong>Mobile Compatible:</strong> Works on iPhone, Android, and all devices</li>
            </ul>

            <h3>Can I Download Private Facebook Videos?</h3>
            <p>Our Facebook downloader only works with public videos. Private videos from friends or restricted groups cannot be downloaded without proper access permissions.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
