import React from 'react';
import { Layers, Compass, Users, Sparkles } from 'lucide-react';

export const WhyGia: React.FC = () => {
  const benefits = [
    {
      icon: <Layers className="w-5 h-5 text-[#00A6A6]" />,
      title: 'TODO EN UN SOLO LUGAR',
      desc: 'Descubre y compara diferentes experiencias.',
    },
    {
      icon: <Compass className="w-5 h-5 text-[#00A6A6]" />,
      title: 'VIAJES PERSONALIZADOS',
      desc: 'Crea rutas adaptadas a tus intereses.',
    },
    {
      icon: <Users className="w-5 h-5 text-[#00A6A6]" />,
      title: 'CONEXIÓN LOCAL',
      desc: 'Encuentra experiencias vinculadas con la cultura y las personas del destino.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#00A6A6]" />,
      title: 'INSPIRACIÓN VISUAL',
      desc: 'Explora videos y contenido 360° antes de elegir.',
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00A6A6] font-mono">
            La Propuesta GIA
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#063A5B] mt-2 font-display">
            Por qué GIA Experiences
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2.5 leading-relaxed">
            Una plataforma digital diseñada para que tu viaje por El Salvador sea claro, memorable y auténtico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F7F4ED]/60 border border-neutral-200/80 hover:border-[#00A6A6]/40 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-teal-100 flex items-center justify-center mb-4 shadow-2xs">
                {b.icon}
              </div>
              <h3 className="text-sm font-black text-[#063A5B] tracking-wide mb-2 font-display">
                {b.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
