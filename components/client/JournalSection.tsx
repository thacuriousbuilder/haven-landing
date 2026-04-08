// apps/web/components/client/JournalSection.tsx

import Image from "next/image";

export default function JournalSection() {
  return (
    <section id="journal" className="py-20 lg:py-32 bg-haven-cream">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Top: Copy + Mockups */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 xl:gap-60 items-center max-w-6xl mx-auto mb-16">

          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-haven-teal/10 text-haven-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Understanding You
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-haven-graphite mb-6 leading-tight">
              Understand your habits.{" "}
              <span className="text-haven-teal">Plan your week.</span>{" "}
              No guesswork.
            </h2>

            <p className="text-haven-steel leading-relaxed mb-4">
              <span className="font-semibold text-haven-graphite">HAVEN is built differently.</span>{" "}
              Your journal helps you understand how you actually eat, your habits, patterns, and
              triggers, so your plan reflects your real life.
            </p>

            <p className="text-haven-steel leading-relaxed mb-8">
              And when life gets social?{" "}
              <span className="font-bold text-haven-graphite">Treat Days</span> let you plan ahead
              for dinners, date nights, and weekends, before they happen. HAVEN adjusts the rest
              automatically.
            </p>

            {/* Checkmarks */}
            <div className="space-y-3">
              {[
                "See your weekday vs. weekend habits clearly",
                "Understand when, and why you eat more",
                "Plan Treat Days before they happen",
                "A plan that actually fits your life",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-haven-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-haven-graphite/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Two slanted phone mockups */}
          <div className="relative flex justify-center items-center h-[480px]">

            {/* Back mockup — TreatDays — rotated right */}
            <div className="absolute right-0 top-8 rotate-6 z-0">
              <div className="bg-neutral-900 rounded-[3rem] p-3 shadow-2xl w-52">
                <div className="bg-haven-cream rounded-[2.5rem] aspect-[9/19] overflow-hidden flex items-center justify-center p-4">
                  <Image
                    src="/images/Plan.svg"
                    alt="HAVEN Treat Days interface"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Front mockup — FoodJournal — rotated left */}
            <div className="absolute left-0 top-4 -rotate-6 z-10">
              <div className="bg-neutral-900 rounded-[3rem] p-3 shadow-2xl w-52">
                <div className="bg-haven-cream rounded-[2.5rem] aspect-[9/19] overflow-hidden flex items-center justify-center p-4">
                  <Image
                    src="/images/FoodModal.svg"
                    alt="HAVEN food journal interface"
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom: Pattern cards */}
        <div className="max-w-6xl mx-auto bg-haven-cream rounded-2xl p-8 lg:p-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-haven-graphite mb-2">
              What your journal reveals over time
            </h3>
            <p className="text-haven-steel">
              The longer you log, the smarter your plan gets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                title: "Daily & Weekly Rhythms",
                desc: "How your intake naturally shifts across the week",
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Meal Timing & Portions",
                desc: "When you eat, how much, and what keeps you satisfied",
              },
              {
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                title: "Treat Occasions",
                desc: "When higher-calorie moments happen, and how to plan for them",
              },
            ].map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-haven-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-haven-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                  </svg>
                </div>
                <h4 className="font-bold text-haven-graphite mb-2">{card.title}</h4>
                <p className="text-haven-steel text-sm">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Footer banner */}
          <div className="bg-white rounded-xl p-5 border border-haven-border text-center">
            <p className="text-haven-graphite text-sm leading-relaxed">
              <span className="font-bold">
                Your patterns → your weekly budget → your weekly recap.
              </span>{" "}
              A system that gets more personal the longer you use it.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}