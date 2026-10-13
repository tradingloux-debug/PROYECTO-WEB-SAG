import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import {
  Compass,
  Sparkles,
  ShieldCheck,
  Award,
  Lightbulb,
  HeartHandshake,
  CheckCircle,
  Gem,
  ArrowRight,
  MapPin,
  Users,
  Mountain,
} from 'lucide-react';

import heroCoatepeque from '../assets/images/hero_coatepeque_el_salvador_1791258093926.jpg';
import expSuchitoto from '../assets/images/exp_culture_suchitoto_1791258103725.jpg';
import expCoffee from '../assets/images/exp_coffee_apaneca_1791258112096.jpg';

export const AboutUsPage: React.FC = () => {
  const { navigate } = useRouter();
  const { language } = useLanguage();

  const values = [
    {
      titleEs: 'RESPONSABILIDAD',
      titleEn: 'RESPONSIBILITY',
      descEs: 'Actuar de manera responsable con los clientes, aliados y destinos turísticos.',
      descEn: 'Act responsibly with travelers, local partners, and travel destinations.',
      icon: ShieldCheck,
      color: 'text-teal-600 bg-teal-50 border-teal-100',
    },
    {
      titleEs: 'CALIDAD',
      titleEn: 'QUALITY',
      descEs: 'Ofrecer experiencias que cumplan con las expectativas de los clientes.',
      descEn: 'Deliver curated travel experiences that meet and exceed traveler expectations.',
      icon: Award,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      titleEs: 'INNOVACIÓN',
      titleEn: 'INNOVATION',
      descEs: 'Buscar nuevas formas de crear y presentar experiencias turísticas.',
      descEn: 'Pioneer creative ways to design, present, and personalize authentic tourism.',
      icon: Lightbulb,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-100',
    },
    {
      titleEs: 'RESPETO',
      titleEn: 'RESPECT',
      descEs: 'Valorar a las personas, comunidades, culturas y espacios naturales.',
      descEn: 'Deeply value host communities, culture, traditions, and natural environments.',
      icon: HeartHandshake,
      color: 'text-rose-600 bg-rose-50 border-rose-100',
    },
    {
      titleEs: 'COMPROMISO',
      titleEn: 'COMMITMENT',
      descEs: 'Cumplir con lo ofrecido y brindar una atención adecuada al cliente.',
      descEn: 'Deliver faithfully on promises with responsive, dedicated customer support.',
      icon: CheckCircle,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      titleEs: 'AUTENTICIDAD',
      titleEn: 'AUTHENTICITY',
      descEs: 'Promover experiencias que permitan conocer la esencia y diversidad de El Salvador.',
      descEn: 'Promote true encounters that unveil the authentic soul and diversity of El Salvador.',
      icon: Gem,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
  ];

  return (
    <div className="bg-neutral-50/70 min-h-screen pb-24">
      {/* Top Breadcrumbs */}
      <div className="bg-white border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <Breadcrumbs
            items={[
              { label: language === 'es' ? 'Quiénes somos' : 'About us' },
            ]}
            backAction={{
              label: language === 'es' ? '← Volver al inicio' : '← Back to Home',
              path: '/',
            }}
          />
        </div>
      </div>

      {/* Hero Visual Section */}
      <section className="relative bg-[#063A5B] text-white overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 z-0">
          <img
            src={heroCoatepeque}
            alt="El Salvador paisajes"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#063A5B] via-[#063A5B]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#FDBA2D] text-xs font-mono font-bold border border-white/15">
            <Sparkles className="w-3.5 h-3.5" />
            <span>El Salvador diseñado para ti</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight max-w-3xl leading-tight">
            {language === 'es' ? 'Conoce GIA Experiences' : 'About GIA Experiences'}
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed font-light">
            {language === 'es'
              ? 'GIA Experiences es una tour operadora salvadoreña enfocada en diseñar experiencias que permitan descubrir El Salvador de una manera personalizada, cercana y diferente.'
              : 'GIA Experiences is a Salvadoran tour operator dedicated to crafting travel experiences that reveal El Salvador in a personalized, immersive, and distinctive way.'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* Misión y Visión */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="bg-white rounded-3xl border border-neutral-200/90 p-8 sm:p-10 shadow-xs space-y-4 hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-[#00A6A6] text-xs font-mono font-extrabold tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Nuestra Misión' : 'Our Mission'}</span>
            </div>
            <h2 className="text-2xl font-black text-[#063A5B] font-display">
              MISIÓN
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
              "{language === 'es'
                ? 'Brindar experiencias turísticas personalizadas que permitan a las personas descubrir, disfrutar y conectar con los diferentes destinos y atractivos de El Salvador, ofreciendo opciones adaptadas a sus intereses.'
                : 'To provide personalized tourism experiences that enable travelers to discover, enjoy, and connect with the diverse destinations and attractions of El Salvador, offering options tailored to their interests.'}"
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-3xl border border-neutral-200/90 p-8 sm:p-10 shadow-xs space-y-4 hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-[#F47B3A] text-xs font-mono font-extrabold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Nuestra Visión' : 'Our Vision'}</span>
            </div>
            <h2 className="text-2xl font-black text-[#063A5B] font-display">
              VISIÓN
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium">
              "{language === 'es'
                ? 'Ser una marca turística reconocida en El Salvador por ofrecer experiencias innovadoras, personalizadas y de calidad, que motiven a las personas a descubrir y disfrutar el país de una manera diferente.'
                : 'To be a renowned tourism brand in El Salvador recognized for delivering innovative, personalized, and high-quality experiences that inspire people to discover and enjoy the country in a truly unique way.'}"
            </p>
          </div>
        </section>

        {/* 6 Valores */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#00A6A6] text-xs font-mono font-bold uppercase tracking-wider">
              <Gem className="w-3.5 h-3.5" />
              <span>{language === 'es' ? 'Principios que nos guían' : 'Core Principles'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#063A5B] font-display tracking-tight">
              {language === 'es' ? 'Nuestros valores' : 'Our Values'}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              {language === 'es'
                ? 'Pilares que sustentan cada ruta, encuentro comunitario y momento que diseñamos.'
                : 'Foundational pillars supporting every tour route, community connection, and experience we design.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-neutral-200/90 p-7 shadow-xs hover:shadow-md transition-all space-y-4 group"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${val.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#063A5B] font-display tracking-wide">
                    {language === 'es' ? val.titleEs : val.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    "{language === 'es' ? val.descEs : val.descEn}"
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Cómo queremos que descubras El Salvador */}
        <section className="bg-white rounded-3xl border border-neutral-200/90 p-8 sm:p-12 shadow-xs space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-[#00A6A6] text-xs font-mono font-bold uppercase">
                <Mountain className="w-3.5 h-3.5" />
                <span>Turismo Auténtico y Responsable</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#063A5B] font-display tracking-tight leading-tight">
                {language === 'es'
                  ? 'Cómo queremos que descubras El Salvador'
                  : 'How we want you to experience El Salvador'}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {language === 'es'
                  ? 'En GIA Experiences no creemos en itinerarios masivos ni rígidos. Creemos en el valor de los encuentros humanos, el respeto profundo por las comunidades anfitrionas y la riqueza inagotable de nuestra geografía: desde el pacífico oleaje de la costa hasta las cumbres de los volcanes y los pueblos con tradición viva.'
                  : 'At GIA Experiences, we do not believe in cookie-cutter mass tourism. We celebrate real human connections, deep respect for host communities, and the boundless beauty of our land—from Pacific waves to volcano rims and heritage mountain towns.'}
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {language === 'es'
                  ? 'Como tour operadora, coordinamos cada detalle logístico, de transporte, seguridad y acompañamiento local para que tu única preocupación sea disfrutar, aprender y conectar.'
                  : 'As an authorized tour operator, we coordinate all logistics, transport, security, and local guidance so your only task is to enjoy, explore, and connect.'}
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <img
                src={expSuchitoto}
                alt="Suchitoto colonial"
                className="w-full h-44 object-cover rounded-2xl shadow-xs"
              />
              <img
                src={expCoffee}
                alt="Cafetales de Apaneca"
                className="w-full h-44 object-cover rounded-2xl shadow-xs mt-4"
              />
            </div>
          </div>
        </section>

        {/* Dual CTAs Final */}
        <section className="bg-gradient-to-r from-[#063A5B] via-[#04283f] to-[#063A5B] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white">
              {language === 'es' ? '¿Listo para descubrir El Salvador?' : 'Ready to discover El Salvador?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {language === 'es'
                ? 'Elige entre nuestras experiencias individuales curadas o utiliza nuestra herramienta inteligente para diseñar tu viaje a medida.'
                : 'Choose from our curated individual experiences or use our smart trip planner to design your custom itinerary.'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => navigate('/experiencias')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#00A6A6] hover:bg-[#009191] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>{language === 'es' ? 'Descubre nuestras experiencias' : 'Explore our experiences'}</span>
              </button>

              <button
                type="button"
                onClick={() => navigate('/planea-con-gia')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#FDBA2D] hover:bg-[#f5b124] text-slate-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>{language === 'es' ? 'Planea tu viaje' : 'Plan your trip'}</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
