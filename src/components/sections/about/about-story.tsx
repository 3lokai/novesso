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

const AboutStory = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = sectionRef.current
      if (!root) return

      // Text columns
      gsap.from('.story-text > *', {
        scrollTrigger: { trigger: root, start: 'top 80%' },
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power2.out',
      })

      // Image reveal — wipe up
      gsap.from('.story-image-wrap', {
        scrollTrigger: { trigger: root, start: 'top 70%' },
        clipPath: 'inset(100% 0 0 0)',
        duration: 1.4,
        ease: 'expo.out',
      })

      // Subtle parallax on the inner image
      gsap.fromTo(
        '.story-image-inner',
        { y: -40 },
        {
          y: 40,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        },
      )
    },
    { scope: sectionRef },
  )

  return (
    <Section id="story" size="lg" variant="default" className="bg-background overflow-hidden">
      <Container>
        <div ref={sectionRef}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Text */}
            <Stack gap="xl" className="story-text lg:col-span-5 lg:sticky lg:top-32 max-w-lg">
              <p className="label text-accent text-[11px] tracking-[0.4em]">Our Story</p>
              <h2 className="h2 text-foreground">
                Built on the belief that functional&nbsp;objects deserve beauty.
              </h2>
              <p className="body text-muted-foreground leading-relaxed">
                Novesso was born in 2009 in Bangalore, at the intersection of
                Italian manufacturing craft and the contemporary Indian
                imagination. Our founders believed that the sliding door, the
                wardrobe, the partition wall — the quiet structures of daily
                life — deserved the same obsessive attention as a sculptural
                centrepiece.
              </p>
              <p className="accent text-xl text-muted-foreground leading-relaxed">
                &quot;We don&apos;t design furniture. We design the architecture
                of how people move through their homes.&quot;
              </p>
              <p className="body text-muted-foreground leading-relaxed">
                From a single Bangalore showroom, we expanded into Milan and
                London — not to chase scale, but because certain materials,
                certain craftsmen, and certain ideas are only found when you
                travel far enough to find them.
              </p>
            </Stack>

            {/* Image collage */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="story-image-wrap col-span-2 aspect-[16/9] relative overflow-hidden">
                <div className="story-image-inner absolute -inset-[12%] will-change-transform">
                  <Image
                    src="/photos/pexels-artbovich-6508343.jpg"
                    alt="Novesso craftsmanship"
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="story-image-wrap aspect-[3/4] relative overflow-hidden mt-[-15%]">
                <div className="story-image-inner absolute -inset-[12%] will-change-transform">
                  <Image
                    src="/photos/pexels-artbovich-6580389.jpg"
                    alt="Detail and craft"
                    fill
                    sizes="(min-width: 1024px) 29vw, 50vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="story-image-wrap aspect-[3/4] relative overflow-hidden">
                <div className="story-image-inner absolute -inset-[12%] will-change-transform">
                  <Image
                    src="/photos/pexels-artbovich-6585606.jpg"
                    alt="Architectural space"
                    fill
                    sizes="(min-width: 1024px) 29vw, 50vw"
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

export default AboutStory
