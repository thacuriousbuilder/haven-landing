// components/trainer/TrainerCTASection.tsx
"use client";

import { useState } from "react";
import SignupModal from "../client/SignupModal";

export default function TrainerCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Teal Card */}
            <div className="bg-gradient-to-br from-haven-teal to-haven-teal-dark rounded-3xl p-12 lg:p-16 text-center text-white shadow-xl">
              {/* Heading */}
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-white">
                Start coaching smarter today
              </h2>

              {/* Description */}
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                See what your clients eat, spot weekly patterns, and make better recommendations.
              </p>

              {/* Benefits Checkmarks */}
              <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 mb-10">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Free 30-day trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Unlimited clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Cancel anytime</span>
                </div>
              </div>

              {/* CTA Button - Centered */}
              <div className="flex justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-haven-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl text-lg inline-flex items-center justify-center gap-2"
                >
                  Get Started Free
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
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