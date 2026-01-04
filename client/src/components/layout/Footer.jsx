export default function Footer() {
  return (
    <footer className="bg-warm-900 text-warm-400 py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-4">Crown & Karat</h3>
            <p className="text-warm-400 max-w-md">
              Dallas-based buyer of luxury watches and fine jewelry.
              Fair prices, fast payment, fully insured.
            </p>
            <p className="mt-4 text-warm-500">
              <a href="tel:2145550123" className="hover:text-white transition-colors">(214) 555-0123</a>
              <span className="mx-2">·</span>
              <a href="mailto:sell@crownandkarat.com" className="hover:text-white transition-colors">sell@crownandkarat.com</a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#what-we-buy" className="hover:text-white transition-colors">What We Buy</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold text-white mb-4">Location</h4>
            <p className="text-warm-400">
              Dallas, Texas<br />
              By appointment only
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-warm-500 text-sm">
            © {new Date().getFullYear()} Crown and Karat. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-warm-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-warm-500 hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
