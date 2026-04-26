# Astrology Website

A modern, mystical astrology services platform built with Next.js, React, TypeScript, and Tailwind CSS. Features personalized readings, horoscopes, and consultations.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build & Deploy

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx   # Root layout & metadata
│   ├── page.tsx     # Homepage composition
│   ├── globals.css  # Global styles
│   └── api/         # API routes (future)
├── components/       # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── Consultation.tsx
│   └── Footer.tsx
└── lib/
    └── utils.ts     # Utility functions

```

## 🎨 Styling

- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- Dark mystical theme (slate-950 base, violet/purple accents)
- Responsive design (mobile-first)

## 📝 Key Features

- ✨ Smooth scroll animations with Framer Motion
- 🎯 Lead generation form (Consultation section)
- 📱 Fully responsive design
- ♿ WCAG 2.1 Level AA accessibility
- 🚀 SEO optimized with JSON-LD schema
- 🔍 TypeScript for type safety

## 🔧 Configuration

See `CLAUDE.md` for detailed development guidance, architecture overview, and best practices.

## 📚 Documentation

- `CLAUDE.md` - Development guide for Claude Code
- `.env.local.example` - Environment variables template

## 🚢 Deployment

Ready to deploy on:
- **Vercel** (recommended - zero config)
- **Netlify** (configured with `netlify.toml`)
- Any Node.js hosting

## 📧 Future Features

- Live API integration for birth chart calculations
- Payment processing (Stripe)
- Booking system with calendar integration
- Customer database and CRM
- Astrologer dashboard
- Real-time chat consultations

## 📄 License

MIT
