import type { Metadata } from "next";
import {
  Geist_Mono,
  Inter,
  Libre_Caslon_Text,
  Literata,
  Manrope,
} from "next/font/google";
import "./globals.css";

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
  title: "Maître Laïla GSSIME — Notaire",
  description:
    "Étude notariale à Aix-en-Provence, dédiée à l'excellence juridique et au conseil personnalisé.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${libreCaslon.variable} ${literata.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
