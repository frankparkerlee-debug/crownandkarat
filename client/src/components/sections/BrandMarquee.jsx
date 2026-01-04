const brands = [
  { name: 'ROLEX', font: 'font-brand-rolex', style: 'tracking-[0.2em] font-semibold text-[1.35rem]' },
  { name: 'PATEK PHILIPPE', font: 'font-brand-patek', style: 'tracking-[0.12em] font-medium text-[1.1rem]' },
  { name: 'AUDEMARS PIGUET', font: 'font-brand-ap', style: 'tracking-[0.08em] font-normal text-[1.05rem]' },
  { name: 'OMEGA', font: 'font-brand-omega', style: 'tracking-[0.25em] font-medium text-[1.2rem]' },
  { name: 'Cartier', font: 'font-brand-cartier', style: 'tracking-normal font-normal text-[1.6rem]' },
  { name: 'TUDOR', font: 'font-brand-tudor', style: 'tracking-[0.18em] font-semibold text-[1.25rem]' },
  { name: 'IWC', font: 'font-brand-iwc', style: 'tracking-[0.35em] font-medium text-[1.3rem]' },
  { name: 'VACHERON CONSTANTIN', font: 'font-brand-vc', style: 'tracking-[0.1em] font-light text-[1rem]' },
];

export default function BrandMarquee() {
  const items = [...brands, ...brands];

  return (
    <section className="py-12 bg-warm-100 border-y border-warm-200 overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-warm-100 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-warm-100 to-transparent z-10" />

        <div className="flex items-center animate-marquee hover:animation-paused">
          {items.map((brand, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className={`text-warm-400 hover:text-warm-900 transition-colors duration-300 whitespace-nowrap ${brand.font} ${brand.style}`}>
                {brand.name}
              </span>
              <span className="ml-16 text-warm-300 text-[0.5rem]">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
