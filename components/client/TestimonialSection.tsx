
export default function TestimonialsSection() {
    const testimonials = [
      {
        rating: 5,
        quote: "Thinking weekly instead of daily completely changed how I approach food.",
        name: "Sarah Martinez",
        detail: "Using HAVEN for 1 months, lost 10lbs"
      },
      {
        rating: 5,
        quote: "HAVEN feels more practical than other trackers I’ve used. Weekly planning makes it easier to stay consistent around meetings, travel, and social dinners.",
        name: "James Chen",
        detail: "Using HAVEN for 2 months, lost 12lbs"
      },
      {
        rating: 5,
        quote: "The coaching option was worth every penny. Having someone there to check my food logs throughout the week helped me stay consistent and reach my goals faster.",
        name: "Roki Kaba",
        detail: "Using HAVEN for 2 months, gained 3lbs of muscle"
      }
    ];
  
    return (
      <section className="py-20 lg:py-32 bg-haven-teal">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-haven-white mb-4">
              Real people, real progress
            </h2>
            <p className="text-xl text-haven-white">
              Join HAVEN and start reaching your goals!
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