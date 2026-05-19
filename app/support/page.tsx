
"use client";

import Header from "@/components/client/Header";
import FooterSection from "@/components/client/FooterSection";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-haven-cream">
      <Header logoSrc="/images/HAVEN.svg" />

      {/* Hero Section */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-haven-graphite">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Support</h1>
            <p className="text-xl text-haven-graphite/90 mb-4">
              We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto space-y-8">

          {/* Contact Card */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-haven-teal/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-haven-teal">Contact Us</h2>
            </div>
            <p className="text-haven-steel mb-4">
              For questions, bugs, or feedback — email us directly and we&apos;ll respond within 24 hours.
            </p>
            
             <a href="mailto:support@tryhaven.co"
              className="inline-flex items-center gap-2 bg-haven-teal text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all shadow-lg" > support@tryhaven.co
            </a>
          </section>

          {/* FAQ Card */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-haven-orange/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-haven-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-haven-teal">Common Questions</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "How does the weekly budget work?",
                  a: "One meal doesn't erase your week. HAVEN spreads your budget across 7 days — so you always have room to adjust, recover, and keep moving forward.",
                },
                {
                  q: "How do I cancel my subscription?",
                  a: "Cancel anytime through iPhone Settings → Apple ID → Subscriptions → HAVEN.",
                },
                {
                  q: "How do I delete my account?",
                  a: "Go to Profile → Delete Account inside the app. This permanently removes all your data.",
                },
                {
                  q: "I forgot to log a meal. What do I do?",
                  a: "No problem — HAVEN works on a weekly model. Log it when you remember and your budget adjusts automatically.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-haven-cream rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-haven-teal mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="font-bold text-haven-graphite mb-1">{item.q}</p>
                      <p className="text-haven-steel text-sm" dangerouslySetInnerHTML={{ __html: item.a }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Legal Card */}
          <section className="bg-gradient-to-br from-haven-teal to-haven-teal-dark rounded-2xl p-8 shadow-lg text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 text-haven-cream">Legal</h2>
              <p className="text-white/80 mb-6">
                Read our full privacy policy and terms of service.
              </p>
              <div className="flex justify-center gap-4">
                
                <a href="/privacy"
                  className="bg-white text-haven-teal px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all"
                >
                  Privacy Policy
                </a>
                
                  <a href="/terms"
                  className="bg-haven-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>

      <FooterSection />
    </main>
  );
}