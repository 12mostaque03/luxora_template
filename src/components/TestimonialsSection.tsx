
const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Fashion Stylist",
      content: "LUXORA has completely transformed my wardrobe. Every piece I've purchased feels like it was made just for me - the quality and attention to detail is unmatched.",
      rating: 5
    },
    {
      id: 2,
      name: "David Chen",
      role: "Creative Director",
      content: "The minimalist aesthetic and premium quality make LUXORA my go-to for professional and personal styling. Their accessories collection is particularly exceptional.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Entrepreneur",
      content: "From skincare to fashion, LUXORA curates the perfect lifestyle pieces. Shopping here feels like having a personal stylist who truly understands modern elegance.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-neutral-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-neutral-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="font-inter text-lg text-neutral-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have elevated their style with LUXORA
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-neutral-50 rounded-lg p-8 hover:bg-neutral-100 transition-colors duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonial.rating)}
              </div>

              {/* Content */}
              <blockquote className="font-inter text-neutral-700 text-center mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <h4 className="font-inter font-semibold text-neutral-900 mb-1">
                  {testimonial.name}
                </h4>
                <p className="font-inter text-sm text-neutral-500">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
