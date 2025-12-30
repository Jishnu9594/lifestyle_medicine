import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import "../styles/globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Lifestyle Medicine | Health & Wellness",
    template: "%s | Lifestyle Medicine",
  },
  description:
    "Discover the power of lifestyle medicine for optimal health and wellness. Evidence-based guidance on nutrition, fitness, and holistic health.",
  keywords: [
    "lifestyle medicine",
    "health",
    "wellness",
    "nutrition",
    "fitness",
    "preventive care",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lifestylemedicine.com",
    siteName: "Lifestyle Medicine",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
