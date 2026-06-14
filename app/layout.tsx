import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, Newsreader } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Ardavan Mirhosseini — Senior Product Designer",
  description:
    "Senior Product Designer designing AI-native enterprise products, financial workflows, and high-trust product experiences.",
  keywords:
    "product designer, senior product designer, enterprise SaaS, AI-native, financial systems, fintech design, Toronto",
  authors: [{ name: "Ardavan Mirhosseini" }],
  robots: "index, follow",
  openGraph: {
    title: "Ardavan Mirhosseini — Senior Product Designer",
    description:
      "Designing intelligent products that turn financial complexity into confident action.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ardavan Mirhosseini — Senior Product Designer",
    description:
      "Designing intelligent products that turn financial complexity into confident action.",
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
        className={`${inter.variable} ${spaceGrotesk.variable} ${newsreader.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
