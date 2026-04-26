# Design Guidelines

## Color Palette

### Primary Colors
- **Base Dark**: `#0a0a0f` (slate-950) - Main background
- **Accent Violet**: `#a855f7` (violet-600) - Primary CTAs and highlights
- **Accent Purple**: `#d946ef` (purple-600) - Secondary accents

### Secondary Colors
- **Text Primary**: `#f1f5f9` (slate-100) - Body text
- **Text Secondary**: `#cbd5e1` (slate-300) - Description text
- **Text Tertiary**: `#94a3b8` (slate-400) - Subtle text

### Gradients
- **Main Gradient**: `from-violet-400 to-purple-400` (`.gradient-text`)
- **Glow Effects**: Blurred divs with `violet-500/20` or `purple-500/20`

## Typography

### Font Stack
```css
--font-geist-sans: 'Geist', system-ui, sans-serif;
--font-geist-mono: 'Geist Mono', monospace;
```

### Heading Sizes
- **Hero (H1)**: `text-5xl md:text-7xl` - Page title
- **Section (H2)**: `text-4xl md:text-5xl` - Section headings
- **Subsection (H3)**: `text-xl md:text-2xl` - Card titles
- **Body**: `text-base md:text-lg` - Default

### Line Heights
- **Tight**: `leading-tight` (1.25) - Headings
- **Normal**: `leading-normal` (1.5) - Body
- **Relaxed**: `leading-relaxed` (1.625) - Description text

## Spacing

### Padding/Margin
- **Container**: `section-container` = `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20`
- **Card**: `glass-card` = `p-8` (32px)
- **Gutter**: `gap-8` between sections (32px)

### Responsive Breakpoints
- **Mobile**: Default (no prefix)
- **Small**: `sm:` (640px)
- **Medium**: `md:` (768px)
- **Large**: `lg:` (1024px)
- **XL**: `xl:` (1280px)

## Components

### Buttons
```css
.btn-primary
@apply px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700

.btn-secondary
@apply px-6 py-3 border border-violet-600 text-violet-600 font-medium rounded-lg hover:bg-violet-600 hover:text-white
```

### Cards
```css
.glass-card
@apply bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8
```

### Effects
- **Glassmorphism**: `backdrop-blur-md` + `bg-white/5` + `border-white/10`
- **Glow**: Absolute positioned blurred divs with gradient colors
- **Border Radius**: `rounded-lg` (8px) for inputs, `rounded-2xl` (16px) for cards

## Animations

### Scroll Animations
All sections use Framer Motion with:
```tsx
whileInView={{ opacity: 1, y: 0 }}
initial={{ opacity: 0, y: 20 }}
viewport={{ once: true }}
```

### Transitions
- **Standard**: `transition-colors` (200ms)
- **Hover**: Color + opacity changes
- **Duration**: 0.3-0.8s for animations

## Accessibility (WCAG 2.1 AA)

### Color Contrast
- **Text on dark**: Minimum 4.5:1 ratio
- **Interactive**: Minimum 3:1 ratio
- **Testing**: Use Lighthouse or WebAIM contrast checker

### Interactive Elements
- All buttons have visible focus state
- Links are underlined or have color change
- Form inputs have labels
- Zodiac icons have alt text

### Images
- All `<img>` use `next/image`
- Always include `width` and `height`
- Descriptive `alt` text (not "image" or "icon")

## Image Guidelines

### Optimization
- Use WebP format when possible
- Compress before adding (TinyPNG, Squoosh)
- Use `loading="lazy"` for below-fold images
- Specify explicit dimensions to prevent layout shift

### Formats
- **Hero**: 1920x1080 (background)
- **Service Cards**: 400x300
- **Testimonial Avatars**: 64x64
- **Icons**: 24x24 - 48x48

## Dark Mode

The site uses dark mode by default. All colors are optimized for dark backgrounds:
- Light text on dark backgrounds
- Reduced saturation to prevent eye strain
- Sufficient contrast for readability

## Future Customization

To customize theme colors:
1. Replace Tailwind color classes in components
2. Update `globals.css` Tailwind imports
3. Adjust gradient colors in `.gradient-text`
4. Test contrast ratios with accessibility tools

See `CLAUDE.md` for technical details.
