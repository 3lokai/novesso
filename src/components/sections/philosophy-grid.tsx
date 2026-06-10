'use client'

import * as React from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container, Section, Stack } from '@/components/primitives'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

/**
 * Philosophy — Variation 1: Architectural grid background.
 * Blueprint-style grid lines + a warm radial glow for depth.
 */
const PhilosophyGrid = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const root = sectionRef.current
    if (!root) return

    const textElements = gsap.utils.toArray('.phi-text > *', root)
    const imageElements = gsap.utils.toArray('.phi-image', root)
    const parallaxLayers = gsap.utils.toArray('.phi-image-parallax', root)

    gsap.from(textElements, {
      scrollTrigger: { trigger: root, start: 'top 80%' },
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out',
    })

    gsap.from(imageElements, {
      scrollTrigger: { trigger: root, start: 'top 60%' },
      y: (i) => (i % 2 === 0 ? 40 : -40),
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: 'power3.out',
    })

    const parallaxRangePx = [48, 72, 56]
    parallaxLayers.forEach((el, i) => {
      const range = parallaxRangePx[i] ?? 60
      gsap.fromTo(
        el as Element,
        { y: -range },
        {
          y: range,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        },
      )
    })
  }, { scope: sectionRef })

  return (
    <Section
      id="philosophy-grid"
      size="lg"
      variant="default"
      className="relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, color-mix(in srgb, var(--foreground) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 5%, transparent) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        backgroundPosition: 'center center',
      }}
    >
      {/* Radial gradient overlay for depth (gold reads in both themes) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 40%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 50%)',
        }}
      />

      <Container className="relative z-10">
        <div ref={sectionRef}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <Stack gap="lg" className="phi-text lg:col-span-12 xl:col-span-5">
              <p className="label text-accent">Our Conviction · Grid</p>
              <h2 className="h2 text-foreground">
                European precision. <br />
                Indian permanence.
              </h2>
              <p className="body text-muted-foreground">
                Novesso closes the gap between the two. Our systems are not sold — they are calibrated.
                Every sliding door, every wardrobe, every partition is engineered backwards from one
                question: how should this feel to live with, ten years from now?
              </p>
              <p className="body text-muted-foreground">
                We source hardware from foundries that have operated for three generations. We test
                for India&apos;s humidity, its dust, its reality — and then we make it beautiful.
              </p>
              <p className="accent text-xl text-muted-foreground leading-relaxed">
                &quot;Every material selection is an intentional dialogue between light and structure.&quot;
              </p>
            </Stack>

            <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4 phi-images">
              <div className="aspect-[4/5] relative h-[400px] md:mt-24 phi-image overflow-hidden">
                <div className="phi-image-parallax absolute left-0 right-0 -top-[12%] h-[124%] will-change-transform">
                  <Image
                    src="/photos/pexels-artbovich-6508343.jpg"
                    alt="Craftsmanship"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="aspect-[4/5] relative h-[400px] phi-image overflow-hidden">
                <div className="phi-image-parallax absolute left-0 right-0 -top-[12%] h-[124%] will-change-transform">
                  <Image
                    src="/photos/pexels-artbovich-6580389.jpg"
                    alt="Detail"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="aspect-[4/5] relative h-[400px] md:mt-24 phi-image overflow-hidden">
                <div className="phi-image-parallax absolute left-0 right-0 -top-[12%] h-[124%] will-change-transform">
                  <Image
                    src="/photos/pexels-artbovich-6585606.jpg"
                    alt="Light and structure"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default PhilosophyGrid
