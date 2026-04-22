'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GoogleMapsEmbed } from '@next/third-parties/google'
import { InstagramLogo, LinkedinLogo, YoutubeLogo } from '@phosphor-icons/react'
import { Container, Stack } from '@/components/primitives'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  SITE_CATALOG_HREF,
  SITE_CATALOG_ITEMS,
  SITE_PRIMARY_NAV,
  SITE_TAGLINE,
} from '@/lib/site-nav'

/** logomark-color.svg viewBox 335×263 — height 32px (h-8) */
const LOGO_MARK = { width: 41, height: 32 } as const

const LOCATIONS = {
  bangalore: {
    label: 'Bangalore',
    query: 'UB City, Bengaluru, Karnataka, India',
    address:
      'Experience Centre\nUB City, Vittal Mallya Road\nBengaluru 560001, India',
  },
  milan: {
    label: 'Milan',
    query: 'Brera, Milan, Italy',
    address: 'Showroom\nVia Brera 12\n20121 Milano MI, Italy',
  },
  london: {
    label: 'London',
    query: 'Mayfair, London, UK',
    address: 'Studio\n48 Dover Street\nLondon W1J 4FF, United Kingdom',
  },
} as const

const SOCIAL_LINKS = [
  {
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: InstagramLogo,
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: LinkedinLogo,
  },
  {
    href: 'https://youtube.com',
    label: 'YouTube',
    icon: YoutubeLogo,
  },
] as const

const SUPPORT_EMAIL = 'support@novesso.com'
const SUPPORT_PHONE = '+91 80 0000 0000'

export function Footer() {
  const [active, setActive] = useState<keyof typeof LOCATIONS>('bangalore')
  const year = new Date().getFullYear()

  const location = LOCATIONS[active]
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.query)}`

  const navLinkClass =
    'label block w-fit text-white/75 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary'

  return (
    <footer className="border-t border-white/10 bg-primary text-primary-foreground">
      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 items-start gap-12 md:gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Stack gap="xl">
              <Link
                href="/"
                className="flex w-fit items-center gap-4 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                aria-label="Home"
              >
                <Image
                  src="/logo-white.svg"
                  alt=""
                  {...LOGO_MARK}
                  className="h-8 w-auto"
                />
                <span className="label text-lg font-semibold tracking-[0.3em] text-white">
                  NOVESSO
                </span>
              </Link>

              <p className="body max-w-sm text-balance text-sm leading-relaxed text-white/65 md:text-base">
                {SITE_TAGLINE}
              </p>

              <div className="flex flex-col gap-8">
                <div>
                  <span className="label mb-4 block text-[10px] tracking-[0.2em] text-accent">
                    Follow
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                      <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/80 transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                      >
                        <Icon size={20} weight="light" aria-hidden />
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="label mb-3 block text-[10px] tracking-[0.2em] text-accent">
                    Support
                  </span>
                  <Stack gap="sm">
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="body w-fit text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                    <a
                      href={`tel:${SUPPORT_PHONE.replace(/\s/g, '')}`}
                      className="body w-fit text-white/75 transition-colors hover:text-white"
                    >
                      {SUPPORT_PHONE}
                    </a>
                  </Stack>
                </div>
              </div>
            </Stack>
          </div>

          {/* Nav — aligned with header */}
          <nav className="lg:col-span-3" aria-label="Site">
            <Stack gap="lg">
              <span className="label text-[10px] tracking-[0.2em] text-accent">
                Explore
              </span>

              <div className="flex flex-col gap-3">
                <Link
                  href={SITE_CATALOG_HREF}
                  className={cn(
                    navLinkClass,
                    'flex max-w-md items-center gap-3 uppercase'
                  )}
                >
                  <span>Catalog</span>
                  <span
                    className="h-px min-w-[2rem] grow bg-white/15"
                    aria-hidden
                  />
                </Link>
                <ul className="grid grid-cols-1 gap-2 border-l border-white/10 pl-4">
                  {SITE_CATALOG_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className={navLinkClass}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="flex flex-col gap-2 pt-2">
                {SITE_PRIMARY_NAV.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={cn(navLinkClass, 'py-0.5')}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Stack>
          </nav>

          {/* Map + locations */}
          <div className="group relative min-h-[260px] w-full overflow-hidden border border-white/10 bg-[color-mix(in_srgb,var(--navy-mid)_35%,transparent)] md:min-h-[300px] lg:col-span-5 lg:min-h-[360px]">
            <GoogleMapsEmbed
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''}
              height="100%"
              width="100%"
              mode="place"
              q={location.query}
              loading="lazy"
            />
            <div
              className="image-overlay-full absolute inset-0 opacity-90 transition-opacity duration-300 group-hover:opacity-75"
              aria-hidden
            />

            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 md:p-7">
              <div className="pointer-events-auto flex justify-end gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {Object.entries(LOCATIONS).map(([key, loc]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActive(key as keyof typeof LOCATIONS)}
                    className={cn(
                      'label shrink-0 border px-3 py-1.5 text-[10px] tracking-[0.12em] transition-colors',
                      active === key
                        ? 'border-accent bg-accent text-primary'
                        : 'border-white/20 bg-primary/70 text-white/80 hover:border-white/40 hover:text-white'
                    )}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>

              <div className="pointer-events-auto mt-auto flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                <p className="body max-w-[240px] text-left text-[13px] leading-relaxed text-white whitespace-pre-line sm:text-[14px]">
                  {location.address}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="shrink-0 border border-white/25 bg-primary/80 text-white hover:bg-primary-foreground hover:text-primary"
                >
                  <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                    Get directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 md:mt-20 md:pt-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="label text-center text-[10px] tracking-[0.2em] text-white/45 md:text-left">
              © {year} Novesso International. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link
                href="/privacy"
                className="label text-[10px] tracking-[0.12em] text-white/40 transition-colors hover:text-white"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="label text-[10px] tracking-[0.12em] text-white/40 transition-colors hover:text-white"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
