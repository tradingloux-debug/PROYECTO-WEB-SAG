import React, { useState } from 'react';
import { Experience } from '../../types/experience';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { useBookingDraft } from '../../context/BookingDraftContext';
import { trackEvent } from '../../services/analytics';
import {
  MapPin,
  Clock,
  Heart,
  Compass,
  Sparkles,
  ArrowRight,
  Images,
} from 'lucide-react';
import { VirtualTour360 } from '../common/VirtualTour360';
import { localizeDuration } from '../../utils/localize';

interface ExperienceCardProps {
  experience: Experience;
  viewMode?: 'grid' | 'list';
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  viewMode = 'grid',
}) => {
  const { navigate } = useRouter();
  const { language, t } = useLanguage();
  const { isFavorite, toggleFavorite } = useBookingDraft();
  const [imageError, setImageError] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTour360, setShowTour360] = useState(false);

  const title = language === 'es' ? experience.titleEs : experience.titleEn;
  const shortDesc = language === 'es' ? experience.shortDescriptionEs : experience.shortDescriptionEn;

  const handleCardClick = () => {
    trackEvent('experience_view', { id: experience.id, slug: experience.slug, title });
    navigate(`/experiencias/${experience.slug}`);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(experience.id);
  };

  const favoriteActive = isFavorite(experience.id);

  const getCategoryLabel = () => {
    switch (experience.category) {
      case 'cultura':
        return t.categories.culture;
      case 'gastronomia':
        return t.categories.gastronomy;
      case 'naturaleza':
        return t.categories.nature;
      case 'aventura':
        return t.categories.adventure;
      default:
        return experience.category;
    }
  };

  const has360 = Boolean(experience.has360 || experience.virtualTour360Url);

  // Price formatting
  const formattedPrice = experience.price && experience.price > 0 ? (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-1">
        <span className="text-xs font-semibold text-neutral-500">{t.card.from}</span>
        <span className="text-2xl font-black font-mono text-[#063A5B] tracking-tight">
          ${experience.price}
        </span>
      </div>
      <span className="text-[11px] text-neutral-400 font-medium -mt-0.5">{t.card.perPerson}</span>
    </div>
  ) : (
    <div className="flex flex-col">
      <span className="text-sm font-bold text-neutral-600">{t.card.priceToConfirm}</span>
      <span className="text-[11px] text-neutral-400">{t.card.checkAvailability}</span>
    </div>
  );

  const renderTour360 = () => (
    <VirtualTour360
      isOpen={showTour360}
      onClose={() => setShowTour360(false)}
      title={title}
      locationName={experience.location}
      imageSrc={experience.virtualTour360Url || experience.images[0]}
    />
  );

  // List view rendering (Desktop Horizontal)
  if (viewMode === 'list') {
    return (
      <article
        onClick={handleCardClick}
        className="group bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row cursor-pointer relative hover:-translate-y-1"
      >
        {/* Left: Image (40% width on md) */}
        <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto md:min-h-[240px] bg-neutral-100 overflow-hidden shrink-0">
          {!imageError && experience.images?.[0] ? (
            <img
              src={experience.images[0]}
              alt={title}
              onError={() => setImageError(true)}
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#063A5B] to-[#04283f] text-slate-300 p-6 text-center">
              <Compass className="w-10 h-10 text-[#00A6A6] mb-2" />
              <span className="text-xs font-medium">{experience.location}</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Badges on Top Left */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 max-w-[80%]">
            {experience.featured && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#FDBA2D] text-slate-950 text-[10.5px] font-extrabold shadow-2xs">
                {t.card.recommended}
              </span>
            )}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#063A5B]/90 backdrop-blur-md text-white text-[10.5px] font-bold">
              {getCategoryLabel()}
            </span>
          </div>

          {/* Favorite button */}
          <div className="absolute top-3 right-3 z-20">
            <button
              type="button"
              onClick={handleFavoriteClick}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              aria-label={favoriteActive ? t.card.removeFavorite : t.card.saveFavorite}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all backdrop-blur-md cursor-pointer ${
                favoriteActive
                  ? 'bg-rose-500 text-white shadow-md scale-105'
                  : 'bg-black/40 hover:bg-black/60 text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${favoriteActive ? 'fill-current' : ''}`} />
            </button>
            {showTooltip && (
              <span className="absolute top-10 right-0 whitespace-nowrap bg-slate-900 text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg pointer-events-none">
                {favoriteActive ? t.card.savedFavorite : t.card.saveFavorite}
              </span>
            )}
          </div>

          <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5">
            {experience.images.length > 1 && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-black/55 backdrop-blur-md text-white text-[10px] font-semibold border border-white/15">
                <Images className="w-3 h-3" />
                {experience.images.length}
              </span>
            )}
            {has360 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTour360(true);
                }}
                className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[#FDBA2D] text-[10px] font-bold border border-amber-400/30"
                title={t.card.open360}
              >
                <Sparkles className="w-3 h-3" />
                <span>360°</span>
              </button>
            )}
          </div>
        </div>

        {/* Right: Info (60% width on md) */}
        <div className="p-6 md:p-7 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            {/* Ubicación */}
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#00A6A6]">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{experience.location}</span>
              <span className="text-neutral-300">·</span>
              <span className="text-neutral-500 font-normal">{experience.department}</span>
            </div>

            {/* Título */}
            <h3 className="text-lg md:text-xl font-bold text-[#063A5B] group-hover:text-[#00A6A6] transition-colors font-display leading-tight">
              {title}
            </h3>

            {/* Duración */}
            <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>{localizeDuration(experience.duration, language)}</span>
            </div>

            {/* Breve descripción */}
            <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
              {shortDesc}
            </p>
          </div>

          {/* Footer: Precio y CTA */}
          <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-4">
            {formattedPrice}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick();
              }}
              className="px-5 py-2.5 bg-[#00A6A6] hover:bg-[#009191] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md group-hover:shadow-lg flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>{t.card.viewDetails}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        {renderTour360()}
      </article>
    );
  }

  // Grid view rendering (Default)
  return (
    <article
      onClick={handleCardClick}
      className="group bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer relative hover:-translate-y-1.5"
    >
      {/* 7. IMAGEN: Ocupa aproximadamente 55–65% de la tarjeta con aspect-[4/3] */}
      <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden shrink-0">
        {!imageError && experience.images?.[0] ? (
          <img
            src={experience.images[0]}
            alt={title}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#063A5B] to-[#04283f] text-slate-300 p-6 text-center">
            <Compass className="w-10 h-10 text-[#00A6A6] mb-2" />
            <span className="text-xs font-medium">{experience.location}</span>
          </div>
        )}

        {/* Overlay sutil inferior para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

        {/* 8. BADGES SOBRE LA IMAGEN (Máximo 2 o 3 visibles) */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 max-w-[80%]">
          {experience.featured && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#FDBA2D] text-slate-950 text-[10.5px] font-extrabold shadow-2xs">
              {t.card.recommended}
            </span>
          )}

          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#063A5B]/90 backdrop-blur-md text-white text-[10.5px] font-bold">
            {getCategoryLabel()}
          </span>

        </div>

        {/* 12. FAVORITOS con icono de corazón y tooltip */}
        <div className="absolute top-3 right-3 z-20">
          <button
            type="button"
            onClick={handleFavoriteClick}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            aria-label={favoriteActive ? t.card.removeFavorite : t.card.saveFavorite}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all backdrop-blur-md cursor-pointer ${
              favoriteActive
                ? 'bg-rose-500 text-white shadow-md scale-105'
                : 'bg-black/40 hover:bg-black/60 text-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${favoriteActive ? 'fill-current' : ''}`} />
          </button>
          {showTooltip && (
            <span className="absolute top-10 right-0 whitespace-nowrap bg-slate-900 text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg pointer-events-none">
              {favoriteActive ? t.card.savedFavorite : t.card.saveFavorite}
            </span>
          )}
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <span className="text-[10.5px] text-white drop-shadow-sm font-semibold">
            {experience.department}
          </span>
          <div className="flex items-center gap-1.5">
            {experience.images.length > 1 && (
              <span className="inline-flex items-center gap-1 bg-black/55 backdrop-blur-md px-2 py-1 rounded-full border border-white/15 text-white text-[10px] font-semibold">
                <Images className="w-3 h-3" />
                {experience.images.length}
              </span>
            )}
            {has360 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTour360(true);
                }}
                className="inline-flex items-center gap-1 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded-full border border-amber-400/30 text-[#FDBA2D] text-[10px] font-bold"
                title={t.card.open360}
              >
                <Sparkles className="w-3 h-3" />
                360°
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 9. INFORMACIÓN DE LA CARD:
          Orden visual: Ubicación -> Título -> Duración -> Breve descripción -> Precio -> CTA */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Ubicación */}
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#00A6A6]">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{experience.location}</span>
          </div>

          {/* Título */}
          <h3 className="text-base sm:text-lg font-bold text-[#063A5B] group-hover:text-[#00A6A6] transition-colors font-display line-clamp-2 leading-snug">
            {title}
          </h3>

          {/* Duración */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <span>{localizeDuration(experience.duration, language)}</span>
          </div>

          {/* Breve descripción de máximo 2 líneas */}
          <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed pt-0.5">
            {shortDesc}
          </p>
        </div>

        {/* 10. PRECIO Y CTA */}
        <div className="pt-4 border-t border-neutral-100 flex items-end justify-between gap-3">
          {formattedPrice}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="px-4 py-2.5 bg-[#00A6A6] hover:bg-[#009191] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md group-hover:shadow-lg flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>{t.card.viewDetails}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {renderTour360()}
    </article>
  );
};
