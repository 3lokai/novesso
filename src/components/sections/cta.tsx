'use client'

import * as React from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Button } from '@/components/ui/button'
import { Container, Section, Stack } from '@/components/primitives'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const CTA = () => {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.cta-content > *', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%',
      },
      scale: 0.95,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: 'expo.out',
    })
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
          <Button variant="primary" size="lg">
            Schedule Consultation
          </Button>
        </Stack>
        </div>
      </Container>
    </Section>
  )
}

export default CTA
