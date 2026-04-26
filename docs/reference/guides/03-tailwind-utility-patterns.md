# Guide: Tailwind Utility Patterns

**Purpose**: Document custom Tailwind utilities and common class compositions for consistent styling

**When to Use**: Every time styling a component

---

## Principle

**Industry Standard (Tailwind)**: Use utility-first CSS with custom component utilities for reusable patterns.

Our approach:
- Common patterns → custom utilities (`.btn-primary`, `.glass-card`)
- One-off styles → inline utilities (direct `className` props)
- Keep components focused (styling is separated from markup)

---

## Custom Utilities

**File**: src/app/globals.css

All custom utilities are defined here for single source of truth:

### Buttons

```css
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors;
  }

  .btn-secondary {
    @apply px-6 py-3 border border-violet-600 text-violet-600 font-medium rounded-lg hover:bg-violet-600 hover:text-white transition-colors;
  }
}
```

**Usage**:
```tsx
<button className="btn-primary">Book Reading</button>
<button className="btn-secondary">Learn More</button>
```

### Cards

```css
@layer components {
  .glass-card {
    @apply bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8;
  }
}
```

**Usage**:
```tsx
<motion.div className="glass-card">
  <h3>Service Title</h3>
  <p>Service description</p>
</motion.div>
```

**What it does:**
- `bg-white/5` - 5% opaque white background (glassmorphism effect)
- `backdrop-blur-md` - Medium blur of background (frosted glass)
- `border border-white/10` - Subtle light border
- `rounded-2xl` - Large border radius (16px)
- `p-8` - 32px padding on all sides

### Containers & Spacing

```css
@layer components {
  .section-container {
    @apply max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20;
  }

  .section-title {
    @apply text-4xl md:text-5xl font-bold text-center mb-12;
  }
}
```

**Usage**:
```tsx
<section className="section-container">
  <h2 className="section-title">Services</h2>
  {/* Content */}
</section>
```

### Effects

```css
@layer components {
  .gradient-text {
    @apply bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent;
  }
}
```

**Usage**:
```tsx
<h1 className="gradient-text">Discover Your Cosmic Path</h1>
```

---

## Common Utility Patterns

### Do's and Don'ts

