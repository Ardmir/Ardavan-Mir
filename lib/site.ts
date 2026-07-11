export const SITE_URL = "https://www.ardavanmir.com"

export function openGraphShareImages(alt: string) {
  return [
    {
      url: `${SITE_URL}/og-image.jpg`,
      secureUrl: `${SITE_URL}/og-image.jpg`,
      type: "image/jpeg",
      width: 1200,
      height: 630,
      alt,
    },
    {
      url: `${SITE_URL}/og-image.png`,
      secureUrl: `${SITE_URL}/og-image.png`,
      type: "image/png",
      width: 1200,
      height: 630,
      alt,
    },
  ]
}

export const twitterShareImages = [
  `${SITE_URL}/og-image.jpg`,
  `${SITE_URL}/og-image.png`,
]
