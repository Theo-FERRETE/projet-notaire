import type { Metadata, Viewport } from "next";
import {
  Geist_Mono,
  Inter,
  Libre_Caslon_Text,
  Literata,
  Manrope,
} from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteName = "Laila Gssime";
const siteDescription =
  "Étude notariale à Aix-en-Provence : un accompagnement humain, rigoureux et personnalisé pour vos projets de vie, votre patrimoine et vos transmissions.";
const heroImage = "/qui-suis-je/home-hero.png";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const libreCaslon = Libre_Caslon_Text({
  variable: "--font-libre-caslon",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Étude notariale à Aix-en-Provence`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "notaire Aix-en-Provence",
    "étude notariale Aix-en-Provence",
    "droit immobilier",
    "succession",
    "transmission patrimoniale",
    "droit de la famille",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/android-chrome-192x192.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName,
    title: `${siteName} | Étude notariale à Aix-en-Provence`,
    description: siteDescription,
    images: [
      {
        url: heroImage,
        width: 2752,
        height: 1536,
        alt: "Étude notariale Laila Gssime à Aix-en-Provence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Étude notariale à Aix-en-Provence`,
    description: siteDescription,
    images: [heroImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fdfcf7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${libreCaslon.variable} ${literata.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
