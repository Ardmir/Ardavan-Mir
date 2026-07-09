import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google"
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

export const metadata: Metadata = {
  title: "Ardavan Mirhosseini — Senior Product Designer",
  description:
    "Senior Product Designer designing AI-native enterprise products, financial workflows, information architecture, and high-trust product experiences.",
  keywords:
    "product designer, senior product designer, enterprise SaaS, AI-native, financial systems, information architecture, fintech design, Toronto",
  authors: [{ name: "Ardavan Mirhosseini" }],
  robots: "index, follow",
  openGraph: {
    title: "Ardavan Mirhosseini — Senior Product Designer",
    description:
      "Senior Product Designer designing AI-native enterprise products, financial workflows, information architecture, and high-trust product experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ardavan Mirhosseini — Senior Product Designer",
    description:
      "Senior Product Designer designing AI-native enterprise products, financial workflows, information architecture, and high-trust product experiences.",
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
