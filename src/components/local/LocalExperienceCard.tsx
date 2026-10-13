import React, { useState } from 'react';
import { Experience } from '../../types/experience';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { HostStoryModal } from './HostStoryModal';
import { Users, MapPin, Clock, Heart, Sparkles, Video } from 'lucide-react';

interface LocalExperienceCardProps {
  experience: Experience;
}

export const LocalExperienceCard: React.FC<LocalExperienceCardProps> = ({ experience }) => {
  const { navigate } = useRouter();
  const { language } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  const title = language === 'es' ? experience.titleEs : experience.titleEn;
  const shortDesc = language === 'es' ? experience.shortDescriptionEs : experience.shortDescriptionEn;

  return (
    <>
      <div
        onClick={() => navigate(`/experiencias/${experience.slug}`)}
        className="group bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
      >
        {/* Media */}
        <div className="relative h-60 bg-slate-900 overflow-hidden">
          <img
            src={experience.images[0]}
            alt={title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-bold shadow-xs">
              <Users className="w-3.5 h-3.5" />
              <span>Experiencia local</span>
            </span>

            {experience.hasVideo && (
              <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-teal-300 text-[11px] font-bold border border-teal-400/30 flex items-center gap-1">
                <Video className="w-3 h-3 text-teal-400" />
                <span>Video 18s (máx 30s)</span>
              </span>
            )}
          </div>

          <div className="absolute bottom-3 left-3 right-3 text-white">
            <p className="text-[11px] font-mono text-emerald-300 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{experience.location}</span>
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors font-display line-clamp-2">
              {title}
            </h3>
            <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
              {shortDesc}
            </p>

            {/* Host Callout */}
            {experience.hostStory && (
              <div className="mt-2 pt-2 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500 truncate">
                  Anfitrión: <strong className="text-slate-800">{experience.hostStory.name}</strong>
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalOpen(true);
                  }}
                  className="text-[11px] font-bold text-teal-700 hover:text-teal-900 underline shrink-0 ml-2"
                >
                  Conoce su historia
                </button>
              </div>
            )}
          </div>

          {/* Footer with price */}
          <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-neutral-400 block">Desde</span>
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold font-mono text-slate-900">
                  ${experience.price}
                </span>
                <span className="text-xs text-neutral-500">USD / pers.</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate(`/experiencias/${experience.slug}`)}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
            >
              Ver experiencia
            </button>
          </div>
        </div>
      </div>

      {experience.hostStory && (
        <HostStoryModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          hostStory={experience.hostStory}
          experienceTitle={title}
        />
      )}
    </>
  );
};
