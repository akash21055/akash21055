# ADR-003: Component Architecture (Server + Client Components)

**Status:** Accepted  
**Date:** 2026-04-24  
**Decision Maker:** Development Team

---

## Context

Next.js 13+ introduced React Server Components (RSCs), changing how we split responsibility:

**Server Components (default):**
- Run only on server
- No JavaScript in browser
- Direct database access possible
- Can use secrets safely

**Client Components (`"use client"`):**
- Run in browser
- Have state, hooks, browser APIs
- Can't access backend directly
- Must be explicitly marked

Architecture choice impacts:
- **Performance**: Server components reduce JS bundle
- **Interactivity**: Client components enable state/events
- **Security**: Server components hide secrets
- **Developer experience**: Mixed model is more complex

**Decision**: Should we use:
1. **Server-first architecture** (most components server, minimal client)
2. **Client-heavy** (everything client like traditional React)
3. **Hybrid** (split based on needs)

---

## Decision

**Adopted: Hybrid Server-First Architecture**

Components are split by responsibility:

**Server Components** (src/app/):
- `layout.tsx` - Root layout, metadata, JSON-LD schema
- `page.tsx` - Page composition (renders all sections)

**Client Components** (src/components/):
- `Navbar.tsx` - Sticky header, navigation interactions
- `Hero.tsx` - Animations, layout shift on scroll
- `Services.tsx` - Card grid with animations
- `HowItWorks.tsx` - Step counter animations
- `Testimonials.tsx` - Testimonial carousel (future)
- `FAQ.tsx` - Collapse/expand state
- `Consultation.tsx` - Form state and submission
- `Footer.tsx` - Links, no state needed (but marked "use client" for clarity)

**Rationale:**
1. **SEO at layout level** - Server components can inject JSON-LD schema
2. **Small JS bundle** - Only interactive components use client-side JS
3. **Smooth transitions** - Client components handle animations without server round-trips
4. **Future-proof** - Easy to move data fetching to server when backend added

---

## Rationale

### Performance Benefit

**Server-First Approach Metrics:**
```
Server Components: 0KB JavaScript (renders on server, sends HTML)
Client Components: ~42KB React + ~20KB Framer Motion + ~15KB app JS = ~77KB

Total client JS: ~77KB (already optimized)

vs Full-Client SPA: Would be ~120KB+ (React + router + all component code)
```

**Savings:** ~40KB JavaScript not sent to browser = faster initial page load

### SEO Advantage

Server components enable:
- **Metadata injection** - `layout.tsx` sets `<title>`, `<meta>` server-side
- **JSON-LD schema** - Structured data generated on server for crawlers
- **OG tags** - Social media preview data generated before HTML sent

**Current setup:**
```typescript
// src/app/layout.tsx (Server Component)
export const metadata: Metadata = {
  title: "Astrology Readings & Consultations",
  description: "Get personalized astrology...",
};
```

Client components can't set metadata, so layout must be server.

### Developer Experience

**Server-first is intuitive:**
1. Components are server by default (simpler mental model)
2. Mark `"use client"` only when needing state/hooks/events
3. No guessing about component type

**vs alternatives:**
- All-client is easier initially but harder to optimize
- Server-first requires understanding RSC boundary, but better long-term

### Future Scalability

As platform grows (backend API, database):
- Server components can call API during render
- No need for useEffect() API calls
- Data is fetched before HTML sent (better performance)

**Example:**
```typescript
// Future: Fetch testimonials from database
async function TestimonialsSection() {
  const testimonials = await db.testimonials.findAll();
  return <TestimonialCards data={testimonials} />;
}
```

---

## Alternatives Considered

### Option 1: All-Client (Traditional SPA)

**Pros:**
- Simpler mental model (all code is client)
- No RSC complexity
- Works with any backend API

