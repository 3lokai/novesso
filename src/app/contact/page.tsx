import type { Metadata } from 'next'
import ContactHero from '@/components/sections/contact/contact-hero'
import ContactForm from '@/components/sections/contact/contact-form'
import LocalShowrooms from '@/components/sections/contact/local-showrooms'
import ContactInfo from '@/components/sections/contact/contact-info'
import IndiaAdvantage from '@/components/sections/india-advantage'
import { Footer } from '@/components/sections/footer'
import { PageJsonLd } from '@/components/seo/json-ld'
import {
  buildContactPageJsonLd,
  buildLocalBusinessJsonLd,
  seoConfig,
} from '@/lib/seo'

const title = 'Contact'
const description =
  'Begin your journey with Novesso. Request a consultation, visit our global showrooms, or connect with our engineering team.'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    locale: seoConfig.locale,
    url: '/contact',
    title,
    description,
    siteName: seoConfig.siteName,
    images: [
      {
        url: seoConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: `Contact ${seoConfig.siteName}`,
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

export default function ContactPage() {
  return (
    <div className="bg-background">
      <PageJsonLd
        items={[buildLocalBusinessJsonLd(), buildContactPageJsonLd()]}
      />
      <ContactHero />
      <ContactForm />
      <LocalShowrooms />
      <ContactInfo />
      <IndiaAdvantage />
      <Footer />
    </div>
  )
}
