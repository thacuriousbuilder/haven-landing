
"use client";

import { useState } from "react";
import CoachSignupModal from "./CoachSignupModal";

export default function CoachCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-32 bg-haven-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
           
            <div className="bg-gradient-to-br from-haven-teal to-haven-teal-dark rounded-3xl p-12 lg:p-16 text-center text-white shadow-xl">
             
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-white">
                Start coaching smarter today
              </h2>

             
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                See what your clients eat, spot weekly patterns, and make better recommendations.
              </p>

             
              <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 mb-10">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Track Smarter</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Coach with context</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Make Sustainable Progress</span>
                </div>
              </div>

            
              <div className="flex justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-haven-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl text-lg inline-flex items-center justify-center gap-2"
                >
                  Get early access
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

  
      <CoachSignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}