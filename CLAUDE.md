# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Astrology Website** — a modern astrology services platform built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. Provides zodiac insights, birth chart readings, horoscope consultations, and personalized astrological guidance.

## Commands

On Windows, `node` is not in the default bash PATH. Prefix all npm commands:

```bash
PATH="/c/Program Files/nodejs:$PATH" /c/Program\ Files/nodejs/npm.cmd run dev
PATH="/c/Program Files/nodejs:$PATH" /c/Program\ Files/nodejs/npm.cmd run build
PATH="/c/Program Files/nodejs:$PATH" /c/Program\ Files/nodejs/npm.cmd run lint
PATH="/c/Program Files/nodejs:$PATH" /c/Program\ Files/nodejs/npm.cmd run start
```

Dev server: http://localhost:3000

### Single Test/File
For testing individual files or components (when tests are added):
```bash
PATH="/c/Program Files/nodejs:$PATH" /c/Program\ Files/nodejs/npm.cmd test -- src/components/MyComponent.test.tsx
```

## Architecture

**Frontend-only application** — a Next.js 16 marketing and services site with potential for future API integration.

### Page Structure (`src/app/page.tsx`)
```
Navbar → Hero → TrustBar → Services → HowItWorks → Testimonials → FAQ → Consultation → Footer
```

Key sections:
- **Hero**: Zodiac sign intro, unique value proposition, primary CTA
- **TrustBar**: Certified astrologers, years of experience, happy clients
- **Services**: Birth chart readings, horoscope consultations, compatibility reports, life guidance
- **HowItWorks**: 4-step process (select service → provide birth details → receive reading → ongoing support)
- **Testimonials**: Client success stories with zodiac signs and transformations
- **FAQ**: Common astrology questions to reduce objections
- **Consultation**: Lead generation form for booking readings

### Components
All sections are modular components in `src/components/`:
- Use Framer Motion `whileInView` + `viewport={{ once: true }}` for scroll animations
- Each major section is a separate `.tsx` file
- Interactive elements use `"use client"` directive for state/animations

### Styling
- **Tailwind CSS v4** — `@import "tailwindcss"` in `src/app/globals.css`
- No `tailwind.config.js` (using Tailwind defaults)
- **Color palette**: Mystical purples, deep indigo, gold accents on dark base (`#0a0a0f`)
- **PostCSS** via `postcss.config.mjs`

