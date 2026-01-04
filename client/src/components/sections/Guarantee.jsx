import SectionHeading from '../ui/SectionHeading';

export default function Guarantee() {
  return (
    <section className="section-padding section-dark">
      <div className="section-container">
        <div className="relative bg-warm-800 border border-accent/20 rounded-xl p-8 md:p-12 overflow-hidden animate-fade-in-up">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            {/* Content */}
            <div>
              <h3 className="heading-3 text-white">Our Promise</h3>
              <p className="mt-2 text-warm-400 leading-relaxed max-w-2xl">
                If our final offer doesn't work for you, we return your item within 24 hours at our expense. No questions. No fees. No risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
