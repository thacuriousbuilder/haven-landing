
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyWeeklySection from "@/components/WhyWeeklySection";
import BaselineSection from "@/components/BaseLineSection";
import FeaturesSection from "@/components/FeaturesSection";
import CoachingSection from "@/components/CoachingSection";
import TestimonialsSection from "@/components/TestimonialSection";
import FinalCTASection from "@/components/FinalSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyWeeklySection />
      <BaselineSection />
      <FeaturesSection/>
      <CoachingSection/>
      <TestimonialsSection/>
      <FinalCTASection/>
      <FooterSection/>
    </main>
  );
}