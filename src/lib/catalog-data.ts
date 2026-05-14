// src/lib/catalog-data.ts

export interface CatalogProduct {
  id: string
  slug: string
  name: string
  category: string
  tagline: string
  description: string
  features: string[]
  heroImages: string[]
  components: ProductComponent[]
  specifications?: Record<string, string>
}

export interface ProductComponent {
  code: string
  name: string
  image: string
  finishes: string[]
  size?: string
  notes?: string
}

export interface CatalogCategory {
  id: string
  slug: string
  name: string
  description: string
  image: string
}

export const categories: CatalogCategory[] = [
  {
    id: 'wardrobe-systems',
    slug: 'wardrobe-systems',
    name: 'Wardrobe Systems',
    description: 'Precision-engineered modular wardrobes with soft-close mechanisms and customizable interiors.',
    image: '/catalog/categories/wardrobes.jpg'
  },
  {
    id: 'sliding-systems',
    slug: 'sliding-systems',
    name: 'Sliding Systems',
    description: 'Floor-to-ceiling sliding door systems with German engineering and minimal sightlines.',
    image: '/catalog/categories/sliding.jpg'
  },
  {
    id: 'partition-walls',
    slug: 'partition-walls',
    name: 'Partition Walls',
    description: 'Architectural glass and frame partitions that divide space without closing it off.',
    image: '/catalog/categories/partitions.jpg'
  },
  {
    id: 'pivot-systems',
    slug: 'pivot-systems',
    name: 'Pivot Systems',
    description: 'Monumental entrance and internal pivot doors with FritsJurgens hydraulic technology.',
    image: '/catalog/categories/pivot.jpg'
  }
]

