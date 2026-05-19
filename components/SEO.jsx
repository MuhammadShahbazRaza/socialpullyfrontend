To create a complete SEO component for SocialPully using Next.js, we'll focus on generating comprehensive meta tags and structured data. The component will dynamically handle various page types and accept several props for flexibility.

Here's the implementation of the `SEO.jsx` component located in `components/SEO.jsx`:

```jsx
// components/SEO.jsx

import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import {
  getWebsiteSchema,
  getOrganizationSchema,
  getSoftwareApplicationSchema,
  getHowToSchema,
  getFAQSchema,
  getArticleSchema,
  getFAQPageSchema,
  getBreadcrumbSchema
} from '../lib/schema';

const SEO = ({ title, description, url, platform = '', pageType }) => {
  const ogImage = `/api/og?title=${encodeURIComponent(title)}&platform=${encodeURIComponent(platform)}`;
  const fullUrl = `https://socialpully.com${url}`;

  const getStructuredData = () => {
    switch (pageType) {
      case 'homepage':
        return [getWebsiteSchema(), getOrganizationSchema()];
      case 'downloader':
        return [
          getSoftwareApplicationSchema(),
          getHowToSchema(),
          getFAQSchema()
        ];
      case 'blog':
        return [getArticleSchema()];
      case 'faq':
        return [getFAQPageSchema()];
      default:
        return [];
    }
  };

  const structuredDataScripts = getStructuredData().map((schema, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={pageType === 'blog' ? 'article' : 'website'} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="SocialPully" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@socialpully" />
      <meta name="robots" content="index, follow" />
      {structuredDataScripts}
      {pageType !== 'homepage' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbSchema(fullUrl, title))
          }}
        />
      )}
    </Head>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  platform: PropTypes.string,
  pageType: PropTypes.string.isRequired
};

export default SEO;
```

### Explanation:

1. **Props**: The component accepts `title`, `description`, `url`, `platform` (optional), and `pageType` as props to customize the meta tags and structured data.
  
2. **Meta Tags**: Various meta tags are generated for SEO, Open Graph, and Twitter, using the provided props.

3. **Structured Data**: Based on the `pageType`, different JSON-LD structured data types are generated using pre-defined schema functions imported from `../lib/schema`.

4. **Breadcrumbs**: If the `pageType` is not `'homepage'`, a breadcrumb script is included for better SEO on hierarchical pages.

5. **Production-Ready**: Ensures all JSON-LD scripts are safe by using `dangerouslySetInnerHTML`, and PropTypes are used for type-checking.

Ensure to implement or have existing schema functions in `../lib/schema` to output the correct structured data according to your needs.