'use client'

import * as React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Section, Stack } from '@/components/primitives'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP)
}

const AboutHero = () => {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

      tl.from('.about-hero-label', {
        y: 20,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          '.about-hero-title > *',
          {
            y: 60,
            opacity: 0,
            stagger: 0.15,
            duration: 1.4,
          },
          '-=0.4',
        )
        .from(
          '.about-hero-divider',
          {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 1,
          },
          '-=0.8',
        )
        .from(
          '.about-hero-sub',
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.6',
        )
        .from(
          '.about-hero-meta > *',
          {
            y: 16,
            opacity: 0,
            stagger: 0.12,
            duration: 0.6,
          },
          '-=0.5',
        )
    },
    { scope: container },
  )

  return (
    <Section
      size="full"
      variant="dark"
      className="relative overflow-hidden !px-0 pt-20"
      style={{
        background: `
          radial-gradient(
            circle at 60% 45%,
            color-mix(in srgb, var(--navy-mid), transparent 80%),
            transparent 55%
          ),
          linear-gradient(
            135deg,
            var(--navy-dark),
            var(--navy-deep),
            var(--navy-mid)
          )
        `,
      }}
    >
      {/* Architectural grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, color-mix(in srgb, var(--offwhite) 4%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in srgb, var(--offwhite) 4%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
        aria-hidden
      />

      {/* Vertical label — right side */}
      <div
        className="absolute right-10 top-1/2 hidden -translate-y-1/2 text-white/25 text-[10px] tracking-[0.35em] uppercase lg:block"
        style={{ writingMode: 'vertical-rl' }}
        aria-hidden
      >
        Creare Vita Moderna — Est. 2009
      </div>

      <div
        ref={container}
        className="relative z-10 flex min-h-[90vh] flex-col justify-end p-8 pb-20 md:p-20"
      >
        {/* Page label */}
        <p className="about-hero-label label mb-8 text-accent text-[11px] tracking-[0.4em]">
          About Novesso
        </p>

        {/* Headline */}
        <Stack gap="md" className="about-hero-title max-w-4xl">
          <h1 className="h-hero text-white leading-none">
            Where Structure
          </h1>
          <h1 className="h-hero text-white leading-none">
            <span className="accent text-white">Meets Soul.</span>
          </h1>
        </Stack>

        {/* Gold divider */}
        <div
          className="about-hero-divider mt-10 h-[1px] max-w-xs bg-accent"
          aria-hidden
        />

        {/* Sub-text */}
        <p className="about-hero-sub accent mt-8 max-w-xl text-xl leading-relaxed text-white/70">
          Fifteen years of designing spaces that refuse to whisper. Every
          system we build is an argument for living with intention.
        </p>

        {/* Bottom meta row */}
        <div className="about-hero-meta mt-16 flex flex-wrap gap-12">
          {[
            { v: '2009', l: 'Founded' },
            { v: 'Bangalore — Milan — London', l: 'Studios' },
            { v: '340+', l: 'Spaces' },
          ].map((item) => (
            <div key={item.l} className="flex flex-col gap-1">
              <span className="label text-lg font-semibold text-accent">
                {item.v}
              </span>
              <span className="label text-[10px] tracking-[0.3em] text-white/40 uppercase">
                {item.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default AboutHero
