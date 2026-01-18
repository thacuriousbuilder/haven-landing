
export default function TestimonialsSection() {
  const testimonials = [
    {
      rating: 5,
      quote: "Weekly structure keeps both me and my clients more consistent. We’re not resetting after every weekend anymore.",
      name: "Marcus T., PT & Nutrition Coach",
      detail: "Using HAVEN for 3 months"
    },    
    {
      rating: 5,
      quote: "Weekly summaries make it much easier to assess patterns and adherence. I can separate normal variability from habits that actually need adjusting.",
      name: "Joshua Siegel, RD",
      detail: "Using HAVEN for 3 months"
    },    
    {
      rating: 5,
      quote: "Clients eat differently on training days, weekends, rest days. Seeing it all laid out weekly makes it easier to guide my clients.",
      name: "Elz Johnson, PT",
      detail: "Using HAVEN for 4 months"
    }
    
  ];

  return (
    <section className="py-20 lg:py-32 bg-haven-teal">
      <div className="container mx-auto px-4 lg:px-8">
       
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-haven-cream mb-4">
          Real coaches. Real insights
          </h2>
          <p className="text-xl text-haven-cream">
          Join HAVEN and help your clients stay consistent and make progress.
          </p>
        </div>

      
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-haven-white rounded-2xl p-6 lg:p-8 border border-haven-border hover:shadow-lg transition-shadow"
            >
             
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg 
                    key={i}
                    className="w-5 h-5 text-haven-orange" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

            
              <p className="text-haven-graphite leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </p>

             
              <div className="pt-4 border-t border-haven-border">
                <p className="font-bold text-haven-graphite">
                  {testimonial.name}
                </p>
                <p className="text-sm text-haven-steel mt-1">
                  {testimonial.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}