| ✅ Do | ❌ Don't | Why |
|------|---------|-----|
| Use custom utilities for repeated patterns | Repeat same utilities everywhere | DRY principle (Don't Repeat Yourself) |
| Use `@apply` in globals.css | Use styled-components or inline styles | Keeps CSS centralized, easy to maintain |
| Use Tailwind variables for colors | Hardcode hex codes | Single source of truth for brand colors |
| Use responsive classes (sm:, md:, lg:) | Target breakpoints with CSS media queries | Inline responsive = more maintainable |
| Use spacing scale (px-4, py-8) | Hardcode pixel values | Consistent spacing, easy to adjust |
| Use opacity variants (bg-white/5) | Use rgba() in CSS | Tailwind's opacity scale is more consistent |

---

## Color System

**Dark Theme - Mystical Palette**

```css
/* Primary Colors */
--color-base: #0a0a0f (slate-950)       /* Dark background */
--color-text-primary: #f1f5f9 (slate-100)    /* Body text */
--color-text-secondary: #cbd5e1 (slate-300)  /* Description */

/* Accent Colors */
--color-accent-1: #a855f7 (violet-600)  /* Primary CTA */
--color-accent-2: #d946ef (purple-600)  /* Secondary */
--color-accent-3: #ec4899 (pink-500)    /* Alerts (unused) */

/* Utilities */
--color-border: rgba(255, 255, 255, 0.1) (white/10)
--color-overlay: rgba(0, 0, 0, 0.5) (black/50)
```

**Usage in Components:**

```tsx
{/* Text colors */}
<p className="text-slate-300">Secondary text</p>

{/* Background with gradient */}
<div className="bg-gradient-to-r from-violet-600 to-purple-600">
  Content
</div>

{/* Hover effects */}
<button className="hover:bg-violet-700 transition-colors">
  Hover me
</button>
```

---

## Responsive Design Patterns

### Grid Layouts

**1 column on mobile, 2 on tablet, 4 on desktop:**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {items.map(item => <div key={item.id}>{item.name}</div>)}
</div>
```

### Text Scaling

**Scale text for different screen sizes:**
```tsx
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
  Heading that scales
</h1>
```

### Spacing Patterns

```tsx
{/* Mobile: small padding, Desktop: large padding */}
<div className="px-4 sm:px-6 lg:px-8">
  Content
</div>

{/* Vertical spacing */}
<section className="py-12 sm:py-16 lg:py-20">
  Content
</section>
```

---

## Common Classes Reference

### Text Styling

| Class | Purpose | Example |
|-------|---------|---------|
| `text-{color}-{shade}` | Text color | `text-slate-300` |
| `font-{weight}` | Font weight | `font-semibold` |
| `text-{size}` | Font size | `text-lg` |
| `leading-{height}` | Line height | `leading-relaxed` |
| `text-center` | Text alignment | Centered text |

### Spacing

| Class | Purpose | Pixels |
|-------|---------|--------|
| `p-{n}` | Padding | px-4 = 16px |
| `m-{n}` | Margin | my-8 = 32px |
| `gap-{n}` | Grid gap | gap-8 = 32px |
| `space-y-{n}` | Vertical spacing | space-y-4 = 16px between children |

### Layout

| Class | Purpose | Example |
|-------|---------|---------|
| `flex` | Flexbox | `flex gap-4` |
| `grid` | CSS Grid | `grid grid-cols-3` |
| `mx-auto` | Horizontal center | Center block |
| `max-w-{n}` | Max width | `max-w-6xl` |
| `relative/absolute` | Positioning | Absolute positioned elements |

### Effects

| Class | Purpose | Example |
|-------|---------|---------|
| `rounded-{n}` | Border radius | `rounded-xl` |
| `shadow-{n}` | Box shadow | `shadow-lg` |
| `opacity-{n}` | Transparency | `opacity-50` |
| `backdrop-blur-{n}` | Background blur | `backdrop-blur-md` |
| `transition-{prop}` | Animation | `transition-colors` |

---

## Performance Tips

### Avoid These in Tailwind

❌ Arbitrary values slow down TypeScript:
```tsx
{/* Bad: TypeScript can't validate */}
<div style={{ width: "347px" }}>
```

✅ Use Tailwind's scale instead:
```tsx
{/* Good: Uses Tailwind scale (0, 4, 8, 12, ..., 96) */}
<div className="w-96">
```

### Color Accessibility

All text colors must maintain 4.5:1 contrast ratio:

```tsx
{/* Good: slate-100 on slate-950 = ~20:1 contrast */}
<p className="text-slate-100 bg-slate-950">High contrast ✓</p>

{/* Bad: slate-400 on slate-950 = ~2:1 contrast */}
<p className="text-slate-400 bg-slate-950">Too light ✗</p>
```

---

## Modifying Utilities

### Change Button Color

In `src/app/globals.css`:

```css
.btn-primary {
  @apply px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors;
}
```

Now all `.btn-primary` buttons are blue instead of violet.

### Add New Utility

To add a new pattern used multiple times:

```css
@layer components {
  .card-shadow {
    @apply shadow-lg hover:shadow-2xl transition-shadow;
  }
}
```

Then use:
```tsx
<div className="card-shadow">Card with shadow</div>
```

---

## Links

- **Tailwind Docs**: https://tailwindcss.com/docs
- **Color Reference**: https://tailwindcss.com/docs/customizing-colors
- **Examples**: See src/components/ files for real usage
- **ADR Context**: [ADR-002: Styling Approach](../adrs/adr-002-styling-approach.md)

---

**Last Updated**: 2026-04-24  
**Used By**: All components
