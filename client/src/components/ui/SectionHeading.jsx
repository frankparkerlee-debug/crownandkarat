export default function SectionHeading({ title, subtitle, centered = true, dark = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`heading-2 ${dark ? 'text-white' : 'text-warm-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-warm-400' : 'text-warm-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
