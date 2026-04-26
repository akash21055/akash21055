# Getting Started

This guide will help you set up and run the astrology website locally.

## System Requirements

- **Node.js**: 18.17 or higher
- **npm**: 9+ or yarn 3+
- **OS**: Windows, macOS, or Linux

## Installation Steps

### 1. Clone or Navigate to Project

```bash
cd astro_app
```

### 2. Install Dependencies

```bash
npm install
```

This installs all required packages:
- `next` - React framework
- `react` & `react-dom` - React library
- `tailwindcss` - Utility-first CSS framework
- `framer-motion` - Animation library
- `lucide-react` - Icon library
- `typescript` - Type safety

### 3. Start Development Server

On Windows:
```bash
PATH="/c/Program Files/nodejs:$PATH" /c/Program\ Files/nodejs/npm.cmd run dev
```

Or on macOS/Linux:
```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

## What You'll See

When you open the browser, you'll see a full-featured astrology website with:

1. **Navbar** - Navigation and booking button
2. **Hero Section** - Welcome message with CTA buttons
3. **Services** - 4 core services (Birth Chart, Compatibility, Life Guidance, Horoscope)
4. **How It Works** - 4-step process explanation
5. **Testimonials** - Client success stories
6. **FAQ** - Common questions and answers
7. **Consultation Form** - Lead generation
8. **Footer** - Links and contact info

## Making Your First Change

### 1. Edit the Hero Title

Open `src/components/Hero.tsx` and find:

```tsx
<h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
  Discover Your Cosmic Path
</h1>
```

Change it to something else and save. The dev server will hot-reload automatically!

### 2. Add a New Color

Open `src/app/globals.css` and add a new Tailwind color class, e.g., in the `@layer components` section:

```css
.btn-gold {
  @apply px-6 py-3 bg-yellow-500 text-slate-950 font-medium rounded-lg hover:bg-yellow-600 transition-colors;
}
```

Then use it in a component: `<button className="btn-gold">Golden Button</button>`

### 3. Add a Component

Create `src/components/MyComponent.tsx`:

```tsx
"use client";

export default function MyComponent() {
  return (
    <section className="section-container">
      <h2 className="section-title">My New Section</h2>
      <p className="text-slate-300">Content here...</p>
    </section>
  );
}
```

Then import it in `src/app/page.tsx` and add it to the page composition.

## Running Lint & Build

```bash
# Check for code quality issues
npm run lint

# Build for production
npm run build

# Start production server
npm run start
```

## Troubleshooting

### Port 3000 Already in Use

```bash
# Kill the process using port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found Error

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# These are caught during build/lint
npm run lint

# Restart dev server to refresh type checking
# Press Ctrl+C and npm run dev again
```

## Next Steps

1. **Customize services** - Edit `src/components/Services.tsx`
2. **Update colors** - Modify Tailwind classes in components
3. **Add images** - Place in `public/` folder, use `next/image`
4. **Set up form submission** - See `docs/api-guide.md`
5. **Deploy** - Push to Vercel or Netlify

See `CLAUDE.md` for detailed development guidance.