export const products: CatalogProduct[] = [
  {
    id: 'vesta-series',
    slug: 'vesta-series',
    name: 'Vesta Series',
    category: 'wardrobe-systems',
    tagline: 'Full-overlay door system with soft-close hinges',
    description: 'The Vesta system uses precision-engineered aluminum profiles and German Blum hinges tested to 100,000 cycles. Doors mount flush for a seamless appearance.',
    features: [
      'Door weight capacity: 40kg maximum',
      'Self-closing mechanism with 165° opening',
      'Compatible with 18mm and 19mm board thickness',
      'Adjustable mounting for site tolerances up to 3mm',
      'Available in matte black, brushed gold, and champagne finishes'
    ],
    heroImages: [
      '/catalog/products/vesta/hero-1.jpg',
      '/catalog/products/vesta/hero-2.jpg'
    ],
    components: [
      {
        code: 'VES-001',
        name: 'Vesta Side Profile',
        image: '/catalog/products/vesta/side-profile.jpg',
        finishes: ['Matte Black', 'Brushed Gold', 'Champagne'],
        size: '3000mm'
      },
      {
        code: 'VES-002',
        name: 'Top & Bottom Track',
        image: '/catalog/products/vesta/track.jpg',
        finishes: ['Matte Black', 'Brushed Gold', 'Champagne'],
        size: '3000mm'
      },
      {
        code: 'VES-HNG',
        name: 'Soft-Close Hinge (Blum)',
        image: '/catalog/products/vesta/hinge.jpg',
        finishes: ['Nickel Plated'],
        notes: 'Full overlay, 165° opening'
      }
    ],
    specifications: {
      'Max Door Size': 'W: 600mm × H: 3000mm',
      'Board Thickness': '18mm / 19mm',
      'Hinge Type': 'Blum Clip-Top with Blumotion soft-close',
      'Finish Options': 'Powder-coated aluminum'
    }
  },
  {
    id: 'fluid-slide',
    slug: 'fluid-slide',
    name: 'Fluid Slide System',
    category: 'sliding-systems',
    tagline: 'Soft-close sliding with damper technology',
    description: 'Italian-engineered fluid damper system provides silent, controlled closure. Top-hung track eliminates floor guides for seamless thresholds.',
    features: [
      'Fluid damper mechanism: closes last 80mm in 2-3 seconds',
      'Top-hung system: no floor track required',
      'Panel weight capacity: 60kg per door',
      'Compatible with glass, wood, and composite panels',
      'Zinc-alloy trolleys with precision ball bearings'
    ],
    heroImages: [
      '/catalog/products/fluid-slide/hero-1.jpg',
      '/catalog/products/fluid-slide/hero-2.jpg'
    ],
    components: [
      {
        code: 'FLD-TRK',
        name: 'Top Track with Damper',
        image: '/catalog/products/fluid-slide/track.jpg',
        finishes: ['Anodized Silver', 'Matte Black'],
        size: '3000mm'
      },
      {
        code: 'FLD-TRL',
        name: 'Trolley Assembly',
        image: '/catalog/products/fluid-slide/trolley.jpg',
        finishes: ['Zinc Alloy'],
        notes: 'Includes damper module'
      },
      {
        code: 'FLD-HDL',
        name: 'Flush Pull Handle',
        image: '/catalog/products/fluid-slide/handle.jpg',
        finishes: ['Brushed Stainless', 'Matte Black', 'Brass'],
        size: '150mm / 300mm'
      }
    ],
    specifications: {
      'Max Panel Size': 'W: 1200mm × H: 3000mm',
      'Panel Thickness': '10mm glass / 18-40mm wood',
      'Track Load': '120kg total (2-door system)',
      'Opening Speed': 'Fluid damper closes in 2-3 seconds'
    }
  },
  {
    id: 'aura-pivot',
    slug: 'aura-pivot',
    name: 'Aura Pivot Door',
    category: 'pivot-systems',
    tagline: 'Invisible hydraulic pivot for oversized panels',
    description: 'The Aura system features FritsJurgens System M+ technology, allowing for doors up to 500kg to move with a single finger. No floor excavation required.',
    features: [
      'Weight capacity: 500kg per leaf',
      '360° rotation or 90° hold-position',
      'Adjustable closing speed and back-check',
      'Compatible with steel, timber, and marble cladded doors',
      'Completely hidden within the door leaf'
    ],
    heroImages: [
      '/catalog/products/aura/hero-1.jpg',
      '/catalog/products/aura/hero-2.jpg'
    ],
    components: [
      {
        code: 'PVT-M+',
        name: 'System M+ Pivot Hinge',
        image: '/catalog/products/aura/hinge.jpg',
        finishes: ['Stainless Steel'],
        notes: 'Adjustable hydraulic control'
      },
      {
        code: 'PVT-TOP',
        name: 'Top Pivot with Cable Duct',
        image: '/catalog/products/aura/top-pivot.jpg',
        finishes: ['Stainless Steel'],
        size: 'For 40mm+ doors'
      }
    ],
    specifications: {
      'Max Door Weight': '500kg',
      'Minimum Door Thickness': '40mm',
      'Control Range': '30 levels of adjustment',
      'Installation': 'Surface mounted floor plate'
    }
  },
  {
    id: 'zenith-pivot',
    slug: 'zenith-pivot',
    name: 'Zenith Slim Pivot',
    category: 'pivot-systems',
    tagline: 'Minimalist glass pivot with ultra-slim profiles',
    description: 'Designed for internal partitions, the Zenith system uses 20mm slim aluminum profiles to maximize glass transparency while providing structural stability.',
    features: [
      'Ultra-slim 20mm visible profile width',
      'Integrated magnetic latching system',
      'Floor-to-ceiling heights up to 3500mm',
      'Dual-action opening (both directions)',
      'Acoustic seal options available'
    ],
    heroImages: [
      '/catalog/products/zenith/hero-1.jpg',
      '/catalog/products/zenith/hero-2.jpg'
    ],
    components: [
      {
        code: 'ZEN-PRF',
        name: 'Zenith Slim Profile',
        image: '/catalog/products/zenith/profile.jpg',
        finishes: ['Matte Black', 'Dark Bronze', 'Brushed Chrome'],
        size: '3500mm'
      },
      {
        code: 'ZEN-MAG',
        name: 'Magnetic Silent Latch',
        image: '/catalog/products/zenith/latch.jpg',
        finishes: ['Matching Finish'],
        notes: 'No mechanical moving parts'
      }
    ],
    specifications: {
      'Profile Width': '20mm',
      'Glass Type': '10mm / 12mm Toughened',
      'Max Height': '3500mm',
      'Operation': 'Non-hydraulic free swing'
    }
  }
]

// Helper functions
export function getCategoryBySlug(slug: string) {
  return categories.find(c => c.slug === slug)
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter(p => p.category === categorySlug)
}

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug)
}
