import "./globals.css";

export const metadata = {
  title: "NeighborConnector™ — Private Circles for Neighbors & Family",
  description:
    "A free app from a nonprofit: build a small, private circle of neighbors, friends, and family to check in, ask for help, and stay connected. No ads, no public feeds.",
  icons: {
    icon: "/assets/logo-trim.png",
    shortcut: "/assets/logo-trim.png",
    apple: "/assets/logo-trim.png",
  },
  openGraph: {
    title: "NeighborConnector™ — Private Circles for Neighbors & Family",
    description:
      "A free app from a nonprofit: build a small, private circle of neighbors, friends, and family to check in, ask for help, and stay connected. No ads, no public feeds.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeighborConnector™ — Private Circles for Neighbors & Family",
    description:
      "A free app from a nonprofit: build a small, private circle of neighbors, friends, and family to check in, ask for help, and stay connected. No ads, no public feeds.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
