import type { MetadataRoute } from "next"

import { seoConfig } from "@/lib/seo"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seoConfig.siteName,
    short_name: seoConfig.siteName,
    description: seoConfig.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f7f4",
    theme_color: "#080e22",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
