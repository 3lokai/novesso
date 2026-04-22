'use client'

import * as React from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container, Section, Stack } from '@/components/primitives'
import { ConsultationModal } from '@/components/ui/consultation-modal'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const CTA = () => {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!container.current) return
    const targets = container.current.querySelectorAll('.cta-content > *')
    if (targets.length === 0) return

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
          <h2 className="h1 text-primary-foreground">
            Start Your <br /> Project
          </h2>
          <p className="lead text-primary-foreground/60">
            Invite us into your space. Our designers will work with you to create something truly exceptional.
          </p>
          <ConsultationModal />
        </Stack>
        </div>
      </Container>
    </Section>
  )
}

export default CTA
