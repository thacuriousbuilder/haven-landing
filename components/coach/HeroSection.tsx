
"use client";

import Image from "next/image";
import { useState } from "react";
import SignupModal from "../client/SignupModal";

export default function TrainerHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24 lg:py-32">
            {/* Left Column - Content */}
            <div className="space-y-8">
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
                  Get Started Free
                </button>
              </div>

              {/* Trial Info - Centered */}
              <p className="text-haven-steel text-sm text-center lg:text-left">
                Free 30-day trial • No credit card required
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
                  <div className="bg-white rounded-[2.5rem] aspect-[9/19] overflow-hidden">
                    {/* Phone status bar */}
                    <div className="bg-white px-6 py-3 flex items-center justify-between text-xs border-b border-gray-200">
                      <span className="font-medium text-haven-graphite">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-3 border border-haven-graphite rounded-sm"></div>
                        <div className="w-1 h-2 bg-haven-graphite rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="h-full flex flex-col">
                      {/* App Header */}
                      <div className="bg-haven-cream px-6 py-4 border-b border-haven-border">
                        <div className="text-xs text-haven-steel mb-1">Week of Jan 8-14</div>
                        <h3 className="text-base font-bold text-haven-graphite">Sarah&apos;s Weekly Goal</h3>
                        <p className="text-haven-teal font-semibold text-sm">13,850 / 14,000 cal</p>
                      </div>

                      {/* Weekly Calendar */}
                      <div className="px-6 py-6 flex-1 flex flex-col justify-center">
                        <div className="grid grid-cols-7 gap-2 mb-4">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
                            <div key={idx} className="text-center text-xs font-medium text-haven-steel">
                              {day}
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-7 gap-2 items-end" style={{ height: '120px' }}>
                          <div className="bg-haven-teal rounded-t" style={{ height: '85%' }}></div>
                          <div className="bg-haven-teal rounded-t" style={{ height: '90%' }}></div>
                          <div className="bg-haven-teal rounded-t" style={{ height: '95%' }}></div>
                          <div className="bg-haven-teal rounded-t" style={{ height: '80%' }}></div>
                          <div className="bg-haven-teal rounded-t" style={{ height: '100%' }}></div>
                          <div className="bg-haven-orange rounded-t" style={{ height: '100%' }}></div>
                          <div className="bg-gray-300 rounded-t" style={{ height: '75%' }}></div>
                        </div>

                        {/* Weekly Pattern Badge */}
                        <div className="mt-6 bg-haven-orange/10 border border-haven-orange/20 rounded-lg p-3">
                          <div className="flex items-center gap-2 text-xs">
                            <div className="w-2 h-2 bg-haven-orange rounded-full"></div>
                            <span className="text-haven-graphite font-medium">Weekend overage: +400 cal/day avg</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Modal */}
      <SignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}