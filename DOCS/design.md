# Novesso Design System: The Bible

> "Creare Vita Moderna" — Design where architecture meets living.

This document serves as the single source of truth for the Novesso visual language. Every new component, section, or page must adhere to these standards to maintain our premium, editorial aesthetic.

---

## 1. Core Philosophy

Novesso is built on **Architectural Precision** and **Editorial Elegance**.
- **Sharp Edges**: We avoid large radii. Use `rounded-none` or very subtle `rounded-sm` for UI elements.
- **Breathable White Space**: Never crowd the content. Use the predefined `Section` sizes to ensure logic-driven padding.
- **High Contrast**: Deep navies paired with warm creams and metallic golds.
- **Typographic Hierarchy**: Use font pairings to tell a story—Classical Display for headlines, Geometric Sans for interface logic.

---

## 2. Color Palette

Our colors are primary-driven and high-contrast, designed to feel both heritage and modern.

| Token | CSS Variable | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Navy Deep** | `--navy-deep` | `#0f1b4c` | Primary backgrounds, text on light |
| **Navy Mid** | `--navy-mid` | `#1a2b6b` | Secondary elements, UI accents |
| **Gold** | `--gold` | `#c9a96e` | Primary accent, primary buttons, links |
| **Cream** | `--cream` | `#ede9e0` | Secondary backgrounds, card surfaces |
| **Off-white** | `--offwhite` | `#f8f7f4` | Page backgrounds, high-key areas |

---

## 3. Typography

We use a fluid type scale (defined in `typography.css`) that ensures legibility across all devices.

### Font Families
- **Display**: `Cormorant Garamond` (Light 300) — *Heroic, Elegant.*
- **Sans/UI**: `Jost` (Variable weights) — *Architectural, Precise.*
- **Accent**: `EB Garamond` (Italic) — *Storytelling, Intimate.*

### Standard Classes
- `.h-hero`: The largest display text (fluid, centered or left).
- `.h1`, `.h2`: Standard section headers (Cormorant Garamond).
- `.body`: Sans-serif body copy (Jost, spacing 1.6).
- `.label`: Small, uppercase, 0.35em tracking. Used for navigation and UI metadata.
- `.accent`: EB Garamond Italic. Use for pull-quotes or narrative sub-text.

---

## 4. Layout Primitives

Stop "hacking" layouts with ad-hoc tailwind classes. Use these React primitives:

### `Section`
The building block of pages. Handles vertical rhythm.
- `size="sm" | "default" | "lg" | "full"` (Standardizes `py-16` to `min-h-screen`)
- `variant="default" | "muted" | "dark"` (Handles background and text contrast)

### `Container`
The architectural frame.
- Max-width: `7xl` (1280px).
- Default horizontal padding: `px-6 md:px-10`.

### `Grid`
Responsive layout engine.
- `cols`: `1, 2, 3, 4` (Maps to 1 on mobile, scaling up at `md` and `lg`).
- `gap`: `none, sm, md, lg` (Maps to responsive gap tokens).

### `Stack`
Vertical spacing for groups of elements (text blocks, input fields).
- `gap`: `sm, md, lg, xl` (Standardizes vertical rhythm).

---

## 5. Opinionated UI (Shadcn Customization)

When adding new Radix/Shadcn components, they must be "Novesso-fied":

### General Rules
1. **No Rounding**: Buttons and Cards should have `rounded-none`.
2. **Typography**: UI labels must use the `.label` class style (uppercase + tracking).
3. **Borders**: Use `border-border` (low opacity) to create subtle architectural divisions.

### Components Status
- [x] **Header**: Refactored to use `Container`, `.label` typography, and the opinionated `Button` system. All rounding removed.
- [x] **Button**: Optimized with `primary`, `secondary`, and `ghost` variants. Typography is fixed to `uppercase tracking-[0.2em] text-xs md:text-sm` for an architectural feel.
- [x] **Card**: Stripped down to `default` and `outline`. No shadows, no rounding.
- [x] **Input / Form**: Sharp edges (`rounded-none`), clean border-bottom styling.
- [x] **Dialog**: Editorial overlay style with generous whitespace (`p-16`) and minimalist close interaction.



---

## 6. Composition Rules

### The Section Sandwich
A typical page should be composed of stacked sections:
```tsx
<Section variant="default" size="lg">
  <Container>
    <Stack gap="xl">
      <h2 className="h2">Our Story</h2>
      <Grid cols={2} gap="lg">
        <p className="body">...</p>
        <p className="body">...</p>
      </Grid>
    </Stack>
  </Container>
</Section>
```

### Full-Screen Heroes
Always use `size="full"` for the initial landing section to ensure vertically centered content across devices.

---

*This document is a living artifact. Update it as we refine our components and patterns.*
