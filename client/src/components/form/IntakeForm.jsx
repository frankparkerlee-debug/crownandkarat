import { useState } from 'react';
import StepIndicator from './StepIndicator';
import StepItemType from './steps/StepItemType';
import StepDetails from './steps/StepDetails';
import StepPhotos from './steps/StepPhotos';
import StepContact from './steps/StepContact';
import FormSuccess from './FormSuccess';

const INITIAL_DATA = {
  item_type: '',
  brand: '',
  model: '',
  condition: '',
  box_papers: '',
  description: '',
  photos: [],
  name: '',
  email: '',
  phone: '',
  contact_preference: '',
  source: ''
};

export default function IntakeForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const updateData = (fields) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';

      if (!apiUrl) {
        console.warn('VITE_API_URL not set, using relative path');
      }

      const submitData = new FormData();

      // Append text fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'photos' && value) {
          submitData.append(key, value);
        }
      });

      // Append photos
      formData.photos.forEach(photo => {
        submitData.append('photos', photo);
      });

      console.log('Submitting to:', `${apiUrl}/api/submissions`);
      console.log('Form data keys:', Object.keys(formData).filter(k => formData[k]));
      console.log('Photos count:', formData.photos?.length || 0);

      const response = await fetch(`${apiUrl}/api/submissions`, {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();
      console.log('Response:', response.status, result);

      if (!response.ok || !result.success) {
        throw new Error(result.error || result.details || `Server error: ${response.status}`);
      }

      setIsSuccess(true);
    } catch (err) {
      console.error('Submit error:', err);
      setError(err.message || 'Failed to submit. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return <FormSuccess />;
  }

  return (
    <section id="intake-form" className="section-padding section-dark">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-white">Get Your Offer</h2>
            <p className="mt-4 text-warm-400">
              Fill out the form below and we'll get back to you within 2 hours.
            </p>
          </div>

          <div className="bg-warm-800 rounded-xl border border-warm-700 p-6 md:p-10">
            <StepIndicator currentStep={step} totalSteps={4} />

            <div className="mt-8">
              {step === 1 && (
                <StepItemType
                  data={formData}
                  updateData={updateData}
                  onNext={nextStep}
                />
              )}
              {step === 2 && (
                <StepDetails
                  data={formData}
                  updateData={updateData}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}
              {step === 3 && (
                <StepPhotos
                  data={formData}
                  updateData={updateData}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}
              {step === 4 && (
                <StepContact
                  data={formData}
                  updateData={updateData}
                  onBack={prevStep}
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  error={error}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
