export default function StepIndicator({ currentStep, totalSteps }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((stepNum) => (
        <div key={stepNum} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              stepNum === currentStep
                ? 'bg-gold text-primary'
                : stepNum < currentStep
                ? 'bg-gold/20 text-gold'
                : 'bg-surface-light text-cream-muted'
            }`}
          >
            {stepNum < currentStep ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              stepNum
            )}
          </div>
          {stepNum < totalSteps && (
            <div className={`w-8 h-0.5 ${stepNum < currentStep ? 'bg-gold/50' : 'bg-surface-light'}`} />
          )}
        </div>
      ))}
    </div>
  );
}