**Cons:**
- Larger JavaScript bundle sent to browser
- SEO harder (crawlers don't run JavaScript well)
- Metadata set client-side (slower social sharing)
- More useEffect() boilerplate

**Verdict:** Rejected; wastes performance and SEO benefits of Next.js.

### Option 2: All-Server (No Client Components)

**Pros:**
- Smallest bundle possible
- All data fetching server-side
- Strong security (secrets safe)

**Cons:**
- **No interactivity** - Can't have animations, state, form submission
- Marketing site needs smooth animations (would look static)
- FAQ collapse/expand impossible
- Form would require full page refresh

**Verdict:** Rejected; marketing site requires interactivity (animations, forms).

### Option 3: Strict Separation

Create boundary layer between server and client:

**Pros:**
- Clear separation of concerns
- Each component type has single responsibility

**Cons:**
- Extra wrapper components
- More boilerplate
- Harder to refactor across boundary

**Verdict:** Rejected; our current pragmatic split is cleaner.

---

## Consequences

### Positive

✅ **Optimized bundle**: Only interactive components ship JavaScript  
✅ **SEO-friendly**: Server components handle metadata and schema  
✅ **Future-proof**: Easy to add backend API and data fetching  
✅ **Secure by default**: Secrets safe in server components  
✅ **Simpler code**: Default server components, opt-in to "use client"  

### Negative

⚠️ **Complexity**: Must understand RSC boundary and when to use each type  
⚠️ **Can't pass client props easily**: Some props must be serializable  
⚠️ **State management**: Props drilling if many levels of client components  
⚠️ **Async/await**: Server components require understanding async rendering  

### Neutral

◌ **All code in src/components is client**: Could mix in future when data fetching needed  
◌ **Folder structure**: Could reorganize (src/server-components/ and src/client-components/)  

---

## Implementation Notes

### Current Pattern

```
src/
├── app/
│   ├── layout.tsx          # Server Component (metadata, JSON-LD)
│   ├── page.tsx            # Server Component (composition only)
│   └── globals.css         # Styles (shared)
└── components/
    ├── Navbar.tsx          # Client Component ("use client", sticky)
    ├── Hero.tsx            # Client Component ("use client", animations)
    ├── Services.tsx        # Client Component (animations)
    ├── HowItWorks.tsx      # Client Component (animations)
    ├── Testimonials.tsx    # Client Component (animations)
    ├── FAQ.tsx             # Client Component (state: openIndex)
    ├── Consultation.tsx    # Client Component (form state)
    └── Footer.tsx          # Client Component (for clarity)
```

### When to Use Client Components

Use `"use client"` when component needs:

| Need | Example |
|------|---------|
| **State** | `const [openIndex, setOpenIndex] = useState()` |
| **Effects** | `useEffect(() => {})` |
| **Hooks** | `useContext()`, custom hooks |
| **Listeners** | `onClick`, `onSubmit`, event handlers |
| **Browser APIs** | `localStorage`, `window`, `document` |
| **Animations** | Framer Motion `whileInView`, `useAnimation()` |

### When to Stay Server

Stay server if component:
- Only renders static content
- Just composes other components
- Fetches data (future use case)
- Sets metadata

---

## Migration Path

**If platform grows:**

1. **Add backend API** → Server components can fetch from api/
2. **Database queries** → Use Prisma in server components
3. **State management** → Keep client components for interactive UI, server for data
4. **Authentication** → Server components get session from cookies
5. **Full-stack app** → Some pages become complex with both server and client logic

---

## Related Decisions

- **ADR-001**: Frontend Framework (Next.js chosen specifically for RSCs)
- **ADR-002**: Styling Approach (Client components use Tailwind + Framer Motion)
- **ADR-004**: Type Safety (TypeScript helps with RSC boundaries)

## Links

- [React Server Components](https://react.dev/reference/rsc/use-client)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Server vs Client Components Guide](https://nextjs.org/docs/app/building-your-application/rendering/server-and-client-components)

---

**Version:** 1.0  
**Last Updated:** 2026-04-24
