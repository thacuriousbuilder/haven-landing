
"use client";

import Image from "next/image";
import { useState } from "react";
import SignupModal from "./SignupModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-teal overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24 lg:py-32">
            {/* Left Column - Content */}
            <div className="text-white space-y-8 lg:pr-12">
              {/* Badge */}
              <div className="inline-block">
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  ✨ Enjoy Food, Hit Your Goals
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
                Your goals shouldn&apos;t ruin your{" "}
                <span className="text-haven-orange font-extrabold">Saturday night.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl">
                HAVEN is a weekly calorie tracker that fits your lifestyle. Make sustainable progress—guilt-free.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-haven-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl text-lg"
                >
                  Join the Waitlist
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-4 text-white/80">
                <div className="flex -space-x-2">
                  <Image 
                    src="/images/earlyUser3.jpg" 
                    alt="User avatar"
                    width={100}
                    height={100}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <Image 
                    src="/images/earlyUser2.jpg" 
                    alt="User avatar"
                    width={100}
                    height={100}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                  <Image 
                    src="/images/IMG_0374.jpg" 
                    alt="User avatar"
                    width={100}
                    height={100}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white">Join users who have already signed up for early access</div>
                  <div className="text-sm">Tracking smarter, living better</div>
                </div>
              </div>
            </div>

            {/* Right Column - Phone Mockup with Baseline SVG */}
            <div className="relative lg:h-[500px] flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Phone frame */}
                <div className="bg-neutral-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] aspect-[9/19] overflow-hidden flex items-center justify-center p-4">
                    {/* Baseline SVG */}
                    <Image 
                      src="/images/FoodLog.svg" 
                      alt="HAVEN baseline tracking interface"
                      width={200}
                      height={200}
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
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}