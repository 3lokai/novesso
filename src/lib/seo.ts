const FALLBACK_SITE_URL = "http://localhost:3000"

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
const normalizedSiteUrl = rawSiteUrl?.endsWith("/")
  ? rawSiteUrl.slice(0, -1)
  : rawSiteUrl

export const siteUrl = new URL(normalizedSiteUrl || FALLBACK_SITE_URL)

export const seoConfig = {
  siteName: "Novesso",
  tagline: "Creare Vita Moderna",
  defaultTitle: "Novesso",
  titleTemplate: "%s | Novesso",
  defaultDescription:
    "Novesso crafts contemporary interiors with Italian design language, architectural discipline, and refined material systems.",
  locale: "en_US",
  ogImagePath: "/opengraph-image",
} as const

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: seoConfig.siteName,
  url: siteUrl.toString(),
  slogan: seoConfig.tagline,
} as const

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: seoConfig.siteName,
  url: siteUrl.toString(),
  description: seoConfig.defaultDescription,
  inLanguage: "en",
} as const
