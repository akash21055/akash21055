import { zodiacSigns } from "@/lib/zodiacData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ZodiacSignPageContent from "@/components/ZodiacSignPageContent";

export function generateStaticParams() {
  return zodiacSigns.map((sign) => ({
    sign: sign.name.toLowerCase(),
  }));
}

export default function ZodiacSignPage() {
  return (
    <main>
      <Navbar />
      <ZodiacSignPageContent />
      <Footer />
    </main>
  );
}
