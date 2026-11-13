import Script from "next/script";
import "./globals.css";

const siteUrl = "https://www.neighborconnector.org";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NeighborConnector™ — Private Circles for Neighbors & Family",
    template: "%s | NeighborConnector™",
  },
  description:
    "A free app from a nonprofit: build a small, private circle of neighbors, friends, and family to check in, ask for help, and stay connected. No ads, no public feeds.",
  keywords: [
    "NeighborConnector",
    "neighborhood app",
    "private circle",
    "Circle Living",
    "neighbor check in",
    "mutual aid app",
    "nonprofit community app",
    "caregiver circles",
    "senior safety check in",
  ],
  authors: [{ name: "Community Care Housing Foundation" }],
  creator: "Community Care Housing Foundation",
  publisher: "Community Care Housing Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/assets/logo-trim.webp", type: "image/webp" },
      { url: "/assets/logo-trim.png", type: "image/png" },
    ],
    shortcut: "/assets/logo-trim.webp",
    apple: "/assets/logo-trim.webp",
  },
  openGraph: {
    title: "NeighborConnector™ — Private Circles for Neighbors & Family",
    description:
      "A free app from a nonprofit: build a small, private circle of neighbors, friends, and family to check in, ask for help, and stay connected. No ads, no public feeds.",
    url: siteUrl,
    siteName: "NeighborConnector™",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/hero.webp",
        width: 1200,
        height: 630,
        alt: "NeighborConnector app interface and private circle living preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeighborConnector™ — Private Circles for Neighbors & Family",
    description:
      "A free app from a nonprofit: build a small, private circle of neighbors, friends, and family to check in, ask for help, and stay connected. No ads, no public feeds.",
    images: ["/assets/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Community Care Housing Foundation",
      url: "https://www.communitycarehousing.org",
      logo: `${siteUrl}/assets/logo-trim.webp`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-720-693-2522",
        contactType: "Customer Support",
        email: "Info@CommunityCareHousing.org",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#app`,
      name: "NeighborConnector™",
      operatingSystem: "iOS, Android",
      applicationCategory: "SocialNetworkingApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Free private circle app for neighbors, friends, and family to check in, ask for help, and coordinate everyday support without ads or public feeds.",
      author: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "NeighborConnector™",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full font-sans antialiased">
        {children}
  
      </body>
    </html>
  );
}
