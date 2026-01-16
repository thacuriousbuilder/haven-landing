
export default function CoachBaselineSection() {
    return (
      <section className="py-20 lg:py-32 bg-gradient-to-br from-haven-teal to-haven-teal-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left Column - Content */}
            <div className="text-white space-y-8 lg:pt-0">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                7-Day Baseline
              </div>
  
              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                Understand your client&apos;s current lifestyle
              </h2>
  
              {/* Description Paragraphs */}
              <p className="text-lg text-white/90 leading-relaxed">
                Before setting goals, see how your clients actually eat. The 7-day baseline captures their real habits—weekend patterns, meal timing, typical portions, and eating behaviors.
              </p>
  
              <p className="text-lg text-white/90 leading-relaxed">
                This gives you the context to set realistic targets and create plans that fit their lifestyle, not fight it.
              </p>
  
              {/* Checkmark List */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-base">See actual eating patterns before setting goals</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-base">Identify weekend vs weekday differences</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-base">Create plans based on real data, not assumptions</span>
                </div>
              </div>
            </div>
  
            {/* Right Column - Baseline Report Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                {/* Report Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-haven-graphite mb-1">
                    7-Day Baseline Report
                  </h3>
                  <p className="text-haven-steel text-sm">Jan 1-7, 2025</p>
                </div>
  
                {/* Summary Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-haven-cream rounded-xl p-4">
                    <div className="text-xs text-haven-steel mb-2">Avg Daily Calories</div>
                    <div className="text-3xl font-bold text-haven-graphite">2,150</div>
                  </div>
                  <div className="bg-haven-cream rounded-xl p-4">
                    <div className="text-xs text-haven-steel mb-2">Weekend Avg</div>
                    <div className="text-3xl font-bold text-haven-orange">2,650</div>
                  </div>
                </div>
  
                {/* Daily Breakdown - Full Width Bars */}
                <div className="space-y-4">
                  {[
                    { day: 'Monday', cal: 1950 },
                    { day: 'Tuesday', cal: 2100 },
                    { day: 'Wednesday', cal: 1850 },
                    { day: 'Thursday', cal: 2050 },
                    { day: 'Friday', cal: 2200 },
                    { day: 'Saturday', cal: 2750, isWeekend: true },
                    { day: 'Sunday', cal: 2550, isWeekend: true },
                  ].map((item) => (
                    <div key={item.day}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-haven-graphite">{item.day}</span>
                        <span className="text-sm text-haven-steel">{item.cal} cal</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${item.isWeekend ? 'bg-haven-orange' : 'bg-haven-teal'}`}
                          style={{ width: '100%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
  
                {/* Pattern Detected */}
                <div className="mt-8 bg-haven-cream rounded-xl p-4 border border-haven-border">
                  <div className="font-bold text-haven-graphite mb-2 text-sm">Pattern Detected</div>
                  <p className="text-sm text-haven-steel leading-relaxed">
                    Weekend intake +500 cal/day higher. Consider flexible weekend targets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }