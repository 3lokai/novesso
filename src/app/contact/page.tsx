import type { Metadata } from 'next'
import ContactHero from '@/components/sections/contact/contact-hero'
import ContactForm from '@/components/sections/contact/contact-form'
import ContactInfo from '@/components/sections/contact/contact-info'
import { Footer } from '@/components/sections/footer'

export const metadata: Metadata = {
  title: 'Contact — Novesso',
  description: 'Begin your journey with Novesso. Request a consultation, visit our global showrooms, or connect with our engineering team.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="bg-background">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </div>
  )
}
