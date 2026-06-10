---
name: Novesso
description: Contemporary interior design with an Italian design language — Creare Vita Moderna.
colors:
  navy-deep: "#0f1b4c"
  navy-mid: "#1a2b6b"
  navy-dark: "#080e22"
  gold: "#c9a96e"
  gold-light: "#e8d5a3"
  cream: "#ede9e0"
  offwhite: "#f8f7f4"
typography:
  hero:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(4.5rem, 6vw, 6rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  h1:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(3.5rem, 4.5vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  h2:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.5rem, 3.5vw, 3.5rem)"
    fontWeight: 400
    lineHeight: 1.2
  h3:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2rem, 2rem)"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "0.02em"
  lead:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    letterSpacing: "0.25em"
  accent:
    fontFamily: "EB Garamond, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0px"
  sm: "0.375rem"
  md: "0.5rem"
  lg: "0.625rem"
spacing:
  card: "2rem"
  section: "clamp(4rem, 8vw, 8rem)"
components:
  button-primary:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.offwhite}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "2.5rem"
  button-secondary:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.navy-dark}"
    rounded: "{rounded.none}"
  button-ghost:
    textColor: "{colors.navy-dark}"
    rounded: "{rounded.none}"
  card-default:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.navy-dark}"
    rounded: "{rounded.none}"
    padding: "2rem"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.navy-dark}"
    rounded: "{rounded.none}"
    height: "3rem"
---

# Design System: Novesso

## 1. Overview

> **Locked tokens (client constraint).** The color palette and the three fonts below
> are fixed and must never be changed. Layout, spacing, components, motion, and copy are
> open to iteration; colors and type are not.

**Creative North Star: "The Italian Editorial"**

Novesso reads like a printed design monograph rendered for the screen. Cormorant
Garamond carries the display voice — light-weight, large, with a confident negative
tracking — while Montserrat does the architectural work of labels, body, and
navigation in disciplined uppercase. The page is a magazine spread: generous voids,
a deep Midnight Navy ground, Antique Gold used the way a printer would spot-varnish a
single mark. Nothing is rounded, nothing is shadowed; structure is the aesthetic.

This system is **confident, modern, and understated** (PRODUCT.md). Restraint is the
flex: hierarchy and space, not ornament, signal luxury. Gold is punctuation — it marks
the one thing that matters in a view and never washes a surface. Material and project
imagery carry the warmth; the UI is the matte frame that gets out of the way.

It explicitly rejects four things, carried verbatim from PRODUCT.md: the
mass-market / IKEA-flatpack look, the generic SaaS landing (gradient hero, repeated
feature-card grid, eyebrows and numbered markers by reflex), loud "gold-everything"
luxury, and cold corporate sterility.

**Key Characteristics:**
- Zero-radius everything; corners are sharp by doctrine.
- Flat surfaces — depth comes from tonal navy/cream layering, never shadow.
- Serif display (Cormorant) against uppercase-tracked sans (Montserrat).
- Gold as a ≤10% accent; navy + cream do all the structural work.
- Architectural spacing: generous, varied, never a uniform card grid.

## 2. Colors

A two-pole palette: a deep navy family for ground and ink, a warm gold family for
the single accent, mediated by a cream/off-white neutral pair.

### Primary
- **Midnight Navy** (`#0f1b4c`): The brand's structural color. Primary buttons,
  dark `Section` variants, the footer ground, focus rings. The default "ink" of the
  system and the surface that makes gold sing.
- **Royal Navy** (`#1a2b6b`): A lift of Midnight Navy for mid-tone fills, gradient
  midpoints in image overlays, and the light-mode focus ring.
- **Ink Navy** (`#080e22`): The near-black darkest navy. Body text color in light
  mode (`--foreground`), dark-mode background, and the base of every image overlay.

### Secondary
- **Antique Gold** (`#c9a96e`): The accent. Single rules, the one emphasized word, a
  hairline divider, chart-1, dark-mode ring. Heritage gold — never bright, never broad.
- **Soft Gold** (`#e8d5a3`): A lighter gold for dark-mode accents and subtle tints
  (sidebar accent), where full Antique Gold would be too assertive.

### Neutral
- **Cream** (`#ede9e0`): The surface color — cards, sidebars, secondary buttons.
  Warm enough to feel like paper, never tipping into "sand" body-bg cliché.
- **Off-White** (`#f8f7f4`): The light-mode body background and primary-button text.
  A near-white with a whisper of warmth, not a tinted cream wash.
- **Muted Ink** (`rgba(8,14,34,0.6)`): Muted text. Verify it clears 4.5:1 on
  Off-White before using it for body copy; if close, step toward Ink Navy.

### Named Rules
**The Gold-as-Punctuation Rule.** Antique Gold appears on ≤10% of any view — one
rule, one mark, one emphasized word. The moment gold fills a surface or repeats across
a grid, it has failed. Navy and cream carry the layout; gold ends a sentence.

**The Flat-Ground Rule.** Depth is built from navy/cream tonal layering and image
overlays, never from drop shadows. If a surface needs to "lift," darken or lighten the
ground, don't float it.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia, serif fallback)
**Body Font:** Montserrat (with system-ui, sans-serif fallback)
**Accent Font:** EB Garamond Italic — pull-quotes and testimonials *only*

**Character:** A high-contrast pairing on a true contrast axis: a light, elegant
serif at display sizes against a geometric sans set in disciplined uppercase for
everything functional. The serif is the voice; the sans is the architecture.

### Hierarchy
- **Hero** (Cormorant, 300, `clamp(4.5rem, 6vw, 6rem)`, lh 1.05, tracking -0.02em):
  Landing/campaign hero only. Caps at 96px — the page never shouts louder.
- **H1** (Cormorant, 300, `clamp(3.5rem, 4.5vw, 4.5rem)`, lh 1.1): Primary section titles.
- **H2** (Cormorant, 400, `clamp(2.5rem, 3.5vw, 3.5rem)`, lh 1.2): Sub-section headings.
- **H3** (Montserrat, 600, `clamp(1.5rem, 2rem, 2rem)`, lh 1.3): UI section headers,
  card titles — the point where type switches from serif voice to sans structure.
- **Body** (Montserrat, 400, 15px, lh 1.85, tracking +0.02em): Standard copy. The
  open leading is deliberate; keep measure at 65–75ch.
- **Lead** (Montserrat, 300, 18px, lh 1.6): Editorial intros and lead paragraphs.
- **Label** (Montserrat, 400, 11px, uppercase, tracking 0.25em): Micro-labels.
  Nav uses weight 300 at 0.3em; CTAs use weight 500 at 0.25em.
- **Accent** (EB Garamond Italic, 400, 20px, lh 1.5): Pull-quotes and testimonials only.

