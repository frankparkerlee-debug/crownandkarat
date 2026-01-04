import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    quote: "I was nervous about selling my late father's Rolex online, but Crown & Karat made it effortless. Fair price, fast payment, and they treated the watch with the respect it deserved.",
    author: 'Michael R.',
    location: 'New York, NY',
    item: 'Rolex Datejust',
  },
  {
    quote: "Best experience I've had selling jewelry. Their offer was 30% higher than two local jewelers, and I had the money in my account the next day.",
    author: 'Sarah T.',
    location: 'Los Angeles, CA',
    item: 'Diamond Tennis Bracelet',
  },
  {
    quote: "Professional, transparent, and genuinely helpful. They explained exactly how they valued my Omega and even suggested I keep one piece that had more sentimental than market value.",
    author: 'David K.',
    location: 'Chicago, IL',
    item: 'Omega Speedmaster',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-warm-50">
      <div className="section-container">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Join thousands who've trusted us with their valuables."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-warm-200 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-warm-600 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-warm-200 pt-4">
                <p className="text-warm-900 font-medium">{testimonial.author}</p>
                <p className="text-sm text-warm-500">{testimonial.location}</p>
                <p className="text-xs text-accent mt-1">Sold: {testimonial.item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
