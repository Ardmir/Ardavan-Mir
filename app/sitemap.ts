import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

const PUBLIC_ROUTES = [
  "",
  "/work/intuit-enterprise-suite",
  "/work/quickbooks-dimensional-chart-of-accounts",
  "/research",
  "/research/ai-native-strategy",
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
  }))
}
