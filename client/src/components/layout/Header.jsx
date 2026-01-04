import { useState, useEffect } from 'react';
import Button from '../ui/Button';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-warm-200'
        : 'bg-transparent'
    }`}>
      <div className="section-container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className={`text-xl font-semibold tracking-tight transition-colors ${
            scrolled ? 'text-warm-900' : 'text-white'
          }`}>
            Crown & Karat
          </a>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              variant={scrolled ? 'primary' : 'secondary'}
              size="small"
              onClick={scrollToForm}
            >
              Get My Offer
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${scrolled ? 'text-warm-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${scrolled ? 'border-warm-200' : 'border-white/10'}`}>
            <Button
              variant="primary"
              onClick={scrollToForm}
              className="w-full"
            >
              Get My Offer
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
