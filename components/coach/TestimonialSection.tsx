
export default function TrainerTestimonialsSection() {
    const testimonials = [
      {
        quote: "I can finally see what my clients are actually eating week to week. Makes check-ins way more productive.",
        name: "Jessica M.",
        title: "Nutrition Coach, San Diego",
        initials: "JM"
      },
      {
        quote: "The 7-day baseline changed everything. I used to guess at client habits—now I have real data before we even start.",
        name: "Marcus T.",
        title: "Personal Trainer & Nutrition Coach",
        initials: "MT"
      },
      {
        quote: "My clients love the weekly flexibility. They stick to it longer because it fits their real life, not some perfect ideal.",
        name: "Sarah K.",
        title: "Online Fitness Coach",
        initials: "SK"
      }
    ];
  
    return (
      <section className="py-20 lg:py-32 bg-gradient-to-br from-haven-teal to-haven-teal-dark">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Trusted by coaches
            </h2>
          </div>
  
          {/* Testimonial Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-shadow"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg className="w-12 h-12 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
  
                {/* Quote Text */}
                <p className="text-haven-graphite leading-relaxed mb-8">
                  &quot;{testimonial.quote}&quot;
                </p>
  
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-haven-teal rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-haven-graphite">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-haven-steel">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }