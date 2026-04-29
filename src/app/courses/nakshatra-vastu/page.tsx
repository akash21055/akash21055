import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NakshatraVastuCourse from "@/components/NakshatraVastuCourse";

export const metadata: Metadata = {
  title: "Nakshatra Vastu Course | KP Astrology + Vastu Mastery",
  description:
    "Learn the world-first combination of Nakshatra Vastu and KP Astrology. Pinpoint predictions, energy activation, and professional certification.",
  keywords:
    "nakshatra vastu course, KP astrology, vastu shastra, nakshatra devta, vastu energy, astrology course",
};

export default function NakshatraVastuPage() {
  return (
    <main>
      <Navbar />
      <NakshatraVastuCourse />
      <Footer />
    </main>
  );
}
