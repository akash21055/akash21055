# Tailwind CSS v4 Integration

**Package**: tailwindcss@4.2.2 + @tailwindcss/postcss@4.2.2  
**Documentation**: https://tailwindcss.com  
**Used For**: Styling, responsive design, dark theme

---

## Overview

Tailwind CSS v4 uses a new `@import` system instead of configuration files.

```css
/* src/app/globals.css */
@import "tailwindcss";

@layer base {
  /* Base styles */
}

@layer components {
  /* Reusable component classes */
}

@layer utilities {
  /* Single-purpose utilities */
}
```

---

## Setup

### Configuration

**No `tailwind.config.js` needed by default.** Uses built-in defaults.

To customize, create `.css` file with theme variables:

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  /* Custom color palette */
  --color-primary: #a855f7;
  --color-accent: #d946ef;
  --color-base: #0a0a0f;
  
  /* Custom spacing */
  --spacing-section: 5rem;
  
  /* Custom fonts */
  --font-serif: "Georgia", serif;
}
```

### PostCSS Setup

**postcss.config.mjs** (already configured):

```javascript
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
export default config;
```

---

## Core Concepts

### Utility Classes

Single-purpose classes that do one thing:

```tsx
<div className="px-4 py-8 bg-slate-900 text-white rounded-lg">
  Content
</div>
```

Breakdown:
- `px-4` - Padding left/right: 16px
- `py-8` - Padding top/bottom: 32px
- `bg-slate-900` - Background color
- `text-white` - Text color
- `rounded-lg` - Border radius: 8px

### Responsive Breakpoints

Prefix with breakpoint:

```tsx
<div className="text-sm md:text-base lg:text-lg">
  {/* Small on mobile, medium on tablet, large on desktop */}
</div>
```

**Breakpoints:**
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

### Dark Mode

All our components use dark mode (dark by default):

```tsx
<div className="bg-white dark:bg-slate-900">
  {/* White on light mode, dark on dark mode */}
</div>
```

Our site is dark-only, so dark mode not needed (but available for future light mode).

---

## Most-Used Classes

### Spacing

```css
/* Padding */
p-4        /* 16px on all sides */
px-4       /* 16px left/right */
py-8       /* 32px top/bottom */
pt-4 pb-8  /* Different top/bottom */

/* Margin */
m-4        /* 16px on all sides */
mx-auto    /* Horizontal center */
my-12      /* 48px top/bottom */

/* Gap (grid/flex) */
gap-8      /* 32px between items */
gap-x-4    /* Horizontal gap */
gap-y-8    /* Vertical gap */
```

### Colors

```tsx
{/* Text colors */}
text-white        {/* White text */}
text-slate-300    {/* Light gray text */}
text-violet-400   {/* Violet text */}

{/* Background colors */}
bg-slate-900      {/* Dark background */}
bg-violet-600     {/* Violet background */}
bg-white/5        {/* 5% opaque white */}

{/* Border colors */}
border-slate-700
border-violet-500
```

### Typography

```css
text-sm      /* 14px */
text-base    /* 16px */
text-lg      /* 18px */
text-xl      /* 20px */
text-2xl     /* 24px */
text-4xl     /* 36px */
text-5xl     /* 48px */

