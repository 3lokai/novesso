/**
 * Shared navigation — keep header and footer in sync.
 */
export const SITE_CATALOG_HREF = '/catalog' as const

export const SITE_CATALOG_ITEMS = [
  { href: '/catalog/wardrobe-systems', label: 'Wardrobe Systems' },
  { href: '/catalog/sliding-systems', label: 'Sliding Systems' },
  { href: '/catalog/partition-walls', label: 'Partition Walls' },
  { href: '/catalog/pivot-systems', label: 'Pivot Systems' },
] as const

export const SITE_PRIMARY_NAV = [
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
] as const

export const SITE_TAGLINE = 'CREARE VITA MODERNA' as const
