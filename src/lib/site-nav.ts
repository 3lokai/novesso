/**
 * Shared navigation — keep header and footer in sync.
 */
export const SITE_CATALOG_HREF = '/catalog' as const

export const SITE_CATALOG_ITEMS = [
  { href: '/docs', label: 'Docs' },
  { href: '/templates', label: 'Templates' },
  { href: '/community', label: 'Community' },
  { href: '/changelog', label: 'Changelog' },
] as const

export const SITE_PRIMARY_NAV = [
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
] as const

export const SITE_TAGLINE = 'CREARE VITA MODERNA' as const
