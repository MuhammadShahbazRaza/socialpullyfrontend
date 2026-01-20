import DownloadForm from '@/components/DownloadForm';

export const metadata = {
  title: 'YouTube Video Downloader - Download YouTube Videos & Shorts Free',
  description: 'Free YouTube video downloader. Save YouTube videos and Shorts in HD, 4K quality. Fast YouTube to MP4 converter. No software needed.',
  keywords: ['youtube downloader', 'download youtube videos', 'youtube to mp4', 'youtube shorts downloader'],
  robots: {
    index: false,
    follow: false,
  },
};

export default function YouTubeDownloader() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-red-50 via-white to-red-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              YouTube Video Downloader
            </span>
          </h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Download YouTube Videos & Shorts in HD, 4K Quality - Free YouTube to MP4
          </p>
          <DownloadForm platform="youtube" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2>YouTube Video Downloader - Save Videos in HD & 4K</h2>
            <p>Download YouTube videos and Shorts with SocialPully's free YouTube downloader. Save videos in multiple formats and qualities including HD and 4K.</p>

            <h3>How to Download YouTube Videos</h3>
            <ol>
              <li>Copy the YouTube video URL from your browser</li>
              <li>Paste the link in the downloader above</li>
              <li>Choose your preferred quality (720p, 1080p, 4K)</li>
              <li>Click Download to save the video</li>
            </ol>

            <h3>YouTube Downloader Features</h3>
            <ul>
              <li><strong>Multiple Formats:</strong> Download as MP4, WebM, and more</li>
              <li><strong>HD & 4K Quality:</strong> Save videos in original quality</li>
              <li><strong>YouTube Shorts:</strong> Download short-form videos easily</li>
              <li><strong>No Limits:</strong> Unlimited downloads, completely free</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
