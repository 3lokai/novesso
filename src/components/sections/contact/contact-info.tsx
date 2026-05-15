'use client'

import * as React from 'react'
import { InstagramLogo, LinkedinLogo, YoutubeLogo, Phone, EnvelopeSimple } from '@phosphor-icons/react'
import { Container, Section, Stack, Grid } from '@/components/primitives'

const LOCATIONS = [
  {
    city: 'Bangalore',
    address: 'Experience Centre\nUB City, Vittal Mallya Road\nBengaluru 560001, India',
    phone: '+91 80 0000 0000',
  },
  {
    city: 'Milan',
    address: 'Showroom\nVia Brera 12\n20121 Milano MI, Italy',
    phone: '+39 02 0000 0000',
  },
  {
    city: 'London',
    address: 'Studio\n48 Dover Street\nLondon W1J 4FF, UK',
    phone: '+44 20 0000 0000',
  },
]

const SOCIALS = [
  { name: 'Instagram', href: 'https://instagram.com', icon: InstagramLogo },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinLogo },
  { name: 'YouTube', href: 'https://youtube.com', icon: YoutubeLogo },
]

const ContactInfo = () => {
  return (
    <Section variant="dark">
      <Container>
        <Grid cols={3} gap="lg">
          {/* Column 1: Locations */}
          <div className="md:col-span-2">
            <Stack gap="lg">
              <p className="label text-accent text-[11px] tracking-[0.4em] uppercase">Global Presence</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {LOCATIONS.map((loc) => (
                  <Stack key={loc.city} gap="md">
                    <h3 className="label text-primary-foreground text-sm border-b border-primary-foreground/10 pb-2">{loc.city}</h3>
                    <p className="body text-primary-foreground/50 text-xs whitespace-pre-line leading-relaxed">
                      {loc.address}
                    </p>
                    <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="body text-accent text-xs hover:underline">
                      {loc.phone}
                    </a>
                  </Stack>
                ))}
              </div>
            </Stack>
          </div>

          {/* Column 2: Support & Socials */}
          <div className="border-t md:border-t-0 md:border-l border-primary-foreground/10 pt-12 md:pt-0 md:pl-12">
            <Stack gap="xl">
              <Stack gap="md">
                <p className="label text-accent text-[11px] tracking-[0.4em] uppercase">Communication</p>
                <div className="flex flex-col gap-4">
                  <a href="mailto:support@novesso.com" className="flex items-center gap-3 group">
                    <EnvelopeSimple size={20} className="text-accent group-hover:scale-110 transition-transform" />
                    <span className="body text-primary-foreground/70 hover:text-primary-foreground transition-colors">support@novesso.com</span>
                  </a>
                  <a href="tel:+918000000000" className="flex items-center gap-3 group">
                    <Phone size={20} className="text-accent group-hover:scale-110 transition-transform" />
                    <span className="body text-primary-foreground/70 hover:text-primary-foreground transition-colors">Primary Helpline</span>
                  </a>
                </div>
              </Stack>

              <Stack gap="md">
                <p className="label text-accent text-[11px] tracking-[0.4em] uppercase">Digital Studio</p>
                <div className="flex gap-4">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-primary-foreground/15 flex items-center justify-center hover:border-accent hover:text-accent transition-all"
                      aria-label={social.name}
                    >
                      <social.icon size={20} weight="light" />
                    </a>
                  ))}
                </div>
              </Stack>
            </Stack>
          </div>
        </Grid>
      </Container>
    </Section>
  )
}

export default ContactInfo
