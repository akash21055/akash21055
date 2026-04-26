import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NakshatraDetails from "@/components/NakshatraDetails";

export const metadata: Metadata = {
  title: "Nakshatras | 27 Lunar Mansions in Vedic Astrology",
  description:
    "Explore all 27 nakshatras (lunar mansions) in Vedic astrology with detailed descriptions, ruling deities, and spiritual significance. Discover your birth nakshatra.",
  keywords:
    "nakshatras, lunar mansions, vedic astrology, nakshatra astrology, 27 nakshatras, hindu astrology",
  openGraph: {
    type: "website",
    title: "Nakshatras | 27 Lunar Mansions in Vedic Astrology",
    description:
      "Explore all 27 nakshatras with detailed descriptions and spiritual significance.",
    url: "https://oz-astro-consultation.com/nakshatra",
  },
};

export default function NakshatraPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <NakshatraDetails />
      </div>
      <Footer />
    </main>
  );
}
