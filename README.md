# NDS UI Skill

A Claude skill for generating UI components in [National Design Studio](https://ndstudio.gov/) style.

## Installation

### Claude Code
```bash
# Copy the skill folder to your project
cp -r nds-ui /path/to/your/project/.claude/skills/
```

### Claude.ai / API
Upload the `nds-ui` folder as a skill in your Claude settings.

## Usage

The skill activates when you ask Claude to:
- Build websites in NDS style
- Create government-style landing pages
- Design with Instrument Serif typography
- Reference realfood.gov, trumprx.gov, or "America by Design"

**Example prompts:**
- "Build a landing page in NDS style for a health initiative"
- "Create a hero section like realfood.gov"
- "Design a dark theme stats section like trumprx.gov"

## Design Style

| Element | Specification |
|---------|--------------|
| **Headlines** | Instrument Serif, 4xl-8xl |
| **Body** | Inter / system-ui |
| **Light theme** | `#F3F0D6` warm beige |
| **Dark theme** | `#0a0a0a` near black |
| **Heroes** | Full viewport, centered, image overlay |
| **Max width** | 1280px (`max-w-7xl`) |

## Reference Sites

- [realfood.gov](https://realfood.gov/) - Light theme, warm aesthetic
- [trumprx.gov](https://trumprx.gov/) - Dark theme, authoritative
- [americabydesign.gov](https://americabydesign.gov/) - Initiative overview
- [ndstudio.gov](https://ndstudio.gov/) - National Design Studio

## Files

```
nds-ui/
├── SKILL.md              # Main skill definition
├── README.md             # This file
└── reference/
    └── components.md     # Full component examples
```

## License

MIT
