'use client'

import * as React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container, Section, Stack } from '@/components/primitives'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const QUOTES = [
  {
    quote: "The tolerances on the sliding hardware are tighter than what I specify for structural work. We've used Novesso on three projects now — the client always notices the quality before we point it out.",
    name: 'Rahul Mehta',
    role: 'Principal, Studio M Architecture',
    context: 'Mumbai Residence, 2024',
    type: 'architect',
  },
  {
    quote: "I moved into this apartment three years ago. The wardrobes still open without a sound. In Mumbai. That alone tells you everything.",
    name: 'Aisha Krishnamurthy',
    role: 'Homeowner',
    context: 'Altamount Road, Mumbai — 2022',
    type: 'homeowner',
  },
  {
    quote: "Their installation team arrived with the same drawings we had sent three months earlier. Every junction was mapped. There were no surprises on site — which, in this industry, is extraordinary.",
    name: 'Nikhil Sharma',
    role: 'Director, Arc+Form Studio',
    context: 'Bangalore Villa, 2023',
    type: 'architect',
  },
]

const Testimonials = () => {
  const container = React.useRef<HTMLDivElement>(null)
  const [active, setActive] = React.useState(0)

  useGSAP(() => {
    gsap.from('.testimonials-header > *', {
      scrollTrigger: { trigger: container.current, start: 'top 80%' },
      y: 30,
      opacity: 0,
      stagger: 0.12,
      duration: 1,
      ease: 'power2.out',
    })
    gsap.from('.testimonial-quote', {
      scrollTrigger: { trigger: container.current, start: 'top 70%' },
      y: 20,
      opacity: 0,
      duration: 1.2,
      ease: 'expo.out',
    })
  }, { scope: container })

  // Auto-cycle quotes
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % QUOTES.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const q = QUOTES[active]

  return (
    <Section
      id="testimonials"
      size="lg"
      variant="dark"
      className="bg-[var(--navy-deep)] text-primary-foreground overflow-hidden"
    >
      <div ref={container}>
        <Container>
          {/* Header */}
          <div className="testimonials-header mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <Stack gap="md" className="max-w-sm">
              <p className="label text-accent text-[11px] tracking-[0.4em]">What They Say</p>
              <h2 className="h2 text-primary-foreground">Voices from the field.</h2>
            </Stack>
            {/* Nav dots */}
            <div className="flex items-center gap-3">
              {QUOTES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={[
                    'h-[2px] transition-all duration-500',
                    active === i ? 'w-8 bg-accent' : 'w-4 bg-white/20 hover:bg-white/40',
                  ].join(' ')}
                  aria-label={`Quote ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="testimonial-quote border-t border-white/10 pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <p className="accent text-2xl md:text-3xl text-primary-foreground/90 leading-relaxed mb-10">
                  &ldquo;{q.quote}&rdquo;
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-between gap-8">
                <div>
                  <div className="w-6 h-[1px] bg-accent mb-6" />
                  <p className="label text-[11px] text-primary-foreground font-medium mb-1">{q.name}</p>
                  <p className="label text-[10px] tracking-[0.25em] text-accent/70">{q.role}</p>
                  <p className="label text-[10px] tracking-[0.2em] text-primary-foreground/30 mt-2">{q.context}</p>
                </div>
                <div>
                  <span className={[
                    'label text-[9px] tracking-[0.3em] px-3 py-1.5 border',
                    q.type === 'architect'
                      ? 'border-accent/30 text-accent/70'
                      : 'border-white/20 text-white/50'
                  ].join(' ')}>
                    {q.type === 'architect' ? 'ARCHITECT' : 'HOMEOWNER'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  )
}

export default Testimonials
