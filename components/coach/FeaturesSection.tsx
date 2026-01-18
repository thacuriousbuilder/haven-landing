
import Image from "next/image";

export default function CoachFeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-haven-cream">
      <div className="container mx-auto px-4 lg:px-8">
       
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-haven-graphite mb-4">
            What HAVEN includes
          </h2>
          <p className="text-xl text-haven-steel">
            Everything you need to coach nutrition effectively
          </p>
        </div>

      
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 xl:gap-32 items-center max-w-6xl mx-auto">
        
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm">
             
              <div className="bg-neutral-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-haven-cream rounded-[2.5rem] aspect-[9/19] overflow-hidden flex items-center justify-center p-4">
                 
                  <Image 
                    src="/images/HomeCoach.svg" 
                    alt="HAVEN coach dashboard"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-8">

           
          <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-haven-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-haven-graphite mb-2">
                  7-day baseline assessment
                </h3>
                <p className="text-haven-steel leading-relaxed">
                  Understand client&apos;s current eating habits before setting goals. Build plans that fit their lifestyle.
                </p>
              </div>
            </div>

           
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-haven-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-haven-graphite mb-2">
                  Client food tracking
                </h3>
                <p className="text-haven-steel leading-relaxed">
                  See everything your clients log—meals, snacks, macros, and calories in one clean dashboard.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-haven-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-haven-graphite mb-2">
                  Weekly trend analysis
                </h3>
                <p className="text-haven-steel leading-relaxed">
                  Spot patterns across the week. Identify overeating days, undereating, and consistency issues.
                </p>
              </div>
            </div>

            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-haven-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-haven-graphite mb-2">
                  In-app feedback
                </h3>
                <p className="text-haven-steel leading-relaxed">
                  Leave comments on meals, adjust targets, and guide clients directly in the app.
                </p>
              </div>
            </div>

           
           
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-haven-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-haven-graphite mb-2">
                   client management
                </h3>
                <p className="text-haven-steel leading-relaxed">
                  Manage all your clients in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}