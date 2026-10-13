import React, { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Compass,
  Images,
  Maximize2,
  X,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ExperienceGalleryProps {
  images: string[];
  title: string;
}

export const ExperienceGallery: React.FC<ExperienceGalleryProps> = ({ images, title }) => {
  const { t } = useLanguage();
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [hasError, setHasError] = useState<Record<number, boolean>>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const safeImages = images.filter(Boolean);
  const activeImage = safeImages[selectedIdx] || safeImages[0];
  const hasMultipleImages = safeImages.length > 1;

  const handleImgError = (idx: number) => {
    setHasError((prev) => ({ ...prev, [idx]: true }));
  };

  const showPrevious = () => {
    if (!safeImages.length) return;
    setSelectedIdx((current) => (current - 1 + safeImages.length) % safeImages.length);
  };

  const showNext = () => {
    if (!safeImages.length) return;
    setSelectedIdx((current) => (current + 1) % safeImages.length);
  };

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxOpen(false);
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, safeImages.length]);

  return (
    <div className="space-y-3">
      <div className="relative h-[340px] sm:h-[440px] md:h-[520px] w-full rounded-3xl overflow-hidden bg-neutral-900 shadow-lg group">
        {!hasError[selectedIdx] && activeImage ? (
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="block w-full h-full cursor-zoom-in"
            aria-label={t.detail.openGallery}
          >
            <img
              src={activeImage}
              alt={`${title} - ${t.detail.image} ${selectedIdx + 1}`}
              onError={() => handleImgError(selectedIdx)}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </button>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400">
            <Compass className="w-12 h-12 text-teal-400 opacity-60 mb-2" />
            <span className="text-sm font-medium">{title}</span>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/55 backdrop-blur-md text-white text-xs font-semibold border border-white/15">
            <Images className="w-3.5 h-3.5 text-[#FDBA2D]" />
            {selectedIdx + 1} / {Math.max(safeImages.length, 1)}
          </span>
          {activeImage && (
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#063A5B] text-xs font-bold shadow-md hover:bg-white transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{t.detail.openGallery}</span>
            </button>
          )}
        </div>

        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label={t.detail.previousImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/45 backdrop-blur-md text-white border border-white/20 items-center justify-center hover:bg-black/65 transition-colors hidden sm:flex"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label={t.detail.nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/45 backdrop-blur-md text-white border border-white/20 items-center justify-center hover:bg-black/65 transition-colors hidden sm:flex"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {hasMultipleImages && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
          {safeImages.map((img, idx) => (
            <button
              key={`${img}-${idx}`}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              aria-label={`${t.detail.thumbnail} ${idx + 1}`}
              aria-current={selectedIdx === idx ? 'true' : undefined}
              className={`relative h-20 w-28 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                selectedIdx === idx
                  ? 'border-[#00A6A6] ring-2 ring-[#00A6A6]/20 shadow-sm'
                  : 'border-transparent opacity-65 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`${t.detail.thumbnail} ${idx + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && activeImage && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-3 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label={t.detail.closeGallery}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/15 z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute top-5 left-5 sm:top-7 sm:left-7 text-white text-xs font-semibold bg-black/35 px-3 py-1.5 rounded-full">
            {selectedIdx + 1} / {safeImages.length}
          </div>

          <img
            src={activeImage}
            alt={`${title} - ${t.detail.image} ${selectedIdx + 1}`}
            className="max-w-full max-h-[86vh] object-contain rounded-xl shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />

          {hasMultipleImages && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label={t.detail.previousImage}
                className="absolute left-3 sm:left-7 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/15"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label={t.detail.nextImage}
                className="absolute right-3 sm:right-7 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/15"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
