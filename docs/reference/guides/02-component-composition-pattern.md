# Guide: Component Composition Pattern

**Purpose**: Document how to structure page sections as independent, reusable components

**When to Use**: Every new section added to the homepage

---

## Principle

**Industry Standard**: Compose pages from modular section components, each with single responsibility.

Benefits:
- Each section can be tested independently
- Components are reusable (move to another page)
- Easy to add/remove sections without affecting others
- Clear ownership (each component has clear purpose)

---

## Our Implementation

### Section Component Template

**File Structure:**
```
src/
├── app/
│   └── page.tsx           # Page composition (imports all sections)
└── components/
    ├── Navbar.tsx         # Navigation section
    ├── Hero.tsx           # Hero section
    ├── Services.tsx       # Services showcase section
    ├── HowItWorks.tsx     # Process explanation section
    ├── Testimonials.tsx   # Social proof section
    ├── FAQ.tsx            # Frequently asked questions
    ├── Consultation.tsx   # Lead generation form
    └── Footer.tsx         # Footer section
```

### Component Structure

Each section follows this pattern:

```tsx
"use client";

import { motion } from "framer-motion";

interface SectionProps {
  // Optional: section-specific props
  title?: string;
}

export default function SectionName({ title }: SectionProps) {
  return (
    <section id="section-id" className="section-container">
      {/* Section-specific styles and content */}
    </section>
  );
}
```

### Page Composition

**File**: src/app/page.tsx

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Consultation />
      <Footer />
    </main>
  );
}
```

### Section Container Pattern

All sections use the `section-container` utility for consistent spacing:

**Definition** (src/app/globals.css):
```css
@layer components {
  .section-container {
    @apply max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20;
  }
}
```

**Usage** (src/components/Services.tsx):
```tsx
<section id="services" className="section-container">
  <h2 className="section-title">Our Services</h2>
  {/* Content */}
</section>
```

**Result**: Consistent padding, max-width, responsive gutters across all sections

---

## Building a New Section

### Step 1: Create Component File

**File**: src/components/MyNewSection.tsx

```tsx
"use client";

export default function MyNewSection() {
  return (
    <section id="my-section" className="section-container">
      <h2 className="section-title">Section Title</h2>
      <p>Section content here</p>
    </section>
  );
}
```

### Step 2: Add to Page Composition

**File**: src/app/page.tsx

```tsx
import MyNewSection from "@/components/MyNewSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* ... other sections ... */}
      <MyNewSection />  {/* ← Add your section here */}
      <Footer />
    </main>
  );
}
```

### Step 3: Add Animations

```tsx
"use client";

import { motion } from "framer-motion";

export default function MyNewSection() {
  return (
    <section id="my-section" className="section-container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Section Title
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        Section content here
      </motion.p>
    </section>
  );
}
```

---

## Section Patterns

### Do's and Don'ts

| ✅ Do | ❌ Don't | ℹ️ Why |
|------|---------|--------|
| Import from `@/components` | Use relative paths `../components` | Path alias cleaner, works from any depth |
| Add `id="section-id"` to section | Omit id attribute | Enables anchor links (#services jumps to section) |
| Use `section-container` for spacing | Add custom padding | Consistent spacing across site |
| Mark with `"use client"` if using hooks | Mix server and client unclear | Clear where JavaScript is needed |
| Name component same as section | Generic name like `Card` | Easier to find in code |
| Keep section focused (single purpose) | Pack multiple purposes in one | Easier to test and maintain |

---

## Examples

### Cards Grid

**Services.tsx** - Display 4 service cards:

```tsx
<div className="grid md:grid-cols-2 gap-8">
  {services.map((service, index) => (
    <motion.div key={index} className="glass-card">
      <Icon /> {/* Icon component */}
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </motion.div>
  ))}
</div>
```

### Numbered Steps

**HowItWorks.tsx** - Display 4 steps:

```tsx
<div className="grid md:grid-cols-4 gap-8">
  {steps.map((step, index) => (
    <motion.div key={index} className="text-center">
      <div className="flex justify-center mb-4">
        <span className="text-2xl font-bold text-violet-400">
          {step.number}
        </span>
      </div>
      <h3>{step.title}</h3>
      <p className="text-slate-400">{step.description}</p>
    </motion.div>
  ))}
</div>
```

### Form Section

**Consultation.tsx** - Collect user data:

```tsx
<form onSubmit={handleSubmit} className="space-y-6">
  <input
    type="text"
    name="name"
    placeholder="Your name"
    onChange={handleChange}
    required
  />
  {/* More form fields */}
  <button type="submit" className="btn-primary">
    Request Reading
  </button>
</form>
```

---

## Component Naming

**Rule**: Name component after its primary section

| Component | Section Name | ID Attribute |
|-----------|--------------|--------------|
| Hero.tsx | Hero | `id="hero"` |
| Services.tsx | Services | `id="services"` |
| HowItWorks.tsx | How It Works | `id="how-it-works"` |
| Testimonials.tsx | Testimonials | `id="testimonials"` |
| FAQ.tsx | FAQ | `id="faq"` |
| Consultation.tsx | Consultation | `id="consultation"` |

---

## Responsive Design Pattern

All sections are responsive mobile-first:

```tsx
{/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Items */}
</div>
```

**Breakpoints**:
- `sm:` - 640px (small phones)
- `md:` - 768px (tablets)
- `lg:` - 1024px (laptops)
- `xl:` - 1280px (desktops)

---

## Links

- **Template**: Reference src/components/Services.tsx for card grid pattern
- **Step Pattern**: See src/components/HowItWorks.tsx for numbered steps
- **Form Pattern**: See src/components/Consultation.tsx for form layout
- **ADR Context**: [ADR-003: Component Architecture](../adrs/adr-003-component-architecture.md)

---

**Last Updated**: 2026-04-24  
**Used By**: All page sections
