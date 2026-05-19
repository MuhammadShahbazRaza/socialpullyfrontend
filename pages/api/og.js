To generate an Open Graph (OG) image dynamically using Next.js, you can leverage the `next/og` package to create a serverless function in your Next.js app. Below is a complete, working example of an API route that fulfills your requirements:

### Step-by-Step Implementation

1. **Create the API Route**: You need to place this file under the following path: `app/api/og/route.js` or `app/api/og/route.tsx` if you're using TypeScript.

```javascript
// app/api/og/route.js

import { ImageResponse } from 'next/og';

// Set constants for the image dimensions and styling
const width = 1200;
const height = 630;
const backgroundColor = '#0f172a';
const gradient = 'linear-gradient(135deg, #4a00e0, #8e2de2)';

export const GET = async (req) => {
  // Parse query parameters for dynamic customization
  const url = new URL(req.url);
  const title = url.searchParams.get('title') || 'SocialPully';
  const description = url.searchParams.get('description') || 'The Best Video Downloader';
  const platform = url.searchParams.get('platform') || '';

  // Define platform icons
  const platformIcons = {
    instagram: '📸',
    tiktok: '🎵',
    youtube: '▶️',
    facebook: '📘',
    twitter: '🐦',
    pinterest: '📌',
  };

  // Prepare the platform icon for display
  const platformIcon = platformIcons[platform.toLowerCase()] || '';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundImage: gradient,
          backgroundColor,
          color: '#ffffff',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
        }}
      >
        <h1 style={{ fontSize: 48, margin: '0 0 20px 0' }}>{title}</h1>
        {platform && (
          <div style={{ fontSize: 64 }}>
            {platformIcon}
          </div>
        )}
        <h2 style={{ fontSize: 24, margin: '10px 0' }}>{description}</h2>
        <p style={{ fontSize: 18, marginTop: 10 }}>
          Free • No Watermark • HD Quality
        </p>
        <p style={{ fontSize: 12, position: 'absolute', bottom: 20 }}>
          SocialPully - The Ultimate Video Downloader
        </p>
      </div>
    ),
    {
      width,
      height,
    }
  );
};

export const config = {
  runtime: 'edge',
};
```

### Explanation

- **Dynamic Image Generation**: The code provides a serverless function using the `ImageResponse` API in `next/og`. It dynamically creates an OG image based on query parameters (`title`, `description`, `platform`).

- **Styling**: The image is styled with a set of constants that define dimensions, colors, and background gradients. The platform icons are displayed using simple emojis, which can be customized further with actual image assets if necessary.

- **Flexibility**: This solution accepts specific query parameters to customize the display of the OG image dynamically, which makes it flexible and adaptable for different use-cases of SocialPully.

- **Edge Runtime**: The API route is optimized to run at the edge for faster global delivery.

Make sure you have necessary configurations for using `next/og` in your project, and deploy your Next.js application to a platform that supports serverless or Edge functions for this to work seamlessly.