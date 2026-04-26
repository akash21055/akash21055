# Project Overview

## What is AstroGuide?

AstroGuide is a modern astrology services website that provides:
- **Birth chart readings** - Natal chart analysis
- **Compatibility reports** - Relationship astrology
- **Life guidance** - Transit and progression analysis
- **Horoscope consultations** - Monthly/yearly forecasts

The site is a **marketing and lead generation platform** designed to:
1. Showcase astrology services
2. Build trust with social proof
3. Collect consultation requests via form submission

## Technology Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Scroll and interactive animations
- **Lucide React** - Icon library

### Styling & UX
- **Dark theme** (slate-950 base with violet/purple accents)
- **Glassmorphism** design (blur + transparency)
- **Responsive** mobile-first design
- **Accessibility** (WCAG 2.1 Level AA)

### Build & Deploy
- **TypeScript compilation** for type safety
- **ESLint** for code quality
- **Next.js production build** for performance
- **Vercel or Netlify** deployment

## Architecture

### Page Composition

The homepage (`src/app/page.tsx`) is composed of 8 major sections:

```
┌─────────────────────────────────────┐
│          Navbar (Sticky)            │  - Navigation, booking button
├─────────────────────────────────────┤
│            Hero Section             │  - Main value prop, CTAs
├─────────────────────────────────────┤
│         Services (Grid 2x2)         │  - 4 service offerings
├─────────────────────────────────────┤
│        How It Works (Grid 4)        │  - 4-step process
├─────────────────────────────────────┤
│       Testimonials (Grid 3)         │  - Client success stories
├─────────────────────────────────────┤
│      FAQ (Collapsible)              │  - Common questions
├─────────────────────────────────────┤
│   Consultation Form (Lead Gen)      │  - Email capture
├─────────────────────────────────────┤
│          Footer                     │  - Links, contact info
└─────────────────────────────────────┘
```

### Component Hierarchy

```
App Router (src/app/)
  ├── Layout (metadata, JSON-LD, fonts)
  ├── Page (composition of sections)
  └── Components (src/components/)
      ├── Navbar
      ├── Hero
      ├── Services
      ├── HowItWorks
      ├── Testimonials
      ├── FAQ
      ├── Consultation
      └── Footer
```

### Data Flow

```
User Interaction (Form)
    ↓
Consultation.tsx (Form component)
    ↓
API Route (src/app/api/consultations/route.ts) - Optional
    ↓
Email Service (Resend, Formspree, Custom)
    ↓
Success Message & Notifications
```

## Key Features

### 1. Performance Optimization
- `next/image` for all images (lazy loading, WebP)
- Code splitting by component
- CSS-in-JS via Tailwind (critical CSS only)
- No third-party scripts above the fold

### 2. SEO
- Metadata in `layout.tsx` (title, description, OG tags)
- JSON-LD schema (LocalBusiness, ProfessionalService)
- Semantic HTML (header, main, footer, nav)
- Section `id` attributes for anchor links

### 3. Accessibility
- WCAG 2.1 Level AA compliance
- Color contrast ratio ≥ 4.5:1
- ARIA labels on icon-only buttons
- Form labels properly associated with inputs
- Keyboard navigation support

### 4. User Experience
- Smooth scroll animations (Framer Motion)
- Glassmorphism design for premium feel
- Gradient text and glow effects
- Responsive grid layouts
- Interactive FAQ with collapse/expand

## File Structure Explained

```
astro_app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, SEO metadata, JSON-LD
│   │   ├── page.tsx            # Homepage composition
│   │   ├── globals.css         # Tailwind imports, custom utilities
│   │   └── api/                # API routes (consultations endpoint)
│   │
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation header
│   │   ├── Hero.tsx            # Hero section with CTA
│   │   ├── Services.tsx        # 4 service cards
│   │   ├── HowItWorks.tsx      # 4-step process
│   │   ├── Testimonials.tsx    # 3 testimonial cards
│   │   ├── FAQ.tsx             # Collapsible FAQ section
│   │   ├── Consultation.tsx    # Lead generation form
│   │   └── Footer.tsx          # Footer with links
│   │
│   └── lib/
│       └── utils.ts            # cn() helper for Tailwind classes
│
├── public/                      # Static assets (images, icons)
├── docs/
│   ├── getting-started.md      # Setup instructions
│   ├── api-guide.md            # Form submission integration
│   ├── design-guidelines.md    # Color, typography, components
│   └── project-overview.md     # This file
│
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
├── eslint.config.mjs           # Linting rules
├── postcss.config.mjs          # CSS processing
├── CLAUDE.md                   # Development guide for Claude
├── README.md                   # Project README
└── .gitignore                  # Git exclusions
```

## Development Workflow

### Adding a New Feature

1. **Create a component** in `src/components/`
2. **Use TypeScript** for type safety
3. **Apply Tailwind classes** for styling
4. **Add Framer Motion** for animations
5. **Import in `page.tsx`** to display
6. **Test responsive design** at different breakpoints

### Making Changes

1. **Edit files** in `src/`
2. **Dev server auto-reloads** (HMR)
3. **Check browser** for visual changes
4. **Type check**: `npm run lint`
5. **Commit** to git

### Performance Checklist

- [ ] Use `next/image` for all images
- [ ] Set explicit width/height on images
- [ ] Lazy load below-fold images
- [ ] Minimize bundle size (check imports)
- [ ] Defer non-critical third-party scripts
- [ ] Test Core Web Vitals in Lighthouse

## Future Roadmap

### Phase 1 (MVP - Current)
- ✅ Marketing website
- ✅ Service showcase
- ✅ Lead generation form
- ⏳ Form submission email

### Phase 2 (Platform)
- [ ] Birth chart calculation API
- [ ] Customer database
- [ ] Booking system
- [ ] Astrologer profiles

### Phase 3 (Enhancement)
- [ ] Payment processing (Stripe)
- [ ] Customer dashboard
- [ ] Reading archives
- [ ] Real-time chat

### Phase 4 (Scale)
- [ ] Mobile app (React Native)
- [ ] AI-assisted readings
- [ ] Subscription model
- [ ] Community forum

## Maintenance

### Regular Tasks
- Update dependencies: `npm update`
- Check for security vulnerabilities: `npm audit`
- Monitor performance with Lighthouse
- Update content and testimonials
- Fix reported bugs

### Deployment
- **Staging**: Test on Vercel preview
- **Production**: Deploy to main branch
- **Rollback**: Revert commit if needed
- **Monitoring**: Check uptime and errors

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **TypeScript**: https://www.typescriptlang.org/docs

See `CLAUDE.md` for development guidance and `README.md` for quick start.
