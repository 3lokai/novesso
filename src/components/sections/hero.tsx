'use client'

import * as React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowRight } from '@phosphor-icons/react'
import { Section, SplitGrid, Stack } from '@/components/primitives'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP)
}

const Hero = () => {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })

    tl.from('.hero-content > *', {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
    })
      .from('.hero-right > *', {
        x: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
      }, '-=0.8')
  }, { scope: container })

  return (
    <Section
      size="full"
      variant="dark"
      className="relative overflow-hidden !px-0 pt-20 !min-h-0 items-stretch"
      style={{
        background: `
          radial-gradient(
            circle at 40% 50%,
            color-mix(in srgb, var(--navy-mid), transparent 85%),
            transparent 50%
          ),
          linear-gradient(
            90deg,
            var(--navy-dark),
            var(--navy-mid),
            var(--navy-deep)
          )
        `
      }}
    >
      <div ref={container}>
        <SplitGrid ratio="3:2" className="min-h-[min(72vh,52rem)] gap-0 md:min-h-[min(68vh,48rem)]">
          <div
            className="relative flex flex-col justify-end p-8 md:p-20"
            style={{
              backgroundImage: `linear-gradient(to right, color-mix(in srgb, var(--offwhite) 5%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--offwhite) 5%, transparent) 1px, transparent 1px)`,
              backgroundSize: '48px 48px',
            }}
          >
            <div className="absolute top-10 right-10 text-white/50 text-[10px] tracking-[0.3em] uppercase vertical-text hidden lg:block" style={{ writingMode: 'vertical-rl' }}>
              Architectural Systems
            </div>

            <Stack gap="md" className="max-w-2xl relative z-10 hero-content">
              <h1 className="h-hero text-white">
                Creare Vita <br />
                <span className="accent text-white">Moderna</span>
              </h1>
              <p className="accent text-xl text-white/80 leading-relaxed">
                Every space tells a story of intention, craft, and beauty.
              </p>
            </Stack>
          </div>

          <div className="bg-background flex flex-col pt-12 md:pt-0 hero-right">
            <div className="flex-1 p-8 md:p-20 flex flex-col justify-center border-b border-border">
              <div className="hero-philosophy">
                <span className="accent text-accent text-xl mb-4 block">Philosophy</span>
                <h2 className="h2 mb-12 text-foreground">
                  Where structural precision meets human emotion.
                </h2>

                <div className="space-y-6">
                  {[
                    { n: '01', t: 'Wardrobe Systems' },
                    { n: '02', t: 'Sliding Systems' },
                    { n: '03', t: 'Partition Walls' }
                  ].map((item) => (
                    <div key={item.n} className="group cursor-pointer flex justify-between items-center border-b border-border pb-4">
                      <span className="label text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.n} {item.t}
                      </span>
                      <ArrowRight size={16} className="text-accent opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-[var(--navy-deep)] flex items-center p-8 md:p-16 justify-between text-white border-t border-white/5">
              {[
                { v: '340+', l: 'Spaces Created' },
                { v: '15+', l: 'Years Heritage' },
                { v: '12', l: 'Design Awards' }
              ].map((stat, i) => (
                <React.Fragment key={i}>
                  <div className="text-center">
                    <div className="h3 text-accent">{stat.v}</div>
                    <div className="label text-white/40 mt-1">{stat.l}</div>
                  </div>
                  {i < 2 && <div className="h-12 w-[1px] bg-white/10" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </SplitGrid>
      </div>
    </Section>
  )
}

export default Hero
