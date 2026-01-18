
import Image from "next/image";

export default function CoachingSection() {
  return (
    <section id="coaching" className="py-8 lg:py-12 bg-haven-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
  
              <div className="bg-gradient-to-br from-haven-teal to-haven-teal-dark p-8 lg:p-12 flex flex-col justify-center text-white">
               
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-6 self-start">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Premium Add-On
                </div>

          
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-white leading-tight">
                  Unlock Accountability Coaching
                </h2>

                
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  Pair HAVEN&apos;s weekly tracking with expert guidance. Get regular check-ins, personalized strategies, nutritional information and human support to stay consistent and reach your goals faster.
                </p>
              </div>

              
              <div className="relative min-h-[300px] lg:min-h-[400px]">
                
                <Image 
                  src="/images/coach.jpg"
                  alt="Accountability coach working with client"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
               
                <div className="absolute inset-0 bg-gradient-to-r from-haven-teal/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}