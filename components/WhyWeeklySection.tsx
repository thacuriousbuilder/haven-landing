
export default function WhyWeeklySection() {
    return (
      <section id="why-weekly" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-haven-teal mb-4">
              Why HAVEN Focuses on Weekly Calories
              <br />
              <span className="text-haven-graphite">(Not Daily Limits)</span>
            </h2>
            <p className="text-lg text-haven-steel">
              Because one day doesn&apos;t tell the whole story
            </p>
          </div>
  
          {/* Two Column Cards */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 max-w-5xl mx-auto">
            {/* Left Card - Some days you eat more */}
            <div className="bg-white rounded-2xl p-8 border border-haven-border shadow-sm">
              <div className="w-12 h-12 bg-haven-teal/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-haven-graphite mb-3">
                Some days you eat more. Some days you eat less. That&apos;s normal.
              </h3>
              <p className="text-haven-steel leading-relaxed">
                Focusing on a strict daily calorie number makes normal days feel like mistakes, even when progress is still possible.
              </p>
            </div>
  
            {/* Right Card - Calories balance out */}
            <div className="bg-white rounded-2xl p-8 border border-haven-border shadow-sm">
              <div className="w-12 h-12 bg-haven-orange/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-haven-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-haven-graphite mb-3">
                Calories balance out over the week
              </h3>
              <p className="text-haven-steel leading-relaxed">
                What matters most is how calories add up over time. A higher-calorie day can be balanced naturally by lighter days later in the week. Progress isn&apos;t lost, it&apos;s redistributed.
              </p>
            </div>
          </div>
  
          {/* Teal Card with Calendar */}
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-haven-teal to-haven-teal-dark rounded-3xl p-8 lg:p-12 text-white shadow-xl">
            {/* Top badge and heading */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-white">
                  HAVEN adjusts daily targets automatically
                </h3>
                <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                  Instead of locking you into a rigid daily limit, HAVEN works with a weekly calorie budget. If one day runs higher, HAVEN automatically adjusts the remaining days so you can still hit your weekly target, without stress or overcorrection.
                </p>
              </div>
              <a href="#" className="hidden lg:flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium whitespace-nowrap ml-8">
                The magic happens here
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
  
            {/* Calendar Bar Chart */}
            <div className="space-y-3">
              {/* Day labels */}
              <div className="grid grid-cols-7 gap-2 lg:gap-3 mb-2">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
                  <div key={idx} className="text-center text-sm font-medium text-white/70">
                    {day}
                  </div>
                ))}
              </div>
  
              {/* Calendar bars */}
              <div className="grid grid-cols-7 gap-2 lg:gap-3 items-end" style={{ height: '180px' }}>
                {/* Monday - 88% */}
                <div className="flex flex-col justify-end h-full">
                  <div className="bg-white rounded-t-lg" style={{ height: '88%' }}></div>
                </div>
                
                {/* Tuesday - 92% */}
                <div className="flex flex-col justify-end h-full">
                  <div className="bg-white rounded-t-lg" style={{ height: '92%' }}></div>
                </div>
                
                {/* Wednesday - 120% (Yellow - overage) */}
                <div className="flex flex-col justify-end h-full">
                  <div className="bg-haven-orange rounded-t-lg" style={{ height: '100%' }}></div>
                </div>
                
                {/* Thursday - 75% (Light blue - adjusted) */}
                <div className="flex flex-col justify-end h-full">
                  <div className="bg-blue-300 rounded-t-lg" style={{ height: '75%' }}></div>
                </div>
                
                {/* Friday - 80% (Light blue - adjusted) */}
                <div className="flex flex-col justify-end h-full">
                  <div className="bg-blue-300 rounded-t-lg" style={{ height: '80%' }}></div>
                </div>
                
                {/* Saturday - 88% (Light blue - adjusted) */}
                <div className="flex flex-col justify-end h-full">
                  <div className="bg-blue-300 rounded-t-lg" style={{ height: '88%' }}></div>
                </div>
                
                {/* Sunday - 90% (Light blue - adjusted) */}
                <div className="flex flex-col justify-end h-full">
                  <div className="bg-blue-300 rounded-t-lg" style={{ height: '90%' }}></div>
                </div>
              </div>
  
              {/* Percentage labels */}
              <div className="grid grid-cols-7 gap-2 lg:gap-3 mt-2">
                {['88%', '92%', '120%', '75%', '80%', '88%', '90%'].map((pct, idx) => (
                  <div key={idx} className="text-center text-xs font-medium text-white/80">
                    {pct}
                  </div>
                ))}
              </div>
  
              {/* Caption */}
              <p className="text-center text-sm text-white/80 mt-6">
                Wednesday went over? HAVEN automatically rebalances the rest of your week.
              </p>
            </div>
          </div>
  
          {/* Bottom Yellow Card */}
          <div className="max-w-5xl mx-auto mt-12 border border-haven-border rounded-2xl p-8 flex items-start gap-6">
            <div className="w-12 h-12 bg-haven-orange/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-haven-orange" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-haven-graphite mb-2">
                You plan less. HAVEN balances more.
              </h3>
              <p className="text-haven-steel leading-relaxed">
                There&apos;s no need to &quot;fix&quot; yesterday or punish today. HAVEN handles the math in the background, helping you stay on track across the week while you focus on living your life.
              </p>
            </div>
          </div>
            {/* What This Means for You - Dark Card */}
        <div className="max-w-5xl mx-auto mt-8">
          <div className="bg-haven-black rounded-2xl p-6 md:p-8 lg:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-6 md:mb-8">
              What This Means for You
            </h3>
            
            {/* Two column grid of benefits */}
            <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-3 md:gap-y-4 mb-6 md:mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-haven-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/90 text-sm md:text-base">One higher-calorie day doesn&apos;t derail progress</span>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-haven-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/90 text-sm md:text-base">You don&apos;t need to obsess over daily numbers</span>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-haven-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/90 text-sm md:text-base">Flexibility is built into the plan</span>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-haven-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/90 text-sm md:text-base">Consistency happens naturally over the week</span>
              </div>
            </div>

            {/* Bottom tagline */}
            <p className="text-center text-white/80 text-sm md:text-base leading-relaxed px-2">
              That&apos;s why HAVEN tracks calories{" "}
              <span className="text-haven-teal font-semibold">weekly</span>
              {" "}— and adapts{" "}
              <span className="text-haven-yellow font-semibold">daily</span>
              {" "}— so progress feels calm, flexible, and sustainable.
            </p>
          </div>
          </div>

        </div>

      \
    </section>
  );
}