font-light   /* 300 weight */
font-normal  /* 400 weight */
font-semibold {/* 600 weight */
font-bold    /* 700 weight */

leading-tight   {/* 1.25 line height */
leading-normal  {/* 1.5 line height */
leading-relaxed {/* 1.625 line height */
```

### Layout

```css
/* Flexbox */
flex           /* display: flex */
gap-4          /* Gap between items */
justify-center /* Horizontal center */
items-center   /* Vertical center */

/* Grid */
grid           /* display: grid */
grid-cols-1    /* 1 column */
grid-cols-2    /* 2 columns */
grid-cols-3    /* 3 columns */
md:grid-cols-2 {/* 2 columns on tablet */

/* Sizing */
w-full         /* width: 100% */
max-w-6xl      /* max-width: 64rem */
h-screen       /* height: 100vh */

/* Positioning */
relative       /* position: relative */
absolute       /* position: absolute */
top-0          /* top: 0 */
inset-0        /* top/right/bottom/left: 0 */
```

### Effects

```css
rounded-lg       {/* border-radius: 8px */
rounded-2xl      {/* border-radius: 16px */
rounded-full     {/* border-radius: 9999px */

shadow-lg        {/* box-shadow: 0 10px 15px ... */
shadow-2xl       {/* Larger shadow */

opacity-50       {/* opacity: 0.5 */
opacity-75       {/* opacity: 0.75 */

backdrop-blur-md {/* backdrop-filter: blur(12px) */
```

### Transitions

```css
transition-colors      {/* Animate color changes */
transition-all         {/* Animate all properties */
duration-300           {/* 300ms animation */
ease-in-out            {/* Easing function */

hover:bg-violet-700    {/* Change color on hover */
focus:outline-none     {/* Remove default focus */
```

---

## Custom Utilities

Defined in `src/app/globals.css`:

```css
@layer components {
  .btn-primary {
    @apply px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors;
  }

  .glass-card {
    @apply bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8;
  }

  .gradient-text {
    @apply bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent;
  }

  .section-container {
    @apply max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20;
  }
}
```

**Usage:**
```tsx
<button className="btn-primary">Click me</button>
<div className="glass-card">Card</div>
<h1 className="gradient-text">Title</h1>
```

---

## Responsive Design Pattern

### Mobile-First

Always start with mobile, then add breakpoints:

```tsx
{/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map(item => <div key={item.id}>{item.content}</div>)}
</div>
```

### Text Scaling

```tsx
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  Responsive heading
</h1>
```

### Display Toggle

```tsx
{/* Show on mobile, hide on desktop */}
<div className="block md:hidden">
  Mobile menu
</div>

{/* Hide on mobile, show on desktop */}
<div className="hidden md:block">
  Desktop menu
</div>
```

---

## Color Palette

### Our Dark Theme

```
Base:          #0a0a0f (slate-950)
Text Primary:  #f1f5f9 (slate-100)
Text Secondary: #cbd5e1 (slate-300)
Text Tertiary:  #94a3b8 (slate-400)

Accent 1:      #a855f7 (violet-600)
Accent 2:      #d946ef (purple-600)
Accent 3:      #ec4899 (pink-500)

Border:        rgba(255,255,255,0.1) (white/10)
Overlay:       rgba(0,0,0,0.5) (black/50)
```

### Using Colors

```tsx
{/* Named colors (predefined shades) */}
className="bg-slate-900"     {/* Shade 900 */}
className="text-violet-400"  {/* Shade 400 */}

{/* Opacity */}
className="bg-white/5"       {/* 5% opaque white */}
className="text-white/75"    {/* 75% opaque white */}

{/* Hover states */}
className="hover:bg-violet-700"
className="hover:text-violet-400"
```

---

## Performance

### Purging Unused Styles

Tailwind automatically removes unused CSS in production:

```bash
npm run build  # Builds with only used CSS (~8KB gzip)
```

Don't do this in development:
```tsx
{/* Bad: Tailwind can't find it if string is dynamic */}
className={"text-" + color + "-600"}

{/* Good: String is literal, can be found */}
className="text-violet-600"
```

---

## Do's and Don'ts

| ✅ Do | ❌ Don't | Why |
|------|---------|-----|
| Use utility classes directly | Create new CSS files | Utilities are faster to write |
| Use `@layer components` for patterns | Use `!important` | Proper cascade hierarchy |
| Use responsive classes (sm:, md:) | Media queries in CSS | More maintainable |
| Use Tailwind's scale (0, 4, 8, 12...) | Arbitrary px values | Design consistency |
| Use semantic color names | Hardcode hex codes | Easy to maintain, theme-aware |
| Use predefined spacing (gap-8, p-4) | Custom spacing (gap-7px) | Consistent design system |

---

## Troubleshooting

### Styles not applying

1. Check class name spelling (no typos)
2. Verify Tailwind import in globals.css
3. Check breakpoint syntax: `md:class`, not `md class`
4. Restart dev server: `npm run dev`

### Responsive classes not working

Ensure you're using proper syntax:

```tsx
{/* Good */}
<div className="text-sm md:text-lg">Text</div>

{/* Bad - space before breakpoint */}
<div className="text-sm md : text-lg">Text</div>

{/* Bad - missing colon */}
<div className="text-sm md text-lg">Text</div>
```

---

## v4 Changes from v3

- `@import "tailwindcss"` instead of `@tailwind`
- No `tailwind.config.js` by default
- New CSS theme API (`@theme`)
- Improved performance

See [migration guide](https://tailwindcss.com/blog/tailwindcss-v4) for details.

---

## Links

- **Tailwind Docs**: https://tailwindcss.com
- **Color Reference**: https://tailwindcss.com/docs/customizing-colors
- **Responsive Design**: https://tailwindcss.com/docs/responsive-design
- **Playground**: https://tailwindcss.com/play

---

**Version**: 4.2.2  
**Last Updated**: 2026-04-24  
**Used By**: All components and pages
