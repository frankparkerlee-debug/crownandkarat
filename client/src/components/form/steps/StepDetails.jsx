import Button from '../../ui/Button';

const watchBrands = [
  'Rolex', 'Omega', 'Patek Philippe', 'Audemars Piguet', 'Cartier',
  'TAG Heuer', 'Breitling', 'IWC', 'Panerai', 'Tudor', 'Other'
];

const conditions = [
  { value: 'excellent', label: 'Excellent — Like new, minimal wear' },
  { value: 'good', label: 'Good — Normal wear, fully functional' },
  { value: 'fair', label: 'Fair — Visible wear, works fine' },
  { value: 'needs_repair', label: 'Needs Repair — Not working or damaged' },
];

export default function StepDetails({ data, updateData, onNext, onBack }) {
  const isWatch = data.item_type === 'watch';

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  const inputClass = "w-full bg-warm-700 border border-warm-600 rounded-lg px-4 py-3 text-warm-100 placeholder-warm-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors";

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-medium text-warm-100 mb-6">Tell us about your {data.item_type}</h3>

      <div className="space-y-6">
        {isWatch && (
          <>
            <div>
              <label className="block text-sm text-warm-400 mb-2">Brand</label>
              <input
                type="text"
                list="watch-brands"
                value={data.brand}
                onChange={(e) => updateData({ brand: e.target.value })}
                className={inputClass}
                placeholder="e.g., Rolex"
              />
              <datalist id="watch-brands">
                {watchBrands.map(brand => (
                  <option key={brand} value={brand} />
                ))}
              </datalist>
            </div>

            <div>
              <label className="block text-sm text-warm-400 mb-2">Model / Reference (optional)</label>
              <input
                type="text"
                value={data.model}
                onChange={(e) => updateData({ model: e.target.value })}
                className={inputClass}
                placeholder="e.g., Submariner 116610LN"
              />
            </div>

            <div>
              <label className="block text-sm text-warm-400 mb-2">Box & Papers</label>
              <div className="flex gap-4">
                {['yes', 'no', 'partial'].map(option => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="box_papers"
                      value={option}
                      checked={data.box_papers === option}
                      onChange={(e) => updateData({ box_papers: e.target.value })}
                      className="w-4 h-4 accent-accent"
                    />
                    <span className="text-warm-100 capitalize">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {!isWatch && (
          <div>
            <label className="block text-sm text-warm-400 mb-2">Description</label>
            <textarea
              value={data.description}
              onChange={(e) => updateData({ description: e.target.value })}
              className={`${inputClass} min-h-[120px]`}
              placeholder="Describe your item — type of jewelry, metal, stones, brand if applicable..."
            />
          </div>
        )}

        <div>
          <label className="block text-sm text-warm-400 mb-2">Condition</label>
          <select
            value={data.condition}
            onChange={(e) => updateData({ condition: e.target.value })}
            className={inputClass}
          >
            <option value="">Select condition</option>
            {conditions.map(c => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>

        {isWatch && (
          <div>
            <label className="block text-sm text-warm-400 mb-2">Additional notes (optional)</label>
            <textarea
              value={data.description}
              onChange={(e) => updateData({ description: e.target.value })}
              className={`${inputClass} min-h-[80px]`}
              placeholder="Any other details — service history, scratches, modifications..."
            />
          </div>
        )}
      </div>

      <div className="mt-8 flex gap-4">
        <Button type="button" variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" className="flex-1">
          Continue
        </Button>
      </div>
    </form>
  );
}
