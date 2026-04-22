'use client'

import * as React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container, Section, Stack } from '@/components/primitives'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const TEAM = [
  {
    initials: 'AR',
    name: 'Ananya Rao',
    role: 'Founder & Creative Director',
    location: 'Bangalore',
    quote:
      'Space is not background. It is the primary act of design.',
  },
  {
    initials: 'LM',
    name: 'Lorenzo Moretti',
    role: 'Director of Engineering',
    location: 'Milan',
    quote:
      'The engineering and the aesthetic must be indistinguishable from each other.',
  },
  {
    initials: 'PV',
    name: 'Priya Venkat',
    role: 'Head of Materials & Sourcing',
    location: 'Bangalore',
    quote:
      'Every finish we approve has survived a decade of imagining how it will age.',
  },
  {
    initials: 'JC',
    name: 'James Clarke',
    role: 'Studio Lead, London',
    location: 'London',
    quote:
      'British understatement, Italian precision. That is the tension we work inside.',
  },
]

const AboutTeam = () => {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = container.current
      if (!root) return

      gsap.from('.team-header > *', {
        scrollTrigger: { trigger: root, start: 'top 80%' },
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: 'power2.out',
      })

      gsap.utils.toArray<HTMLElement>('.team-card').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 90%' },
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
        })
      })
    },
    { scope: container },
  )

  return (
    <Section
      id="team"
      size="lg"
      variant="muted"
      className="bg-card overflow-hidden"
    >
      <div ref={container}>
        <Container>
          {/* Header */}
          <div className="team-header mb-16 text-center">
            <Stack gap="sm" className="items-center">
              <p className="label text-accent text-[11px] tracking-[0.4em]">
                The People
              </p>
              <h2 className="h2 text-foreground">Built by believers.</h2>
              <div className="w-20 h-[1px] bg-accent mt-4" aria-hidden />
            </Stack>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="team-card group bg-background p-8 md:p-10 flex flex-col gap-6 cursor-default transition-colors duration-500 hover:bg-card"
              >
                {/* Avatar monogram */}
                <div
                  className="w-14 h-14 flex items-center justify-center border border-border group-hover:border-accent transition-colors duration-500"
                  style={{
                    background: `linear-gradient(135deg, var(--navy-deep), var(--navy-mid))`,
                  }}
                  aria-hidden
                >
                  <span className="label text-[13px] tracking-[0.15em] text-accent font-semibold">
                    {member.initials}
                  </span>
                </div>

                <Stack gap="sm">
                  <h3 className="label text-foreground text-[14px] tracking-[0.05em] font-semibold">
                    {member.name}
                  </h3>
                  <p className="label text-[10px] tracking-[0.3em] text-accent">
                    {member.role}
                  </p>
                  <p className="label text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                    {member.location}
                  </p>
                </Stack>

                {/* Quote — appears on hover */}
                <div className="h-[1px] bg-border group-hover:bg-accent/30 transition-colors duration-500" />
                <p className="accent text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  &ldquo;{member.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Section>
  )
}

export default AboutTeam
