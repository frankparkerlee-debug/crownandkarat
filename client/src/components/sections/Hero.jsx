import Button from '../ui/Button';

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[70vh] flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-surface-light" />

      {/* Subtle gold accent glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          <h1 className="heading-1 text-cream animate-fade-in-up">
            Sell Your Watches & Jewelry —
            <span className="text-gold"> Cash in 48 Hours</span>
          </h1>

          <p className="mt-6 text-xl text-cream-muted animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Free insured shipping. No-obligation offers. Fair prices from a trusted buyer.
          </p>

          <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button onClick={scrollToForm}>
              Get My Offer
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <TrustBadge icon="shield" text="Fully Insured Shipping" />
            <TrustBadge icon="clock" text="Offers in 2 Hours" />
            <TrustBadge icon="check" text="No-Risk Guarantee" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon, text }) {
  const icons = {
    shield: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    clock: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    check: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <div className="flex items-center gap-2 text-cream-muted">
      <span className="text-gold">{icons[icon]}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
}
