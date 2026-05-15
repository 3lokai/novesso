// src/app/catalog/[category]/page.tsx

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Grid, Section, Stack } from '@/components/primitives'
import { PageJsonLd } from '@/components/seo/json-ld'
import {
  getCategoryBySlug,
  getProductsByCategory,
  categories,
} from '@/lib/catalog-data'
import {
  buildBreadcrumbJsonLd,
  buildItemListJsonLd,
  seoConfig,
} from '@/lib/seo'
import { Metadata } from 'next'

type Params = Promise<{ category: string }>

export function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)

  if (!category) return {}

  const title = category.name
  const description = category.description
  const canonical = `/catalog/${category.slug}`

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      locale: seoConfig.locale,
      url: canonical,
      title,
      description,
      siteName: seoConfig.siteName,
      images: [
        {
          url: category.image,
          width: 1200,
          height: 630,
          alt: category.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [category.image],
    },
  }
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { category: categorySlug } = await params
  const category = getCategoryBySlug(categorySlug)
  const categoryProducts = getProductsByCategory(categorySlug)

  if (!category) notFound()

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: category.name, path: `/catalog/${category.slug}` },
  ])

  return (
    <div className="bg-background">
      <PageJsonLd
        items={[
          breadcrumbJsonLd,
          buildItemListJsonLd(category, categoryProducts),
        ]}
      />

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
            {categoryProducts.map((product) => (
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
