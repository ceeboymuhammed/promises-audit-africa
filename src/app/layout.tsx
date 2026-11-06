
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://clintmulticomservices.com"
  ),

  title: {
    default: "Clint Multicom Services | Media & Investigations",
    template: "%s | Clint Multicom Services",
  },

  description:
    "Clint Multicom Services is a media and investigative film company documenting promises, investigating delivery and celebrating integrity across Africa.",

  applicationName: "Clint Multicom Services",

  openGraph: {
    title: "Clint Multicom Services",
    description:
      "We Track. We Verify. We Celebrate. Discover investigations, documentaries and stories that matter.",
    siteName: "Clint Multicom Services",
    url: "https://clintmulticomservices.com",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101e2b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
