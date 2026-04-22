import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const site = siteUrl.toString()

  return [
    {
      url: `${site}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
