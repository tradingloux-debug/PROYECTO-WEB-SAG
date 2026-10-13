import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Compass, Route, Sparkles, ArrowRight } from 'lucide-react';
import expSurf from '../../assets/images/exp_adventure_surf_tunco_1791258121258.jpg';
import routeEsencial from '../../assets/images/route_esencial_elsalvador_1791259912258.jpg';
import heroCoatepeque from '../../assets/images/hero_coatepeque_el_salvador_1791258093926.jpg';

export const DiscoveryOptions: React.FC = () => {
  const { navigate } = useRouter();

  // Exactly 3 core paths responding to the traveler's 3 questions
  const threePaths = [
    {
      id: 'experiencias',
      title: 'EXPERIENCIAS',
      description: 'Encuentra actividades para unas horas o un día.',
      cta: 'Explorar',
      link: '/experiencias',
      image: expSurf,
      icon: Compass,
      badge: 'Actividades por día',
      btnStyle: 'bg-[#00A6A6] hover:bg-[#009191] text-white',
    },
    {
      id: 'rutas',
      title: 'RUTAS GIA',
      description: 'Recorre distintos destinos en viajes de varios días.',
      cta: 'Ver rutas',
      link: '/rutas',
      image: routeEsencial,
      icon: Route,
      badge: 'Itinerarios multidía',
      btnStyle: 'bg-[#063A5B] hover:bg-[#04283f] text-white',
    },
    {
      id: 'planea',
      title: 'PLANEA CON GIA',
      description: 'Dinos lo que quieres vivir y crea un viaje personalizado.',
      cta: 'Crear mi viaje',
      link: '/planea-con-gia',
      image: heroCoatepeque,
      icon: Sparkles,
      badge: 'Travel Designer Inteligente',
      btnStyle: 'bg-[#00A6A6] hover:bg-[#009191] text-white ring-2 ring-[#00A6A6]/30',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#F7F4ED] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-neutral-200/90 text-[#063A5B] text-xs font-bold font-mono uppercase shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#00A6A6]" />
            <span>Tres Formas de Descubrir</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#063A5B] tracking-tight font-display">
            ¿Cómo quieres viajar?
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Tres caminos diseñados para vivir El Salvador exactamente a tu medida.
          </p>
        </div>

        {/* The 3 Core Path Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {threePaths.map((path) => {
            const Icon = path.icon;
            return (
              <div
                key={path.id}
                onClick={() => navigate(path.link)}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-neutral-200/90 hover:-translate-y-1.5 relative"
              >
                {/* Image (55% of card) */}
                <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                  <img
                    src={path.image}
                    alt={path.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10.5px] font-bold">
                    {path.badge}
                  </div>

                  <div className="absolute top-3.5 right-3.5 p-2 rounded-xl bg-white/20 backdrop-blur-md text-white">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-[#063A5B] group-hover:text-[#00A6A6] transition-colors tracking-tight font-display">
                      {path.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {path.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(path.link);
                    }}
                    className={`w-full py-3 px-5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${path.btnStyle}`}
                  >
                    <span>{path.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
