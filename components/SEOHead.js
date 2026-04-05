import Head from 'next/head';

export default function SEOHead({ title, description, keywords, ogImage, url, type = 'website', structuredData }) {
  const siteUrl = 'https://www.senthiljaganathan.in';
  const defaultImage = `${siteUrl}/og-image.jpg`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Senthil Jaganathan" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url || siteUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:site_name" content="Senthil Jaganathan - Tamil Author" />
      <meta property="og:locale" content="ta_IN" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      <meta name="twitter:site" content="@senthiljaganat" />

      {/* Tamil language */}
      <meta httpEquiv="Content-Language" content="ta" />
      <meta name="language" content="Tamil" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Tamil Nadu, India" />

      {/* Structured data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      {/* Person schema for author */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Senthil Jaganathan",
        "alternateName": "செந்தில் ஜெகன்நாதன்",
        "url": siteUrl,
        "jobTitle": "Author",
        "description": "Tamil author and poet from Tamil Nadu, India",
        "nationality": "Indian",
        "knowsLanguage": ["Tamil", "English"],
        "sameAs": [
          "https://facebook.com/senthiljaganathan",
          "https://instagram.com/senthiljaganathan",
          "https://twitter.com/senthiljaganat"
        ]
      })}} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Head>
  );
}
