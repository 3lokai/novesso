// src/app/catalog/[category]/[slug]/page.tsx

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Section, Stack } from '@/components/primitives'
import { PageJsonLd } from '@/components/seo/json-ld'
import {
  getCategoryBySlug,
  getProductBySlug,
  products,
} from '@/lib/catalog-data'
import {
  buildBreadcrumbJsonLd,
  buildProductJsonLd,
  seoConfig,
} from '@/lib/seo'
import { Metadata } from 'next'

type Params = Promise<{ category: string; slug: string }>

export function generateStaticParams() {
  return products.map((p) => ({
    category: p.category,
    slug: p.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { category: categorySlug, slug } = await params
  const product = getProductBySlug(slug)

  if (!product || product.category !== categorySlug) return {}

  const title = product.name
  const description = product.description
  const canonical = `/catalog/${product.category}/${product.slug}`
  const ogImage = product.heroImages[0]

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
          url: ogImage,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function ProductPage({ params }: { params: Params }) {
  const { category: categorySlug, slug } = await params
  const product = getProductBySlug(slug)
  const category = getCategoryBySlug(categorySlug)

  if (!product || product.category !== categorySlug || !category) notFound()

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: category.name, path: `/catalog/${category.slug}` },
    {
      name: product.name,
      path: `/catalog/${category.slug}/${product.slug}`,
    },
  ])

  return (
    <div className="bg-background">
      <PageJsonLd
        items={[
          breadcrumbJsonLd,
          buildProductJsonLd(product, category.name),
        ]}
      />

      <Section size="default" variant="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              {product.heroImages.map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-[16/10] relative overflow-hidden bg-muted"
                >
                  <Image
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <Stack gap="lg" className="sticky top-24">
              <div>
                <p className="label text-accent mb-2">
                  {product.category.replace(/-/g, ' ')}
                </p>
                <h1 className="h2">{product.name}</h1>
                <p className="lead text-muted-foreground mt-4">
                  {product.tagline}
                </p>
              </div>

              <p className="body text-foreground">{product.description}</p>

              <div>
                <h4 className="h4 mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="body text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-accent mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {product.specifications && (
                <div className="border-t border-border pt-6">
                  <h4 className="h4 mb-4">Specifications</h4>
                  <dl className="space-y-3">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-start"
                        >
                          <dt className="body font-medium text-foreground w-1/2">
                            {key}
                          </dt>
                          <dd className="body text-muted-foreground w-1/2 text-right">
                            {value}
                          </dd>
                        </div>
                      )
                    )}
                  </dl>
                </div>
              )}

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground label-cta hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Request Consultation
                </Link>
              </div>
            </Stack>
          </div>
        </Container>
      </Section>

      <Section size="lg" variant="muted">
        <Container>
          <Stack gap="xl">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="h2">System Components</h2>
              <p className="lead text-muted-foreground mt-4">
                Each {product.name} system includes the following
                precision-engineered elements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.components.map((comp, idx) => (
                <div
                  key={idx}
                  className="bg-background p-6 border border-border"
                >
                  <div className="aspect-square relative mb-4 bg-muted">
                    <Image
                      src={comp.image}
                      alt={comp.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-contain p-4"
                    />
                  </div>
                  <Stack gap="sm">
                    <p className="label text-accent text-[10px]">{comp.code}</p>
                    <h4 className="h4 text-sm">{comp.name}</h4>
                    <div className="text-xs text-muted-foreground">
                      <p className="font-medium">Finishes:</p>
                      <p>{comp.finishes.join(' | ')}</p>
                    </div>
                    {comp.size && (
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium">Size:</span> {comp.size}
                      </p>
                    )}
                    {comp.notes && (
                      <p className="text-xs text-muted-foreground italic">
                        {comp.notes}
                      </p>
                    )}
                  </Stack>
                </div>
              ))}
            </div>
          </Stack>
        </Container>
      </Section>
    </div>
  )
}
