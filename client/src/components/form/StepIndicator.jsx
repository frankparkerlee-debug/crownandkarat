export default function StepIndicator({ currentStep, totalSteps }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((stepNum) => (
        <div key={stepNum} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              stepNum === currentStep
                ? 'bg-accent text-white'
                : stepNum < currentStep
                ? 'bg-accent/20 text-accent'
                : 'bg-warm-700 text-warm-400'
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
            <div className={`w-8 h-0.5 ${stepNum < currentStep ? 'bg-accent/50' : 'bg-warm-700'}`} />
          )}
        </div>
      ))}
    </div>
  );
}
