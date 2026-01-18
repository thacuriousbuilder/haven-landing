
"use client";

import Image from "next/image";
import { useState } from "react";
import CoachSignupModal from "../coach/CoachSignupModal";

export default function CoachHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-haven-cream overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24 lg:py-32">
            {/* Left Column - Content */}
            <div className="space-y-6">
              {/* Main Headline */}
              <h1 className="text-4xl lg:text-6xl xl:text-5xl font-bold leading-tight text-haven-graphite">
                Nutrition coaching that fits{" "}
                <span className="text-haven-teal">client lifestyles</span> and achieves results
              </h1>

              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-haven-steel leading-relaxed max-w-xl">
                HAVEN helps you see what your clients eat, spot weekly trends, and make better recommendations.
              </p>

              {/* CTA Button - Centered */}
              <div className="flex justify-center lg:justify-start pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-haven-teal text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl text-lg"
                >
                  Get early access
                </button>
              </div>

              {/* Trial Info - Centered */}
              <p className="text-haven-steel text-sm text-center lg:text-left">
                Join users who have already signed up for early access
              </p>
            </div>

            {/* Right Column - Phone Mockup */}
            <div className="relative lg:h-[500px] flex items-center justify-center lg:px-32">
              {/* Floating Food Images */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full shadow-lg overflow-hidden z-0">
                <div className="w-full h-full bg-gradient-to-br from-orange-200 to-red-300 flex items-center justify-center">
                  <span className="text-4xl">🥗</span>
                </div>
              </div>

              <div className="absolute top-20 -right-4 w-24 h-24 bg-white rounded-full shadow-lg overflow-hidden z-0">
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-emerald-300 flex items-center justify-center">
                  <span className="text-3xl">🥑</span>
                </div>
              </div>

              <div className="absolute -bottom-10 left-10 w-28 h-28 bg-white rounded-full shadow-lg overflow-hidden z-0">
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-cyan-300 flex items-center justify-center">
                  <span className="text-3xl">🫐</span>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="relative w-full max-w-sm z-10">
                <div className="bg-neutral-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-haven-cream rounded-[2.5rem] aspect-[9/19] overflow-hidden flex items-center justify-center p-4">
                    {/* ClientDetailProgress SVG */}
                    <Image 
                      src="/images/ClientDetailProgress.svg" 
                      alt="HAVEN client progress tracking"
                      width={300}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Modal */}
      <CoachSignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}