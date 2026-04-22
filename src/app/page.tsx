import type { Metadata } from "next"

import Hero from '@/components/sections/hero'
import Philosophy from '@/components/sections/philosophy'
import Systems from '@/components/sections/systems'
import Projects from '@/components/sections/projects'
import Credibility from '@/components/sections/credibility'
import CTA from '@/components/sections/cta'
import { Footer } from '@/components/sections/footer'
import { seoConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: "Luxury Interior Design Systems",
  description: seoConfig.defaultDescription,
  alternates: {
    canonical: "/",
  },
}

export default function Page() {
  return (
    <div className="bg-background">
      <Hero />
      <Philosophy />
      <Systems />
      <Projects />
      <Credibility />
      <CTA />
      <Footer />
    </div>
  )
}
