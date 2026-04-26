# Guide: Scroll Animation Pattern

**Purpose**: Document the standard scroll animation implementation using Framer Motion `whileInView`

**When to Use**: Every section component (Hero, Services, Testimonials, etc.) that needs scroll-triggered animations

---

## Principle

**Industry Standard (Framer Motion):** Use `whileInView` + `viewport={{ once: true }}` for performance-optimized scroll animations.

This approach:
- Animates when component enters viewport
- Fires only once (`once: true`) to save CPU
- Uses GPU acceleration (transforms + opacity)
- Works on mobile and desktop

---

## Our Implementation

### Basic Pattern

**File**: src/components/Hero.tsx

```tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Discover Your Cosmic Path
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Get personalized astrology readings...
      </motion.p>
    </section>
  );
}
```

### Key Parameters

| Parameter | Purpose | Example |
|-----------|---------|---------|
| `initial` | Starting state (hidden) | `{ opacity: 0, y: 20 }` (transparent, 20px down) |
| `whileInView` | Target state (visible) | `{ opacity: 1, y: 0 }` (opaque, normal position) |
| `viewport={{ once: true }}` | Animate once only | Prevents re-animation on scroll |
| `transition` | Animation speed | `{ duration: 0.5, delay: 0.1 }` |

### Grid Animation Pattern

**File**: src/components/Services.tsx

For grid layouts, stagger animations:

```tsx
<div className="grid md:grid-cols-2 gap-8">
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}  // Stagger: 0s, 0.1s, 0.2s, etc
    >
      {/* Card content */}
    </motion.div>
  ))}
</div>
```

**Effect**: Cards slide in one after another, not all at once.

### Do's and Don'ts

| ✅ Do | ❌ Don't | ℹ️ When |
|------|---------|--------|
| Use `once: true` for scroll animations | Set `once: false` (re-animates on scroll) | Wastes CPU, jittery experience |
| Stagger grid items with `delay: index * 0.1` | All items animate simultaneously | Grid animations look more dynamic |
| Keep duration 0.5-0.8s for scroll animations | Use duration > 1s for scroll (feels slow) | Users scroll past before animation completes |
| Use transforms (opacity, y, x, scale, rotate) | Use styles (width, height, padding) | Transforms use GPU, styles use CPU |
| Add `transition` for timing | Omit transition (no duration, instant) | Animation won't feel smooth |

---

## Related Components

All major sections use this pattern:

- **Hero.tsx** - Title + subtitle + CTA buttons
- **Services.tsx** - 4 service cards in grid
- **HowItWorks.tsx** - 4 step indicators
- **Testimonials.tsx** - 3 testimonial cards
- **FAQ.tsx** - Collapsible items (fade on open)

---

## Performance Notes

**Why `once: true`:**
- Prevents re-animating when user scrolls back to section
- Saves CPU/GPU resources (important on mobile)
- Users won't see jittery re-animations

**GPU-Accelerated Properties:**
```
✅ opacity - renders fast
✅ transform (translate, scale, rotate) - GPU accelerated
❌ width, height, padding - CPU intensive, avoid for animations
```

**Testing Animation Performance:**
```bash
# Open DevTools → Performance tab → Record
# Scroll page and check GPU usage
# Should see green (GPU) not red (CPU) during animations
```

---

## Advanced: Conditional Animations

Animate differently on mobile vs desktop:

```tsx
const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

<motion.div
  initial={{ opacity: 0, x: isMobile ? 0 : 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
>
  {/* Slides from side on desktop, fades on mobile */}
</motion.div>
```

---

## Links

- **Reference**: [Framer Motion whileInView](https://www.framer.com/motion/use-in-view/)
- **Examples**: See src/components/Services.tsx:15-30 for grid pattern
- **ADR Context**: [ADR-002: Styling Approach](../adrs/adr-002-styling-approach.md)

---

**Last Updated**: 2026-04-24  
**Used By**: Hero, Services, HowItWorks, Testimonials, FAQ, Consultation
