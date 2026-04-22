import { Cormorant_Garamond, Jost, EB_Garamond } from "next/font/google"
import type { Metadata, Viewport } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import PromoteHeader from "@/components/promote-header"
import { JsonLd } from "@/components/seo/json-ld"
import { seoConfig, siteUrl } from "@/lib/seo"

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700'],
});

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['200', '300', '400', '500', '600'],
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-accent',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.defaultDescription,
  applicationName: seoConfig.siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: seoConfig.locale,
    siteName: seoConfig.siteName,
    url: siteUrl.toString(),
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: [
      {
        url: seoConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: `${seoConfig.siteName} hero preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: [seoConfig.ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  category: "Interior Design",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#080e22" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        cormorant.variable,
        jost.variable,
        ebGaramond.variable
      )}
    >
      <body>
        <ThemeProvider>
          <JsonLd />
          <PromoteHeader />
          <main id="main">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
