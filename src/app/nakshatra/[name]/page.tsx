import { nakshatras } from "@/lib/nakshatraData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NakshatraPageContent from "@/components/NakshatraPageContent";

export function generateStaticParams() {
  return nakshatras.map((nakshatra) => ({
    name: nakshatra.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default function NakshatraDetailPage() {
  return (
    <main>
      <Navbar />
      <NakshatraPageContent />
      <Footer />
    </main>
  );
}
