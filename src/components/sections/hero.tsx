'use client'

import * as React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react'
import { Section, Stack } from '@/components/primitives'
import { Button } from '@/components/ui/button'
import { ConsultationModal } from '@/components/ui/consultation-modal'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP)
}

const Hero = () => {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Motion is an enhancement: content is visible by default (see CSS classes).
    // Under reduced-motion we skip the reveal entirely so nothing is gated on a tween.
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

      tl.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
      })
        .from('.hero-right > *', {
          x: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
        }, '-=0.8')
        .from('.hero-baseline', {
          y: 24,
          opacity: 0,
          duration: 1,
        }, '-=0.7')
    })
    return () => mm.revert()
  }, { scope: container })

  const SYSTEMS = [
    { n: '01', t: 'Wardrobe Systems', href: '/catalog/wardrobe-systems' },
    { n: '02', t: 'Sliding Systems', href: '/catalog/sliding-systems' },
    { n: '03', t: 'Partition Walls', href: '/catalog/partition-walls' },
  ]

  return (
    <Section
      size="full"
      variant="dark"
      className="relative overflow-hidden !px-0 items-stretch"
      style={{
        background: `
          radial-gradient(
            circle at 40% 50%,
            color-mix(in srgb, var(--navy-mid), transparent 85%),
            transparent 50%
          ),
          linear-gradient(
            90deg,
            var(--navy-dark),
            var(--navy-mid),
            var(--navy-deep)
          )
        `
      }}
    >
      <div ref={container} className="flex min-h-screen w-full flex-col">
        {/* Main stage — headline dominates, supporting statement stays quiet */}
        <div className="grid flex-1 grid-cols-1 md:grid-cols-[3fr_2fr]">
          {/* Left: the gesture */}
          <div
            className="relative flex flex-col justify-center p-8 pt-28 md:p-20 md:pt-20"
            style={{
              backgroundImage: `linear-gradient(to right, color-mix(in srgb, var(--offwhite) 5%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--offwhite) 5%, transparent) 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          >
            <Stack gap="lg" className="max-w-3xl relative z-10 hero-content">
              <Stack gap="md">
                <h1 className="h-hero text-white text-balance">
                  Creare Vita Moderna
                </h1>
                <p className="accent text-xl text-white/80 leading-relaxed">
                  Not how a space looks. How it feels.
                </p>
              </Stack>

              <div className="flex flex-wrap gap-4 pt-4">
                <ConsultationModal
                  trigger={
                    <Button variant="primary" size="lg" className="min-w-[200px]">
                      Schedule Consultation
                    </Button>
                  }
                />
                <Button variant="secondary" size="lg" asChild className="min-w-[200px] border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                  <Link href="/contact#showrooms">
                    Visit Showrooms
                  </Link>
                </Button>
              </div>
            </Stack>
          </div>

          {/* Right: a single quiet line, lots of air */}
          <div className="bg-background flex flex-col justify-center p-8 md:p-20 md:border-l border-border hero-right">
            <h2 className="h2 max-w-sm text-foreground text-balance">
              Where structural precision meets human emotion.
            </h2>
          </div>
        </div>

        {/* Baseline strip — full width, spans systems + the brand refrain */}
        <div className="hero-baseline bg-[var(--navy-deep)] border-t border-white/10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr]">
            <nav
              aria-label="Systems"
              className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-b md:border-b-0 md:border-r border-white/10"
            >
              {SYSTEMS.map((item) => (
                <Link
                  key={item.n}
                  href={item.href}
                  className="group flex items-center justify-between gap-3 px-8 py-6 outline-none transition-colors hover:bg-white/[0.04] focus-visible:bg-white/[0.06]"
                >
                  <span className="label text-white/60 transition-colors group-hover:text-white group-focus-visible:text-white">
                    <span className="text-[var(--gold)]/70">{item.n}</span> {item.t}
                  </span>
                  <ArrowRight size={16} className="text-accent opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0" />
                </Link>
              ))}
            </nav>
            <div className="flex items-center px-8 py-6">
              <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="lead text-white/90">Designed for Living.</span>
                <span className="lead text-[var(--gold)]">Built for India.</span>
                <span className="lead text-white/90">Made to Last.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero
