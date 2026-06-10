---
target: home (src/app/page.tsx)
total_score: 30
p0_count: 0
p1_count: 3
timestamp: 2026-06-10T06-44-49Z
slug: src-app-page-tsx
---
# Critique — Home (`src/app/page.tsx`)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Good carousel/process active states; key content gated behind hover |
| 2 | Match System / Real World | 4 | Excellent domain copy; confident, specific, on-brand |
| 3 | User Control and Freedom | 2 | Testimonials auto-cycle every 6s with no pause-on-hover/focus |
| 4 | Consistency and Standards | 3 | Cohesive visual system; interactive `<div>`s break semantics |
| 5 | Error Prevention | 3 | Marketing surface; form lives in modal (not reviewed here) |
| 6 | Recognition Rather Than Recall | 2 | System descriptions + process detail hidden until hover |
| 7 | Flexibility and Efficiency | 3 | Fine for a marketing page |
| 8 | Aesthetic and Minimalist Design | 4 | Genuinely crafted; asymmetry, restraint, gold-as-punctuation |
| 9 | Error Recovery | 3 | n/a on home |
| 10 | Help and Documentation | 3 | Nav present; n/a otherwise |
| **Total** | | **30/40** | **Good — strong foundation, interaction/a11y gaps** |

## Anti-Patterns Verdict

**LLM assessment:** Does NOT read as AI-generated. The copy is specific and confident ("not sold — they are calibrated"; "three monsoons from now"), layouts are asymmetric (offset project card, expanding-flex system panels, parallax image trio), and gold is used as punctuation per the brand rule. This is above the AI-slop line.

**Deterministic scan:** `detect.mjs` over all home sections + page.tsx returned `[]` — zero detections. No gradient text, no side-stripe borders, no glassmorphism, no hero-metric template.

**Visual overlays:** Browser automation unavailable in this environment — no user-visible overlay was produced. Findings are from source review + deterministic scan.

## Overall Impression

High-craft, editorially confident, and slop-free — the visual system is doing real work. The single biggest opportunity is **robustness of the motion layer**: nearly every section sets content to `opacity:0` / `autoAlpha:0` and reveals it via GSAP, with no `prefers-reduced-motion` fallback. That gates visible content (including the hero and its primary CTA) on JS succeeding, and fails the WCAG 2.1 AA bar set in PRODUCT.md. Fix the reveal pattern and the keyboard semantics and this jumps a full band.

## What's Working

- **Copy and voice.** Domain-specific, confident, zero filler. Carries the "confident, modern, understated" personality precisely.
- **Composition.** Asymmetric and varied — offset project cards, expanding-flex system panels, parallax image trio, full-bleed dark CTA. No identical card grid.
- **Brand discipline.** Gold stays a ≤10% accent; navy/cream carry structure; zero-radius and flat-ground rules honored throughout.

## Priority Issues

- **[P1] Reveal animations gate content visibility.** Hero (`gsap.from('.hero-content > *', {opacity:0})`), CTA (`autoAlpha:0`), philosophy, systems, process, india, testimonials all start hidden and animate in on load/scroll. If JS fails, the tab is backgrounded during render, or a headless/crawler render occurs, the content — including the hero H1 and the Schedule Consultation CTA — can ship blank. **Fix:** content visible by default; animate from a visible baseline, or gate the hidden start state behind a `js-loaded` class set after hydration.
- **[P1] No `prefers-reduced-motion` fallback anywhere.** Parallax scrub, staggered reveals, expanding panels, and the auto-cycling carousel all ignore reduced-motion. PRODUCT.md commits to WCAG 2.1 AA. **Fix:** wrap GSAP in `gsap.matchMedia()` with a `(prefers-reduced-motion: reduce)` branch that sets final states instantly and disables scrub/auto-cycle.
- **[P1] Interactive elements aren't keyboard-accessible.** System cards, the hero service list (01/02/03), and "View All Systems" are `<div>`s with `cursor-pointer` + `onMouseEnter` — not focusable, not operable by keyboard, and several navigate nowhere. **Fix:** real `<a>`/`<button>` with focus-visible states, or drop the affordance if they don't act.
- **[P2] Important content hidden behind hover.** System descriptions and the "Details" affordance are `opacity-0` until `group-hover` — invisible on touch. The desktop Process grid only reveals the active phase's body on hover, and the `md:` breakpoint serves this hover-grid to tablets that can't hover. **Fix:** show descriptions by default (or reveal on tap), and make Process phase selection tap-driven on touch.
- **[P2] Auto-cycling testimonials.** Quotes advance every 6s with no pause-on-hover/focus and no `aria-live`. Six seconds is too short to read a 3-line quote, and it changes under the reader. **Fix:** pause on hover/focus, lengthen the interval, respect reduced-motion, and announce changes politely.

## Persona Red Flags

**Sam (Accessibility-Dependent):** Reveal-gated content may never appear with reduced-motion or if JS fails. System cards and hero list can't be reached or activated by keyboard. Muted text (`white/40`, `white/50`, `muted-foreground` at 0.6) on navy/cream needs contrast verification against 4.5:1. Auto-cycling carousel has no live region.

**Casey (Distracted Mobile):** System card descriptions and "Details" are hover-only — on a phone they're invisible, so the core "what each system is" never shows. Tablet (`md:`) gets the hover-dependent Process grid with no touch path to phase detail.

**Jordan (First-Timer):** Several things look clickable (cursor-pointer divs, "View All Systems," hero 01/02/03 list) but do nothing or give no keyboard/tap feedback — ambiguous affordances erode trust on a high-consideration purchase.

## Minor Observations

- Numbered markers (01/02/03) recur across Hero list, Systems, and India specs where order carries no information — Process (01–04) is the one legitimately sequential use. Consider dropping the decorative ones.
- Branded eyebrow kickers ("Our Conviction," "How It Works," "Built for India," "What They Say," "Begin the Conversation") sit above nearly every section heading — borderline AI-scaffold cadence; varying it would read more editorial.
- Hero uses `text-white` / `text-white/80` directly rather than tokens; fine, but tie to the palette for theme safety.

## Questions to Consider

- What would the hero look like if it were visible and confident on first paint, with motion as enhancement rather than gatekeeper?
- Do the system cards need hover to be interesting, or could the descriptions live in the open and let the imagery do the reveal?
- Does the testimonial carousel need to move on its own at all for a considered, slow-reading audience?
