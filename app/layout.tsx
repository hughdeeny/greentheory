import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GreenTheory | Turf. Plants. Precision.",
  description:
    "Turf care, hedging, irrigation and lawn renovations plus soft landscaping in Adelaide's eastern and inner suburbs. Led by director Ash Jose.",
  keywords: [
    "turf care Adelaide",
    "hedging Adelaide",
    "lawn renovation Adelaide",
    "soft landscaping",
    "irrigation Adelaide",
    "eastern suburbs landscaping",
    "inner suburbs garden care",
    "GreenTheory",
  ],
  openGraph: {
    title: "GreenTheory | Turf. Plants. Precision.",
    description:
      "Turf care, hedging, irrigation and lawn renovations. Serving Adelaide's eastern and inner suburbs.",
    type: "website",
    locale: "en_AU",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
