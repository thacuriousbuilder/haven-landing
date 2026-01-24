
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-haven-teal">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-haven-white mb-4">
            What does HAVEN include?
          </h2>
          <p className="text-xl text-haven-white">
            Everything you need to track your nutrition with flexibility and ease.
          </p>
        </div>

       
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 xl:gap-60 items-center max-w-6xl mx-auto">
    
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
           
              <div className="bg-neutral-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-haven-cream rounded-[2.5rem] aspect-[9/19] overflow-hidden flex items-center justify-center p-4">
                
                  <Image 
                    src="/images/FoodLog2.svg" 
                    alt="HAVEN food logging interface"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

         
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-haven-white mb-2">
                  Track Your Food With Just a Picture
                </h3>
                <p className="text-haven-white leading-relaxed">
                  Snap a photo and let HAVEN&apos;s analysis give you meal details. Our AI estimates calories, protein, carbs, and fat to make logging effortless.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-haven-white/80 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-haven-white mb-2">
                  Search Our Database of Over 1 Million Foods
                </h3>
                <p className="text-haven-white leading-relaxed">
                  Quickly find and log foods from our extensive database. Search by name or brand for instant nutritional info.
                </p>
              </div>
            </div>

            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-haven-white mb-2">
                  Plan Cheat Days
                </h3>
                <p className="text-haven-white leading-relaxed">
                  Integrate cheat days directly into your weekly plan. HAVEN accounts for them automatically, so you stay on track guilt-free.
                </p>
              </div>
            </div>

            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-haven-white mb-2">
                  Simple Progress Tracking
                </h3>
                <p className="text-haven-white leading-relaxed">
                  Monitor your weekly progress with clear, calm visuals. See where you stand across the week.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-haven-white/80 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-haven-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-haven-white">
                    Accountability Coaching (Premium)
                  </h3>
                  <span className="bg-haven-white text-haven-orange text-xs font-bold px-2 py-1 rounded">
                    PREMIUM
                  </span>
                </div>
                <p className="text-haven-white leading-relaxed">
                  Get personalized weekly guidance, regular check-ins, and expert support to accelerate your progress and stay consistent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}