import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Gift, Share2, CalendarCheck, Coins, ArrowRight } from 'lucide-react';

export const ShareGiaSection: React.FC = () => {
  const { navigate } = useRouter();

  const steps = [
    {
      num: '1',
      title: 'Comparte tu código',
      desc: 'Invita a tus amigos con tu enlace o código exclusivo de viajero.',
      icon: <Share2 className="w-5 h-5 text-[#00A6A6]" />,
    },
    {
      num: '2',
      title: 'Tu amigo reserva',
      desc: 'Ellos disfrutan de un beneficio de bienvenida en su primera experiencia.',
      icon: <CalendarCheck className="w-5 h-5 text-[#FDBA2D]" />,
    },
    {
      num: '3',
      title: 'Obtienes crédito GIA',
      desc: 'Acumulas saldo en GIA Credits para descontar en tus próximos viajes.',
      icon: <Coins className="w-5 h-5 text-[#55A94B]" />,
    },
  ];

  return (
    <section className="py-20 bg-[#F7F4ED]/80 border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#063A5B] text-xs font-bold font-mono uppercase">
            <Gift className="w-3.5 h-3.5 text-[#FDBA2D]" />
            <span>Programa de Fidelización</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#063A5B] tracking-tight font-display">
            Viajar es mejor cuando lo compartes
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Comparte la pasión por descubrir El Salvador y gana créditos canjeables para tus próximas aventuras.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-2xs hover:shadow-md transition-all text-center relative flex flex-col items-center justify-between space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-center shadow-2xs">
                {step.icon}
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-[#00A6A6]">
                  PASO {step.num}
                </span>
                <h3 className="text-base font-bold text-[#063A5B] font-display">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={() => navigate('/mi-cuenta/referidos')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#063A5B] hover:bg-[#04283f] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer hover:scale-102"
          >
            <span>Conocer Comparte GIA</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
