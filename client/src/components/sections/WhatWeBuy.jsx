import SectionHeading from '../ui/SectionHeading';

const categories = [
  {
    title: 'Watches',
    description: 'Rolex, Omega, Patek Philippe, Cartier, and more',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Gold & Jewelry',
    description: 'Necklaces, bracelets, rings — any condition',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    title: 'Diamonds',
    description: 'Loose stones and diamond jewelry',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    title: 'Luxury Brands',
    description: 'Cartier, Tiffany, Van Cleef & Arpels',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  }
];

export default function WhatWeBuy() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="What We Buy"
          subtitle="From luxury timepieces to estate jewelry, we make fair offers on quality pieces."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group p-8 bg-surface rounded-lg border border-white/5 hover:border-gold/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-gold/70 group-hover:text-gold transition-colors">
                {category.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-cream">{category.title}</h3>
              <p className="mt-2 text-sm text-cream-muted">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
