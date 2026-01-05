import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export const metadata = {
  title: '404 - Page Not Found | SocialPully',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-indigo-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md">
          The page you're looking for doesn't exist. But you can still download videos from Instagram, TikTok, Facebook, and more!
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition">
            <Home size={20} />
            Go Home
          </Link>
          <Link href="/blog" className="flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition">
            <Search size={20} />
            Browse Blog
          </Link>
        </div>
      </div>
    </div>
  );
}