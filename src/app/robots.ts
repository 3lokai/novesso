import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/seo"

export default function robots(): MetadataRoute.Robots {
  const site = siteUrl.toString()

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/design"],
    },
    host: site,
    sitemap: `${site}/sitemap.xml`,
  }
}
