import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME,
  applicationName: process.env.NEXT_PUBLIC_SHORT_SITE_NAME,
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  authors: [{ name: "", url: "" }],
  keywords: [],
  manifest: "/manifest.webmanifest",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL_WEB_SITE}`),
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "/" },
  other: { lang: `${process.env.NEXT_PUBLIC_LANG}` },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};
