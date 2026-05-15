import { Container, Section, Stack } from '@/components/primitives'

const Credibility = () => {
  const stats = [
    { label: 'Spaces Created', value: '340+', sub: 'Across residential & commercial' },
    { label: 'Years of Heritage', value: '15+', sub: 'Founded Bangalore, 2009' },
    { label: 'Architect Partners', value: '180+', sub: 'Studios across India' },
    { label: 'Design Awards', value: '12', sub: 'International recognition' },
    { label: 'Countries', value: '3', sub: 'India · Italy · United Kingdom' },
  ]

  return (
    <Section size="lg" variant="default" className="bg-background border-y border-border">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <Stack key={idx} gap="sm" className="items-center text-center group px-4">
              <span className="h2 text-foreground tracking-tighter group-hover:text-accent transition-colors duration-700">
                {stat.value}
              </span>
              <span className="label text-accent">
                {stat.label}
              </span>
              <span className="body text-[11px] text-muted-foreground/70 leading-snug">
                {stat.sub}
              </span>
            </Stack>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Credibility
