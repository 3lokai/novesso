# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Novesso is a marketing site for a contemporary interior-design brand (Italian design language, tagline *Creare Vita Moderna*). Next.js 16 App Router, React 19, TypeScript, Tailwind v4, shadcn/ui.

## Commands

```bash
npm run dev        # Next dev with Turbopack
npm run build      # production build (also the only "test" — there is no test suite)
npm run start      # serve production build
npm run lint       # eslint (flat config, eslint.config.mjs)
npm run typecheck  # tsc --noEmit
npm run format     # prettier --write on **/*.{ts,tsx}
```

There is no test runner. Validate changes with `npm run typecheck` and `npm run build`.

## Environment

Copy `.env.example` to `.env.local`:
- `NEXT_PUBLIC_SITE_URL` — canonical origin; consumed by `src/lib/seo.ts` for metadata, sitemap, robots, and JSON-LD. Falls back to `http://localhost:3000`.
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — required for the footer map embed.

## Architecture

The site is largely static/presentational. Three concerns carry most of the cross-file logic:

### 1. Layout primitives — don't hand-roll spacing
`src/components/primitives/` (re-exported via its `index.ts`) is the layout vocabulary. Compose pages from these instead of ad-hoc Tailwind:
- `Section` — vertical rhythm + background. `size="sm|default|lg|full"`, `variant="default|muted|dark"`. The `muted` variant deliberately remaps gold accent labels to primary ink for contrast.
- `Container` — `max-w-7xl` frame with `px-6 md:px-10`.
- `Grid` (`cols`, `gap`), `Stack` (`gap`), `SplitGrid`, `PageShell`.

`DOCS/design.md` is the authoritative design system ("the Bible") — read it before building new sections. It defines the color tokens, type scale, and the rule to favor sharp edges over large radii.

### 2. Catalog — file-backed, statically generated
`src/lib/catalog-data.ts` is the single source of product/category data (in-memory arrays + `getCategoryBySlug` / `getProductsByCategory` / `getProductBySlug` helpers). The catalog routes are dynamic segments driven entirely by this file:
- `src/app/catalog/[category]/page.tsx` — category listing
- `src/app/catalog/[category]/[slug]/page.tsx` — product detail

Both use `generateStaticParams()` over the catalog arrays, so **adding a product/category to `catalog-data.ts` automatically generates its page and metadata.** Category `slug`s in `catalog-data.ts` must match the hrefs in `src/lib/site-nav.ts`.

### 3. SEO — centralized
`src/lib/seo.ts` holds `seoConfig`, `brandContact`, `siteUrl`, and `buildXxxJsonLd()` factories (Breadcrumb, Product, ItemList, LocalBusiness, ContactPage). Page-level metadata uses these; per-page JSON-LD is injected via `<PageJsonLd>` from `src/components/seo/json-ld.tsx`, while site-wide Organization/WebSite JSON-LD (`<JsonLd>`) lives in `src/app/layout.tsx`. `src/app/{sitemap,robots,opengraph-image}.ts(x)` are dynamic SEO routes. `/design` is `noindex` and disallowed in robots.

### Navigation vs. implemented routes
`src/lib/site-nav.ts` is the shared nav/catalog config for both header and footer — keep them in sync there. Implemented routes today: `/`, `/about`, `/contact`, `/design`, and the `/catalog/*` segments. The `PromoteHeader` (`src/components/promote-header.tsx`) drives the catalog mega-menu, theme toggle, and mobile menu; it uses GSAP + ScrollTrigger for scroll interactions.

### Page composition
Routes in `src/app/*/page.tsx` assemble section components from `src/components/sections/` (e.g. `hero`, `philosophy`, `systems`, plus per-page subfolders `sections/about/`, `sections/contact/`). UI atoms (shadcn-derived) live in `src/components/ui/`, including `consultation-modal.tsx`, the enquiry entry point opened from the header.

## Conventions

- Path alias `@/*` → `src/*` (see `tsconfig.json` and `components.json` aliases).
- Add shadcn components with `npx shadcn@latest add <name>` (style `radix-sera`, Phosphor icons, RSC enabled). New Radix/shadcn components must be restyled to the Novesso language per `DOCS/design.md` §5.
- Use the `cn()` helper (`src/lib/utils.ts`) for conditional classes.
- Styling is Tailwind v4 with CSS-variable theming. Brand tokens are defined once in `src/app/globals.css` (`--navy-deep`, `--gold`, `--cream`, etc.) and aliased to shadcn semantic vars there; type classes (`.h1`, `.body`, `.label`, `.accent`, `.h-hero`) live in `src/app/typography.css`. Edit tokens in `globals.css`, not at call sites.
- Fonts are loaded in `layout.tsx` via `next/font/google` as CSS variables: `--font-heading` (Cormorant Garamond), `--font-sans` (Montserrat), `--font-accent` (EB Garamond italic). Note: `DOCS/design.md` and `README.md` still reference Jost for the sans family — `layout.tsx` is the source of truth.
