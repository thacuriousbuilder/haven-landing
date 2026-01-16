
export default function CoachFeaturesSection() {
    return (
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-haven-graphite mb-4">
              What HAVEN includes
            </h2>
            <p className="text-xl text-haven-steel">
              Everything you need to coach nutrition effectively
            </p>
          </div>
  
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 xl:gap-32 items-center max-w-6xl mx-auto">
            {/* Left Column - Phone Mockup */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-sm">
                {/* Phone frame */}
                <div className="bg-neutral-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] aspect-[9/19] overflow-hidden">
                    {/* Phone status bar */}
                    <div className="bg-white px-6 py-3 flex items-center justify-center text-xs border-b border-gray-200">
                      <span className="font-medium text-haven-graphite">9:41</span>
                    </div>
  
                    {/* App Content */}
                    <div className="h-full flex flex-col p-6">
                      {/* Dashboard Header */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-haven-graphite mb-1">Client Dashboard</h3>
                        <p className="text-sm text-haven-steel">12 Active Clients</p>
                      </div>
  
                      {/* Client List */}
                      <div className="space-y-4 mb-6">
                        {/* Client 1 - On track */}
                        <div className="bg-haven-cream rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-haven-teal rounded-full flex items-center justify-center text-white font-bold text-sm">
                              SM
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-haven-graphite text-sm">Sarah M.</div>
                              <div className="text-xs text-haven-teal">On track</div>
                            </div>
                            <div className="text-lg font-bold text-haven-teal">95%</div>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-haven-teal rounded-full" style={{ width: '95%' }}></div>
                          </div>
                        </div>
  
                        {/* Client 2 - Weekend high */}
                        <div className="bg-haven-cream rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-haven-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                              MT
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-haven-graphite text-sm">Mike T.</div>
                              <div className="text-xs text-haven-orange">Weekend high</div>
                            </div>
                            <div className="text-lg font-bold text-haven-orange">110%</div>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-haven-orange rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </div>
  
                        {/* Client 3 - Needs review */}
                        <div className="bg-haven-cream rounded-xl p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-haven-steel rounded-full flex items-center justify-center text-white font-bold text-sm">
                              JL
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-haven-graphite text-sm">Jessica L.</div>
                              <div className="text-xs text-haven-steel">Needs review</div>
                            </div>
                            <div className="text-lg font-bold text-haven-steel">75%</div>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-haven-steel rounded-full" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                      </div>
  
                      {/* This Week's Activity */}
                      <div className="mt-auto">
                        <p className="text-sm font-semibold text-haven-graphite">This Week&apos;s Activity</p>
                      </div>
                    </div>
  
                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <svg className="w-6 h-6 text-haven-steel" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center">
                        <svg className="w-6 h-6 text-haven-teal" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                        </svg>
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center">
                        <svg className="w-6 h-6 text-haven-steel" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                        </svg>
                      </div>
                      <div className="w-8 h-8 flex items-center justify-center">
                        <svg className="w-6 h-6 text-haven-steel" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Column - Feature List */}
            <div className="space-y-8">
              {/* Feature 1: Client food tracking */}
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
  
              {/* Feature 2: Weekly trend analysis */}
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
  
              {/* Feature 3: In-app feedback */}
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
  
              {/* Feature 4: Visual progress reports */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-haven-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-haven-graphite mb-2">
                    Visual progress reports
                  </h3>
                  <p className="text-haven-steel leading-relaxed">
                    Clear charts and graphs show weekly adherence, making check-ins more productive.
                  </p>
                </div>
              </div>
  
              {/* Feature 5: 7-day baseline assessment */}
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
  
              {/* Feature 6: Unlimited client management */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-haven-teal/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-haven-graphite mb-2">
                    Unlimited client management
                  </h3>
                  <p className="text-haven-steel leading-relaxed">
                    Manage all your clients in one place. No per-client fees, just simple pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }