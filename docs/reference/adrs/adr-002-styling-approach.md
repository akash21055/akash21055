# ADR-002: Styling Approach (Tailwind CSS + Framer Motion)

**Status:** Accepted  
**Date:** 2026-04-24  
**Decision Maker:** Development Team

---

## Context

The astrology website requires:
- **Dark mystical aesthetic** (slate-950 base, violet/purple accents)
- **Smooth scroll animations** (Hero, Services, Testimonials sections)
- **Interactive elements** (FAQ collapse/expand, form interactions)
- **Responsive design** (mobile-first, all breakpoints)
- **High performance** (no runtime CSS generation)

Multiple styling approaches exist:

1. **Utility-first CSS (Tailwind)** + **Animation Library (Framer Motion)**
2. **CSS-in-JS (Styled Components)** + **Gesture library**
3. **CSS Modules** + **Custom animations**
4. **Sass/SCSS** + **animation framework**
5. **Headless UI library** (shadcn/ui, Ant Design)

The choice impacts:
- Bundle size (CSS vs JS)
- Developer experience (utilities vs components)
- Performance (server-side vs runtime)
- Design consistency (framework vs custom)
- Animation capabilities

---

## Decision

**Adopted: Tailwind CSS v4 + Framer Motion 12**

Selected because:
1. **Minimal bundle size** - Tailwind produces only used CSS (~8KB gzip vs 40KB+ for styled-components)
2. **Exceptional animation library** - Framer Motion is industry-leading for React animations
3. **Developer velocity** - Utility-first approach speeds up styling without leaving HTML/JSX
4. **Performance** - No runtime CSS generation; CSS is static and pre-processed
5. **Mystical aesthetic control** - Custom utilities (`.gradient-text`, `.glass-card`) allow unique brand identity
6. **No heavy component libraries** - Hand-built components keep bundle lean and design consistent

---

## Rationale

### Bundle Size Analysis

| Approach | CSS Bundle | JS Bundle | Total | Notes |
|----------|-----------|-----------|-------|-------|
| **Tailwind + Framer Motion** | ~8KB | ~42KB (React) | ~50KB | Lean, static CSS |
| Styled Components + Gestures | ~0KB | ~65KB | ~65KB | Runtime CSS generation |
| Ant Design | ~30KB | ~80KB | ~110KB | Full component library |
| Bootstrap + Animate.css | ~20KB | ~0KB | ~20KB | No interactivity |
| shadcn/ui | ~15KB | ~45KB | ~60KB | Component library overhead |

**Chosen approach is most performant** while maintaining full interactivity.

### Animation Capabilities

**Framer Motion strengths:**
- **whileInView**: Trigger animations when component scrolls into view (perfect for marketing site)
- **gesture recognition**: Tap, hover, drag without manual listeners
- **Layout animations**: Smooth transitions when DOM updates
- **SVG support**: Animate paths and complex shapes
- **Performance**: GPU-accelerated with will-change optimization

**vs alternatives:**
- React Spring: More physics-based, less intuitive for scroll
- Animate.css: CSS-only, no scroll detection
- Custom animations: Labor-intensive, error-prone

### Design System Control

Tailwind utilities allow building custom design system:

```css
/* src/app/globals.css */
.gradient-text { @apply bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent; }
.glass-card { @apply bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8; }
.btn-primary { @apply px-6 py-3 bg-violet-600 hover:bg-violet-700 transition-colors; }
```

This provides:
- **Consistent branding** (one source of truth for colors)
- **Easy to customize** (change one class definition)
- **Fast iteration** (no CSS file hunting)
- **DRY principle** (utilities composable, not repeated)

### No Heavy Component Library

Rationale for custom components over shadcn/ui:

| Aspect | Custom | shadcn/ui |
|--------|--------|-----------|
| **Control** | 100% | Limited to component API |
| **Bundle** | 0KB overhead | ~15KB overhead |
| **Design consistency** | Guaranteed | Depends on overrides |
| **Performance** | Optimized | General-purpose |
| **Mystical aesthetic** | Custom brand | Generic design tokens |

