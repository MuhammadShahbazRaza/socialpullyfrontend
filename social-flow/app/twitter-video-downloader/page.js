import DownloadForm from "@/components/DownloadForm";

export const metadata = {
  title: "Twitter Video Downloader - Download Twitter/X Videos & GIFs Free",
  description:
    "Free Twitter (X) video downloader. Save Twitter videos and GIFs in HD quality. Fast and easy Twitter media download.",
  robots: {
    index: false,
    follow: false,
  },
  keywords: [
    "twitter video downloader",
    "download twitter videos",
    "x video downloader",
    "twitter gif download",
  ],
};

export default function TwitterVideoDownloaderPage() {
  return (
    <main>
      <DownloadForm platform="twitter" />
    </main>
  );
}
