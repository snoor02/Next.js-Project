// components/SEO.js
import Head from 'next/head';

export default function SEO() {
  const pageTitle = "Royal x Casino | Pakistan's #1 Real Money Gaming App";
  const pageDescription = "Join 500,000+ players on Royal x Casino - Get Rs 50,000 Welcome Bonus! Download APK for Android with 2000+ games, instant withdrawals & 24/7 support.";
  const canonicalUrl = "https://royalxcasinox.com/";

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content="Royal x Casino, Online Casino Pakistan, Real Money Games, Download Casino APK, Mobile Gambling App" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content="https://royalxcasinox.com/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content="https://royalxcasinox.com/og-image.jpg" />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />


      

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Casino",
          "name": "Royal x Casino",
          "image": "https://royalxcasinox.com/logo.png",
          "description": pageDescription,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Pakistan"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "2850"
          }

          
        })}
      </script>
    </Head>
  );
}