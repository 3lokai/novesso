'use client'

import * as React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container, Section, Stack } from '@/components/primitives'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const PHASES = [
  {
    n: '01',
    title: 'Site Audit',
    sub: 'Engineering Alignment',
    body: 'Our engineers visit your space before a single measurement is taken. We assess structural realities, map the light, and align with your architect or contractor.',
  },
  {
    n: '02',
    title: 'Iterative Selection',
    sub: 'Material & Finish Consultation',
    body: 'Working through a curated selection process, we match hardware, finish, and system type to your brief. Nothing is standard. Everything is deliberate.',
  },
  {
    n: '03',
    title: 'Precision Installation',
    sub: 'Specialist Installation Teams',
    body: 'Our trained installation crews handle every system ourselves. No third-party handoff. No interpretation. The precision of the design is preserved to the last millimetre.',
  },
  {
    n: '04',
    title: 'Lived Precision',
    sub: 'Ongoing Partnership',
    body: 'We remain your partner after installation. Adjustments, servicing, and expansions are handled by the same team that built your system \u2014 for the life of your home.',
  },
]

const Process = () => {
  const container = React.useRef<HTMLDivElement>(null)
  const [active, setActive] = React.useState(0)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.process-header > *', {
        scrollTrigger: { trigger: container.current, start: 'top 80%' },
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: 'power2.out',
      })

      gsap.utils.toArray<HTMLElement>('.phase-item').forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: 'top 90%' },
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        })
      })
    })
    return () => mm.revert()
  }, { scope: container })

  return (
    <Section id="process" size="lg" variant="muted" className="bg-card overflow-hidden">
      <div ref={container}>
        <Container>
          {/* Header */}
          <div className="process-header mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <Stack gap="md" className="max-w-lg">
              <p className="label text-accent text-[11px] tracking-[0.4em]">How It Works</p>
              <h2 className="h2 text-foreground">End-to-end ownership.</h2>
            </Stack>
            <p className="body text-muted-foreground max-w-xs text-sm leading-relaxed">
              We do not hand off to contractors. Every phase is owned, managed, and delivered by Novesso.
            </p>
          </div>

          {/* Desktop: horizontal phases */}
          <div className="hidden md:grid md:grid-cols-4 border-t border-border">
            {PHASES.map((phase, i) => (
              <button
                key={phase.n}
                type="button"
                aria-pressed={active === i}
                className={[
                  'phase-item group relative p-10 text-left border-b-2 transition-all duration-500 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent/40',
                  i < 3 ? 'border-r border-border' : '',
                  active === i ? 'border-b-accent bg-background' : 'border-b-transparent hover:bg-background/60',
                ].join(' ')}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                {/* Connecting line */}
                <div className="absolute top-0 left-10 right-10 h-[1px] bg-accent/20 group-hover:bg-accent/50 transition-colors duration-500" />

                <span className="label text-[10px] tracking-[0.35em] text-accent/50 group-hover:text-accent transition-colors duration-500">
                  {phase.n}
                </span>
                <div className="my-6 h-[1px] w-6 bg-accent/30 group-hover:w-12 transition-all duration-500" />
                <h3 className="h4 text-foreground mb-1">{phase.title}</h3>
                <p className="label text-[9px] tracking-[0.2em] text-accent/70 mb-4">{phase.sub}</p>
                <p className={[
                  'body text-muted-foreground text-sm leading-relaxed transition-all duration-500',
                  active === i ? 'opacity-100' : 'opacity-0 translate-y-2',
                ].join(' ')}>
                  {phase.body}
                </p>
              </button>
            ))}
          </div>

          {/* Mobile: vertical accordion */}
          <div className="md:hidden space-y-0 border-t border-border">
            {PHASES.map((phase, i) => (
              <div
                key={phase.n}
                className="phase-item border-b border-border"
              >
                <button
                  className="w-full text-left p-6 flex items-center justify-between"
                  onClick={() => setActive(active === i ? -1 : i)}
                >
                  <div className="flex items-center gap-4">
                    <span className="label text-[10px] tracking-[0.3em] text-accent">{phase.n}</span>
                    <span className="h4 text-foreground">{phase.title}</span>
                  </div>
                  <span className={['label text-accent transition-transform duration-300', active === i ? 'rotate-45' : ''].join(' ')}>+</span>
                </button>
                {active === i && (
                  <div className="px-6 pb-6">
                    <p className="label text-[9px] tracking-[0.2em] text-accent/70 mb-3">{phase.sub}</p>
                    <p className="body text-muted-foreground text-sm leading-relaxed">{phase.body}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </Section>
  )
}

export default Process
