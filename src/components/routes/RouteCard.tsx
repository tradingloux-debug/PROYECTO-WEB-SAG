import React from 'react';
import { TourRoute } from '../../types/routes';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { trackEvent } from '../../services/analytics';
import { Calendar, MapPin, Sparkles, ArrowRight, Video } from 'lucide-react';

interface RouteCardProps {
  route: TourRoute;
  onCustomize?: (route: TourRoute) => void;
}

export const RouteCard: React.FC<RouteCardProps> = ({ route, onCustomize }) => {
  const { navigate } = useRouter();
  const { language } = useLanguage();

  const title = language === 'es' ? route.titleEs : route.titleEn;
  const description = language === 'es' ? route.descriptionEs : route.descriptionEn;

  const handleViewRoute = () => {
    trackEvent('route_viewed', { id: route.id, slug: route.slug, title });
    navigate(`/rutas/${route.slug}`);
  };

  const handleCustomize = (e: React.MouseEvent) => {
    e.stopPropagation();
    trackEvent('route_personalization_started', { id: route.id, slug: route.slug });
    if (onCustomize) {
      onCustomize(route);
    } else {
      navigate(`/planea-con-gia?route=${route.slug}`);
    }
  };

  return (
    <div
      onClick={handleViewRoute}
      className="group bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      {/* Media with badges */}
      <div className="relative h-60 bg-slate-900 overflow-hidden">
        <img
          src={route.images[0]}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-xs font-bold font-mono border border-amber-300/20 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            {route.days} Días
          </span>

          <div className="flex items-center gap-2">
            {route.promoVideoUrl && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-teal-300 text-[11px] font-bold border border-teal-400/30">
                <Video className="w-3 h-3 text-teal-400" />
                <span>Video 20s</span>
              </span>
            )}
            <span className="px-2.5 py-0.5 rounded-full bg-teal-500 text-slate-950 text-[11px] font-bold">
              Ruta GIA
            </span>
          </div>
        </div>

        {/* Bottom Destination line */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <p className="text-[11px] font-mono font-medium text-teal-300 flex items-center gap-1 truncate">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{route.destinations.join(' → ')}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors font-display line-clamp-2 leading-snug">
            {title}
          </h3>
          <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Highlights & Price */}
        <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-neutral-400 block">Precio estimado</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black font-mono text-slate-900">
                ${route.price}
              </span>
              <span className="text-xs text-neutral-500">USD / persona</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCustomize}
              className="px-3 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold rounded-xl border border-amber-200 transition-colors flex items-center gap-1"
              title="Personalizar esta ruta con GIA"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Personalizar</span>
            </button>

            <button
              type="button"
              onClick={handleViewRoute}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors flex items-center gap-1 shadow-2xs"
            >
              <span>Ver ruta</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
