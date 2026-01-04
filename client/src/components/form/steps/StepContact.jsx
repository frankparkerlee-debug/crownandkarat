import { useState } from 'react';
import Button from '../../ui/Button';

const sources = [
  { value: 'google', label: 'Google' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'referral', label: 'Friend / Referral' },
  { value: 'other', label: 'Other' },
];

export default function StepContact({ data, updateData, onBack, onSubmit, isSubmitting, error }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = 'Name is required';
    if (!data.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Invalid email';
    if (!data.phone.trim()) newErrors.phone = 'Phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit();
    }
  };

  const inputClass = "w-full bg-warm-700 border border-warm-600 rounded-lg px-4 py-3 text-warm-100 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors";
  const inputErrorClass = "w-full bg-warm-700 border border-error rounded-lg px-4 py-3 text-warm-100 placeholder-warm-400 focus:outline-none focus:ring-2 focus:ring-error/20 transition-colors";

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-medium text-warm-100 mb-6">Your information</h3>

      <div className="space-y-6">
        <div>
          <label className="block text-sm text-warm-400 mb-2">Name *</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => updateData({ name: e.target.value })}
            className={errors.name ? inputErrorClass : `${inputClass} focus:border-accent`}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-sm text-error">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm text-warm-400 mb-2">Email *</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => updateData({ email: e.target.value })}
            className={errors.email ? inputErrorClass : `${inputClass} focus:border-accent`}
            placeholder="you@email.com"
          />
          {errors.email && <p className="mt-1 text-sm text-error">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm text-warm-400 mb-2">Phone *</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => updateData({ phone: e.target.value })}
            className={errors.phone ? inputErrorClass : `${inputClass} focus:border-accent`}
            placeholder="(555) 555-5555"
          />
          {errors.phone && <p className="mt-1 text-sm text-error">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm text-warm-400 mb-2">Preferred contact method</label>
          <div className="flex gap-4">
            {['call', 'text', 'email'].map(method => (
              <label key={method} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="contact_preference"
                  value={method}
                  checked={data.contact_preference === method}
                  onChange={(e) => updateData({ contact_preference: e.target.value })}
                  className="w-4 h-4 accent-accent"
                />
                <span className="text-warm-100 capitalize">{method}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm text-warm-400 mb-2">How did you hear about us?</label>
          <select
            value={data.source}
            onChange={(e) => updateData({ source: e.target.value })}
            className={`${inputClass} focus:border-accent`}
          >
            <option value="">Select one (optional)</option>
            {sources.map(s => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <div className="mt-6 p-4 bg-error/10 border border-error/30 rounded-lg text-error text-sm">
          {error}
        </div>
      )}

      <div className="mt-8 flex gap-4">
        <Button type="button" variant="secondary" onClick={onBack} disabled={isSubmitting}>
          Back
        </Button>
        <Button type="submit" className="flex-1" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Get My Offer'}
        </Button>
      </div>

      <p className="mt-4 text-xs text-warm-500 text-center">
        We respond within 2 hours during business hours.
      </p>
    </form>
  );
}
