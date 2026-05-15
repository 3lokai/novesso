import type { MetadataRoute } from "next"

import { categories, products } from "@/lib/catalog-data"
import { siteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const site = siteUrl.toString()
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${site}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${site}/catalog/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${site}/catalog/${product.category}/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticPages, ...categoryPages, ...productPages]
}
