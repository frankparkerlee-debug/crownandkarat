const brands = [
  { name: 'Rolex', silhouette: 'diver' },
  { name: 'Patek Philippe', silhouette: 'nautilus' },
  { name: 'Audemars Piguet', silhouette: 'royal-oak' },
  { name: 'Omega', silhouette: 'speedmaster' },
  { name: 'Cartier', silhouette: 'tank' },
  { name: 'Tudor', silhouette: 'diver' },
  { name: 'IWC', silhouette: 'pilot' },
  { name: 'Vacheron Constantin', silhouette: 'overseas' },
];

const silhouettes = {
  // Diver style (Submariner, Black Bay) - classic dive watch with rotating bezel
  'diver': (
    <svg viewBox="0 0 40 48" fill="currentColor" className="w-8 h-10">
      <path d="M12 4h16v4h4v4h2v28h-2v4h-4v4H12v-4H8v-4H6V12h2V8h4V4zm2 2v2h12V6H14zm-4 4v2h20v-2H10zm-2 4v24h24V14H8zm4 28v2h16v-2H12z" />
    </svg>
  ),

  // Nautilus style - distinctive porthole shape with integrated bracelet ears
  'nautilus': (
    <svg viewBox="0 0 52 48" fill="currentColor" className="w-10 h-10">
      {/* Porthole ears / integrated bracelet */}
      <path d="M0 18h6v12H0zM46 18h6v12h-6z" fillOpacity="0.6" />
      {/* Main case - rounded horizontal octagon */}
      <path d="M14 4h24l6 6v28l-6 6H14l-6-6V10l6-6zm2 4l-4 4v24l4 4h20l4-4V12l-4-4H16z" />
      {/* Inner bezel ring */}
      <path d="M18 10h16l4 4v20l-4 4H18l-4-4V14l4-4zm1 2l-3 3v18l3 3h14l3-3V15l-3-3H19z" fillOpacity="0.3" />
    </svg>
  ),

  // Royal Oak style - octagonal bezel with exposed screws
  'royal-oak': (
    <svg viewBox="0 0 44 52" fill="currentColor" className="w-8 h-10">
      <path d="M18 2h8v6l6 2 4-4 6 6-4 4 2 6h6v8h-6l-2 6 4 4-6 6-4-4-6 2v6h-8v-6l-6-2-4 4-6-6 4-4-2-6H2v-8h6l2-6-4-4 6-6 4 4 6-2V2zm4 12a10 10 0 100 20 10 10 0 000-20z" />
      {/* Signature hexagonal screw heads */}
      <circle cx="22" cy="6" r="1.5" fillOpacity="0.5" />
      <circle cx="38" cy="14" r="1.5" fillOpacity="0.5" />
      <circle cx="38" cy="38" r="1.5" fillOpacity="0.5" />
      <circle cx="22" cy="46" r="1.5" fillOpacity="0.5" />
      <circle cx="6" cy="38" r="1.5" fillOpacity="0.5" />
      <circle cx="6" cy="14" r="1.5" fillOpacity="0.5" />
    </svg>
  ),

  // Speedmaster/Chronograph style - round case with three subdials
  'speedmaster': (
    <svg viewBox="0 0 44 48" fill="currentColor" className="w-8 h-10">
      <path d="M18 2h8v4h6v4h4v4h2v20h-2v4h-4v4h-6v4h-8v-4h-6v-4H8v-4H6V14h2v-4h4V6h6V2zm4 10a12 12 0 100 24 12 12 0 000-24z" />
      {/* Chronograph subdials */}
      <circle cx="16" cy="24" r="3" fillOpacity="0.3" />
      <circle cx="28" cy="24" r="3" fillOpacity="0.3" />
      <circle cx="22" cy="30" r="3" fillOpacity="0.3" />
    </svg>
  ),

  // Tank style - rectangular case with distinctive side brancards
  'tank': (
    <svg viewBox="0 0 32 52" fill="currentColor" className="w-6 h-10">
      <path d="M6 0h4v8H8v36h2v8H6v-8H4V8h2V0zm16 0h4v8h2v36h-2v8h-4v-8h-2V8h2V0zM10 10h12v32H10V10z" />
    </svg>
  ),

  // Pilot/Aviator style - large crown, triangle marker at 12
  'pilot': (
    <svg viewBox="0 0 44 52" fill="currentColor" className="w-8 h-10">
      <path d="M18 0h8v6h6v4h4v6h2v20h-2v6h-4v4h-6v6h-8v-6h-6v-4H8v-6H6V16h2v-6h4V6h6V0zm4 12a12 12 0 100 24 12 12 0 000-24z" />
      {/* Oversized crown */}
      <rect x="38" y="22" width="5" height="8" rx="1" fillOpacity="0.5" />
      {/* Triangle marker at 12 o'clock */}
      <path d="M22 14l-2 4h4l-2-4z" fillOpacity="0.4" />
    </svg>
  ),

  // Overseas style - round with notched bezel and integrated bracelet
  'overseas': (
    <svg viewBox="0 0 48 48" fill="currentColor" className="w-9 h-10">
      {/* Integrated bracelet lugs */}
      <path d="M8 16h4v16H8zM36 16h4v16h-4z" fillOpacity="0.4" />
      {/* Main case */}
      <circle cx="24" cy="24" r="16" />
      {/* Inner chapter ring */}
      <circle cx="24" cy="24" r="12" fillOpacity="0" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      {/* Cardinal bezel notches */}
      <rect x="23" y="6" width="2" height="3" fillOpacity="0.5" />
      <rect x="23" y="39" width="2" height="3" fillOpacity="0.5" />
      <rect x="6" y="23" width="3" height="2" fillOpacity="0.5" />
      <rect x="39" y="23" width="3" height="2" fillOpacity="0.5" />
    </svg>
  ),
};

export default function BrandMarquee() {
  // Double the array for seamless infinite loop
  const items = [...brands, ...brands];

  return (
    <section className="py-10 bg-surface/50 border-y border-white/5 overflow-hidden">
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex animate-marquee hover:animation-paused">
          {items.map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-4 mx-10"
            >
              {/* Watch silhouette */}
              <span className="text-gold/40">
                {silhouettes[brand.silhouette]}
              </span>

              {/* Brand name in elegant serif */}
              <span className="font-display text-xl text-cream/80 whitespace-nowrap tracking-wide">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
