# Novesso

Marketing site for **Novesso** — contemporary interior design with an Italian design language, architectural layout, and refined material systems. Tagline: *Creare Vita Moderna*.

## Tech stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS v4** and **shadcn/ui** (Radix primitives, Phosphor icons)
- **next-themes** for light/dark mode
- **GSAP** + **ScrollTrigger** (`@gsap/react`) for header scroll interactions
- **@next/third-parties** for the Google Maps embed in the footer

## What’s implemented

- **Home** (`/`) — hero, philosophy, systems, projects, credibility, CTA, and shared footer
- **About** (`/about`) — story, values, team, CTA, footer
- **Design system** (`/design`) — internal typography, cards, forms, and dialog showcase (`robots`: noindex)
- **Global layout** — Cormorant Garamond (titles), Montserrat (body/UI/nav), and EB Garamond Italic (accent/pull-quotes) (see `src/app/layout.tsx` and `src/app/typography.css`)
- **Site chrome** — `PromoteHeader` (logo, catalog mega-menu, primary nav, theme toggle, mobile menu) and `Footer` (locations, map embed, social placeholders, contact details)
- **Consultation modal** — enquiry entry point from the header (`ConsultationModal`)
- **SEO** — centralized config in `src/lib/seo.ts` (`NEXT_PUBLIC_SITE_URL`), default metadata, Open Graph, Twitter cards, canonical URLs, dynamic Open Graph image (`src/app/opengraph-image.tsx`), JSON-LD (`Organization` + `WebSite` in `src/components/seo/json-ld.tsx`), `sitemap.xml` (home URL today — add entries as more pages ship), and `robots.txt` (disallows `/design`)

Font license notes live under `DOCS/` (Cormorant Garamond, Jost, EB Garamond).

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL` — canonical site origin (used for metadata, sitemap, and robots)
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` — required for the footer map embed
- `RESEND_API_KEY` — Resend API key for sending enquiry emails (contact form + consultation modal)
- `ENQUIRY_TO_EMAIL` — inbox that receives enquiries
- `ENQUIRY_FROM_EMAIL` — verified Resend sender, format `Novesso <enquiries@novesso.com>`

Enquiries are sent server-side via the `sendEnquiry` server action (`src/lib/actions/send-enquiry.ts`). Without the three `RESEND_*`/`ENQUIRY_*` vars set, the forms validate and show a graceful "temporarily unavailable" message instead of sending.

## Scripts

```bash
npm install
npm run dev      # Next dev with Turbopack
npm run build
npm run start
npm run lint
npm run format
npm run typecheck
```

## Project layout (high level)

| Area | Role |
|------|------|
| `src/app/` | Routes, `layout.tsx`, `globals.css`, SEO routes |
| `src/components/sections/` | Page sections (hero, projects, about, etc.) |
| `src/components/ui/` | shadcn-style UI (button, card, dialog, inputs, consultation modal) |
| `src/components/primitives/` | Layout primitives (`Container`, `Section`, `Stack`, `Grid`, `PageShell`) |
| `src/lib/seo.ts`, `src/lib/site-nav.ts` | SEO constants and shared nav/catalog config |

## Navigation vs routes

Header and footer links include catalog paths (`/catalog`, `/wardrobes`, `/sliding-systems`, `/partitions`) and **Contact** (`/contact`) from `src/lib/site-nav.ts`. Only `/`, `/about`, and `/design` are implemented today; add matching `page.tsx` files under `src/app/` when those sections are ready.

## shadcn / UI components

This repo uses [shadcn/ui](https://ui.shadcn.com/) with `components.json` (aliases under `@/`). To add a component:

```bash
npx shadcn@latest add button
```

Imports typically look like:

```tsx
import { Button } from "@/components/ui/button";
```
