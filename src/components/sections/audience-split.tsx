'use client'

import * as React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowRight } from '@phosphor-icons/react'
import { Section } from '@/components/primitives'
import { ConsultationModal } from '@/components/ui/consultation-modal'
import Link from 'next/link'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const AudienceSplit = () => {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.audience-panel', {
      scrollTrigger: { trigger: container.current, start: 'top 75%' },
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: 'power3.out',
    })
  }, { scope: container })

  return (
    <Section
      id="for-you"
      size="lg"
      variant="dark"
      className="bg-[var(--navy-dark)] !px-0 !py-0 overflow-hidden"
    >
      <div ref={container} className="flex flex-col md:flex-row min-h-[600px]">

        {/* Left — Architects */}
        <div className="audience-panel group relative flex-1 flex flex-col justify-end p-10 md:p-16 border-r border-white/10 cursor-default hover:bg-white/[0.02] transition-colors duration-500">
          {/* Background grid lines */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(201,169,110,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(201,169,110,0.08) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
            aria-hidden
          />

          <div className="relative z-10">
            <p className="label text-[9px] tracking-[0.4em] text-accent/60 mb-8">For Architects & Studios</p>

            <div className="mb-8 w-8 h-[1px] bg-accent/40 group-hover:w-16 transition-all duration-500" />

            <h2 className="h2 text-white mb-6 max-w-sm">
              A systems partner that delivers your vision without dilution.
            </h2>

            <p className="body text-white/50 leading-relaxed text-sm max-w-sm mb-10">
              We work directly from your drawings. Our engineers align with your tolerances, your timeline, and your contractors. Spec sheets, material samples, and installation support \u2014 all coordinated through a single point of contact.
            </p>

            <div className="flex flex-col gap-4">
              <Link
                href="/architect"
                className="group/btn flex items-center gap-3 w-fit"
              >
                <span className="label text-[10px] tracking-[0.25em] text-accent group-hover/btn:text-white transition-colors duration-300">
                  ARCHITECT PARTNERSHIP PROGRAMME
                </span>
                <ArrowRight size={14} className="text-accent opacity-0 group-hover/btn:opacity-100 transform -translate-x-2 group-hover/btn:translate-x-0 transition-all duration-300" />
              </Link>
              <Link
                href="/spec-kit"
                className="label text-[10px] tracking-[0.2em] text-white/30 hover:text-white/70 transition-colors duration-300 w-fit"
              >
                DOWNLOAD SPEC KIT
              </Link>
            </div>
          </div>
        </div>

        {/* Right — Homeowners */}
        <div className="audience-panel group relative flex-1 flex flex-col justify-end p-10 md:p-16 cursor-default hover:bg-white/[0.02] transition-colors duration-500"
          style={{
            background: `radial-gradient(circle at 70% 60%, color-mix(in srgb, var(--navy-mid), transparent 80%), transparent 60%)`
          }}
        >
          <div className="relative z-10">
            <p className="label text-[9px] tracking-[0.4em] text-accent/60 mb-8">For Homeowners</p>

            <div className="mb-8 w-8 h-[1px] bg-accent/40 group-hover:w-16 transition-all duration-500" />

            <h2 className="h2 text-white mb-6 max-w-sm">
              Not how a space looks.{' '}
              <span className="accent text-white/80">How it feels.</span>
            </h2>

            <p className="body text-white/50 leading-relaxed text-sm max-w-sm mb-10">
              You will not see a Novesso system. You will feel the ease of living with it. A wardrobe that opens in silence. A room that breathes. We begin every project with a site visit \u2014 no showroom, no obligation.
            </p>

            <ConsultationModal
              trigger={
                <button className="group/btn flex items-center gap-3 w-fit cursor-pointer">
                  <span className="label text-[10px] tracking-[0.25em] text-accent group-hover/btn:text-white transition-colors duration-300">
                    BOOK A CONSULTATION
                  </span>
                  <ArrowRight size={14} className="text-accent opacity-0 group-hover/btn:opacity-100 transform -translate-x-2 group-hover/btn:translate-x-0 transition-all duration-300" />
                </button>
              }
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default AudienceSplit
