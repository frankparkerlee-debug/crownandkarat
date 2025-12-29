export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <a href="/" className="font-display text-2xl text-cream">
              Crown <span className="text-gold">&</span> Karat
            </a>
            <p className="mt-4 text-cream-muted text-sm">
              Fair offers. Fast payment. Zero hassle.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Contact</h4>
            <div className="space-y-2 text-cream-muted text-sm">
              <p>
                <a href="mailto:sell@crownandkarat.com" className="hover:text-gold transition-colors">
                  sell@crownandkarat.com
                </a>
              </p>
              <p>
                <a href="tel:XXXXXXXXXX" className="hover:text-gold transition-colors">
                  (XXX) XXX-XXXX
                </a>
              </p>
              <p>Dallas, TX</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Legal</h4>
            <div className="space-y-2 text-cream-muted text-sm">
              <p>
                <a href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
              </p>
              <p>
                <a href="/terms" className="hover:text-gold transition-colors">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-cream-muted text-sm">
          © {new Date().getFullYear()} Crown and Karat. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
