import { Download, Copy, MousePointer, Check } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { generateHowToSchema } from '@/lib/schema';

export const metadata = {
  title: 'How It Works - Download Videos in 3 Easy Steps | SocialPully',
  description: 'Learn how to download videos from Instagram, TikTok, Facebook, YouTube in just 3 simple steps. Free, fast, and easy video downloader guide.',
};

export default function HowItWorks() {
  const steps = [
    {
      icon: Copy,
      title: 'Copy Video URL',
      description: 'Find the video you want on Instagram, TikTok, Facebook, or any supported platform. Copy the video link or URL.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MousePointer,
      title: 'Paste & Select Quality',
      description: 'Paste the URL into SocialPully downloader. Choose your preferred quality (360p to 4K) and format.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Download,
      title: 'Download & Enjoy',
      description: 'Click the Download button. Your video will be saved to your device instantly. Watch offline anytime!',
      color: 'from-green-500 to-green-600'
    }
  ];

  const schemaData = generateHowToSchema('instagram');

  return (
    <>
      <JsonLd data={schemaData} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download videos from any social media platform in just 3 simple steps
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center`}>
                  <step.icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-gray-300 mb-4">0{index + 1}</div>
                <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="/"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition"
            >
              Start Downloading Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}