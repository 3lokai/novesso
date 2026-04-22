import { Container, Grid, Section, Stack } from '@/components/primitives'

const Credibility = () => {
  const stats = [
    { label: 'Spaces Created', value: '340+' },
    { label: 'Years Heritage', value: '15+' },
    { label: 'Design Awards', value: '12' }
  ]

  return (
    <Section size="lg" variant="default" className="bg-background border-y border-border">
      <Container>
        <Grid cols={3} gap="lg">
          {stats.map((stat, idx) => (
            <Stack key={idx} gap="sm" className="items-center text-center group">
              <span className="h2 text-foreground tracking-tighter group-hover:text-accent transition-colors duration-700">
                {stat.value}
              </span>
              <span className="label text-accent">
                {stat.label}
              </span>
            </Stack>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default Credibility
