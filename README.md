# NDS UI Skill

Professional UI generation for [National Design Studio](https://ndstudio.gov/) style interfaces. This skill equips Claude with the design system, component patterns, and visual language used by realfood.gov, trumprx.gov, and other "America by Design" government websites.

## Installation

### Plugin Marketplace (Recommended)

Run these commands **separately** (one at a time):

```bash
/plugin marketplace add naga-k/nds-ui-skill
```

Then:

```bash
/plugin install nds-ui-skill
```

### Manual Installation
```bash
cp -r .claude/skills/nds-ui /path/to/your/project/.claude/skills/
```

## Capabilities

This skill enables Claude to:

- **Generate landing pages** with full-viewport heroes, statistics sections, and content blocks
- **Apply NDS typography** using Instrument Serif headlines with Inter body text
- **Implement color themes** - warm beige (realfood.gov) or dark navy (trumprx.gov)
- **Create responsive layouts** with mobile-first Tailwind CSS
- **Build component libraries** following NDS patterns (nav, hero, stats, FAQ, etc.)

## Example Prompts

```
"Build a landing page in NDS style for a public health initiative"

"Create a hero section like realfood.gov with a warm beige theme"

"Design a dark statistics section like trumprx.gov showing 3 key metrics"

"Generate a full page with navigation, hero, stats, content, and FAQ sections"

"Set up the Tailwind config and font imports for NDS style"
```

## Design System

### Typography
| Element | Font | Scale |
|---------|------|-------|
| Headlines | Instrument Serif | text-4xl to text-8xl |
| Body | Inter / system-ui | text-lg to text-xl |
| Labels | Monospace uppercase | text-sm tracking-widest |

### Color Palettes

**Light Theme** (realfood.gov style)
```
Background: #F3F0D6 (warm beige)
Foreground: #1a1a1a (near black)
Muted: #e8e5d0 (lighter beige)
```

**Dark Theme** (trumprx.gov style)
```
Background: #0a0a0a (near black)
Foreground: #ffffff (white)
Accent: #f5f5dc (warm cream)
```

### Layout Principles
- **Heroes**: Full viewport height (`h-screen`), centered content, semi-transparent overlay
- **Max width**: 1280px (`max-w-7xl`)
- **Spacing**: `px-6` mobile, `px-12+` desktop; `py-20 md:py-32` sections
- **Sections**: Alternating backgrounds (cream / white / dark)

## Expected Output

When you request NDS-style UI, Claude will generate:

1. **Next.js/React components** with TypeScript
2. **Tailwind CSS classes** following the design system
3. **Font setup** with Instrument Serif + Inter via Google Fonts
4. **Responsive design** with mobile-first breakpoints
5. **Tailwind config extensions** for custom colors and fonts

## Component Library

The skill includes patterns for:
- `Hero` - Full-screen with image, overlay, headline, CTA
- `Stats` - Large serif numbers with monospace labels
- `Content` - Text sections with headline and body
- `Navigation` - Transparent header with minimal links
- `FAQ` - Expandable accordion with serif questions

See `reference/components.md` for full implementations.

## Reference Sites

| Site | Theme | Style |
|------|-------|-------|
| [realfood.gov](https://realfood.gov/) | Light | Warm, organic, food photography |
| [trumprx.gov](https://trumprx.gov/) | Dark | Authoritative, patriotic |
| [americabydesign.gov](https://americabydesign.gov/) | Dark | Initiative overview |
| [ndstudio.gov](https://ndstudio.gov/) | — | National Design Studio home |

## Project Structure

```
nds-ui/
├── .claude-plugin/
│   └── plugin.json                 # Plugin metadata
├── .claude/
│   └── skills/
│       └── nds-ui/
│           ├── SKILL.md            # Core skill definition
│           └── reference/
│               └── components.md   # Full component examples
├── README.md
└── .gitignore
```

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Instrument Serif, Inter)
- **Language**: TypeScript / React

## License

MIT
