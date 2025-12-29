export default function FormSuccess() {
  return (
    <section id="intake-form" className="section-padding bg-surface">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto bg-success/20 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="mt-6 heading-2 text-cream">Got it!</h2>
          <p className="mt-4 text-cream-muted">
            We've received your submission and will get back to you within 2 hours during business hours.
          </p>
          <p className="mt-2 text-cream-muted">
            Keep an eye on your phone and email.
          </p>

          <div className="mt-8 p-6 bg-primary rounded-lg border border-white/5 text-left">
            <h3 className="font-medium text-cream">What happens next?</h3>
            <ol className="mt-4 space-y-3 text-sm text-cream-muted">
              <li className="flex gap-3">
                <span className="text-gold">1.</span>
                We review your photos and details
              </li>
              <li className="flex gap-3">
                <span className="text-gold">2.</span>
                You'll receive a no-obligation offer
              </li>
              <li className="flex gap-3">
                <span className="text-gold">3.</span>
                If you accept, we send a free prepaid shipping label
              </li>
            </ol>
          </div>

          <p className="mt-8 text-sm text-cream-muted">
            Questions? Call us at{' '}
            <a href="tel:XXXXXXXXXX" className="text-gold hover:underline">(XXX) XXX-XXXX</a>
          </p>
        </div>
      </div>
    </section>
  );
}