**Verdict:** For a marketing site with specific aesthetic (mystical), custom components give better control and smaller bundle.

---

## Alternatives Considered

### CSS-in-JS (Styled Components)

**Pros:**
- Component-scoped styles (no naming conflicts)
- Dynamic styling based on props
- Full JavaScript power in styles

**Cons:**
- Runtime CSS generation (~8KB overhead)
- Slower performance (FOUC potential)
- Bundle includes unused styles
- More boilerplate (styled`` template literals)

**Verdict:** Rejected due to performance impact and bundle size.

### CSS Modules + Custom Animations

**Pros:**
- Zero runtime cost
- Scoped CSS naturally
- Works without JavaScript

**Cons:**
- More verbose (separate .module.css files)
- Custom animations harder (need Keyframes in CSS)
- Less ergonomic developer experience
- Requires SCSS for variables/mixins

**Verdict:** Rejected; Tailwind achieves same benefits with better DX.

### Ant Design / Material-UI

**Pros:**
- Rich component library
- Accessibility built-in
- Well-documented

**Cons:**
- Large bundle (80KB+)
- Requires theme customization for mystical aesthetic
- Over-engineered for marketing site
- Generic design (not unique brand)

**Verdict:** Rejected due to bundle size and inflexibility.

### shadcn/ui

**Pros:**
- Modern component library
- Smaller than Ant/Material
- Copy-paste components (own them)

**Cons:**
- Still ~15KB overhead
- Components designed for enterprise apps
- Generic design tokens
- Less control over final output

**Verdict:** Rejected for custom mystical aesthetic and performance.

---

## Consequences

### Positive

✅ **Small bundle**: Tailwind + Framer Motion is ~50KB total (lean)  
✅ **Great animations**: Framer Motion whileInView perfect for marketing sections  
✅ **Developer velocity**: Utilities speed up styling without leaving JSX  
✅ **Unique branding**: Custom utilities (.gradient-text, .glass-card) ensure brand identity  
✅ **Performance**: Static CSS, no runtime overhead, GPU-accelerated animations  
✅ **Easy customization**: Change colors/spacing in one place  

### Negative

⚠️ **Manual components**: Must build UI components (no pre-built library)  
⚠️ **Learning curve**: Tailwind utilities require learning class names  
⚠️ **HTML verbosity**: Long className strings (mitigated by custom utilities)  
⚠️ **Animation complexity**: Framer Motion has steeper learning curve than CSS  

### Neutral

◌ **No TypeScript for animations**: Framer Motion relies on prop inference  
◌ **Need Lucide for icons**: Must add separate icon library (small: 0.5KB icons used)  

---

## Implementation

### Tailwind Setup
```typescript
// tailwind.config.js (NOT used - v4 uses @import)
// Instead: @import "tailwindcss" in globals.css
```

### Framer Motion Pattern
```tsx
// Common scroll animation pattern
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Custom Utilities
```css
/* src/app/globals.css */
@layer components {
  .gradient-text { @apply bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent; }
  .glass-card { @apply bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8; }
  .btn-primary { @apply px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors; }
}
```

---

## Performance Metrics

Expected Core Web Vitals:
- **LCP** < 2.5s (images optimized with next/image)
- **CLS** < 0.1 (explicit dimensions, animations use transforms)
- **FID** < 100ms (small JS bundles, optimized animations)

Tailwind CSS gzip sizes by build:
- Tailwind: ~8KB (only used utilities)
- Framer Motion: ~20KB (animation library)
- React: ~42KB (bundled by Next.js)
- **Total CSS/JS for page: ~70KB** (excellent for performance)

---

## Related Decisions

- **ADR-001**: Frontend Framework (Next.js chosen for fast deployment)
- **ADR-003**: Component Architecture (Client components for animations)
- **ADR-004**: Type Safety (TypeScript strict mode)

## Links

- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Glassmorphism Pattern](https://glassmorphism.com/)

---

**Version:** 1.0  
**Last Updated:** 2026-04-24
