'use client'

import * as React from 'react'
import Image from 'next/image'
import { Container, Section, Stack, Grid } from '@/components/primitives'

const LOCAL_SHOWROOMS = [
  {
    city: 'Mumbai',
    name: 'South Mumbai Experience Centre',
    address: 'World Trade Centre, Cuffe Parade\nMumbai 400005, Maharashtra',
    phone: '+91 22 0000 0000',
    image: '/photos/pexels-artbovich-6508343.jpg', // Placeholder
  },
  {
    city: 'Pune',
    name: 'Koregaon Park Studio',
    address: 'Koregaon Park, Lane 7\nPune 411001, Maharashtra',
    phone: '+91 20 0000 0000',
    image: '/photos/pexels-artbovich-6508343.jpg', // Placeholder
  },
]

const LocalShowrooms = () => {
  return (
    <Section className="bg-white">
      <Container>
        <Stack gap="xl">
          <div className="max-w-2xl">
            <p className="label text-accent text-[11px] tracking-[0.4em] uppercase mb-4">India Presence</p>
            <h2 className="h2 text-[var(--navy-dark)]">Local Showrooms</h2>
            <p className="body text-[var(--navy-dark)]/60 mt-4">
              Visit our state-of-the-art experience centres to see our systems in action and consult with our on-site engineers.
            </p>
          </div>

          <Grid cols={1} md={2} gap="lg">
            {LOCAL_SHOWROOMS.map((showroom) => (
              <div key={showroom.city} className="group relative overflow-hidden border border-border/50">
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src={showroom.image}
                    alt={showroom.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-dark)]/80 to-transparent" />
                  <div className="absolute bottom-6 left-8">
                    <p className="label text-accent text-[10px] tracking-[0.3em] uppercase mb-1">{showroom.city}</p>
                    <h3 className="h4 text-white">{showroom.name}</h3>
                  </div>
                </div>
                <div className="p-8 bg-white">
                  <Stack gap="md">
                    <p className="body text-[var(--navy-dark)]/60 text-sm whitespace-pre-line leading-relaxed">
                      {showroom.address}
                    </p>
                    <div className="pt-4 border-t border-border/50">
                      <a 
                        href={`tel:${showroom.phone.replace(/\s/g, '')}`} 
                        className="label text-[11px] text-[var(--navy-dark)] hover:text-accent transition-colors"
                      >
                        Book an Appointment — {showroom.phone}
                      </a>
                    </div>
                  </Stack>
                </div>
              </div>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Section>
  )
}

export default LocalShowrooms
