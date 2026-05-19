```javascript
// lib/schema.js

export const getWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SocialPully",
    "url": "https://socialpully.com",
    "logo": "https://socialpully.com/logo.png",
    "sameAs": [
      "https://www.instagram.com/socialpully",
      "https://twitter.com/socialpully",
      // Add other social profiles
    ],
    "@graph": [
      {
        "@type": "WebSite",
        "url": "https://socialpully.com",
        "name": "SocialPully",
        "description": "Free online video downloader for Instagram, TikTok, Facebook, YouTube, Twitter/X, Pinterest",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://socialpully.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };
};

export const getDownloaderSchema = (platform, pageUrl) => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SocialPully - " + platform + " Downloader",
    "operatingSystem": "All",
    "applicationCategory": "MultimediaApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "url": pageUrl
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "12000"
    },
    "downloadCount": "25000000+",
    "description": "Free " + platform + " video downloader by SocialPully. Save videos in high quality.",
    "url": pageUrl
  };
};

export const getFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const getBreadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    }))
  };
};

export const getHowToSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to download videos using SocialPully",
    "step": [
      {
        "@type": "HowToStep",
        "text": "Copy the video URL from the platform (e.g., Instagram, TikTok)."
      },
      {
        "@type": "HowToStep",
        "text": "Paste the URL into the SocialPully downloader page."
      },
      {
        "@type": "HowToStep",
        "text": "Select the desired video quality and click download."
      },
      {
        "@type": "HowToStep",
        "text": "Your video will be processed and downloaded automatically."
      }
    ]
  };
};

export default {
  getWebsiteSchema,
  getDownloaderSchema,
  getFAQSchema,
  getBreadcrumbSchema,
  getHowToSchema
};
```

### Explanation:
- **getWebsiteSchema()**: Returns the schema for the organization as well as the website.
- **getDownloaderSchema(platform, pageUrl)**: Returns a `SoftwareApplication` schema, specific for each downloader page.
- **getFAQSchema(faqs)**: Formats FAQPage schema using real FAQ data.
- **getBreadcrumbSchema(items)**: Constructs a BreadcrumbList schema, useful for navigation.
- **getHowToSchema()**: Returns HowTo schema for steps to download videos on SocialPully.