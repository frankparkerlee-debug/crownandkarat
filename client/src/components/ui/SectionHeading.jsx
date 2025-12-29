export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="heading-2 text-cream">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-cream-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
