// src/app/catalog/[category]/page.tsx

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Grid, Section, Stack } from '@/components/primitives'
import { getCategoryBySlug, getProductsByCategory, categories } from '@/lib/catalog-data'
import { Metadata } from 'next'

type Params = Promise<{ category: string }>

export function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)

  if (!category) return {}

  return {
    title: `${category.name} — Catalog`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)
  const products = getProductsByCategory(categorySlug)

  if (!category) notFound()

  return (
    <div className="bg-background">
      {/* Category Hero */}
      <Section size="default" variant="default">
        <Container>
          <Stack gap="md" className="max-w-2xl">
            <p className="label text-accent">Systems</p>
            <h1 className="h1">{category.name}</h1>
            <p className="lead text-muted-foreground">{category.description}</p>
          </Stack>
        </Container>
      </Section>

      {/* Product Grid */}
      <Section size="lg" variant="muted">
        <Container>
          <Grid cols={2} gap="lg">
            {products.map((product) => (
              <Link 
                key={product.id} 
                href={`/catalog/${categorySlug}/${product.slug}`}
                className="group"
              >
                <Stack gap="md">
                  <div className="aspect-[4/3] relative overflow-hidden bg-background">
                    <Image
                      src={product.heroImages[0]}
                      alt={product.name}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="h3 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="body text-muted-foreground mt-2">
                      {product.tagline}
                    </p>
                  </div>
                </Stack>
              </Link>
            ))}
          </Grid>
        </Container>
      </Section>
    </div>
  )
}
