import DownloadForm from "@/components/DownloadForm";

export const metadata = {
  title: "Pinterest Video Downloader - Download Pinterest Videos Free",
  description:
    "Free Pinterest video downloader. Save Pinterest videos in HD quality. Fast and easy Pinterest media download.",
  keywords: [
    "pinterest video downloader",
    "download pinterest videos",
    "pinterest downloader",
    "save pinterest video",
  ],
};

export default function PinterestVideoDownloaderPage() {
  return (
    <main>
      <DownloadForm platform="pinterest" />
    </main>
  );
}
