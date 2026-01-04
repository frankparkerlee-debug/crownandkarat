export default function FormSuccess() {
  return (
    <section id="intake-form" className="section-padding section-dark">
      <div className="section-container">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto bg-success/20 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="mt-6 heading-2 text-white">Got it!</h2>
          <p className="mt-4 text-warm-400">
            We've received your submission and will get back to you within 2 hours during business hours.
          </p>
          <p className="mt-2 text-warm-400">
            Keep an eye on your phone and email.
          </p>

          <div className="mt-8 p-6 bg-warm-800 rounded-lg border border-warm-700 text-left">
            <h3 className="font-medium text-warm-100">What happens next?</h3>
            <ol className="mt-4 space-y-3 text-sm text-warm-400">
              <li className="flex gap-3">
                <span className="text-accent">1.</span>
                We review your photos and details
              </li>
              <li className="flex gap-3">
                <span className="text-accent">2.</span>
                You'll receive a no-obligation offer
              </li>
              <li className="flex gap-3">
                <span className="text-accent">3.</span>
                If you accept, we send a free prepaid shipping label
              </li>
            </ol>
          </div>

          <p className="mt-8 text-sm text-warm-400">
            Questions? Call us at{' '}
            <a href="tel:2145550123" className="text-accent hover:underline">(214) 555-0123</a>
          </p>
        </div>
      </div>
    </section>
  );
}
