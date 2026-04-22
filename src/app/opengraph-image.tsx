import { ImageResponse } from "next/og"

import { seoConfig } from "@/lib/seo"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "radial-gradient(circle at top right, #1a2b6b 0%, #0f1b4c 55%, #080e22 100%)",
          color: "#f8f7f4",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 5,
            opacity: 0.8,
            textTransform: "uppercase",
          }}
        >
          {seoConfig.tagline}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 86, fontWeight: 600, lineHeight: 1 }}>
            {seoConfig.siteName}
          </div>
          <div style={{ fontSize: 34, opacity: 0.92, maxWidth: 920 }}>
            Contemporary interior systems with an editorial Italian design language.
          </div>
        </div>
      </div>
    ),
    size,
  )
}