### Named Rules
**The Serif-Voice / Sans-Structure Rule.** Cormorant speaks (hero, H1, H2, card
titles' large display); Montserrat structures (H3 down, all labels, nav, body). Never
set body copy in Cormorant; never set a hero in Montserrat.

**The Caps-Tracking Rule.** Uppercase Montserrat always carries ≥0.2em tracking. Tight
caps are forbidden — letters must breathe at label sizes.

## 4. Elevation

This system is **flat by doctrine.** There is no box-shadow vocabulary. Depth is
conveyed three ways: (1) tonal layering — Cream surfaces on an Off-White ground, Navy
sections against light ones; (2) full-bleed image overlays (`.image-overlay-bottom`,
`.image-overlay-full`) that gradient navy over photography to seat text; (3) hairline
borders at 1px. Buttons respond to press with a 1px `translateY`, not a shadow.

### Named Rules
**The No-Shadow Rule.** Drop shadows are forbidden as a depth device. If a 2014-app
shadow appears under a card, it's wrong — replace it with a tonal ground change or a
1px border.

## 5. Components

### Buttons
- **Shape:** Zero radius (`rounded-none`, 0px) — sharp corners, always.
- **Type:** Uppercase Montserrat, semibold, tracking 0.2em, 12–14px.
- **Primary:** Midnight Navy ground (`#0f1b4c`), Off-White text; hover drops opacity to
  90%. Default height 40px (`h-10`), padding `px-6`; `lg` is 44px / `px-8`.
- **Secondary:** Cream ground, navy text; hover to 80% opacity.
- **Ghost:** No fill, navy text; hover fills Cream.
- **Focus:** `focus-visible` border shifts to ring + a 2px ring at 30% opacity. Active
  state nudges 1px down (`translate-y-px`). No shadow.

### Cards / Containers
- **Corner Style:** Sharp (0px). Cards inherit the no-radius doctrine.
- **Background:** Cream (`default`) or transparent with a 1px border (`outline`).
- **Shadow Strategy:** None — see The No-Shadow Rule.
- **Internal Padding:** 32px (`p-8`) on header / content / footer.
- **Title:** Cormorant (`font-display`), light, `text-2xl`, tracking tight.
- **Note:** Nested cards are forbidden. Cards are used sparingly, never as a uniform
  same-size grid (PRODUCT.md anti-reference: identical card grids).

### Inputs / Fields
- **Style:** Underline only — transparent background, 1px bottom border, no box, zero
  radius, 48px tall, no horizontal padding (`px-0`). Draughting-line minimalism.
- **Focus:** Bottom border shifts to Midnight Navy; no glow, no box.
- **Placeholder:** Muted at 50% — verify it still reads; bump toward ink if faint.
- **Disabled:** 50% opacity, not-allowed cursor.

### Navigation
- **Style:** Uppercase Montserrat Light (weight 300), tracking 0.3em (`label-nav`).
- **Behavior:** `PromoteHeader` uses GSAP + ScrollTrigger for scroll state. Honor
  `prefers-reduced-motion` with an instant fallback. Catalog opens a mega-menu;
  mobile collapses to a menu — both fully keyboard-navigable.

### Consultation Modal (signature)
- The primary conversion surface. Radix dialog; navy/cream surfaces, zero radius,
  underline inputs. Treat it as the most important component on the site — it is the
  booked-consultation goal made tangible.

## 6. Do's and Don'ts

### Do:
- **Do** keep every corner sharp — `rounded-none` / 0px on buttons, cards, inputs, modals.
- **Do** restrict Antique Gold to ≤10% of any view (The Gold-as-Punctuation Rule).
- **Do** convey depth with tonal navy/cream layering and image overlays, never shadow.
- **Do** set display type in Cormorant and all functional/UI type in Montserrat caps.
- **Do** keep uppercase Montserrat at ≥0.2em tracking and body measure at 65–75ch.
- **Do** verify navy/cream and muted-text pairings hit WCAG 2.1 AA (≥4.5:1 body).
- **Do** give every GSAP/scroll interaction a `prefers-reduced-motion` fallback.

### Don't:
- **Don't** look mass-market / IKEA-flatpack — no budget, high-volume furniture energy.
- **Don't** ship a generic SaaS landing: no gradient hero, no repeated feature-card
  grid, no tiny uppercase eyebrow above every section, no `01 / 02 / 03` markers by reflex.
- **Don't** do loud "gold-everything" luxury — gold is a mark, never a wash.
- **Don't** go cold-corporate / sterile; the practice has a human hand and a viewpoint.
- **Don't** add drop shadows for depth (The No-Shadow Rule), use border-radius on any
  control, or nest cards.
- **Don't** set body copy in Cormorant or a hero in Montserrat.
- **Don't** use gradient text (`background-clip: text`) or decorative glassmorphism.
