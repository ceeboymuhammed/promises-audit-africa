
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Promises Audit Africa | Track. Verify. Recognise.",
    template: "%s | Promises Audit Africa",
  },
  description:
    "Track public commitments, follow progress, examine evidence and celebrate verified promise keepers across Africa.",
  applicationName: "Promises Audit Africa",
  openGraph: {
    title: "Promises Audit Africa",
    description:
      "A public record of promises, progress and accountability.",
    siteName: "Promises Audit Africa",
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
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
