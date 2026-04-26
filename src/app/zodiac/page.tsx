import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZodiacDetails from "@/components/ZodiacDetails";

export const metadata: Metadata = {
  title: "Zodiac Signs | Astrology Dates, Traits & Compatibility",
  description:
    "Explore all 12 zodiac signs with detailed personality traits, dates, elements, ruling planets, and compatibility information. Discover your cosmic identity.",
  keywords:
    "zodiac signs, astrology, personality traits, horoscope, zodiac compatibility, astrology signs",
  openGraph: {
    type: "website",
    title: "Zodiac Signs | Astrology Dates, Traits & Compatibility",
    description:
      "Explore all 12 zodiac signs with detailed information about personality traits, dates, and compatibility.",
    url: "https://oz-astro-consultation.com/zodiac",
  },
};

export default function ZodiacPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <ZodiacDetails />
      </div>
      <Footer />
    </main>
  );
}
