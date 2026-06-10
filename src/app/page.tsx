import type { Metadata } from "next"

import Hero from '@/components/sections/hero'
import Philosophy from '@/components/sections/philosophy'
import PhilosophyGrid from '@/components/sections/philosophy-grid'
import PhilosophyDiagonal from '@/components/sections/philosophy-diagonal'
import PhilosophyShapes from '@/components/sections/philosophy-shapes'
import Systems from '@/components/sections/systems'
import Process from '@/components/sections/process'
import MarqueeBand from '@/components/sections/marquee-band'
import Projects from '@/components/sections/projects'
import IndiaAdvantage from '@/components/sections/india-advantage'
import Testimonials from '@/components/sections/testimonials'
import Credibility from '@/components/sections/credibility'
import CTA from '@/components/sections/cta'
import { Footer } from '@/components/sections/footer'
import { seoConfig } from '@/lib/seo'

const title = "Luxury Interior Design Systems"
const description = seoConfig.defaultDescription

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: seoConfig.locale,
    url: "/",
    title,
    description,
    siteName: seoConfig.siteName,
    images: [
      {
        url: seoConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: `${seoConfig.siteName} — ${seoConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [seoConfig.ogImagePath],
  },
}

export default function Page() {
  return (
    <div className="bg-background">
      <Hero />
      <Philosophy />
      <PhilosophyGrid />
      <PhilosophyDiagonal />
      <PhilosophyShapes />
      <Systems />
      <Process />
      <MarqueeBand />
      <Projects />
      <IndiaAdvantage />
      <Testimonials />
      <Credibility />
      <CTA />
      <Footer />
    </div>
  )
}
