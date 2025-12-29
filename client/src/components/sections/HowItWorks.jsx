import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Submit',
    description: 'Share photos and details about your item'
  },
  {
    number: '02',
    title: 'Get Offer',
    description: 'Receive a no-obligation offer within 2 hours'
  },
  {
    number: '03',
    title: 'Ship Free',
    description: 'Accept? We send a prepaid insured label'
  },
  {
    number: '04',
    title: 'We Inspect',
    description: 'We verify and confirm within 24-48 hours'
  },
  {
    number: '05',
    title: 'Get Paid',
    description: 'Accept our offer and get paid same day'
  }
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-surface">
      <div className="section-container">
        <SectionHeading
          title="How It Works"
          subtitle="Simple, fast, and completely risk-free. Decline our offer and we ship it back at no cost."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative text-center md:text-left animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-gradient-to-r from-gold/50 to-gold/10" />
              )}

              <div className="relative">
                <span className="font-display text-4xl text-gold/30">{step.number}</span>
                <h3 className="mt-2 text-lg font-semibold text-cream">{step.title}</h3>
                <p className="mt-2 text-sm text-cream-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
