import React, { useState } from 'react';
import { Compass } from 'lucide-react';

interface ExperienceGalleryProps {
  images: string[];
  title: string;
}

export const ExperienceGallery: React.FC<ExperienceGalleryProps> = ({ images, title }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [hasError, setHasError] = useState<Record<number, boolean>>({});

  const handleImgError = (idx: number) => {
    setHasError(prev => ({ ...prev, [idx]: true }));
  };

  const activeImage = images[selectedIdx] || images[0];

  return (
    <div className="space-y-3">
      {/* Main hero image */}
      <div className="relative h-[340px] sm:h-[440px] md:h-[480px] w-full rounded-2xl overflow-hidden bg-neutral-900 shadow-xs">
        {!hasError[selectedIdx] && activeImage ? (
          <img
            src={activeImage}
            alt={`${title} - Imagen ${selectedIdx + 1}`}
            onError={() => handleImgError(selectedIdx)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-all duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400">
            <Compass className="w-12 h-12 text-teal-400 opacity-60 mb-2" />
            <span className="text-sm font-medium">{title}</span>
          </div>
        )}
      </div>

      {/* Thumbnails row if multiple images exist */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`relative h-20 w-28 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                selectedIdx === idx
                  ? 'border-teal-700 ring-2 ring-teal-700/20 shadow-xs'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`Miniatura ${idx + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
