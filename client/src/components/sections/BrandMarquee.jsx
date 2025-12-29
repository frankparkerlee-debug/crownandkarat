const brands = [
  {
    name: 'ROLEX',
    font: 'font-brand-rolex',
    style: 'tracking-[0.2em] font-semibold text-[1.35rem]'
    // Based on: Modified Garamond - elegant serif with high contrast
  },
  {
    name: 'PATEK PHILIPPE',
    font: 'font-brand-patek',
    style: 'tracking-[0.12em] font-medium text-[1.1rem]'
    // Based on: Monotype Grotesque - clean grotesque sans-serif
  },
  {
    name: 'AUDEMARS PIGUET',
    font: 'font-brand-ap',
    style: 'tracking-[0.08em] font-normal text-[1.05rem]'
    // Based on: Stretched Times Roman - traditional serif
  },
  {
    name: 'OMEGA',
    font: 'font-brand-omega',
    style: 'tracking-[0.25em] font-medium text-[1.2rem]'
    // Based on: Futura / Omega CT - geometric sans-serif
  },
  {
    name: 'Cartier',
    font: 'font-brand-cartier',
    style: 'tracking-normal font-normal text-[1.6rem]'
    // Based on: Cartier CG - 19th century calligraphic script
    // Note: Title case, not uppercase (script font)
  },
  {
    name: 'TUDOR',
    font: 'font-brand-tudor',
    style: 'tracking-[0.18em] font-semibold text-[1.25rem]'
    // Based on: Custom serif similar to Rolex (sister brand)
  },
  {
    name: 'IWC',
    font: 'font-brand-iwc',
    style: 'tracking-[0.35em] font-medium text-[1.3rem]'
    // Based on: Roman serif capitals
  },
  {
    name: 'VACHERON CONSTANTIN',
    font: 'font-brand-vc',
    style: 'tracking-[0.1em] font-light text-[1rem]'
    // Based on: Clean thin uppercase sans-serif
  },
];

export default function BrandMarquee() {
  // Double the array for seamless infinite loop
  const items = [...brands, ...brands];

  return (
    <section className="py-14 bg-surface/50 border-y border-white/5 overflow-hidden">
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex items-center animate-marquee hover:animation-paused">
          {items.map((brand, index) => (
            <div
              key={index}
              className="flex items-center mx-8"
            >
              {/* Brand wordmark */}
              <span
                className={`text-cream/60 hover:text-gold/90 transition-colors duration-300 whitespace-nowrap ${brand.font} ${brand.style}`}
              >
                {brand.name}
              </span>

              {/* Divider */}
              <span className="ml-16 text-gold/20 text-[0.5rem]">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
