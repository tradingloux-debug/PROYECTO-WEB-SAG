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
  Star,
  Compass,
  Video,
  Sparkles,
  Users,
  ArrowRight,
  BookmarkCheck,
  X,
} from 'lucide-react';
import { VideoExperiencePlayer } from '../common/VideoExperiencePlayer';

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
  const [showVideoModal, setShowVideoModal] = useState(false);

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
        return 'Cultura';
      case 'gastronomia':
        return 'Gastronomía';
      case 'naturaleza':
        return 'Naturaleza';
      case 'aventura':
        return 'Aventura';
      default:
        return experience.category;
    }
  };

  const hasVideo = Boolean(experience.hasVideo || experience.promoVideoUrl || experience.shortVideoUrl);
  const has360 = Boolean(experience.has360 || experience.virtualTour360Url);

  // Price formatting
  const formattedPrice = experience.price && experience.price > 0 ? (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-1">
        <span className="text-xs font-semibold text-neutral-500">Desde</span>
        <span className="text-2xl font-black font-mono text-[#063A5B] tracking-tight">
          ${experience.price}
        </span>
      </div>
      <span className="text-[11px] text-neutral-400 font-medium -mt-0.5">por persona</span>
    </div>
  ) : (
    <div className="flex flex-col">
      <span className="text-sm font-bold text-neutral-600">Precio por confirmar</span>
      <span className="text-[11px] text-neutral-400">Consultar disponibilidad</span>
    </div>
  );

  // Video teaser modal (18s, <= 30s)
  const renderVideoModal = () => {
    if (!showVideoModal) return null;
    return (
      <div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-default"
        onClick={(e) => {
          e.stopPropagation();
          setShowVideoModal(false);
        }}
      >
        <div
          className="bg-slate-900 border border-neutral-700 rounded-3xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl relative space-y-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#20C5C7] font-bold">
                Teaser HD · 18 segundos (máx 30s)
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                {title}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setShowVideoModal(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Cerrar video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <VideoExperiencePlayer
            videoUrl={experience.promoVideoUrl}
            thumbnailUrl={experience.images[0]}
            title={title}
          />

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-neutral-400">
              {experience.location}
            </span>
            <button
              type="button"
              onClick={() => {
                setShowVideoModal(false);
                handleCardClick();
              }}
              className="px-4 py-2 bg-[#00A6A6] hover:bg-[#009191] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Ver experiencia completa
            </button>
          </div>
        </div>
      </div>
    );
  };

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
                Recomendada
              </span>
            )}
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#063A5B]/90 backdrop-blur-md text-white text-[10.5px] font-bold">
              {getCategoryLabel()}
            </span>
            {experience.isLocalExperience && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#55A94B] text-white text-[10.5px] font-bold shadow-2xs">
                <Users className="w-3 h-3" />
                <span>Experiencia local</span>
              </span>
            )}
            {hasVideo && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowVideoModal(true);
                }}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md text-[#20C5C7] text-[10.5px] font-bold border border-teal-400/40 hover:bg-slate-900 transition-all cursor-pointer shadow-xs"
                title="Ver video teaser de 18s (máx 30s)"
              >
                <Video className="w-3 h-3 text-[#20C5C7]" />
                <span>Video 18s</span>
              </button>
            )}
            {has360 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[#FDBA2D] text-[10.5px] font-bold border border-amber-400/30">
                <Sparkles className="w-3 h-3 text-[#FDBA2D]" />
                <span>360°</span>
              </span>
            )}
          </div>

          {/* Favorite button */}
          <div className="absolute top-3 right-3 z-20">
            <button
              type="button"
              onClick={handleFavoriteClick}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              aria-label={favoriteActive ? 'Quitar de favoritos' : 'Guardar en favoritos'}
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
                {favoriteActive ? 'Guardada en favoritos' : 'Guardar experiencia'}
              </span>
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
              <span>{experience.duration}</span>
              {experience.demoRating && (
                <>
                  <span className="text-neutral-300">·</span>
                  <div className="flex items-center gap-1 text-neutral-700">
                    <Star className="w-3.5 h-3.5 text-[#FDBA2D] fill-[#FDBA2D]" />
                    <span className="font-bold font-mono">{experience.demoRating.toFixed(1)}</span>
                  </div>
                </>
              )}
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
              <span>Ver experiencia</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        {renderVideoModal()}
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
              Recomendada
            </span>
          )}

          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#063A5B]/90 backdrop-blur-md text-white text-[10.5px] font-bold">
            {getCategoryLabel()}
          </span>

          {experience.isLocalExperience && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#55A94B] text-white text-[10.5px] font-bold shadow-2xs">
              <Users className="w-3 h-3" />
              <span>Experiencia local</span>
            </span>
          )}

          {hasVideo && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowVideoModal(true);
              }}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md text-[#20C5C7] text-[10.5px] font-bold border border-teal-400/40 hover:bg-slate-900 transition-all cursor-pointer shadow-xs"
              title="Ver video teaser de 18s (máx 30s)"
            >
              <Video className="w-3 h-3 text-[#20C5C7]" />
              <span>Video 18s</span>
            </button>
          )}

          {has360 && !experience.isLocalExperience && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[#FDBA2D] text-[10.5px] font-bold border border-amber-400/30">
              <Sparkles className="w-3 h-3 text-[#FDBA2D]" />
              <span>360°</span>
            </span>
          )}
        </div>

        {/* 12. FAVORITOS con icono de corazón y tooltip */}
        <div className="absolute top-3 right-3 z-20">
          <button
            type="button"
            onClick={handleFavoriteClick}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            aria-label={favoriteActive ? 'Quitar de favoritos' : 'Guardar experiencia'}
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
              {favoriteActive ? 'Guardada en favoritos' : 'Guardar experiencia'}
            </span>
          )}
        </div>

        {/* Rating y ubicación sobre el pie de la imagen */}
        {experience.demoRating && (
          <div className="absolute bottom-2.5 left-3 text-white text-[11px] font-medium flex items-center gap-1.5 z-10">
            <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/15">
              <Star className="w-3 h-3 text-[#FDBA2D] fill-[#FDBA2D]" />
              <span className="font-bold font-mono">{experience.demoRating.toFixed(1)}</span>
            </div>
            <span className="text-[10.5px] text-slate-200 drop-shadow-sm font-medium">
              {experience.department}
            </span>
          </div>
        )}
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
            <span>{experience.duration}</span>
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
            <span>Ver experiencia</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {renderVideoModal()}
    </article>
  );
};
