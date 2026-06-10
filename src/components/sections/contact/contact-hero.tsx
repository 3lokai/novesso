'use client'

import * as React from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Container, Section, Stack } from '@/components/primitives'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP)
}

const ContactHero = () => {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!container.current) return
    const targets = container.current.querySelectorAll('.hero-content > *')

    // Content is visible by default; the reveal only runs when motion is welcome.
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: 'expo.out',
        }
      )
    })
    return () => mm.revert()
  }, { scope: container })

  return (
    <Section
      size="full"
      variant="dark"
      className="relative flex h-[60vh] !min-h-[500px] items-center overflow-hidden !px-0"
    >
      <Image
        src="/photos/pexels-artbovich-6508343.jpg"
        alt="Contact Novesso"
        fill
        sizes="100vw"
        className="object-cover opacity-60"
        priority
      />
      <div className="absolute inset-0 image-overlay-full" aria-hidden />

      <Container className="relative z-10">
        <div ref={container}>
          <Stack gap="lg" className="hero-content max-w-3xl">
            <p className="label text-accent text-[11px] tracking-[0.4em] uppercase">
              Connect With Us
            </p>
            <h1 className="h-hero text-white">
              Every masterpiece <br /> starts with a <span className="italic font-accent">conversation.</span>
            </h1>
            <p className="lead text-white/60 max-w-xl">
              From site audits to final installation, our engineers and designers are ready to bring European precision to your space.
            </p>
          </Stack>
        </div>
      </Container>
    </Section>
  )
}

export default ContactHero
