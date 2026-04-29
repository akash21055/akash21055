import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReviewsPage from "@/components/ReviewsPage";

export const metadata: Metadata = {
  title: "Student Reviews | Oz Astro Consultation",
  description:
    "Watch real video reviews from students of the Nakshatra Vastu and Advance KP Astrology courses by Oz Foundation.",
  keywords:
    "student reviews, astrology course reviews, nakshatra vastu review, KP astrology testimonials",
};

export default function Reviews() {
  return (
    <main>
      <Navbar />
      <ReviewsPage />
      <Footer />
    </main>
  );
}
