import React, { useState } from 'react';
import { DEMO_ROUTES } from '../data/routes';
import { RouteCard } from '../components/routes/RouteCard';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../services/analytics';
import { Calendar, Compass, Sparkles, ArrowRight } from 'lucide-react';

export const RoutesPage: React.FC = () => {
  const { navigate } = useRouter();
  const { language } = useLanguage();
  const [selectedDuration, setSelectedDuration] = useState<number | 'all'>('all');

  const filteredRoutes = DEMO_ROUTES.filter(route => {
    if (selectedDuration === 'all') return true;
    return route.days === selectedDuration;
  });

  return (
    <div className="bg-neutral-50/60 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#00A6A6] text-xs font-bold font-mono">
            <Compass className="w-3.5 h-3.5 text-[#00A6A6]" />
            <span>Itinerarios Multidía por El Salvador</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#063A5B] tracking-tight font-display">
            Más que un tour. Un viaje completo.
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Recorre diferentes destinos, culturas y paisajes en experiencias diseñadas para conocer el país más allá de un solo lugar. Rutas conectadas de 2 a 10 días con transporte, anfitriones y experiencias coordinadas.
          </p>
        </div>

        {/* Duration Filter Segmented Control */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-neutral-400 font-semibold mr-1 shrink-0">Duración:</span>
          {[
            { id: 'all', label: 'Todas las rutas' },
            { id: 2, label: '2 Días (Escapada)' },
            { id: 3, label: '3 Días (Fin de semana)' },
            { id: 5, label: '5 Días (Esencial)' },
            { id: 7, label: '7 Días (Semana completa)' },
            { id: 10, label: '10 Días (Gran Travesía)' },
          ].map(opt => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSelectedDuration(opt.id as any)}
              className={`px-4 py-2 rounded-xl border transition-all font-semibold whitespace-nowrap cursor-pointer ${
                selectedDuration === opt.id
                  ? 'bg-[#063A5B] text-white border-[#063A5B] shadow-xs'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:border-[#00A6A6]/40'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRoutes.map(route => (
            <RouteCard
              key={route.id}
              route={route}
              onCustomize={() => {
                trackEvent('route_personalization_started', { slug: route.slug });
                navigate(`/planea-con-gia?route=${route.slug}`);
              }}
            />
          ))}
        </div>

        {/* Personalized Banner */}
        <div className="bg-gradient-to-r from-teal-900 to-slate-950 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md border border-slate-800">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
              ¿Quieres una ruta exclusiva?
            </span>
            <h3 className="text-2xl font-bold font-display">
              Diseña un viaje único con Planea con GIA
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Dinos cuántos días tienes y tus intereses. Nuestro asistente inteligente estructurará una ruta personalizada combinando tus destinos favoritos.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/planea-con-gia')}
            className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Crear mi viaje personalizado</span>
          </button>
        </div>
      </div>
    </div>
  );
};
