
"use client";

import Image from "next/image";
import { useState } from "react";
import SignupModal from "./SignupModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-haven-cream overflow-hidden">
      
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24 lg:py-32">
            
            <div className="text-haven-graphite space-y-8 lg:pr-12">
              
              <div className="inline-block">
                <span className="bg-black/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  ✨ Enjoy Food, Hit Your Goals
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-haven-graphite">
               Cheat days are part of the{" "} <span className="text-haven-teal font-extrabold">plan.</span>
              </h1>

            
              <p className="text-xl lg:text-2xl text-haven-graphite/90 leading-relaxed max-w-xl">
                HAVEN is a weekly calorie tracker that fits your lifestyle. Make sustainable progress—guilt-free.
              </p>

              
              <div className="pt-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-haven-orange text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl text-lg"
                >
                 Get early access
                </button>
              </div>

             
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
                  <div className="font-semibold text-haven-graphite">Join users who have already signed up for early access</div>
                  <div className="text-sm text-haven-graphite">Tracking smarter, living better</div>
                </div>
              </div>
            </div>

            
            <div className="relative lg:h-[500px] flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                
                <div className="bg-neutral-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-haven-cream rounded-[2.5rem] aspect-[9/19] overflow-hidden flex items-center justify-center p-4">
                    
                    <Image 
                      src="/images/Plan.svg" 
                      alt="HAVEN Plan Cheat Days"
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

      
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}