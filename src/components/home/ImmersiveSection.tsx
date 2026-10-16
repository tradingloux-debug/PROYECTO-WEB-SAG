import { chooseLocale } from '../../data/ptPhrases';
import React, { useState } from 'react';
import { DEMO_EXPERIENCES } from '../../data/experiences';
import { useRouter } from '../../context/RouterContext';
import { VirtualTour360 } from '../common/VirtualTour360';
import { Compass, Sparkles, Move, Maximize2, ArrowRight, MousePointer2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { localizeCategory } from '../../utils/localize';

export const ImmersiveSection: React.FC = () => {
  const { navigate } = useRouter();
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  // Filter experiences with 360 images
  const all360Experiences = DEMO_EXPERIENCES.filter(
    (exp) => exp.has360 && exp.virtualTour360Url
  );

  const filteredList =
    selectedCategory === 'todos'
      ? all360Experiences.slice(0, 6)
      : all360Experiences.filter((exp) => exp.category === selectedCategory).slice(0, 6);

  const [activeTourModal, setActiveTourModal] = useState<{
    isOpen: boolean;
    title: string;
    location: string;
    image: string;
  }>({
    isOpen: false,
    title: '',
    location: '',
    image: '',
  });

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00A6A6]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 backdrop-blur-md text-teal-300 text-xs font-bold font-mono uppercase border border-teal-500/30">
              <Compass className="w-3.5 h-3.5 animate-spin-slow" />
              <span>{chooseLocale(language, 'Imágenes 360° interactivas · Mueve y explora', 'Interactive 360° images · Move and explore')}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-display">
              {chooseLocale(language, 'Explora El Salvador en 360° interactivo', 'Explore El Salvador in interactive 360°')}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              {chooseLocale(language, 'Gira y arrastra con tu mouse o dedo para mirar en todas las direcciones. Descubre el cráter de Santa Ana, las olas de El Tunco, Suchitoto y el lago antes de tu viaje.', 'Turn and drag with your mouse or finger to look in every direction. Discover Santa Ana crater, El Tunco waves, Suchitoto, and the lake before your trip.')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'todos', label: chooseLocale(language, 'Todos los recorridos 360°', 'All 360° tours') },
              { id: 'naturaleza', label: chooseLocale(language, 'Volcanes y lagos', 'Volcanoes & lakes') },
              { id: 'aventura', label: chooseLocale(language, 'Playas y olas', 'Beaches & waves') },
              { id: 'cultura', label: chooseLocale(language, 'Cultura colonial', 'Colonial culture') },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#00A6A6] text-white shadow-md'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Immersive 360 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredList.map((exp) => (
            <div
              key={exp.id}
              className="bg-slate-900/90 rounded-2xl border border-white/10 overflow-hidden shadow-xl flex flex-col justify-between hover:border-teal-400/50 transition-all group/card"
            >
              <div className="p-3">
                <button
                  type="button"
                  onClick={() =>
                    setActiveTourModal({
                      isOpen: true,
                      title: language === 'es' ? exp.titleEs : exp.titleEn,
                      location: exp.location,
                      image: exp.virtualTour360Url || exp.images[0],
                    })
                  }
                  className="relative h-[260px] w-full rounded-xl overflow-hidden bg-slate-950 border border-white/10 cursor-pointer group/preview text-left"
                  aria-label={language === 'es' ? `Abrir imagen 360° interactiva de ${exp.titleEs}` : `Open interactive 360° image of ${exp.titleEn}`}
                >
                  <img
                    src={exp.virtualTour360Url || exp.images[0]}
                    alt={language === 'es' ? `Vista panorámica 360° de ${exp.titleEs}` : `360° panoramic view of ${exp.titleEn}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/preview:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/45" />
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-500/90 text-white text-[10px] font-bold tracking-wide shadow-lg">
                    <Compass className="w-3.5 h-3.5" />
                    <span>{chooseLocale(language, 'IMAGEN 360°', '360° IMAGE')}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-xl transition-transform group-hover/preview:scale-105">
                      <MousePointer2 className="w-4 h-4 text-teal-300" />
                      {chooseLocale(language, 'Abrir y mover en 360°', 'Open and move in 360°')}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-sm font-bold text-white drop-shadow-md line-clamp-2">{language === 'es' ? exp.titleEs : exp.titleEn}</p>
                    <p className="text-[11px] text-slate-200 mt-0.5">{exp.location}</p>
                  </div>
                </button>
              </div>

              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#20C5C7]">
                      {localizeCategory(exp.category, language)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10.5px] text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded-md border border-teal-500/20">
                      <Move className="w-3 h-3" />
                      <span>{chooseLocale(language, 'Arrastra para mover', 'Drag to move')}</span>
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white line-clamp-2 group-hover/card:text-[#20C5C7] transition-colors">
                    {language === 'es' ? exp.titleEs : exp.titleEn}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {language === 'es' ? exp.shortDescriptionEs : exp.shortDescriptionEn}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => navigate(`/experiencias/${exp.slug}`)}
                    className="flex-1 py-2 px-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer text-center"
                  >
                    {chooseLocale(language, 'Ver experiencia y reservar', 'View experience and book')}
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveTourModal({
                        isOpen: true,
                        title: language === 'es' ? exp.titleEs : exp.titleEn,
                        location: exp.location,
                        image: exp.virtualTour360Url || exp.images[0],
                      })
                    }
                    className="py-2 px-3 bg-[#00A6A6] hover:bg-[#009191] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1 cursor-pointer shadow-xs"
                    title={chooseLocale(language, 'Abrir en pantalla completa 360°', 'Open full-screen 360°')}
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>360°</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for 360 experiences */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => navigate('/experiencias?tour360=true')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/15 cursor-pointer shadow-sm hover:scale-105"
          >
            <Compass className="w-4 h-4 text-[#20C5C7]" />
            <span>{chooseLocale(language, 'Explorar todas las experiencias con fotos 360° interactivas', 'Explore all experiences with interactive 360° photos')}</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>
      </div>

      {/* 360 Fullscreen Viewer Modal */}
      <VirtualTour360
        isOpen={activeTourModal.isOpen}
        onClose={() =>
          setActiveTourModal({ isOpen: false, title: '', location: '', image: '' })
        }
        title={activeTourModal.title}
        locationName={activeTourModal.location}
        imageSrc={activeTourModal.image}
      />
    </section>
  );
};
