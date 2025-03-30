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
    name: "sg-learninghub",
    url: "https://sg-learninghub.com",
    logo: "https://singapore-exchange.github.io/homestay/static/media/topBanner.6b6e94d1c7c882f6d292.jpg",
    contactPoint: {
      "@type": "ContactPoint",
      email: "homestay@singnet.com",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "65 Airport Blvd., #03-37 Terminal 3, Singapore 819663",
      addressLocality: "Singapore",
      postalCode: "819663",
      addressCountry: "SG",
    },
    service: [
      {
        "@type": "Service",
        name: "Student exchange program",
      },
      {
        "@type": "Service",
        name: "Internships",
      },
      {
        "@type": "Service",
        name: "Technical Visits",
      },
      {
        "@type": "Service",
        name: "Attachments",
      },
      {
        "@type": "Service",
        name: "Student Services",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Basic Meta */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://sg-learninghub.com/static/media/topBanner.85a5c4fd8f5c416022a6.png"
        />
        <link rel="apple-touch-icon" href="/logo.png" />

        {/* Stylesheets */}
        <link rel="stylesheet" href="/body.css" />
        <link rel="stylesheet" href="/navbar.css" />
        <link rel="stylesheet" href="/grid.css" />
        <link rel="stylesheet" href="/listing.css" />
        <link rel="stylesheet" href="/footer.css" />

        {/* Open Graph & Twitter */}
        <meta
          property="og:image"
          content="https://sg-learninghub.com/transparent.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Homestay Exchange in Singapore"
        />
        <meta
          name="twitter:image"
          content="https://sg-learninghub.com/transparent.png"
        />
        <meta
          name="twitter:image:alt"
          content="Homestay Exchange in Singapore"
        />

        {/* Author and Robots */}
        <meta name="author" content="Web Wizards" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        {/* Description and OG Details */}
        <meta
          name="description"
          content="Explore cultural exchange programs in Singapore with sg-learninghub. Offering personalized homestay experiences and school exchange programs that foster cultural understanding and global friendships."
        />
        <meta property="og:title" content="Singapore Exchange" />
        <meta
          property="og:description"
          content="Experience Singapore like a local with sg-learninghub. Our programs offer students and tourists the opportunity to immerse in the culture, traditions, and daily life of Singapore through tailored homestay experiences and educational exchange programs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="singapore exchange" />

        {/* Apple Mobile Web App */}
        <meta name="apple-mobile-web-app-title" content="-learninghub" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=League+Spartan"
          rel="stylesheet"
        />

        {/* Canonical & Preconnect */}
        <link rel="canonical" href="https://sg-learninghub.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />

        {/* External Scripts */}
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HHPBXLLKPQ"
          strategy="afterInteractive"
        />
        <Script id="gtag-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HHPBXLLKPQ');
          `}
        </Script>

        <script
          async
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.59/build/spline-viewer.js"
        ></script>

        {/* Structured Data (JSON‑LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <title>
          sg-learninghub - Cultural and School Exchange Programs in Singapore
        </title>
      </head>

      <body>
        <Navbar />

        <div id="root"></div>
        {children}
      </body>
    </html>
  );
}
