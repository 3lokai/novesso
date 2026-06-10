'use client'

import * as React from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container, Section, Stack } from '@/components/primitives'
import { ConsultationModal } from '@/components/ui/consultation-modal'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const CTA = () => {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!container.current) return
    const targets = container.current.querySelectorAll('.cta-content > *')
    if (targets.length === 0) return

    // Content is visible by default; reveal only runs when motion is welcome, so
    // the CTA never depends on a tween (or a scroll that may never happen) to appear.
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        targets,
        { autoAlpha: 0, scale: 0.95 },
        {
          autoAlpha: 1,
          scale: 1,
          stagger: 0.2,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 70%',
            once: true,
          },
        }
      )
    })
    return () => mm.revert()
  }, { scope: container })

  return (
    <Section id="enquire" size="lg" variant="dark" className="relative h-[80vh] bg-[var(--navy-dark)] overflow-hidden flex items-center text-center !px-0">
      <Image 
        src="/photos/pexels-artbovich-6508343.jpg" 
        alt="Background" 
        fill 
        sizes="100vw"
        className="object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 image-overlay-full" />
      <Container>
        <div ref={container}>
        <Stack gap="lg" className="relative z-10 max-w-2xl mx-auto cta-content items-center">
          <p className="label text-accent text-[10px] tracking-[0.4em]">Begin the Conversation</p>
          <h2 className="h1 text-primary-foreground">
            Every project starts <br /> with a site audit.
          </h2>
          <p className="lead text-primary-foreground/60">
            Our engineers come to you — not the other way around. Tell us about your space and we will tell you what is possible.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <ConsultationModal />
            <Link
              href="/architect"
              className="label text-[11px] tracking-[0.25em] text-primary-foreground/60 hover:text-primary-foreground border border-primary-foreground/20 hover:border-primary-foreground/50 px-6 py-3 transition-all duration-300"
            >
              PARTNER WITH US — ARCHITECTS
            </Link>
          </div>
        </Stack>
        </div>
      </Container>
    </Section>
  )
}

export default CTA
