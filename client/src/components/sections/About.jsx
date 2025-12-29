export default function About() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="relative animate-fade-in-up">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 bg-surface rounded-lg border border-white/5 flex items-center justify-center">
              {/* Replace with actual image later */}
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto bg-surface-light rounded-full flex items-center justify-center">
                  <span className="font-display text-4xl text-gold">PL</span>
                </div>
                <p className="mt-4 text-cream-muted text-sm">Photo coming soon</p>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/20 rounded-lg -z-10" />
          </div>

          {/* Bio content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="heading-2 text-cream">Parker Lee</h2>
            <p className="mt-1 text-gold">Founder, Crown and Karat</p>

            <div className="mt-6 space-y-4 text-cream-muted leading-relaxed">
              <p>
                I'm Parker. I've been in the jewelry industry for years and got tired of watching people get lowballed by buyers who don't know what they're looking at — or worse, don't care.
              </p>
              <p>
                I started Crown and Karat to give people a better option: fair offers, fast payment, and zero pressure. Every inquiry comes directly to me.
              </p>
              <p>
                Call anytime. I answer.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <a
                href="tel:XXXXXXXXXX"
                className="flex items-center gap-3 text-cream hover:text-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">(XXX) XXX-XXXX</span>
              </a>

              <div className="flex items-center gap-3 text-cream-muted">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Dallas, TX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
