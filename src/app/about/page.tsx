import type { Metadata } from 'next'
import AboutHero from '@/components/sections/about/about-hero'
import AboutStory from '@/components/sections/about/about-story'
import AboutTimeline from '@/components/sections/about/about-timeline'
import AboutValues from '@/components/sections/about/about-values'
import AboutTeam from '@/components/sections/about/about-team'
import IndiaAdvantage from '@/components/sections/india-advantage'
import CTA from '@/components/sections/cta'
import { Footer } from '@/components/sections/footer'
import { seoConfig } from '@/lib/seo'

const title = 'About'
const description =
  'Fifteen years of architectural precision and artisanal emotion. Discover the philosophy, the people, and the heritage behind Novesso.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    locale: seoConfig.locale,
    url: '/about',
    title,
    description,
    siteName: seoConfig.siteName,
    images: [
      {
        url: seoConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: `About ${seoConfig.siteName}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [seoConfig.ogImagePath],
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
