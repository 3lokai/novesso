'use client'

import * as React from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import { ArrowRight, Plus } from '@phosphor-icons/react'
import { Container, Section, Stack } from '@/components/primitives'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const categories = [
  { title: 'Wardrobe Systems', href: '/catalog/wardrobe-systems', img: '/photos/pexels-artbovich-6585606.jpg', desc: 'Wardrobes that open in silence and close without effort. Built to India\'s humidity, sized to your architect\'s drawings.' },
  { title: 'Sliding Systems', href: '/catalog/sliding-systems', img: '/photos/pexels-olenkabohovyk-7005019.jpg', desc: 'Hardware that disappears into the wall. Motion that feels engineered, not assembled.' },
  { title: 'Partitions', href: '/catalog/partition-walls', img: '/photos/pexels-pranavsinh232-7638806.jpg', desc: 'Glass and frame systems that divide space without diminishing it.' }
]

const Systems = () => {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Cards are visible by default; the entry reveal only runs when motion is welcome.
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.system-card', {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power2.out',
      })
    })
    return () => mm.revert()
  }, { scope: container })

  const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const handlePanelEnter = (e: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
    if (window.innerWidth > 768 && !prefersReducedMotion()) {
      gsap.to(e.currentTarget, { flexGrow: 1.5, duration: 0.8, ease: 'expo.out' })
    }
  }

  const handlePanelLeave = (e: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
    if (window.innerWidth > 768 && !prefersReducedMotion()) {
      gsap.to(e.currentTarget, { flexGrow: 1, duration: 0.8, ease: 'expo.out' })
    }
  }

  return (
    <Section id="collections" size="lg" variant="dark" className="bg-[var(--navy-dark)] text-[var(--offwhite)] overflow-hidden !px-0">
      <div ref={container}>
      <Container className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <Stack gap="md" className="max-w-xl text-left">
            <h2 className="h2">Our Systems</h2>
            <p className="lead text-[var(--offwhite)]/60">
              A curated suite of technical solutions — each engineered for Indian conditions, each worthy of any address in the world.
            </p>
          </Stack>
          <Link
            href="/catalog"
            className="flex items-center gap-6 group outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/40"
          >
            <span className="label opacity-40 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">View All Systems</span>
            <div className="w-12 h-12 rounded-sm border border-[var(--offwhite)]/20 flex items-center justify-center group-hover:border-[var(--gold)] group-focus-visible:border-[var(--gold)] transition-colors duration-500">
              <ArrowRight size={18} className="text-[var(--gold)]" />
            </div>
          </Link>
        </div>
      </Container>

      <div className="flex flex-col md:flex-row min-h-[600px] border-t border-[var(--offwhite)]/10">
        {categories.map((cat, idx) => (
          <Link
            key={cat.title}
            href={cat.href}
            aria-label={`${cat.title} — view collection`}
            className="system-card relative group block overflow-hidden md:flex-1 h-[600px] border-b md:border-b-0 md:border-r border-[var(--offwhite)]/10 last:border-0 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--gold)]/60"
            onMouseEnter={handlePanelEnter}
            onMouseLeave={handlePanelLeave}
            onFocus={handlePanelEnter}
            onBlur={handlePanelLeave}
          >
            <Image
              src={cat.img}
              alt={cat.title}
              fill
              sizes="(min-width: 768px) 34vw, 100vw"
              className="object-cover transition-all duration-1000 group-hover:scale-105 group-focus-visible:scale-105 opacity-50 group-hover:opacity-70 group-focus-visible:opacity-70"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 image-overlay-bottom" />
            <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col justify-end p-8 md:p-12 text-[var(--offwhite)]">
              <span className="text-[10px] uppercase tracking-[0.4em] mb-4 text-[var(--gold)]/80">
                0{idx + 1}
              </span>
              <h3 className="text-3xl md:text-5xl font-display mb-2">{cat.title}</h3>

              {/* Visible by default so touch users see it; subtle lift on hover/focus. */}
              <p className="text-[var(--offwhite)]/70 font-light transition-all duration-500 md:opacity-80 md:translate-y-1 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-focus-visible:opacity-100 md:group-focus-visible:translate-y-0">
                {cat.desc}
              </p>
              <div className="mt-8 flex items-center gap-4 transition-opacity duration-500 md:opacity-60 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Details</span>
                <Plus size={14} className="text-[var(--gold)]" />
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </Section>
  )
}

export default Systems
