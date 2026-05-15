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

type JsonLdValue = Record<string, unknown>

type PageJsonLdProps = {
  items: JsonLdValue[]
}

export function PageJsonLd({ items }: PageJsonLdProps) {
  if (items.length === 0) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": items,
        }),
      }}
    />
  )
}
