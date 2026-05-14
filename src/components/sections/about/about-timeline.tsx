'use client'

import * as React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container, Section } from '@/components/primitives'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const MILESTONES = [
  {
    year: '2009',
    title: 'Founded',
    body: 'Novesso opens its first experience centre in Bangalore, at the intersection of Italian craft and Indian imagination.',
    location: 'Bangalore, India',
  },
  {
    year: '2013',
    title: 'First Architect Partnership',
    body: 'The practice begins a formal collaboration programme with architectural studios — building systems alongside, not after, the architecture.',
    location: 'Bangalore',
  },
  {
    year: '2016',
    title: 'Milan Studio',
    body: 'A studio opens in Milan\'s Brera district, granting direct access to generational hardware foundries and European manufacturing craft.',
    location: 'Milan, Italy',
  },
  {
    year: '2019',
    title: 'London Studio',
    body: 'The London studio opens in Mayfair, sharpening Novesso\'s design restraint and connecting to a global network of architects.',
    location: 'London, United Kingdom',
  },
  {
    year: '2023',
    title: '340+ Spaces',
    body: '340 realized spaces across India and internationally — every one of them still serviced by the team that built it.',
    location: 'Worldwide',
  },
]

const AboutTimeline = () => {
  const container = React.useRef<HTMLDivElement>(null)
  const lineRef = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const root = container.current
    if (!root) return

    gsap.from('.timeline-header > *', {
      scrollTrigger: { trigger: root, start: 'top 80%' },
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 1,
      ease: 'power2.out',
    })

    // Animate the gold connecting line
    if (lineRef.current) {
      gsap.fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 1.5,
          ease: 'expo.out',
          scrollTrigger: { trigger: root, start: 'top 70%' },
        }
      )
    }

    gsap.utils.toArray<HTMLElement>('.milestone-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: root, start: 'top 65%' },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.12,
        ease: 'power2.out',
      })
    })
  }, { scope: container })

  return (
    <Section
      id="timeline"
      size="lg"
      variant="default"
      className="bg-background overflow-hidden"
    >
      <div ref={container}>
        <Container>
          {/* Header */}
          <div className="timeline-header mb-16">
            <p className="label text-accent text-[11px] tracking-[0.4em] mb-4">Heritage</p>
            <h2 className="h2 text-foreground">Fifteen years. Three cities. One conviction.</h2>
          </div>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block">
            {/* Gold connecting line */}
            <div className="relative mb-0">
              <div ref={lineRef} className="h-[1px] bg-accent/50 w-full" />
              {/* Year markers */}
              <div className="absolute top-0 left-0 right-0 flex justify-between -translate-y-1/2">
                {MILESTONES.map((m) => (
                  <div key={m.year} className="w-2 h-2 rounded-full bg-accent" />
                ))}
              </div>
            </div>

            {/* Cards below line */}
            <div className="grid grid-cols-5 mt-12 gap-4">
              {MILESTONES.map((m, i) => (
                <div
                  key={m.year}
                  className={[
                    'milestone-card group border-l border-border pl-5 cursor-default hover:border-accent transition-colors duration-500',
                    i % 2 === 0 ? '' : 'mt-12',
                  ].join(' ')}
                >
                  <span className="h3 text-accent font-display block mb-3">{m.year}</span>
                  <h3 className="h4 text-foreground mb-2 text-sm">{m.title}</h3>
                  <p className="body text-muted-foreground text-[12px] leading-relaxed mb-3">{m.body}</p>
                  <p className="label text-[9px] tracking-[0.2em] text-accent/50">{m.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical list */}
          <div className="md:hidden space-y-0">
            <div className="relative pl-6 border-l border-accent/30">
              {MILESTONES.map((m) => (
                <div key={m.year} className="milestone-card relative pb-12 last:pb-0">
                  {/* Dot on line */}
                  <div className="absolute -left-[1.375rem] top-1.5 w-2 h-2 rounded-full bg-accent" />

                  <span className="h3 text-accent font-display block mb-2 text-2xl">{m.year}</span>
                  <h3 className="h4 text-foreground mb-2 text-sm">{m.title}</h3>
                  <p className="body text-muted-foreground text-[13px] leading-relaxed mb-2">{m.body}</p>
                  <p className="label text-[9px] tracking-[0.2em] text-accent/50">{m.location}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </Section>
  )
}

export default AboutTimeline
