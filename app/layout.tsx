import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteName = "Laila Gssime";
const siteDescription =
  "Étude notariale à Aix-en-Provence : un accompagnement humain, rigoureux et personnalisé pour vos projets de vie, votre patrimoine et vos transmissions.";
const heroImage =
  "https://www.figma.com/api/mcp/asset/bc507d92-6017-4cda-ba85-4892fd8079f5.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName,
    title: `${siteName} | Étude notariale à Aix-en-Provence`,
    description: siteDescription,
    images: [{ url: heroImage, width: 1200, height: 630, alt: "Étude notariale Laila Gssime à Aix-en-Provence" }],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
