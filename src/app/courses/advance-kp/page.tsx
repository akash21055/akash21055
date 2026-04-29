import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdvanceKPCourse from "@/components/AdvanceKPCourse";

export const metadata: Metadata = {
  title: "Advance KP Astrology Course | Oz Foundation",
  description:
    "Master KP Astrology with 66 classes across 14 modules. Learn Cusp, Sublord, DBA timing, Horary, Medical Astrology and professional prediction techniques.",
  keywords:
    "KP astrology course, advance astrology, sublord, cusp, horary astrology, dasha bhukti, astrology certification",
};

export default function AdvanceKPPage() {
  return (
    <main>
      <Navbar />
      <AdvanceKPCourse />
      <Footer />
    </main>
  );
}