### Utilities
- `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge for composing Tailwind classes)
- Path alias configured in `tsconfig.json`: `@/*` → `./src/*`

## Consultation Form

`src/components/Consultation.tsx` (or Contact.tsx) has a stub `handleSubmit`. To make live: 
- **Option 1**: Add `app/api/consultations/route.ts` using Resend (email notifications)
- **Option 2**: Integrate with Calendly or Acuity Scheduling for booking
- **Option 3**: Use Formspree for basic form handling
- See `docs/api-guide.md` for implementation examples

## TypeScript & Type Safety

- **Strict mode enabled** in `tsconfig.json`
- All components should have `React.FC` or `React.ReactNode` return types
- Use interfaces for props: `interface MyComponentProps { ... }`
- Path alias `@/*` resolves to `src/`

## Key Decisions

- **No shadcn/ui** — hand-built components maintain lean bundle and custom mystical aesthetic
- **Frontend-only** — statically exported; deploy to Vercel with zero config
- **Framer Motion animations** — `whileInView` for on-scroll effects, `once: true` to prevent re-triggering
- `"use client"` only on components needing state, browser APIs, or animations
- **No external UI frameworks** — Tailwind CSS provides all styling needs

## Web Best Practices

### Performance (Core Web Vitals targets)
- **LCP < 2.5s** — avoid large above-the-fold images; use `next/image` for all `<img>` tags
- **CLS < 0.1** — always set explicit `width` and `height` on images and media
- **FID / INP < 100ms** — keep JS bundles lean; defer non-critical third-party scripts
- Every 1s delay in load time costs ~7% conversions — prioritize above-the-fold render speed

### SEO
- Unique `<title>` (50–60 chars) and `<meta description>` (150–160 chars) in `layout.tsx`
- JSON-LD structured data (`Organization` + `LocalBusiness` + `ProfessionalService` schema) in `layout.tsx` for rich snippets
- Section `id` attributes for anchor links and improved crawlability
- FAQ section content is indexed by Google — keep questions keyword-rich for zodiac/astrology terms
- Open Graph tags for social sharing (especially important for sharing zodiac predictions)

### Conversion (from top-ranking astrology service sites)
- Hero must immediately answer: which astrology services we offer + specific benefits + proof
- Place **social proof above the fold** — client testimonials, certification badges, years in practice
- One primary CTA per section — never competing buttons at same visual weight
- Show measurable results in stats — clarity improved, relationships transformed, life direction gained
- How-It-Works section (4–5 steps) significantly increases trust for new astrology seekers
- FAQ section reduces objections about accuracy/legitimacy and boosts organic rankings
- Specific case studies (before/after readings, zodiac match transformations) convert better than generic testimonials

### Accessibility (WCAG 2.1 Level AA)
- All interactive elements need `aria-label` when icon-only (especially zodiac icons)
- Maintain colour contrast ratio ≥ 4.5:1 for body text on dark backgrounds
- Navigation landmarks: `<header>`, `<main>`, `<footer>`, `<nav>` must be present
- Form inputs must have associated `<label>` elements (birth date, time, location for accurate charts)
- Zodiac symbol images need descriptive `alt` text, not just "Zodiac sign"

### Design Patterns (aligned with premium astrology service sites)
- **Bento grid** layout for service cards — asymmetric sizes signal sophistication
- **Glassmorphism** cards: `backdrop-blur` + semi-transparent backgrounds on dark mystical base
- **Glow effects**: absolute-positioned blurred divs (purple/indigo) behind key sections
- **Zodiac wheel or constellation visuals** in hero or background for brand identity
- **Trust/credential bar**: certified astrologer logos, certification badges, client count
- **Metrics in hero**: "95% accurate readings", "10k+ transformed lives", "20+ years expertise"
- **Typography**: Hero at `text-5xl md:text-7xl`, section headings at `text-4xl md:text-5xl`
- **Birth chart previews** or zodiac symbol previews to reduce friction in consultation process

## Development Workflow

### Adding a New Section
1. Create component in `src/components/SectionName.tsx`
2. Import `"use client"` if using state/animations
3. Use Framer Motion for scroll animations: 
   ```tsx
   <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}>
   ```
4. Import and render in `src/app/page.tsx`
5. Test on desktop and mobile at http://localhost:3000

### Styling Components
- Use Tailwind utility classes only (no CSS-in-JS or separate stylesheets)
- Dark mode: assume dark base, use `dark:` prefix for explicit overrides
- Responsive design: mobile-first (`sm:`, `md:`, `lg:`, `xl:` breakpoints)
- Reuse utility combinations via `cn()` helper: `cn("px-4 py-2", "hover:bg-violet-600")`

### Image Optimization
- Always use `next/image` with explicit `width` and `height`
- Compress images before adding (use TinyPNG or similar)
- Use WebP format when possible
- Lazy load images below the fold with `loading="lazy"`

## Testing & Linting

- **Linting**: `npm run lint` (ESLint + Next.js rules)
- **Type checking**: Built into build process via TypeScript
- **Manual testing**: Start dev server and test all sections, forms, CTA buttons on mobile/desktop

## File Structure

```
astro_app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, metadata, JSON-LD
│   │   ├── page.tsx            # Main page composition
│   │   ├── globals.css         # Global styles & Tailwind import
│   │   ├── api/                # API routes (future: consultations endpoint)
│   │   └── ...
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Consultation.tsx    # Lead gen form
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── lib/
│   │   └── utils.ts            # Helper functions (cn())
│   └── ...
├── public/                      # Static assets (zodiac icons, images)
├── docs/                        # Documentation (optional)
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── CLAUDE.md                    # This file
└── .gitignore
```

## Deployment

- **Vercel** (recommended): Zero-config deployment from git
- **Netlify**: Use `netlify.toml` (already configured)
- **Environment variables**: Add `.env.local` for API keys (never commit)
- **Static export**: No backend required; site is pre-rendered HTML/CSS/JS

## Documentation

Create/maintain the following docs as the project grows:

- `docs/api-guide.md` — consultation form submission endpoint (if added)
- `docs/design_guidelines.md` — zodiac color palette, typography, Framer Motion animation standards (use ln-114 frontend docs creator)
- `docs/project-overview.md` — high-level architecture, component hierarchy
- `docs/getting-started.md` — environment setup for new developers

## Common Issues & Solutions

### Dev server won't start
- Ensure Node.js and npm are installed
- Delete `.next/` folder and `node_modules/`, then run `npm install`
- Check port 3000 isn't already in use

### Styles not applying
- Verify Tailwind CSS is imported in `globals.css`
- Check class names are spelled correctly (no spaces or typos)
- Restart dev server after modifying `tailwind.config.js` (if created)

### Images not loading
- Use relative paths for images in `public/` folder
- Always include `width` and `height` props on `next/image`
- Check file exists in `public/` directory

### Type errors in components
- Ensure component return type is `JSX.Element` or `React.FC<Props>`
- Check all props match the interface definition
- Run `npm run lint` to catch type issues

## Future Enhancements

- **API Integration**: Birth chart calculation engine (Placidus or Vedic algorithms)
- **Database**: Store customer readings, booking schedules, testimonials
- **Authentication**: Astrologer login for managing client consultations
- **Payments**: Stripe integration for paid readings and reports
- **Real-time Chat**: Consultant-to-client live consultations
- **Personalized Dashboards**: Client area for accessing past readings and predictions
