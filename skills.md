# Project Skills Documentation

This document catalogs reusable design and development skills for this project.

---

## 1. Claude Design

**Purpose:** Generate high-quality, mystical/cosmic-themed SVG illustrations using pure code (no external image generation services or stock photos required).

### When to Use
- Need original artwork without licensing concerns
- Building thematic UI elements (zodiac, mystical, celestial)
- Want lightweight, scalable graphics that work offline
- Require consistent design language across multiple icons/illustrations

### Core Design Philosophy

The "Claude Design" approach creates premium-feeling visual assets through layered SVG composition:

1. **Cosmic Foundation** — Dark radial gradient backgrounds (deep purples, blacks, navy)
2. **Stellar Atmosphere** — Scattered white circles of varying sizes simulating stars
3. **Constellation Lines** — Subtle thin lines connecting stars (low opacity, themed color)
4. **Sacred Geometry** — Outer/inner concentric circles forming ornate frames
5. **Glowing Centerpiece** — The main symbol/figure with Gaussian blur glow filter
6. **Premium Typography** — Serif fonts with wide letter-spacing for the title
7. **Subtitle Tag** — Element/archetype label below the main title

### Design Recipe (SVG Template)

```svg
<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- 1. Cosmic radial background -->
    <radialGradient id="bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#1a0a2e" />
      <stop offset="50%" style="stop-color:#0d0517" />
      <stop offset="100%" style="stop-color:#000000" />
    </radialGradient>
    
    <!-- 2. Themed gold/color gradient for the main symbol -->
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#fde047" />   <!-- bright -->
      <stop offset="50%" style="stop-color:#f59e0b" />  <!-- mid -->
      <stop offset="100%" style="stop-color:#dc2626" /> <!-- deep -->
    </linearGradient>
    
    <!-- 3. Soft glow filter for the centerpiece -->
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background fill -->
  <rect width="500" height="500" fill="url(#bg)"/>

  <!-- Stars layer -->
  <g fill="#ffffff" opacity="0.8">
    <circle cx="60" cy="80" r="1.5"/>
    <!-- ... 10-15 scattered stars of varying sizes (1-2px radius) ... -->
  </g>

  <!-- Constellation lines (optional) -->
  <g stroke="#themedColor" stroke-width="0.5" opacity="0.4" fill="none">
    <line x1="60" y1="80" x2="200" y2="60"/>
  </g>

  <!-- Decorative concentric rings -->
  <circle cx="250" cy="250" r="200" stroke="url(#accent)" stroke-width="2" fill="none" opacity="0.6"/>
  <circle cx="250" cy="250" r="180" stroke="url(#accent)" stroke-width="1" fill="none" opacity="0.4"/>

  <!-- Centerpiece with glow -->
  <g transform="translate(250, 250)" filter="url(#glow)">
    <!-- Symbol-specific paths/shapes here -->
  </g>

  <!-- Typography -->
  <text x="250" y="440" font-size="32" font-weight="bold" 
        fill="url(#accent)" text-anchor="middle" 
        font-family="serif" letter-spacing="8">TITLE</text>
  <text x="250" y="465" font-size="14" 
        fill="#themedColor" text-anchor="middle" 
        font-family="serif" opacity="0.7" letter-spacing="3">SUBTITLE</text>
</svg>
```

### Color Palettes by Theme

**Fire Signs (Aries, Leo, Sagittarius)** — Warm golds and reds
```
Background: #1a0a2e → #0d0517 → #000000
Accent:     #fde047 → #f59e0b → #dc2626
```

**Earth Signs (Taurus, Virgo, Capricorn)** — Earthy ambers and bronzes
```
Background: #1c1207 → #0a0703 → #000000
Accent:     #fef3c7 → #fbbf24 → #d97706
```

**Air Signs (Gemini, Libra, Aquarius)** — Cool teals and silvers
```
Background: #0a1929 → #050d18 → #000000
Accent:     #a5f3fc → #22d3ee → #0e7490
```

**Water Signs (Cancer, Scorpio, Pisces)** — Deep blues with gold accents
```
Background: #0a1929 → #050d18 → #000000
Accent:     #fef3c7 → #fbbf24 → #92400e (Cancer/Scorpio)
            #cffafe → #06b6d4 → #155e75 (Pisces)
```

### Symbol Construction Patterns

**For animals/creatures:**
- Use `<path>` with quadratic Bézier curves (`Q`) for organic shapes
- Combine `<circle>` for heads/bodies with `<path>` for limbs/horns
- Add small accent circles in contrasting color for eyes/highlights

**For abstract symbols:**
- Layer simple geometric primitives (`<line>`, `<circle>`, `<rect>`)
- Use `stroke-linecap="round"` and `stroke-linejoin="round"` for soft, premium feel
- Stroke width of 5-7px reads well at icon and full sizes

**For constellation/wireframe styles:**
- Increase glow filter `stdDeviation` to 6-8 for stronger luminosity
- Use lower opacity (0.6-0.8) on strokes
- Add small filled circles at vertex points to suggest stars

### Typography Rules

- **Title:** `font-family="serif"`, `font-weight="bold"`, `font-size="28-32"`, `letter-spacing="6-10"`
- **Subtitle:** `font-size="14"`, `opacity="0.7"`, `letter-spacing="3"`, single accent color
- Keep both centered with `text-anchor="middle"`
- Use the gradient as fill (`fill="url(#accent)"`) for the title to match the artwork

### Composition Checklist

- [ ] 500x500 viewBox (scales perfectly to any size in CSS)
- [ ] Radial gradient background, darkest at edges
- [ ] At least 10 stars distributed across the canvas
- [ ] Two concentric outer rings (one bolder, one fainter)
- [ ] Centerpiece wrapped in `<g>` with `transform="translate(250, 250)"` and glow filter
- [ ] Title at y=440, subtitle at y=465
- [ ] All gradients defined in `<defs>` with unique IDs (avoid collisions when multiple SVGs share a page)

### Reference Implementation

See the 12 zodiac sign SVGs in `public/images/zodiac/` for full working examples:
- `aries.svg`, `taurus.svg`, `gemini.svg`, `cancer.svg`
- `leo.svg`, `virgo.svg`, `libra.svg`, `scorpio.svg`
- `sagittarius.svg`, `capricorn.svg`, `aquarius.svg`, `pisces.svg`

### Extending the Skill

This approach works for any themed icon set:
- **Tarot cards** — Replace zodiac symbols with Major Arcana imagery
- **Planetary symbols** — Use the same recipe with planet glyphs
- **Element badges** — Simplify to just the geometric core (no creature)
- **Logo marks** — Drop the cosmic background, keep the glow + concentric rings

### When NOT to Use Claude Design

- When photorealistic imagery is required (use stock photos instead)
- When animation is core to the experience (use Lottie or Framer Motion + raster)
- When the brand demands a flat/minimalist aesthetic (this approach is intentionally ornate)

---

## Adding New Skills

When you discover a reusable pattern worth documenting, add a new top-level section here following this structure:

1. **Purpose** — one sentence
2. **When to Use / When NOT to Use**
3. **Core philosophy or recipe**
4. **Concrete code template**
5. **Reference implementations in this repo**
