---
name: building-nds-ui
description: Generates UI components in National Design Studio style. Use when building government websites, landing pages with Instrument Serif typography, warm beige or dark navy themes, full-viewport heroes, or when user mentions NDS, realfood.gov, trumprx.gov, or "America by Design" aesthetic.
---

# NDS UI Style

Generates UI in the style of National Design Studio - the team behind realfood.gov, trumprx.gov, and americabydesign.gov.

## Typography

- **Headlines**: Instrument Serif (or Playfair Display, DM Serif), scale 4xl-8xl
- **Body**: Inter or system-ui sans-serif
- **Labels**: Monospace uppercase, `tracking-widest`

```tsx
// Next.js font setup
import { Instrument_Serif, Inter } from 'next/font/google'

const serif = Instrument_Serif({ weight: '400', subsets: ['latin'], variable: '--font-serif' })
const sans = Inter({ subsets: ['latin'], variable: '--font-sans' })
```

## Color Palettes

**Light theme** (realfood.gov):
```css
--background: #F3F0D6;  /* warm beige */
--foreground: #1a1a1a;
--muted: #e8e5d0;
```

**Dark theme** (trumprx.gov):
```css
--background: #0a0a0a;
--foreground: #ffffff;
--accent: #f5f5dc;  /* warm cream */
```

## Layout Principles

- Heroes: `h-screen`, centered content, `bg-black/30` overlay on images
- Max width: `max-w-7xl` (1280px)
- Whitespace: `px-6` mobile, `px-12+` desktop
- Sections: `py-20 md:py-32`, alternating backgrounds

## Core Patterns

**Hero Section**:
```jsx
<section className="relative h-screen flex items-center justify-center">
  <div className="absolute inset-0 bg-black/30" />
  <Image src="..." fill className="object-cover -z-10" />
  <div className="relative z-10 text-center text-white max-w-4xl px-6">
    <h1 className="font-serif text-5xl md:text-7xl">Headline</h1>
    <p className="mt-6 text-xl md:text-2xl">Subheadline</p>
  </div>
</section>
```

**Statistics**: Large serif numbers + monospace uppercase labels

**Buttons**: `bg-white text-black px-8 py-4 hover:bg-gray-100 transition-colors`

**Navigation**: Transparent over hero, logo left, minimal links right

## Tailwind Config

```js
extend: {
  colors: { 'warm-cream': '#F3F0D6', 'warm-beige': '#e8e5d0' },
  fontFamily: {
    serif: ['var(--font-serif)', 'Georgia', 'serif'],
    sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
  },
}
```

## Visual Style

- Photography over illustrations
- Semi-transparent overlays for text legibility
- Minimal ornamentation
- Alternating section backgrounds (cream/white/dark)

## Reference

- **Components**: See [reference/components.md](reference/components.md) for full component examples
- **Sites**: realfood.gov, trumprx.gov, americabydesign.gov, ndstudio.gov
