import type { CatalogCategory, CatalogProduct } from "@/lib/catalog-data"

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

export const brandContact = {
  email: "support@novesso.com",
  telephone: "+918000000000",
  address: {
    streetAddress: "UB City, Vittal Mallya Road",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
  sameAs: [
    "https://instagram.com",
    "https://linkedin.com",
    "https://youtube.com",
  ],
} as const

export function absoluteUrl(path: string): string {
  return new URL(path.startsWith("/") ? path : `/${path}`, siteUrl).toString()
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: seoConfig.siteName,
  url: siteUrl.toString(),
  slogan: seoConfig.tagline,
  email: brandContact.email,
  telephone: brandContact.telephone,
  address: {
    "@type": "PostalAddress",
    ...brandContact.address,
  },
  sameAs: brandContact.sameAs,
} as const

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: seoConfig.siteName,
  url: siteUrl.toString(),
  description: seoConfig.defaultDescription,
  inLanguage: "en",
} as const

export type BreadcrumbItem = {
  name: string
  path: string
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function buildProductJsonLd(product: CatalogProduct, categoryName: string) {
  const path = `/catalog/${product.category}/${product.slug}`

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: categoryName,
    url: absoluteUrl(path),
    image: product.heroImages.map((image) => absoluteUrl(image)),
    brand: {
      "@type": "Brand",
      name: seoConfig.siteName,
    },
    manufacturer: {
      "@type": "Organization",
      name: seoConfig.siteName,
      url: siteUrl.toString(),
    },
  }
}

export function buildItemListJsonLd(
  category: CatalogCategory,
  categoryProducts: CatalogProduct[]
) {
  const path = `/catalog/${category.slug}`

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.name,
    description: category.description,
    url: absoluteUrl(path),
    numberOfItems: categoryProducts.length,
    itemListElement: categoryProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: absoluteUrl(`/catalog/${category.slug}/${product.slug}`),
    })),
  }
}

export function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: seoConfig.siteName,
    description: seoConfig.defaultDescription,
    url: siteUrl.toString(),
    email: brandContact.email,
    telephone: brandContact.telephone,
    image: absoluteUrl(seoConfig.ogImagePath),
    address: {
      "@type": "PostalAddress",
      ...brandContact.address,
    },
    sameAs: brandContact.sameAs,
  }
}

export function buildContactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${seoConfig.siteName}`,
    description:
      "Request a consultation, visit global showrooms, or connect with the Novesso engineering team.",
    url: absoluteUrl("/contact"),
    mainEntity: {
      "@type": "Organization",
      name: seoConfig.siteName,
      url: siteUrl.toString(),
      email: brandContact.email,
      telephone: brandContact.telephone,
    },
  }
}
