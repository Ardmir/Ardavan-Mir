import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google"
import { openGraphShareImages, SITE_URL, twitterShareImages } from "@/lib/site"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500"],
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const ogImageAlt =
  "Ardavan Mir — end-to-end Staff Product Designer shaping vision and product quality for AI-native enterprise products."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ardavan Mir — Staff Product Designer",
  description:
    "End-to-end Staff Product Designer shaping product vision and raising product quality across AI-native enterprise products and high-trust financial workflows.",
  keywords:
    "staff designer, product designer, enterprise SaaS, AI-native, financial systems, information architecture, fintech design, Toronto",
  authors: [{ name: "Ardavan Mir" }],
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: `${SITE_URL}/favicon.svg`, type: "image/svg+xml" },
      {
        url: `${SITE_URL}/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: `${SITE_URL}/apple-touch-icon.png`,
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Ardavan Mir — Staff Product Designer",
    description:
      "End-to-end Staff Product Designer shaping product vision and raising product quality across AI-native enterprise products and high-trust financial workflows.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Ardavan Mir",
    images: openGraphShareImages(ogImageAlt),
  },
  twitter: {
    card: "summary_large_image",
    title: "Ardavan Mir — Staff Product Designer",
    description:
      "End-to-end Staff Product Designer shaping product vision and raising product quality across AI-native enterprise products and high-trust financial workflows.",
    images: twitterShareImages,
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
