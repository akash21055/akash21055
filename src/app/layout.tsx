import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oz Astro Consultation | Professional Astrology Readings",
  description:
    "Get personalized astrology readings, birth chart analysis, and spiritual guidance from certified astrologers. Single question analysis, full horoscope, and vastu consultation available.",
  keywords:
    "astrology, horoscope, birth chart, zodiac, vastu, spiritual guidance, astrology consultation, Oz astro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oz-astro-consultation.com",
    siteName: "Oz Astro Consultation",
    title: "Oz Astro Consultation | Professional Astrology Readings",
    description:
      "Get personalized astrology readings and spiritual guidance from certified astrologers.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oz Astro Consultation",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Oz Astro Consultation",
              description: "Professional astrology consultation and readings",
              url: "https://astrology-app.com",
              telephone: "+1-XXX-XXX-XXXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Address",
                addressLocality: "City",
                addressRegion: "State",
                postalCode: "12345",
                addressCountry: "US",
              },
              serviceArea: {
                "@type": "City",
                name: "Online Worldwide",
              },
              priceRange: "$$",
              sameAs: ["https://facebook.com", "https://instagram.com"],
            }),
          }}
        />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
