export default function Button({
  children,
  variant = 'primary',
  className = '',
  isLoading = false,
  ...props
}) {
  const baseStyles = 'font-semibold px-8 py-4 rounded transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-gold text-primary hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20',
    secondary: 'border border-gold text-gold hover:bg-gold hover:text-primary',
    ghost: 'text-cream-muted hover:text-cream',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <svg className="w-5 h-5 spinner" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </button>
  );
}
