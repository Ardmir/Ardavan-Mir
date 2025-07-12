import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
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

export const metadata: Metadata = {
  title: "Ardavan Mir - Senior Product Designer",
  description:
    "Senior Product Designer at Intuit, dedicated to transforming complex challenges into moments of clarity, crafting solutions that deliver meaningful value and elevate user experiences.",
  keywords: "product designer, UX designer, UI designer, Intuit, fintech design, user experience",
  authors: [{ name: "Ardavan Mir" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Ardavan Mir - Senior Product Designer",
    description:
      "Senior Product Designer at Intuit, dedicated to transforming complex challenges into moments of clarity.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ardavan Mir - Senior Product Designer",
    description:
      "Senior Product Designer at Intuit, dedicated to transforming complex challenges into moments of clarity.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>{children}</body>
    </html>
  )
}
