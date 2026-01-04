export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'default',
  className = '',
  disabled = false,
  isLoading = false
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-dark active:scale-[0.98] shadow-sm hover:shadow',
    secondary: 'bg-white text-warm-900 border border-warm-300 hover:border-warm-400 hover:bg-warm-50',
    dark: 'bg-warm-900 text-white hover:bg-warm-800 active:scale-[0.98]',
  };

  const sizes = {
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
    small: 'px-4 py-2 text-sm',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Processing...
        </>
      ) : children}
    </button>
  );
}
