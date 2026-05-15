import type { Metadata } from 'next'
import AboutHero from '@/components/sections/about/about-hero'
import AboutStory from '@/components/sections/about/about-story'
import AboutTimeline from '@/components/sections/about/about-timeline'
import AboutValues from '@/components/sections/about/about-values'
import AboutTeam from '@/components/sections/about/about-team'
import IndiaAdvantage from '@/components/sections/india-advantage'
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
      <AboutTimeline />
      <AboutValues />
      <AboutTeam />
      <IndiaAdvantage />
      <CTA />
      <Footer />
    </div>
  )
}
