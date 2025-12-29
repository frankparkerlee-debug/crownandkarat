export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'font-semibold px-8 py-4 rounded transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-gold text-primary hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20',
    secondary: 'border border-gold text-gold hover:bg-gold hover:text-primary',
    ghost: 'text-cream-muted hover:text-cream',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
