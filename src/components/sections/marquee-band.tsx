'use client'

import * as React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP)
}

const PHRASES = ['Designed for Living', 'Built for India', 'Made to Last']

/**
 * Kinetic brand refrain. A slow horizontal marquee of the Novesso tagline in the
 * display face. Motion is an enhancement: under reduced-motion the band sits still
 * and simply reads as an oversized line.
 */
const MarqueeBand = () => {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Two identical sequences sit side by side; shifting the track by exactly
      // half its width loops seamlessly.
      gsap.to('.marquee-track', {
        xPercent: -50,
        repeat: -1,
        duration: 32,
        ease: 'none',
      })
    })
    return () => mm.revert()
  }, { scope: container })

  const sequence = (
    <div className="marquee-seq flex shrink-0 items-center">
      {PHRASES.map((phrase, i) => (
        <span key={`${phrase}-${i}`} className="flex shrink-0 items-center">
          <span className="font-display text-5xl font-light text-white md:text-7xl">
            {phrase}
          </span>
          <span
            className="mx-8 inline-block h-2 w-2 rotate-45 bg-[var(--gold)] md:mx-14"
            aria-hidden="true"
          />
        </span>
      ))}
    </div>
  )

  return (
    <section
      ref={container}
      aria-label="Designed for Living. Built for India. Made to Last."
      className="overflow-hidden border-y border-white/10 bg-[var(--navy-dark)] py-10 md:py-14"
    >
      <div className="marquee-track flex w-max" aria-hidden="true">
        {sequence}
        <div className="contents">{sequence}</div>
      </div>
    </section>
  )
}

export default MarqueeBand
