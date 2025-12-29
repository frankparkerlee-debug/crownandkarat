import { useCallback } from 'react';
import Button from '../../ui/Button';

export default function StepPhotos({ data, updateData, onNext, onBack }) {
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    addPhotos(files);
  };

  const addPhotos = useCallback((files) => {
    const newPhotos = files.filter(file => {
      if (!file.type.startsWith('image/')) return false;
      if (file.size > 5 * 1024 * 1024) return false; // 5MB limit
      return true;
    });

    const combined = [...data.photos, ...newPhotos].slice(0, 5);
    updateData({ photos: combined });
  }, [data.photos, updateData]);

  const removePhoto = (index) => {
    const updated = data.photos.filter((_, i) => i !== index);
    updateData({ photos: updated });
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    addPhotos(files);
  }, [addPhotos]);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-cream mb-2">Add photos</h3>
      <p className="text-sm text-cream-muted mb-6">
        Clear photos help us make accurate offers. Include multiple angles if possible.
      </p>

      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:border-gold/30 transition-colors cursor-pointer"
        onClick={() => document.getElementById('photo-input')?.click()}
      >
        <svg className="w-12 h-12 mx-auto text-cream-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="mt-4 text-cream-muted">
          Drag and drop photos here, or <span className="text-gold">browse</span>
        </p>
        <p className="mt-1 text-xs text-cream-muted">Up to 5 photos, max 5MB each</p>
        <input
          id="photo-input"
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Photo previews */}
      {data.photos.length > 0 && (
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-5 gap-4">
          {data.photos.map((photo, index) => (
            <div key={index} className="relative group aspect-square">
              <img
                src={URL.createObjectURL(photo)}
                alt={`Upload ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={() => removePhoto(index)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-error rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex gap-4">
        <Button type="button" variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext} className="flex-1">
          Continue
        </Button>
      </div>
    </div>
  );
}
