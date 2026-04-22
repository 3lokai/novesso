import type { Metadata } from 'next'

import { seoConfig } from '@/lib/seo'
import AboutHero from '@/components/sections/about/about-hero'
import AboutStory from '@/components/sections/about/about-story'
import AboutValues from '@/components/sections/about/about-values'
import AboutTeam from '@/components/sections/about/about-team'
import CTA from '@/components/sections/cta'
import { Footer } from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'About — Novesso',
  description:
    'Fifteen years of architectural precision and artisanal emotion. Discover the philosophy, the people, and the heritage behind Novesso.',
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <div className="bg-background">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <CTA />
      <Footer />
    </div>
  )
}
