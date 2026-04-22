'use client'

import * as React from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ArrowRight, Plus } from '@phosphor-icons/react'
import { Container, Section, Stack } from '@/components/primitives'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const categories = [
  { title: 'Wardrobe Systems', img: '/photos/pexels-artbovich-6585606.jpg', desc: 'Sartorial storage solutions.' },
  { title: 'Sliding Systems', img: '/photos/pexels-olenkabohovyk-7005019.jpg', desc: 'Seamless motion, redefined.' },
  { title: 'Partitions', img: '/photos/pexels-pranavsinh232-7638806.jpg', desc: 'Architectural space division.' }
]

const Systems = () => {
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Initial entry animation for the cards
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
  }, { scope: container })

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth > 768) {
      gsap.to(e.currentTarget, { flexGrow: 1.5, duration: 0.8, ease: 'expo.out' })
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth > 768) {
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
              A curated suite of technical solutions designed to coexist in harmony.
            </p>
          </Stack>
          <div className="flex items-center gap-6 group cursor-pointer">
            <span className="label opacity-40 group-hover:opacity-100 transition-opacity">View All Systems</span>
            <div className="w-12 h-12 rounded-sm border border-[var(--offwhite)]/20 flex items-center justify-center group-hover:border-[var(--gold)] transition-colors duration-500">
              <ArrowRight size={18} className="text-[var(--gold)]" />
            </div>
          </div>
        </div>
      </Container>

      <div className="flex flex-col md:flex-row min-h-[600px] border-t border-[var(--offwhite)]/10">
        {categories.map((cat, idx) => (
          <div
            key={cat.title}
            className="system-card relative group overflow-hidden md:flex-1 h-[600px] border-b md:border-b-0 md:border-r border-[var(--offwhite)]/10 last:border-0 cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image 
              src={cat.img} 
              alt={cat.title} 
              fill 
              sizes="(min-width: 768px) 34vw, 100vw"
              className="object-cover transition-all duration-1000 group-hover:scale-105 opacity-40 group-hover:opacity-70"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 image-overlay-bottom" />
            <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col justify-end p-8 md:p-12 text-[var(--offwhite)]">
              <span className="text-[10px] uppercase tracking-[0.4em] mb-4 text-[var(--gold)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                0{idx + 1}
              </span>
              <h3 className="text-3xl md:text-5xl font-display mb-2">{cat.title}</h3>
              
              <p className="text-[var(--offwhite)]/40 font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                {cat.desc}
              </p>
              <div className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Details</span>
                <Plus size={14} className="text-[var(--gold)]" />
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </Section>
  )
}

export default Systems
