'use client';
import { useState, useRef } from 'react';
import { Download, Loader, CheckCircle, AlertCircle, Video, Info, Clock, Eye } from 'lucide-react';

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE?.replace(/\/$/, '') ||
  'https://301759dfa4bd.ngrok-free.app';

function toAbsoluteUrl(maybeRelative) {
  try {
    return new URL(maybeRelative, API_BASE).toString();
  } catch {
    return maybeRelative;
  }
}

function filenameFromContentDisposition(cd) {
  if (!cd) return '';
  // filename*=UTF-8''... OR filename="..."
  const star = /filename\*\s*=\s*(?:UTF-8'')?([^;]+)/i.exec(cd);
  if (star?.[1]) return decodeURIComponent(star[1].trim().replace(/^"|"$/g, ''));
  const normal = /filename\s*=\s*([^;]+)/i.exec(cd);
  if (normal?.[1]) return normal[1].trim().replace(/^"|"$/g, '');
  return '';
}

// This avoids tab navigation/spinner by NOT changing window.location
// This avoids tab navigation/spinner by NOT changing window.location
async function triggerBrowserDownload(fileUrl, fallbackFilename) {
  // Use hidden iframe with download attribute to prevent navigation
  // This method works better with backend streams that may not support CORS fully
  const iframe = document.createElement('iframe');
  iframe.style.cssText = 'position:absolute;width:0;height:0;border:0;visibility:hidden;';
  
  // Create a temporary page that triggers download without navigation
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body>
      <script>
        window.onload = function() {
          const a = document.createElement('a');
          a.href = '${fileUrl}';
          a.download = '${fallbackFilename || 'video.mp4'}';
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          
          // Notify parent that download started
          setTimeout(() => {
            window.parent.postMessage('download-started', '*');
          }, 100);
        };
      </script>
    </body>
    </html>
  `;
  
  iframe.srcdoc = htmlContent;
  document.body.appendChild(iframe);
  
  // Cleanup after download starts
  return new Promise((resolve) => {
    const listener = (event) => {
      if (event.data === 'download-started') {
        window.removeEventListener('message', listener);
        setTimeout(() => {
          try {
            document.body.removeChild(iframe);
          } catch {}
        }, 2000);
        resolve();
      }
    };
    window.addEventListener('message', listener);
    
    // Fallback cleanup if message never arrives
    setTimeout(() => {
      window.removeEventListener('message', listener);
      try {
        document.body.removeChild(iframe);
      } catch {}
      resolve();
    }, 5000);
  });
}

export default function DownloadForm({ platform = 'all' }) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [videoInfo, setVideoInfo] = useState(null);
  const [downloading, setDownloading] = useState(false);
  const [quality, setQuality] = useState('best');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');

  const formTopRef = useRef(null);

  const resetForm = () => {
    setUrl('');
    setVideoInfo(null);
    setQuality('best');
    setError('');
    setDownloadSuccess(false);
    setDownloadUrl('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fetchVideoInfo = async () => {
    if (!url.trim()) {
      setError('Please enter a valid URL');
      return;
    }

    setLoading(true);
    setError('');
    setVideoInfo(null);
    setDownloadUrl('');

    try {
      const response = await fetch(`${API_BASE}/api/info/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (data.success) {
        setVideoInfo(data);
        setQuality('best');
      } else {
        throw new Error(data.error || 'Failed to fetch video information');
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch video. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!videoInfo) {
      setError('No video information available');
      return;
    }

    setDownloading(true);
    setDownloadSuccess(false);
    setError('');

    try {
      const response = await fetch(`${API_BASE}/api/download/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, quality }),
      });

      const data = await response.json();
      console.log('Download response:', data);

      if (data.success && data.download_url) {
        const absDownloadUrl = toAbsoluteUrl(data.download_url);
        setDownloadUrl(absDownloadUrl);

        const filename = data.filename || `video_${Date.now()}.${data.ext || 'mp4'}`;

        // IMPORTANT: await blob-download so we do not navigate the tab
        await triggerBrowserDownload(absDownloadUrl, filename);

        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 5000);
      } else {
        throw new Error(data.error || data.details || 'Failed to get download URL');
      }
    } catch (err) {
      console.error('Download error:', err);
      setError(err.message || 'Failed to download video. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  const manualDownload = async (e) => {
    e.preventDefault();
    if (!downloadUrl) return;
    const filename = (videoInfo?.title ? `${videoInfo.title}` : `video_${Date.now()}`) + '.mp4';
    await triggerBrowserDownload(downloadUrl, filename);
  };


  const formatDuration = (seconds) => {
    if (!seconds) return 'Unknown';
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return 'Unknown';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  };

  const placeholder =
    platform === 'instagram'
      ? 'Paste Instagram Reel URL here...'
      : platform === 'tiktok'
      ? 'Paste TikTok video URL here...'
      : platform === 'facebook'
      ? 'Paste Facebook video URL here...'
      : platform === 'youtube'
      ? 'Paste YouTube video URL here...'
      : 'Paste video URL from any platform...';

  const qualityOptions = [
    { value: 'best', label: 'Best Quality' },
    { value: '1080p', label: '1080p (Full HD)' },
    { value: '720p', label: '720p (HD)' },
    { value: '480p', label: '480p (SD)' },
    { value: '360p', label: '360p (Mobile)' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div ref={formTopRef} className="bg-white rounded-2xl shadow-2xl p-8">
        {/* URL Input Section */}
        <div className="mb-6">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={placeholder}
            className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none text-gray-800"
            disabled={loading || videoInfo !== null}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !videoInfo) fetchVideoInfo();
            }}
          />
        </div>

        {/* Fetch Button */}
        {!videoInfo && (
          <button
            onClick={fetchVideoInfo}
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader className="animate-spin" size={20} />
                Fetching Video Information...
              </>
            ) : (
              <>
                <Info size={20} />
                Get Video Info
              </>
            )}
          </button>
        )}

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg mt-4">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        )}

        {/* Success Message */}
        {downloadSuccess && (
          <div className="flex flex-col gap-2 text-green-600 bg-green-50 p-4 rounded-lg mt-4">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span className="font-semibold">Download started successfully!</span>
            </div>
            <p className="text-sm text-green-700 ml-7">
              Your video is downloading. If it does not start automatically, click the link below.
            </p>
            {downloadUrl && (
              <a
                href={downloadUrl}
                onClick={manualDownload}
                className="text-sm text-indigo-600 hover:text-indigo-800 underline ml-7 mt-1"
              >
                Click here to download manually →
              </a>
            )}
          </div>
        )}

        {/* Video Information Display */}
        {videoInfo && (
          <div className="mt-6 space-y-6">
            {/* Video Preview Card */}
            <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
              {videoInfo.thumbnail && (
                <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                  <img
                    src={videoInfo.thumbnail}
                    alt={videoInfo.title || 'Video thumbnail'}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-2xl">
                      <svg className="w-10 h-10 text-indigo-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-white text-sm opacity-90">Preview only - Click "Download Video" below to save</p>
                  </div>
                </div>
              )}

              <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                {videoInfo.title && (
                  <h3 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2">{videoInfo.title}</h3>
                )}

                <div className="flex flex-wrap gap-4 mb-4">
                  {videoInfo.platform && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-600">Platform:</span>
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium capitalize">
                        {videoInfo.platform}
                      </span>
                    </div>
                  )}

                  {videoInfo.duration && (
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={16} className="text-gray-500" />
                      <span className="text-gray-700 font-medium">{formatDuration(videoInfo.duration)}</span>
                    </div>
                  )}

                  {videoInfo.view_count && (
                    <div className="flex items-center gap-2 text-sm">
                      <Eye size={16} className="text-gray-500" />
                      <span className="text-gray-700 font-medium">{videoInfo.view_count.toLocaleString()} views</span>
                    </div>
                  )}

                  {videoInfo.filesize && (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-600">Size:</span>
                      <span className="text-gray-700 font-medium">{formatFileSize(videoInfo.filesize)}</span>
                    </div>
                  )}
                </div>

                {videoInfo.uploader && (
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-semibold">Uploader:</span> {videoInfo.uploader}
                  </p>
                )}

                {videoInfo.description && <p className="text-sm text-gray-600 line-clamp-3">{videoInfo.description}</p>}
              </div>
            </div>

            {/* Download Controls */}
            <div className="border-2 border-gray-200 rounded-xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50">
              <h4 className="font-semibold text-lg text-gray-800 mb-4 flex items-center gap-2">
                <Download size={20} className="text-indigo-600" />
                Download Options
              </h4>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 flex items-start gap-3">
                <Info size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-blue-800 font-medium mb-1">Direct Download - No Server Storage</p>
                  <p className="text-blue-700">
                    Videos are streamed directly from the platform to your device. Nothing is stored on our servers.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <select
                    value={quality}
                    onChange={(e) => setQuality(e.target.value)}
                    className="appearance-none w-full px-6 py-4 pr-12 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none bg-white text-gray-800 font-medium cursor-pointer hover:border-gray-300 transition"
                  >
                    {qualityOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:from-green-700 hover:to-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {downloading ? (
                    <>
                      <Loader className="animate-spin" size={20} />
                      Preparing...
                    </>
                  ) : (
                    <>
                      <Download size={20} />
                      Download Video
                    </>
                  )}
                </button>
              </div>

              {videoInfo.formats && videoInfo.formats.length > 0 && (
                <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Available Formats: {videoInfo.formats.length}</p>
                  <div className="flex flex-wrap gap-2">
                    {videoInfo.formats.slice(0, 6).map((format, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {format.resolution || format.quality} • {format.ext}
                      </span>
                    ))}
                    {videoInfo.formats.length > 6 && (
                      <span className="text-xs text-gray-500 px-2 py-1">+{videoInfo.formats.length - 6} more</span>
                    )}
                  </div>
                </div>
              )}

              <button
                onClick={resetForm}
                className="w-full mt-4 text-indigo-600 hover:text-indigo-800 py-3 text-sm font-medium transition border-2 border-indigo-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50"
              >
                Download Another Video
              </button>
            </div>

            <details className="border-2 border-gray-200 rounded-xl overflow-hidden">
              <summary className="px-6 py-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition font-medium text-gray-700 flex items-center justify-between">
                <span>Technical Details</span>
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 py-4 space-y-2 text-sm text-gray-600 bg-white">
                <p>
                  <strong>Video ID:</strong> {videoInfo.id || 'N/A'}
                </p>
                <p>
                  <strong>Upload Date:</strong> {videoInfo.upload_date || 'N/A'}
                </p>
                <p>
                  <strong>File Extension:</strong> {videoInfo.ext || 'mp4'}
                </p>
                {videoInfo.webpage_url && (
                  <p>
                    <strong>Source URL:</strong>{' '}
                    <a
                      href={videoInfo.webpage_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:underline break-all"
                    >
                      {videoInfo.webpage_url}
                    </a>
                  </p>
                )}
              </div>
            </details>
          </div>
        )}
      </div>

      {!videoInfo && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Download className="text-indigo-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Direct Downloads</h3>
            <p className="text-sm text-gray-600">No storage on our servers. Ultra-fast proxy streaming.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Video className="text-purple-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Multiple Qualities</h3>
            <p className="text-sm text-gray-600">Choose from 360p to 1080p quality options.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">All Platforms</h3>
            <p className="text-sm text-gray-600">YouTube, Instagram, TikTok, Facebook & more.</p>
          </div>
        </div>
      )}
    </div>
  );
}
