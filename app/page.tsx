
import Header from "@/components/client/Header";
import HeroSection from "@/components/client/HeroSection";
import WhyWeeklySection from "@/components/client/WhyWeeklySection";
import BaselineSection from "@/components/client/BaseLineSection";
import FeaturesSection from "@/components/client/FeaturesSection";
import CoachingSection from "@/components/client/CoachingSection";
import TestimonialsSection from "@/components/client/TestimonialSection";
import FinalCTASection from "@/components/client/FinalSection";
import FooterSection from "@/components/client/FooterSection";

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