import Header from "@/components/coach/Header";
import HeroSection from "@/components/coach/HeroSection";
import BaselineSection from "@/components/coach/BaseLineSection";
import FeaturesSection from "@/components/coach/FeaturesSection";
import TestimonialsSection from "@/components/coach/TestimonialSection";
import FinalSection from "@/components/coach/FinalSection";
import FooterSection from "@/components/client/FooterSection";

export default function Home() {
    return (
      <main className="min-h-screen">
        <Header />
        <HeroSection/>  
        <BaselineSection/>
        <FeaturesSection/>
        <TestimonialsSection/>
        <FinalSection/>
        <FooterSection/>
      </main>
    );
  }