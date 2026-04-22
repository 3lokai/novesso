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
          <h2 className="h2 text-foreground">Selected Spaces</h2>
          <div className="w-24 h-[1px] bg-accent mx-auto" />
        </div>
        
        <Grid cols={2} gap="lg">
          {/* Project 1 */}
          <Stack gap="md" className="project-card">
            <div className="aspect-[16/10] relative overflow-hidden group">
              <Image 
                src="/photos/pexels-the-ghazi-2152398165-32331029.jpg" 
                alt="Penthouse Milano" 
                fill 
                sizes="(min-width: 768px) 50vw, 100vw"
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
            </div>
          </Stack>

          {/* Project 2 - Offset */}
          <Stack gap="md" className="project-card md:pt-32">
            <div className="aspect-[16/10] relative overflow-hidden group">
              <Image 
                src="/photos/pexels-thoinamcao-30002781.jpg" 
                alt="Villa Como" 
                fill 
                sizes="(min-width: 768px) 50vw, 100vw"
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
