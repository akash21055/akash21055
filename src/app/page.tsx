import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";
import FloatingCourses from "@/components/FloatingCourses";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <Consultation />
      <Footer />
      <FloatingCourses />
    </main>
  );
}
