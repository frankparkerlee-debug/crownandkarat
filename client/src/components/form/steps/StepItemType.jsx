const itemTypes = [
  { value: 'watch', label: 'Watch', icon: '⌚' },
  { value: 'jewelry', label: 'Jewelry', icon: '💍' },
  { value: 'diamonds', label: 'Diamonds', icon: '💎' },
  { value: 'other', label: 'Other', icon: '✨' },
];

export default function StepItemType({ data, updateData, onNext }) {
  const handleSelect = (value) => {
    updateData({ item_type: value });
    onNext();
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-cream mb-6">What are you selling?</h3>
      <div className="grid grid-cols-2 gap-4">
        {itemTypes.map((type) => (
          <button
            key={type.value}
            onClick={() => handleSelect(type.value)}
            className={`p-6 rounded-lg border text-left transition-all hover:border-gold/50 hover:bg-surface-light ${
              data.item_type === type.value
                ? 'border-gold bg-surface-light'
                : 'border-white/10 bg-surface'
            }`}
          >
            <span className="text-2xl">{type.icon}</span>
            <p className="mt-2 font-medium text-cream">{type.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
