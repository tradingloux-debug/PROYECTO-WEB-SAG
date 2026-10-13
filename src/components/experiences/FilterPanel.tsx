import React from 'react';
import {
  ExperienceFilterState,
  Category,
  PriceRange,
  DurationType,
  GroupType,
} from '../../types/experience';
import { useLanguage } from '../../context/LanguageContext';
import { DEPARTMENTS } from '../../data/experiences';
import { RotateCcw, SlidersHorizontal, MapPin, Video, Sparkles, Users } from 'lucide-react';

interface FilterPanelProps {
  filters: ExperienceFilterState;
  onChange: (updated: Partial<ExperienceFilterState>) => void;
  onReset: () => void;
  className?: string;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onChange,
  onReset,
  className = '',
}) => {
  const { t } = useLanguage();

  return (
    <aside className={`space-y-6 ${className}`}>
      {/* 5. Header: Título & Botón Limpiar filtros */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-[#00A6A6]" />
          <h3 className="text-sm font-black text-[#063A5B] font-display">
            Filtrar experiencias
          </h3>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="text-xs text-neutral-500 hover:text-[#00A6A6] flex items-center gap-1 font-semibold transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Limpiar filtros</span>
        </button>
      </div>

      {/* 1. CATEGORÍA */}
      <div className="space-y-2">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#063A5B] block">
          Categoría
        </span>
        <div className="flex flex-col gap-1.5">
          {[
            { id: 'all', label: 'Todas las categorías' },
            { id: 'cultura', label: 'Cultura' },
            { id: 'gastronomia', label: 'Gastronomía' },
            { id: 'naturaleza', label: 'Naturaleza' },
            { id: 'aventura', label: 'Aventura' },
          ].map((item) => {
            const isActive = filters.category === item.id && !filters.onlyLocal;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onChange({ category: item.id as Category | 'all', onlyLocal: false })}
                className={`px-3 py-2 text-xs font-semibold rounded-xl text-left transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#063A5B] text-white border-[#063A5B] shadow-2xs'
                    : 'bg-neutral-50/70 text-neutral-700 border-neutral-200/90 hover:border-neutral-300 hover:bg-neutral-100'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* Experiencias Locales button inside Category */}
          <button
            type="button"
            onClick={() => onChange({ onlyLocal: !filters.onlyLocal })}
            className={`px-3 py-2 text-xs font-semibold rounded-xl text-left transition-all cursor-pointer border flex items-center justify-between ${
              filters.onlyLocal
                ? 'bg-[#55A94B] text-white border-[#55A94B] shadow-2xs'
                : 'bg-emerald-50/50 text-emerald-800 border-emerald-200 hover:bg-emerald-50'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>Experiencias locales</span>
            </span>
            <span className="text-[10px] font-bold font-mono">Comunidad</span>
          </button>
        </div>
      </div>

      {/* 2. UBICACIÓN */}
      <div className="space-y-2">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#063A5B] block">
          Ubicación
        </span>
        <div className="relative">
          <select
            value={filters.department}
            onChange={(e) => onChange({ department: e.target.value })}
            className="w-full text-xs bg-neutral-50/70 border border-neutral-200/90 rounded-xl px-3 py-2.5 text-neutral-800 font-medium focus:outline-hidden focus:ring-2 focus:ring-[#00A6A6] cursor-pointer"
          >
            <option value="all">Todos los departamentos</option>
            {DEPARTMENTS.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 3. PRECIO ($ / $$ / $$$) */}
      <div className="space-y-2">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#063A5B] block">
          Rango de precio
        </span>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { id: 'all', label: 'Todos', sign: 'Cualquiera' },
            { id: 'economico', label: 'Económico', sign: '$' },
            { id: 'medio', label: 'Medio', sign: '$$' },
            { id: 'premium', label: 'Premium', sign: '$$$' },
          ].map((item) => {
            const isActive = filters.priceRange === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onChange({ priceRange: item.id as PriceRange | 'all' })}
                className={`py-2 px-1 text-center rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#00A6A6] text-white border-[#00A6A6] shadow-2xs'
                    : 'bg-neutral-50/70 text-neutral-700 border-neutral-200/90 hover:border-neutral-300'
                }`}
              >
                <span className="font-mono font-bold block">{item.sign}</span>
                <span className="text-[10px] block truncate">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. DURACIÓN */}
      <div className="space-y-2">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#063A5B] block">
          Duración
        </span>
        <div className="flex flex-col gap-1.5">
          {[
            { id: 'all', label: 'Todas las duraciones' },
            { id: 'hours', label: 'Menos de 3 horas' },
            { id: 'half_day', label: 'Medio día (4-5 hrs)' },
            { id: 'full_day', label: 'Día completo (6+ hrs)' },
            { id: 'multi_day', label: 'Más de un día' },
          ].map((item) => {
            const isActive = filters.durationType === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onChange({ durationType: item.id as DurationType | 'all' })}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl text-left transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#063A5B] text-white border-[#063A5B] shadow-2xs'
                    : 'bg-neutral-50/70 text-neutral-700 border-neutral-200/90 hover:border-neutral-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. TIPO DE VIAJE */}
      <div className="space-y-2">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#063A5B] block">
          Tipo de viaje
        </span>
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { id: 'all', label: 'Todos' },
            { id: 'individual', label: 'Solo' },
            { id: 'parejas', label: 'Pareja' },
            { id: 'familias', label: 'Familia' },
            { id: 'grupos', label: 'Grupo' },
          ].map((item) => {
            const isActive = filters.groupType === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onChange({ groupType: item.id as GroupType | 'all' })}
                className={`px-2 py-1.5 text-center text-xs font-semibold rounded-xl transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#00A6A6] text-white border-[#00A6A6] shadow-2xs'
                    : 'bg-neutral-50/70 text-neutral-700 border-neutral-200/90 hover:border-neutral-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 6. CONTENIDO INMERSIVO */}
      <div className="space-y-2 pt-2 border-t border-neutral-200/80">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#063A5B] block">
          Contenido interactivo
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onChange({ onlyVideo: !filters.onlyVideo })}
            className={`flex-1 py-2 px-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              filters.onlyVideo
                ? 'bg-[#063A5B] text-white border-[#063A5B] shadow-2xs'
                : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
            }`}
          >
            <Video className="w-3.5 h-3.5 text-[#20C5C7]" />
            <span>Video (≤30s)</span>
          </button>

          <button
            type="button"
            onClick={() => onChange({ only360: !filters.only360 })}
            className={`flex-1 py-2 px-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              filters.only360
                ? 'bg-[#063A5B] text-white border-[#063A5B] shadow-2xs'
                : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FDBA2D]" />
            <span>360°</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
