'use client'

import * as React from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Container, Grid, Section, Stack } from '@/components/primitives'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const Projects = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const projects = gsap.utils.toArray('.project-card')
    
    projects.forEach((project: any, i: number) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        delay: i * 0.2,
        ease: 'power3.out',
      })
    })
  }, { scope: sectionRef })

  return (
    <Section id="projects" size="lg" variant="muted" className="bg-card">
      <Container>
        <div ref={sectionRef}>
        <Stack gap="xl">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="h2 text-foreground">Realized Spaces</h2>
          <div className="w-24 h-[1px] bg-accent mx-auto mt-4" />
          <p className="body text-muted-foreground mt-6 max-w-md mx-auto">
            Selected projects, realized in collaboration with leading architects and design studios.
          </p>
        </div>
        
        <Grid cols={3} gap="lg">
          {/* Project 1 */}
          <Stack gap="md" className="project-card">
            <div className="aspect-[16/10] relative overflow-hidden group">
              <Image 
                src="/photos/pexels-the-ghazi-2152398165-32331029.jpg" 
                alt="Penthouse Milano" 
                fill 
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="label text-accent">Residential &bull; Milano</span>
              <h4 className="h3 mt-2 text-foreground">The Penthouse V</h4>
              <p className="body text-muted-foreground mt-4">
                A study in light, shadow, and architectural transparency.
              </p>
              <p className="label text-[10px] text-muted-foreground/60 mt-3 tracking-[0.2em]">In collaboration with Studio Valerio Architects</p>
            </div>
          </Stack>

          {/* Project 2 - Offset */}
          <Stack gap="md" className="project-card md:pt-16">
            <div className="aspect-[16/10] relative overflow-hidden group">
              <Image 
                src="/photos/pexels-thoinamcao-30002781.jpg" 
                alt="Villa Como" 
                fill 
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="label text-accent">Curated &bull; Lake Como</span>
              <h4 className="h3 mt-2 text-foreground">Villa Seraphine</h4>
              <p className="body text-muted-foreground mt-4">
                Integrating heritage architecture with modern modular systems.
              </p>
              <p className="label text-[10px] text-muted-foreground/60 mt-3 tracking-[0.2em]">In collaboration with Rimadesio Studio</p>
            </div>
          </Stack>

          {/* Project 3 */}
          <Stack gap="md" className="project-card">
            <div className="aspect-[16/10] relative overflow-hidden group">
              <Image 
                src="/photos/pexels-artbovich-6580389.jpg" 
                alt="Mumbai Residence" 
                fill 
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="label text-accent">Residential &bull; Mumbai</span>
              <h4 className="h3 mt-2 text-foreground">The Altamount</h4>
              <p className="body text-muted-foreground mt-4">
                Precision sliding systems and full wardrobe architecture across 6,000 sq ft.
              </p>
              <p className="label text-[10px] text-muted-foreground/60 mt-3 tracking-[0.2em]">In collaboration with Malik Architecture, Mumbai</p>
            </div>
          </Stack>
        </Grid>
        </Stack>
        </div>
      </Container>
    </Section>
  )
}

export default Projects
