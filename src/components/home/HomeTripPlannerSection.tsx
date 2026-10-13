import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Sparkles, Bot, User, ArrowRight, CheckCircle2 } from 'lucide-react';

export const HomeTripPlannerSection: React.FC = () => {
  const { navigate } = useRouter();

  const chips = [
    'Playa',
    'Volcanes',
    'Cultura',
    'Gastronomía',
    'Naturaleza',
    'Aventura',
    'Comunidades',
  ];

  const handleChipClick = (chip: string) => {
    navigate(`/planea-con-gia?interest=${encodeURIComponent(chip.toLowerCase())}`);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#F7F4ED]/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#063A5B] to-[#04283f] rounded-3xl text-white p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A6A6]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FDBA2D]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading, text, chips, CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#FDBA2D] text-xs font-bold border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-[#FDBA2D]" />
                <span>Asistente Inteligente de Viaje</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display leading-[1.15]">
                Tu viaje. A tu manera.
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
                Cuéntale a GIA qué quieres vivir y crea una ruta personalizada por El Salvador.
              </p>

              {/* Chips */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-300 block">
                  Elige tus intereses prioritarios:
                </span>
                <div className="flex flex-wrap gap-2">
                  {chips.map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => handleChipClick(chip)}
                      className="px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-semibold backdrop-blur-md border border-white/20 transition-all cursor-pointer hover:scale-103"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => navigate('/planea-con-gia')}
                  className="px-8 py-4 bg-[#FDBA2D] hover:bg-[#f5b124] text-slate-950 font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center gap-2.5 cursor-pointer hover:scale-102"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Planea con GIA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Short Conversation Preview */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 sm:p-7 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 pb-3 border-b border-white/15">
                <div className="w-2.5 h-2.5 rounded-full bg-[#20C5C7] animate-pulse" />
                <span className="text-xs font-bold text-white tracking-wide uppercase">
                  Conversación en Vivo con GIA
                </span>
              </div>

              {/* User Bubble */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-white">
                  <User className="w-4 h-4" />
                </div>
                <div className="bg-white/20 rounded-2xl rounded-tl-xs p-3.5 text-xs text-white leading-relaxed">
                  <span className="font-semibold block text-slate-300 mb-0.5">Tú:</span>
                  "Quiero conocer El Salvador en 7 días y me gustan los volcanes y la gastronomía."
                </div>
              </div>

              {/* GIA Bubble */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#00A6A6] flex items-center justify-center shrink-0 text-white shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-[#00A6A6]/30 border border-[#00A6A6]/40 rounded-2xl rounded-tl-xs p-3.5 text-xs text-slate-100 leading-relaxed">
                  <span className="font-semibold block text-[#FDBA2D] mb-0.5">GIA Experiences:</span>
                  "Perfecto. Puedo ayudarte a combinar naturaleza, cultura y gastronomía en una ruta personalizada."
                </div>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => navigate('/planea-con-gia')}
                  className="w-full py-2.5 text-xs font-bold text-white bg-white/15 hover:bg-white/25 rounded-xl border border-white/20 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Continuar esta conversación</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
