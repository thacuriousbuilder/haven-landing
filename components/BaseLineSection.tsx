
export default function BaselineSection() {
    return (
      <section id="how-it-works" className="py-20 lg:py-32 bg-gradient-to-br from-haven-teal to-haven-teal-dark relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
  
        <div className="container mx-auto px-4 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              First Step with HAVEN
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              The 7-Day Baseline
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Before setting goals, HAVEN learns <span className="text-haven-yellow font-semibold">your</span> eating pattern. No judgment, no limits,just understanding.
            </p>
          </div>
  
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto mb-12">
            {/* Left Column - Baseline Tracker Card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-haven-graphite mb-6">
                HAVEN is learning, not judging
              </h3>
              
              {/* Progress bars */}
              <div className="space-y-4 mb-6">
                {[1, 2, 3, 4, 5, 6].map((day) => (
                  <div key={day} className="flex items-center gap-4">
                    <span className="text-haven-steel font-medium w-4">{day}</span>
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-haven-teal rounded-full" style={{ width: '100%' }}></div>
                    </div>
                    <span className="text-haven-steel text-sm">Logged!</span>
                  </div>
                ))}
                
                {/* Day 7 - Active/Complete */}
                <div className="flex items-center gap-4">
                  <span className="bg-haven-orange text-white font-bold w-8 h-8 rounded-full flex items-center justify-center text-sm">7</span>
                  <div className="flex-1 h-3 bg-orange-100 rounded-full overflow-hidden">
                    <div className="h-full bg-haven-orange rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <span className="text-haven-orange text-sm font-medium">Complete</span>
                </div>
              </div>
  
              {/* Bottom note */}
              <div className="bg-haven-orange/10 border border-haven-orange/20 rounded-xl p-4">
                <p className="text-sm text-haven-graphite">
                  <span className="font-semibold">No limits.</span> No corrections. Just eat normally and log what feels comfortable.
                </p>
              </div>
            </div>
  
            {/* Right Column - Benefits */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  You can&apos;t optimize what you don&apos;t understand
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Most apps start with generic formulas and ask you to change immediately. HAVEN starts by understanding your real-life first.
                </p>
              </div>
  
              {/* Traditional Apps Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500/40 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Traditional Apps</h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Generic formulas, immediate restrictions, ignore your lifestyle.
                    </p>
                  </div>
                </div>
              </div>
  
              {/* HAVEN's Approach Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-haven-cream/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">HAVEN&apos;s Approach</h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Learn your real patterns, build around your lifestyle, sustainable from day one
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Building Your Eating Fingerprint - Cream Card */}
          <div className="max-w-6xl mx-auto bg-haven-white rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-haven-graphite mb-3">
                Building your personal eating fingerprint
              </h3>
              <p className="text-haven-steel text-lg">
                During the baseline, HAVEN maps your unique patterns to create a plan that actually fits your life.
              </p>
            </div>
  
            {/* Three Metrics Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Daily & Weekly Patterns */}
              <div className="text-center">
                <div className="w-16 h-16 bg-haven-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-haven-graphite mb-2">Daily & Weekly Patterns</h4>
                <p className="text-haven-steel text-sm">
                  Your actual intake across weekdays and weekends
                </p>
              </div>
  
              {/* Natural Variability */}
              <div className="text-center">
                <div className="w-16 h-16 bg-haven-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="font-bold text-haven-graphite mb-2">Natural Variability</h4>
                <p className="text-haven-steel text-sm">
                  How your eating naturally fluctuates day-to-day
                </p>
              </div>
  
              {/* Indulgence Points */}
              <div className="text-center">
                <div className="w-16 h-16 bg-haven-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-haven-graphite mb-2">Cheat Points</h4>
                <p className="text-haven-steel text-sm">
                  When and how you naturally enjoy higher-calorie days
                </p>
              </div>
            </div>
  
            {/* This data becomes your foundation */}
            <div className="bg-white rounded-xl p-6 border border-haven-border">
              <h4 className="text-center font-bold text-haven-graphite mb-4">
                This data becomes your foundation:
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="bg-haven-teal/10 text-haven-teal px-4 py-2 rounded-full text-sm font-medium">
                  Weekly calorie targets
                </span>
                <span className="bg-haven-teal/10 text-haven-teal px-4 py-2 rounded-full text-sm font-medium">
                  Cheat-day allocation
                </span>
                <span className="bg-haven-teal/10 text-haven-teal px-4 py-2 rounded-full text-sm font-medium">
                  Personalized adjustments
                </span>
              </div>
            </div>
          </div>
  
          {/* Bottom Badge */}
          <div className="max-w-6xl mx-auto mt-8 flex justify-center">
            <div className="bg-haven-black text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg">
              <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="font-medium">
                <span className="font-bold">Low pressure, high insight.</span> Just log and let HAVEN learn.
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }