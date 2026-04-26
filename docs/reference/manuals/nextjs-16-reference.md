# Next.js 16 API Reference

**Package**: next@16.2.4  
**Documentation**: https://nextjs.org/docs  
**Used For**: Framework, routing, image optimization, API routes

---

## Core Concepts

### App Router Structure

```
src/app/
├── layout.tsx          # Root layout (wraps all pages)
├── page.tsx            # Homepage
├── api/
│   └── route.ts        # API endpoints
└── [dynamic]/          # Dynamic routes
    └── page.tsx
```

### File Conventions

| File | Purpose | Runs On |
|------|---------|---------|
| `layout.tsx` | Wraps pages, shared layout | Server |
| `page.tsx` | Page component | Server (or client with "use client") |
| `route.ts` | API endpoint | Server only |
| `error.tsx` | Error boundary | Client |
| `loading.tsx` | Suspense fallback | Client |
| `not-found.tsx` | 404 page | Server |

---

## Most-Used APIs

### 1. Metadata

**Set page title and meta tags**

```typescript
// src/app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Astrology Readings & Consultations",
  description: "Get personalized astrology readings from certified astrologers",
  keywords: "astrology, horoscope, birth chart, zodiac",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://astrology-app.com",
    siteName: "Astrology Readings",
    title: "Astrology Readings",
    description: "Professional astrology consultation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

**For dynamic pages** (product pages, blog posts):

```typescript
import type { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const zodiac = await fetchZodiac(params.id);
  
  return {
    title: `${zodiac.name} - Astrology Guide`,
    description: zodiac.description,
  };
}
```

### 2. Image Optimization

**Use `next/image` for images (REQUIRED)**

```tsx
import Image from "next/image";

export default function Hero() {
  return (
    <Image
      src="/hero-image.jpg"
      alt="Hero section - mystical background"
      width={1920}
      height={1080}
      priority  // Load immediately (above fold)
      sizes="(max-width: 768px) 100vw, 50vw"  // Responsive sizes
    />
  );
}
```

**Why**: 
- Automatic WebP/AVIF conversion
- Lazy loading below fold
- Responsive image serving
- Prevents layout shift (CLS)

### 3. API Routes

**Create backend endpoints**

```typescript
// src/app/api/consultations/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, service } = await request.json();

    // Validate
    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    // Process (send email, save to DB, etc)
    await sendConsultationEmail({ name, email, service });

    return NextResponse.json(
      { success: true, message: "Consultation request received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
```

**Route methods:**
```typescript
export async function GET(request) { }    // GET requests
export async function POST(request) { }   // POST requests
export async function PUT(request) { }    // PUT requests
export async function DELETE(request) { } // DELETE requests
```

### 4. Environment Variables

**Create `.env.local` for secrets**

```bash
# .env.local (not committed to git)
RESEND_API_KEY=re_xxxxx
NEXT_PUBLIC_ANALYTICS_ID=G-xxxxx  # Prefix with NEXT_PUBLIC_ to expose to browser
```

**Access in code:**

```typescript
// Server component/route
const apiKey = process.env.RESEND_API_KEY;  // ✓ Server only

// Client component
const analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID;  // ✓ Client visible
```

### 5. Link Component

**Navigation links**

```tsx
import Link from "next/link";

<Link href="/services">Services</Link>           {/* Internal page */}
<Link href="#testimonials">Jump to section</Link> {/* Anchor link */}
<Link href="https://example.com">External</Link>  {/* External URL */}
```

**Prefetching**: Links are automatically prefetched on hover.

### 6. useRouter Hook

**Programmatic navigation (client only)**

```tsx
"use client";

import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/services")}>
      Go to Services
    </button>
  );
}
```

---

## Configuration

### next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization options
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  // Output settings
  output: "standalone", // For Docker/serverless

  // Experimental features
  experimental: {
    // Opt into new features early
  },
};

export default nextConfig;
```

---

## Performance Features

### 1. Image Optimization

```tsx
<Image
  src="/image.jpg"
  width={800}
  height={600}
  quality={90}        // Compression quality
  loading="lazy"      // Lazy load by default
/>
```

**Reduces bundle:**
- Serves WebP/AVIF to modern browsers
- Responsive images (serves appropriate size)
- Lazy loads images below fold

### 2. Code Splitting

Next.js automatically splits bundles by page:
- `page.tsx` code → included in page bundle only
- Shared `components/` → included once (shared between pages)
- Reduces JavaScript per page

### 3. Dynamic Imports

```typescript
// Dynamically import component (lazy load)
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/components/Heavy"));

export default function Page() {
  return <HeavyComponent />;  {/* Loaded on demand */}
}
```

---

## Common Patterns

### Redirect

```typescript
import { redirect } from "next/navigation";

export default function Page() {
  if (!isLoggedIn) {
    redirect("/login");  // Permanent redirect
  }
}
```

### Fetch Data

```typescript
// Server component (can fetch during render)
export default async function Page() {
  const zodiacData = await fetch(
    "https://api.example.com/zodiac",
    { cache: "revalidate:3600" }  // Cache for 1 hour
  ).then(r => r.json());

  return <div>{zodiacData.name}</div>;
}
```

### Error Handling

```typescript
// src/app/error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
```

---

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel login
vercel
```

Zero-config deployment - Vercel auto-detects Next.js.

### Other Hosting

```bash
npm run build      # Build for production
npm run start      # Start production server
```

Requires Node.js runtime (not static hosts like GitHub Pages).

---

## Debugging

### Build Issues

```bash
npm run build  # See detailed build errors
```

### Runtime Errors

```bash
npm run dev    # Check console output
```

Check browser DevTools Console for client errors.

---

## Migration Notes

**From older Next.js:**
- App Router (`src/app/`) replaces Pages Router (`pages/`)
- `getStaticProps` → `generateStaticParams` in page.tsx
- `getServerSideProps` → async function in Server Components
- API routes in `app/api/` instead of `pages/api/`

---

## Links

- **Official Docs**: https://nextjs.org/docs
- **Image Optimization**: https://nextjs.org/docs/app/api-reference/components/image
- **API Routes**: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- **Deployment**: https://nextjs.org/docs/deployment/vercel

---

**Version**: 16.2.4  
**Last Updated**: 2026-04-24
