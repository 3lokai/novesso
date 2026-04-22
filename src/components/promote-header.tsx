'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Container, Stack } from '@/components/primitives'
import { Button } from '@/components/ui/button'
import {
  Columns,
  Dresser,
  List,
  Moon,
  SlidersHorizontal,
  Sun,
  X,
} from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import {
  SITE_CATALOG_HREF,
  SITE_CATALOG_ITEMS,
  SITE_PRIMARY_NAV,
  SITE_TAGLINE,
} from '@/lib/site-nav'

// GSAP Imports
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

type Resource = { href: string; title: string; desc: string; icon: React.ReactNode }

/** logomark-color.svg viewBox 335×263 — height 32px (h-8) */
const LOGO_MARK = { width: 41, height: 32 } as const

const RESOURCE_META: Record<
  (typeof SITE_CATALOG_ITEMS)[number]['href'],
  { desc: string; icon: React.ReactNode }
> = {
  '/wardrobes': {
    desc: 'Built-in and walk-in wardrobe systems tailored to your space.',
    icon: <Dresser size={20} weight="light" aria-hidden />,
  },
  '/sliding-systems': {
    desc: 'Smooth sliding doors and panel hardware for modern interiors.',
    icon: <SlidersHorizontal size={20} weight="light" aria-hidden />,
  },
  '/partitions': {
    desc: 'Room dividers and glass partitions for flexible layouts.',
    icon: <Columns size={20} weight="light" aria-hidden />,
  },
}

const RESOURCES: Resource[] = SITE_CATALOG_ITEMS.map((item) => ({
  href: item.href,
  title: item.label,
  ...RESOURCE_META[item.href],
}))

