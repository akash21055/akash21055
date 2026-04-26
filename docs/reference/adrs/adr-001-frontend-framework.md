# ADR-001: Frontend Framework Selection (Next.js)

**Status:** Accepted  
**Date:** 2026-04-24  
**Decision Maker:** Development Team

---

## Context

The astrology website requires a modern frontend framework to build:
- Marketing landing page with multiple sections
- Smooth scroll animations and interactions
- Server-side rendering for SEO optimization
- Fast deployments to edge networks
- Type-safe component development

Multiple mature frameworks exist with different tradeoffs:
- **Next.js** (React-based, App Router)
- **Vue** with Nuxt (alternative to React ecosystem)
- **Svelte** (compiler-based, smaller bundles)
- **SPA with Vite** (lightweight, but less built-in)

The choice significantly impacts:
- Development ergonomics and team familiarity
- Build and deployment complexity
- Performance characteristics
- Ecosystem maturity
- Long-term maintainability

---

## Decision

**Adopted: Next.js 16 (App Router) with React 19**

Selected over alternatives due to:
1. **React ecosystem maturity** - Largest community, most libraries, extensive examples
2. **Full-stack capability** - App Router with API routes enables future backend integration
3. **Built-in SSR/SSG** - SEO optimization without extra configuration
4. **Vercel integration** - Zero-config deployment to edge network
5. **Type safety** - First-class TypeScript support with strict mode

---

## Rationale

### Ecosystem Strength
React's dominance in enterprise development means:
- Largest number of compatible libraries (Framer Motion, Lucide, etc.)
- Most job candidates have React experience
- Easiest team onboarding for new developers
- Longest-term support and library ecosystem stability

### Development Experience
Next.js provides:
- **App Router**: Modern file-system based routing (src/app/)
- **Server Components**: RSCs for data fetching without client-side overhead
- **Image Optimization**: `next/image` with automatic WebP/AVIF
- **API Routes**: Backend endpoints without separate server (src/app/api/)
- **Automatic Code Splitting**: Per-page bundles without configuration

### Business Value
- **Fast Time to Market**: Convention-over-configuration reduces setup
- **Scalability Path**: Easy to add backend services as platform grows
- **SEO Ready**: Built-in SSR and static generation for search rankings
- **Performance**: Image optimization and edge deployment built-in
- **Cost**: Vercel's hobby tier is free; pay only for scale

### Type Safety
- **TypeScript Strict Mode**: Catches errors at compile time
- **React.FC Types**: Component props validated automatically
- **Path Aliases**: @/* imports prevent relative path errors

---

## Alternatives Considered

### Vue + Nuxt

**Pros:**
- Smaller bundle size (~30KB vs React ~42KB)
- Simpler template syntax for designers
- Composition API similar to modern React hooks
- Growing ecosystem

**Cons:**
- Smaller ecosystem than React
- Fewer UI libraries and tooling
- Less common in job market (harder hiring)
- Team already familiar with React

**Verdict:** Rejected due to smaller ecosystem and less team experience.

### Svelte + SvelteKit

**Pros:**
- Smallest production bundles (compiler-based)
- Shortest learning curve (HTML-like syntax)
- Excellent animation capabilities (built-in transitions)
- Reactive by design

**Cons:**
- Much smaller community than React/Vue
- Fewer libraries and integrations
- Smaller job market
- Less suitable for complex apps

**Verdict:** Rejected due to smaller ecosystem and team familiarity gap.

### Vite + React SPA (Client-Side)

**Pros:**
- Extremely fast development experience
- Lightweight (no framework overhead)
- Simpler to understand (pure JavaScript)

**Cons:**
- No built-in SSR/SSG (SEO harder)
- Requires separate backend for API
- No automatic code splitting
- No image optimization

**Verdict:** Rejected due to missing SSR for SEO needs and deployment complexity.

---

## Consequences

### Positive

✅ **Strong ecosystem**: Access to Framer Motion, Lucide, TailwindCSS, and 1000s of React libraries  
✅ **Team expertise**: Most developers know React, reducing onboarding time  
✅ **Scalability**: Easy to add API routes and backend services as platform grows  
✅ **SEO ready**: Built-in SSR/SSG for search engine optimization  
✅ **Deployment**: Vercel integration provides edge deployment with zero config  
✅ **Performance**: `next/image` and code splitting optimize Core Web Vitals  

### Negative

⚠️ **Bundle size**: React (~42KB gzip) is larger than Svelte/Vue alternatives  
⚠️ **Learning curve**: New developers need to learn React concepts  
⚠️ **Vendor lock-in**: Vercel provides best experience (though deploy elsewhere possible)  
⚠️ **Complexity**: More powerful than needed for static sites (but future-proof)  

### Neutral

◌ **Server components**: Requires understanding of RSC vs Client components  
◌ **Ecosystem decisions**: Must choose between many UI libraries (not built-in like Vue/Svelte)  

---

## Implementation Notes

### Current Setup
```
Next.js 16 (App Router)
├── React 19
├── TypeScript 6 (strict mode)
├── Tailwind CSS 4 (utility-first styling)
├── Framer Motion 12 (scroll animations)
└── Lucide React (icon library)
```

### Component Architecture
- **Server Components** (`src/app/layout.tsx`): Layout, metadata, no interactivity
- **Client Components** (`"use client"`): Interactive sections with animations
- **Reusable Components** (`src/components/`): 8 section-based components

### Performance Targets
- LCP < 2.5s (build-in SSR helps)
- CLS < 0.1 (explicit image dimensions)
- FID < 100ms (code splitting + lazy hydration)

---

## Related Decisions

- **ADR-002**: Styling Approach (Tailwind + Framer Motion)
- **ADR-003**: Component Architecture (Server + Client Components)
- **ADR-004**: Type Safety (TypeScript Strict Mode)

## Links

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Vercel Deployment](https://vercel.com)

---

**Version:** 1.0  
**Last Updated:** 2026-04-24
