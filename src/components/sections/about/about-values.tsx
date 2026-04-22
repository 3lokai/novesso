'use client'

import * as React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container, Section, Stack } from '@/components/primitives'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const VALUES = [
  {
    n: '01',
    title: 'Architectural Precision',
    body: 'Every millimetre is a decision. We engineer systems with tolerances borrowed from aerospace — because a sliding door that isn\'t silent is a door that is wrong.',
  },
  {
    n: '02',
    title: 'Emotional Restraint',
    body: 'We believe decoration is easy, and therefore uninteresting. Our aesthetic finds its drama in proportion, in material honesty, and in the spaces between things.',
  },
  {
    n: '03',
    title: 'Material Integrity',
    body: 'We source finishes and hardware from mills and foundries that have operated for generations. The patina that develops over decades is part of the design.',
  },
  {
    n: '04',
    title: 'Invisible Craft',
    body: 'The best work disappears. You don\'t see a Novesso wardrobe system — you feel the ease of living with it. That invisibility is the craft.',
  },
]

const AboutValues = () => {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = container.current
      if (!root) return

      gsap.from('.values-header > *', {
        scrollTrigger: { trigger: root, start: 'top 80%' },
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power2.out',
      })

      gsap.utils.toArray<HTMLElement>('.value-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 88%' },
          y: 40,
          opacity: 0,
          duration: 1,
          delay: i * 0.05,
          ease: 'power3.out',
        })
      })
    },
    { scope: container },
  )

  return (
    <Section
      id="values"
      size="lg"
      variant="dark"
      className="bg-[var(--navy-dark)] text-primary-foreground overflow-hidden"
    >
      <div ref={container}>
        <Container>
          {/* Header */}
          <div className="values-header mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <Stack gap="md" className="max-w-lg">
              <p className="label text-accent text-[11px] tracking-[0.4em]">
                What We Believe
              </p>
              <h2 className="h2 text-primary-foreground">
                Four principles. No exceptions.
              </h2>
            </Stack>
            <p className="body max-w-xs text-primary-foreground/50 leading-relaxed text-sm">
              These are not guidelines. They are the terms under which we
              choose to work.
            </p>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary-foreground/10">
            {VALUES.map((v, i) => (
              <div
                key={v.n}
                className={[
                  'value-card group relative p-8 md:p-12 border-b border-primary-foreground/10 cursor-default transition-colors duration-500 hover:bg-white/[0.03]',
                  i % 2 === 0 ? 'md:border-r md:border-primary-foreground/10' : '',
                ].join(' ')}
              >
                {/* Number */}
                <span className="label text-[10px] tracking-[0.35em] text-accent/50 group-hover:text-accent transition-colors duration-500">
                  {v.n}
                </span>

                {/* Gold rule that expands on hover */}
                <div className="my-6 h-[1px] w-8 bg-accent/30 group-hover:w-16 transition-all duration-500 ease-expo-out" />

                <h3 className="h3 text-primary-foreground mb-4">{v.title}</h3>
                <p className="body text-primary-foreground/50 leading-relaxed text-sm">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Section>
  )
}

export default AboutValues
