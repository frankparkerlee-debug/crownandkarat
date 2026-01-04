import Button from '../ui/Button';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center section-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-900 via-warm-900 to-warm-800" />

      {/* Subtle grid pattern (Stripe-style) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-accent font-medium mb-4 animate-fade-in-up">
            Trusted by collectors nationwide
          </p>

          {/* Headline */}
          <h1 className="heading-1 text-white animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Sell your watches and jewelry.{' '}
            <span className="text-warm-400">Get paid in 48 hours.</span>
          </h1>

          {/* Subhead */}
          <p className="mt-6 text-xl text-warm-400 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Free insured shipping. No-obligation offers. Fair market prices from a buyer you can trust.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button size="large" onClick={scrollToForm}>
              Get My Offer
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button variant="secondary" size="large" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
              See How It Works
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <TrustItem icon="shield" text="Fully Insured" />
            <TrustItem icon="clock" text="2-Hour Offers" />
            <TrustItem icon="refresh" text="No-Risk Guarantee" />
            <TrustItem icon="lock" text="Secure Process" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon, text }) {
  const icons = {
    shield: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    clock: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    refresh: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
    lock: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />,
  };

  return (
    <div className="flex items-center gap-2 text-warm-400">
      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {icons[icon]}
      </svg>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
