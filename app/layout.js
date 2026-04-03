import "../styles/body.css";
import "../styles/grid.css";
import "../styles/navbar.css";
import Navbar from "../components/navbar";
import Script from "next/script";

export const metadata = {
  title: "sg-learninghub - Cultural and School Exchange Programs in Singapore",
  description:
    "Explore cultural exchange programs in Singapore with sg-learninghub. Offering personalized homestay experiences and school exchange programs that foster cultural understanding and global friendships.",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "sg-learninghub",
    "url": "https://sg-learninghub.com",
    "logo": "https://sg-learninghub.com/transparent.png",
    "image": "https://sg-learninghub.com/transparent.png",
    "description": "For over 20 years, sglearninghub has provided immersive cultural exchange and study tour programs in Singapore, including homestays, internships, and school visits.",
    "foundingDate": "2006",
    "priceRange": "$$",
    "telephone": "+65 63421527",
    "email": "homestay@singnet.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "65 Airport Blvd., #03-37 Terminal 3, Singapore 819663",
      "addressLocality": "Singapore",
      "postalCode": "819663",
      "addressCountry": "SG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 1.355580,
      "longitude": 103.983621
    },
    "areaServed": "Singapore",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cultural and Educational Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Student Exchange Programs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Educational Study Tours"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Homestay Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Internships & Technical Visits"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/apple-icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=League+Spartan"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body suppressHydrationWarning>
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdn.botpress.cloud/webchat/v2.3/inject.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://files.bpcontent.cloud/2025/04/09/07/20250409072725-7JS2HUV7.js"
          strategy="lazyOnload"
        />
        
        <div
          className="elfsight-app-c6a27cf6-6681-4c2f-9ddf-12adebc1857e"
          data-elfsight-app-lazy
        ></div>
        
        <Navbar />

        <main style={{ paddingTop: "100px" }}>
          <div id="root"></div>
          {children}
        </main>
      </body>
    </html>
  );
}
