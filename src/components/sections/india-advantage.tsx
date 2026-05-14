'use client'

import * as React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container, Section, Stack } from '@/components/primitives'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const SPECS = [
  {
    n: '01',
    title: 'Humidity Engineering',
    spec: 'Tested at 90% RH',
    detail: '10,000+ cycles',
    body: 'All hardware is tested at 90% relative humidity \u2014 the upper limit of Mumbai monsoon season. Our sliding mechanisms use sealed roller systems that do not swell, seize, or corrode.',
  },
  {
    n: '02',
    title: 'Dust-Resistant Hardware',
    spec: 'IP54 Rated Components',
    detail: 'Sealed bearing systems',
    body: 'Northern India\u2019s dust load is among the world\u2019s highest. Our track and roller systems use sealed bearings and dust-channel extrusions that maintain smooth operation over decades of use.',
  },
  {
    n: '03',
    title: 'Indian Grid Standards',
    spec: '3\u2013phase & single-phase',
    detail: 'IS 732 compliant',
    body: 'Motorised systems are calibrated for India\u2019s power grid variance. Our integrated motors handle fluctuations between 180V\u2013260V without voltage stabilisers.',
  },
]

const IndiaAdvantage = () => {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.india-header > *', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 1,
      ease: 'power2.out',
    })

    gsap.utils.toArray<HTMLElement>('.india-card').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 90%' },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      })
    })
  }, { scope: container })

  return (
    <Section
      id="india"
      size="lg"
      variant="dark"
      className="relative overflow-hidden"
      style={{
        background: `
          linear-gradient(
            180deg,
            var(--navy-dark),
            var(--navy-deep)
          )
        `,
      }}
    >
      {/* Subtle India outline watermark */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.025] text-[20vw] font-display font-light text-white select-none"
        aria-hidden
      >
        India.
      </div>

      <div ref={container} className="relative z-10">
        <Container>
          {/* Header */}
          <div className="india-header mb-16 flex flex-col gap-4 max-w-2xl">
            <p className="label text-accent text-[11px] tracking-[0.4em]">Built for India</p>
            <h2 className="h2 text-white">
              International design. Indian permanence.
            </h2>
            <p className="body text-white/50 leading-relaxed max-w-lg">
              Any manufacturer can build a beautiful product. The question is whether it remains
              beautiful in a Mumbai penthouse three monsoons from now, or in a Delhi apartment
              through a decade of fluctuating power. We engineer for that reality.
            </p>
          </div>

          {/* Spec cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
            {SPECS.map((spec, i) => (
              <div
                key={spec.n}
                className={[
                  'india-card group relative p-8 md:p-12 border-b border-white/10 cursor-default hover:bg-white/[0.03] transition-colors duration-500',
                  i < 2 ? 'md:border-r md:border-white/10' : '',
                ].join(' ')}
              >
                <span className="label text-[10px] tracking-[0.35em] text-accent/50 group-hover:text-accent transition-colors duration-500">
                  {spec.n}
                </span>

                <div className="my-6 h-[1px] w-6 bg-accent/30 group-hover:w-12 transition-all duration-500" />

                <h3 className="h4 text-white mb-2">{spec.title}</h3>

                {/* Spec tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="label text-[9px] tracking-[0.2em] px-2 py-1 border border-accent/30 text-accent/80">
                    {spec.spec}
                  </span>
                  <span className="label text-[9px] tracking-[0.2em] px-2 py-1 border border-white/10 text-white/40">
                    {spec.detail}
                  </span>
                </div>

                <p className="body text-white/50 leading-relaxed text-sm">
                  {spec.body}
                </p>
              </div>
            ))}
          </div>

          {/* Footer line */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="accent text-lg text-white/50">
              &ldquo;Designed for living. Built for India. Made to last.&rdquo;
            </p>
            <span className="label text-[10px] tracking-[0.3em] text-white/20">
              Est. 2009 · Bangalore
            </span>
          </div>
        </Container>
      </div>
    </Section>
  )
}

export default IndiaAdvantage
