
"use client";

import { useState } from "react";
import SignupModal from "./SignupModal";
import Image from "next/image";

export default function FinalCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-8 lg:py-12 bg-haven-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-gradient-to-br from-haven-teal to-haven-teal-dark rounded-3xl p-8 lg:p-16 text-center text-white shadow-xl">
            
              <div className="w-16 h-16 bg-haven-orange rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>

             
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-white">
                Start tracking the way that works
              </h2>

              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join HAVEN today and discover how weekly tracking makes reaching your goals feel natural.
              </p>

          
              <div className="flex justify-center">
                <a
                  href="https://apps.apple.com/us/app/haven-weekly-calorie-tracker/id6759538536"
                  target="_blank"
                  rel="noopener noreferrer"
                   >
                  <Image
                    src="/images/AppStore.svg"
                    alt="Download on the App Store"
                    width={200}
                    height={53}
                    className="hover:opacity-90 transition-opacity"
                  />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

    
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}