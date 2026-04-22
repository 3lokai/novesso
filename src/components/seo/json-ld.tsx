import { organizationJsonLd, websiteJsonLd } from "@/lib/seo"

const graph = [organizationJsonLd, websiteJsonLd]

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  )
}