export default function PromoteHeader() {
  const activePath = usePathname()
  const [open, setOpen] = React.useState(false)
  const headerRef = React.useRef<HTMLElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Delegate theme management entirely to next-themes — no manual DOM toggling
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const isDarkRef = React.useRef(isDark)
  React.useLayoutEffect(() => {
    isDarkRef.current = isDark
  }, [isDark])

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  const isActive = (href: string) => (href === '/' ? activePath === '/' : activePath?.startsWith(href))

  const navLinkClass = (active: boolean) =>
    cn(
      'label transition-colors px-4 py-2 hover:text-accent nav-link-item',
      active ? 'text-accent' : 'text-foreground/55'
    )

  // GSAP Animations — intro uses transform on the wrapper root; clear it when done so `position: sticky` works on <header>
  useGSAP(() => {
    const root = containerRef.current
    if (!root) return

    const tl = gsap.timeline({
      defaults: { ease: 'expo.out' },
      onComplete: () => {
        const root = containerRef.current
        if (root) {
          gsap.set(root, { clearProps: 'transform' })
          // Drop any inline opacity/transform from the intro so nested `.header-action-item`
          // pairs (wrapper + button) cannot leave controls stuck invisible after revert/resize.
          gsap.set(root.querySelectorAll('.header-action-item'), {
            clearProps: 'opacity,visibility,transform',
          })
        }
        ScrollTrigger.refresh()
      },
    })

    // 1. Entrance Choreography (scope queries descendants only — animate the scoped root via ref, not ".header-wrapper")
    tl.from(root, {
      yPercent: -100,
      duration: 1.2,
    })
    .from('.brand-element', {
      opacity: 0,
      x: -30,
      duration: 0.8,
    }, '-=0.6')
    .from('.nav-link-item', {
      opacity: 0,
      y: 10,
      stagger: 0.1,
      duration: 0.6,
    }, '-=0.4')
    .from('.header-action-item', {
      opacity: 0,
      scale: 0.9,
      stagger: 0.1,
      duration: 0.6,
    }, '-=0.4')

    // 2. Scroll-Triggered State Change (string "body" is resolved inside scope and fails — use document.body)
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top -50',
      onEnter: () => {
        const el = headerRef.current
        if (!el) return
        gsap.to(el, {
          height: '64px',
          backgroundColor: isDarkRef.current
            ? 'rgba(10, 10, 10, 0.95)'
            : 'rgba(255, 255, 255, 0.95)',
          borderBottomColor: 'var(--border)',
          duration: 0.4,
          ease: 'power2.out'
        })
      },
      onLeaveBack: () => {
        const el = headerRef.current
        if (!el) return
        gsap.to(el, {
          height: '80px',
          backgroundColor: 'transparent',
          borderBottomColor: 'transparent',
          duration: 0.4,
          ease: 'power2.out'
        })
      }
    })
  }, { scope: containerRef, dependencies: [] })

  return (
    <div ref={containerRef} className="flex flex-col header-wrapper">
      {/* Announcement bar — disabled (GSAP no longer targets .announcement-bar)
      <div className="w-full border-b border-border bg-secondary/30 announcement-bar">
        <Container>
          <div className="flex items-center justify-center gap-4 py-2.5 text-xs">
            <span className="label text-[10px] bg-accent/10 border border-accent/20 px-1.5 py-0.5 text-accent font-semibold">
              New
            </span>
            <span className="body text-xs text-primary/70">
              Explore our updated templates—faster starters and better docs.
            </span>
            <Link
              href="/templates"
              className="label text-[10px] text-accent underline underline-offset-4 hover:text-accent/80"
            >
              Browse templates
            </Link>
          </div>
        </Container>
      </div>
      */}

      {/* Header */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 h-20 w-full shrink-0 border-b border-transparent bg-transparent backdrop-blur-md transition-shadow"
      >
        <Container>
          <div className="flex h-full items-center justify-between gap-8 py-4">
            {/* Left: Brand */}
            <div className="flex items-center brand-element">
              <Link href="/" className="flex items-center gap-4 transition-opacity hover:opacity-80" aria-label="Home">
                <Image
                  src="/logomark-color.svg"
                  alt="Novesso"
                  {...LOGO_MARK}
                  className="h-8 w-auto"
                  priority
                />
                <span className="label text-xl tracking-[0.3em] font-semibold">NOVESSO</span>
              </Link>
            </div>

            {/* Right: Nav + Actions */}
            <div className="hidden items-center gap-8 md:flex">
              <nav className="flex items-center gap-2">
                {/* Catalog hover panel (Formerly Resources) */}
                <div className="relative group nav-link-item">
                  <button
                    type="button"
                    className={navLinkClass(
                      RESOURCES.some((r) => isActive(r.href)) ||
                        activePath?.startsWith(SITE_CATALOG_HREF)
                    )}
                  >
                    CATALOG
                  </button>
                  <div className="pointer-events-none absolute left-0 top-full pt-4 opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="w-[480px] border border-border bg-background p-6 shadow-2xl">
                      <div className="grid grid-cols-2 gap-4">
                        {RESOURCES.map((r) => (
                          <Link
                            key={r.href}
                            href={r.href}
                            className="group/item flex items-start gap-4 p-4 transition-colors hover:bg-secondary/50"
                          >
                            <div className="text-accent group-hover/item:scale-110 transition-transform">
                              {r.icon}
                            </div>
                            <Stack gap="sm">
                              <span className="label text-[11px] text-foreground">{r.title}</span>
                              <p className="body text-[11px] text-foreground/50 line-clamp-2">
                                {r.desc}
                              </p>
                            </Stack>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {SITE_PRIMARY_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={navLinkClass(isActive(item.href))}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Search (Commented out) */}

              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="header-action-item"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {isDark ? <Sun size={20} weight="light" /> : <Moon size={20} weight="light" />}
                </Button>
                <Button variant="primary" size="sm" className="header-action-item">
                  ENQUIRE
                </Button>
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="header-action-item"
              >
                <List size={24} weight="light" />
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile drawer — when closed, must not capture pointer events (opacity-0 alone still blocks taps above the header) */}
      <div
        className={cn(
          'fixed inset-0 z-[100] md:hidden transition-all duration-500',
          open ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            'absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity duration-500',
            open ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setOpen(false)}
          aria-hidden
        />
        <aside
          className={cn(
            'absolute right-0 top-0 h-full w-full max-w-sm border-l border-border bg-background p-12 shadow-2xl transition-transform duration-500',
            open ? 'translate-x-0' : 'translate-x-full'
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <Stack gap="xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src="/logomark-color.svg"
                  alt="Novesso"
                  {...LOGO_MARK}
                  className="h-8 w-auto"
                />
                <span className="label text-xl tracking-[0.3em] font-semibold">NOVESSO</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
                <X size={24} weight="light" />
              </Button>
            </div>

            <nav className="flex flex-col gap-4 pt-12">
              <Link
                href={SITE_CATALOG_HREF}
                onClick={() => setOpen(false)}
                className="label text-lg hover:text-accent"
              >
                CATALOG
              </Link>
              {SITE_PRIMARY_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="label text-lg hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="pt-12 border-t border-border">
               <Stack gap="lg">
                <span className="label text-accent">Enquiry</span>
                <Button variant="primary" className="w-full">ENQUIRE</Button>
               </Stack>
            </div>

            <div className="mt-auto flex items-center justify-between pt-12 border-t border-border">
              <span className="label text-[10px] text-primary/40">{SITE_TAGLINE}</span>
               <Button variant="ghost" size="sm" onClick={toggleTheme}>
                  {isDark ? "LIGHT" : "DARK"} MODE
                </Button>
            </div>
          </Stack>
        </aside>
      </div>
    </div>
  )
}
