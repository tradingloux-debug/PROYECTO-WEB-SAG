import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSelector } from '../common/LanguageSelector';
import { GiaLogo } from '../common/GiaLogo';
import {
  Menu,
  X,
  Home,
  Sparkles,
  User,
  ChevronDown,
  Compass,
  Route,
  Heart,
  BookmarkCheck,
  Share2,
  HelpCircle,
  ArrowRight,
  Mail,
  Copy,
  Check,
  Phone,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { path, navigate } = useRouter();
  const { language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const exploreRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (exploreRef.current && !exploreRef.current.contains(event.target as Node)) {
        setExploreDropdownOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (targetPath: string) => {
    if (targetPath === '/' && (path === '/' || path === '')) return true;
    if (targetPath !== '/' && path.startsWith(targetPath)) return true;
    return false;
  };

  const handleNav = (to: string) => {
    navigate(to);
    setMobileMenuOpen(false);
    setExploreDropdownOpen(false);
    setMoreDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200/80 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: Official GIA Experiences Logo */}
        <button
          type="button"
          onClick={() => handleNav('/')}
          className="flex items-center text-left focus-visible:outline-teal-600 rounded-md cursor-pointer transition-opacity hover:opacity-95 shrink-0"
          aria-label={`GIA Experiences ‚Äî ${language === 'es' ? 'Inicio' : 'Home'}`}
        >
          <GiaLogo size="navbar" />
        </button>

        {/* Center: Simplified Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-[#063A5B]">
          <button
            type="button"
            onClick={() => handleNav('/')}
            className={`py-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              isActive('/')
                ? 'text-[#00A6A6] font-bold border-b-2 border-[#00A6A6]'
                : 'hover:text-[#00A6A6]'
            }`}
            aria-current={isActive('/') ? 'page' : undefined}
          >
            <Home className="w-4 h-4" />
            <span>{language === 'es' ? 'Inicio' : 'Home'}</span>
          </button>

          {/* 1. Men√∫ "Explorar" con Dropdown Organizado */}
          <div
            ref={exploreRef}
            className="relative"
            onMouseEnter={() => setExploreDropdownOpen(true)}
            onMouseLeave={() => setExploreDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => handleNav('/experiencias')}
              className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer ${
                isActive('/experiencias') && !isActive('/experiencias-locales')
                  ? 'text-[#00A6A6] font-bold'
                  : 'hover:text-[#00A6A6]'
              }`}
            >
              <span>{language === 'es' ? 'Explorar' : 'Explore'}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  exploreDropdownOpen ? 'rotate-180 text-[#00A6A6]' : 'text-neutral-400'
                }`}
              />
            </button>

            {/* Dropdown Menu Explorar */}
            {exploreDropdownOpen && (
              <div className="absolute top-full -left-4 w-72 bg-white rounded-2xl border border-neutral-200/90 shadow-xl p-3 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 text-[10.5px] font-mono font-bold text-neutral-400 uppercase tracking-wider">
                  {language === 'es' ? 'Experiencias' : 'Experiences'}
                </div>

                <button
                  type="button"
                  onClick={() => handleNav('/experiencias')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-neutral-50 flex items-center justify-between transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <Compass className="w-4 h-4 text-[#00A6A6]" />
                    <span className="text-xs font-bold text-[#063A5B] group-hover:text-[#00A6A6]">
                      {language === 'es' ? 'Todas las experiencias' : 'All experiences'}
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-mono">24 {language === 'es' ? 'activas' : 'active'}</span>
                </button>

                <div className="px-3 pt-2 pb-1 text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider border-t border-neutral-100">
                  {language === 'es' ? 'Categor√≠as principales' : 'Main categories'}
                </div>

                <div className="grid grid-cols-2 gap-1 px-1">
                  {[
                    { id: 'cultura', label: language === 'es' ? 'Cultura' : 'Culture', icon: 'üé®' },
                    { id: 'gastronomia', label: language === 'es' ? 'Gastronom√≠a' : 'Food', icon: 'üçΩ' },
                    { id: 'naturaleza', label: language === 'es' ? 'Naturaleza' : 'Nature', icon: 'üåø' },
                    { id: 'aventura', label: language === 'es' ? 'Aventura' : 'Adventure', icon: 'üßó' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleNav(`/experiencias?category=${cat.id}`)}
                      className="text-left px-2.5 py-1.5 rounded-lg hover:bg-neutral-50 text-xs text-neutral-700 hover:text-[#063A5B] transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <span>{cat.icon}</span>
                      <span className="font-medium">{cat.label}</span>
                    </button>
                  ))}
                </div>

                <div className="pt-2 border-t border-neutral-100 space-y-1">
                  <button
                    type="button"
                    onClick={() => handleNav('/experiencias-locales')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-emerald-50/60 flex items-center gap-2.5 transition-colors cursor-pointer group"
                  >
                    <Heart className="w-4 h-4 text-[#55A94B]" />
                    <div>
                      <span className="text-xs font-bold text-[#063A5B] group-hover:text-[#55A94B] block">
                        {language === 'es' ? 'Experiencias locales' : 'Local experiences'}
                      </span>
                      <span className="text-[10.5px] text-neutral-500 block">
                        {language === 'es' ? 'Comunidades y tradiciones' : 'Communities and traditions'}
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNav('/experiencias?tour360=true')}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-teal-50/60 flex items-center gap-2.5 transition-colors cursor-pointer group"
                  >
                    <Compass className="w-4 h-4 text-[#00A6A6]" />
                    <div>
                      <span className="text-xs font-bold text-[#063A5B] group-hover:text-[#00A6A6] block">
                        {language === 'es' ? 'Experiencias con im√°genes 360¬∞' : 'Experiences with 360¬∞ images'}
                      </span>
                      <span className="text-[10.5px] text-neutral-500 block">
                        {language === 'es' ? 'Exploraci√≥n inmersiva' : 'Immersive exploration'}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 2. Rutas GIA */}
          <button
            type="button"
            onClick={() => handleNav('/rutas')}
            className={`py-2 transition-colors cursor-pointer ${
              isActive('/rutas') ? 'text-[#00A6A6] font-bold border-b-2 border-[#00A6A6]' : 'hover:text-[#00A6A6]'
            }`}
          >
            {language === 'es' ? 'Rutas GIA' : 'GIA Routes'}
          </button>

          {/* 3. Planea con GIA */}
          <button
            type="button"
            onClick={() => handleNav('/planea-con-gia')}
            className={`py-2 flex items-center gap-1.5 transition-colors cursor-pointer ${
              isActive('/planea-con-gia')
                ? 'text-[#00A6A6] font-bold border-b-2 border-[#00A6A6]'
                : 'hover:text-[#00A6A6]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FDBA2D]" />
            <span>{language === 'es' ? 'Planea con GIA' : 'Plan with GIA'}</span>
          </button>

          {/* 4. Men√∫ "M√°s" */}
          <div
            ref={moreRef}
            className="relative"
            onMouseEnter={() => setMoreDropdownOpen(true)}
            onMouseLeave={() => setMoreDropdownOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 py-2 text-neutral-600 hover:text-[#063A5B] transition-colors cursor-pointer"
            >
              <span>{language === 'es' ? 'M√°s' : 'More'}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  moreDropdownOpen ? 'rotate-180 text-[#00A6A6]' : 'text-neutral-400'
                }`}
              />
            </button>

            {/* Dropdown Menu M√°s */}
            {moreDropdownOpen && (
              <div className="absolute top-full -left-4 w-64 bg-white rounded-2xl border border-neutral-200/90 shadow-xl p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                <button
                  type="button"
                  onClick={() => handleNav('/quienes-somos')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-neutral-50 flex items-center gap-2.5 text-xs font-semibold text-[#063A5B] hover:text-[#00A6A6] transition-colors cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-[#00A6A6]" />
                  <span>{language === 'es' ? 'Qui√©nes somos' : 'About us'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleNav('/experiencias-locales')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-neutral-50 flex items-center gap-2.5 text-xs font-semibold text-[#063A5B] hover:text-[#00A6A6] transition-colors cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-[#55A94B]" />
                  <span>{language === 'es' ? 'Experiencias locales' : 'Local experiences'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleNav('/experiencias?tour360=true')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-neutral-50 flex items-center gap-2.5 text-xs font-semibold text-[#063A5B] hover:text-[#00A6A6] transition-colors cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-[#00A6A6]" />
                  <span>{language === 'es' ? 'Experiencias inmersivas' : 'Immersive experiences'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleNav('/mi-cuenta/referidos')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-neutral-50 flex items-center gap-2.5 text-xs font-semibold text-[#063A5B] hover:text-[#00A6A6] transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-[#FDBA2D]" />
                  <span>{language === 'es' ? 'Comparte GIA' : 'Share GIA'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleNav('/mis-reservas')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-neutral-50 flex items-center gap-2.5 text-xs font-semibold text-[#063A5B] hover:text-[#00A6A6] transition-colors cursor-pointer"
                >
                  <BookmarkCheck className="w-4 h-4 text-[#063A5B]" />
                  <span>{language === 'es' ? 'Mis reservas' : 'My bookings'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleNav('/contacto')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-neutral-50 flex items-center gap-2.5 text-xs font-semibold text-[#063A5B] hover:text-[#00A6A6] transition-colors cursor-pointer border-t border-neutral-100"
                >
                  <Phone className="w-4 h-4 text-[#00A6A6]" />
                  <span>{language === 'es' ? 'Contacto (+503 7011-9564)' : 'Contact (+503 7011-9564)'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleNav('/ayuda')}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-neutral-50 flex items-center gap-2.5 text-xs font-semibold text-[#063A5B] hover:text-[#00A6A6] transition-colors cursor-pointer"
                >
                  <HelpCircle className="w-4 h-4 text-neutral-400" />
                  <span>{language === 'es' ? 'Centro de Ayuda & FAQ' : 'Help Center & FAQ'}</span>
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Right: ES / EN, Cuenta & CTA destacado "Crear mi viaje" */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSelector />

          <button
            type="button"
            onClick={() => handleNav('/mi-cuenta/referidos')}
            className={`text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer py-1.5 px-2.5 rounded-lg ${
              isActive('/mi-cuenta')
                ? 'text-[#00A6A6] bg-teal-50'
                : 'text-[#]<ﬂÀhëÈÏ∂ªßq´^u¯°§òX⁄»»^\öY[òŸH]Z[…ﬂO‹‹[èÇàÿù]€èÇÇàH€\‹”ò[YOHù^Lû€Nù^Lﬁõ€ùY^òXõ€^[ô]]ò[NLòX⁄⁄[ôÀ]Y⁄õ€ùY\‹^HXãNèÇà›ò⁄X⁄€›]ù]_Bà⁄OÇÇàÀ à›X\ò[ùYYõ€⁄⁄[ô»õ›XŸHõﬁ
ãﬂBà]à€\‹”ò[YOHõXãNMôÀ]X[MLŒõ‹ô\àõ‹ô\ã]X[LåŒõ›[ôYLûõ^][\À\›\ùÿ\L»èÇà⁄Y[⁄X⁄»€\‹”ò[YOHùÀMHMH^]X[MÃ⁄ö[öÀL]LçHàœÇà]à€\‹”ò[YOHù^^»^]X[NMLèÇà€\‹”ò[YOHôõ€ùXõ€èÇà€[ô›XYŸHOOH	Ÿ\…»»	‘ô\Ÿ\ùòHÿ\ò[ù^òYH‹à“PH^\öY[òŸ\…»à	—›X\ò[ùYYõ€⁄⁄[ô»ûH“PH^\öY[òŸ\…ﬂBà‹Çà€\‹”ò[YOHõ]LçHXY[ôÀ\ô[^Y^]X[NLŒLèÇà€[ô›XYŸHOOH	Ÿ\…¬à»	’H€€X⁄]YŸ\∞ËHõÿŸ\ÿYHH€€ôö\õXYHõ‹õX[Y[ùHò\»Hô\öYöXÿX⁄pÏ€àH\‹€öXö[YYàŸ∞Ë\»€€ú›[\à[\›Y»HH^\öY[ò⁄XH[àŸ»[€Y[ù»€€àHÏŸY€»Hô\Ÿ\ùòKâ¬àà	÷[›\àõ€⁄⁄[ô»ô\]Y\›⁄[ôHõÿŸ\‹ŸY[ôõ‹õX[H€€ôö\õYY\€à]òZ[Xö[]Hô\öYöXÿ][€ãà[›Hÿ[àòX⁄»[›\à^\öY[òŸH[û][YH⁄][›\àõ€⁄⁄[ô»€ŸKâﬂBà‹ÇàŸ]èÇàŸ]èÇÇàõ‹õH€î›XõZ]^⁄[ôT›XõZ]H€\‹”ò[YOHú‹XŸK^KNèÇàÀ à’TNà]‹»Hô\Ÿ\ùòH
ãﬂBà]à€\‹”ò[YOHòôÀ]⁄]Hõ›[ôYLûõ‹ô\àõ‹ô\ã[ô]]ò[LåŒLMà⁄Y›ÀLû»èÇàà€\‹”ò[YOHù^Xò\ŸHõ€ùXõ€^[ô]]ò[NLXãMãL»õ‹ô\ãXàõ‹ô\ã[ô]]ò[LLõ€ùY\‹^HèÇà›ò⁄X⁄€›]ú›\U]_Bà⁄èÇÇà]à€\‹”ò[YOHô‹öY‹öYX€€ÀLH€Nô‹öYX€€ÀL»ÿ\MèÇà]èÇà‹[à€\‹”ò[YOHù^VÃL\H^[ô]]ò[Mõÿ⁄»XãLçHèû€[ô›XYŸHOOH	Ÿ\…»»	—^\öY[ò⁄XI»à	—^\öY[òŸIﬂO‹‹[èÇà€\‹”ò[YOHù^^»õ€ùXõ€^[ô]]ò[NLXY[ôÀ\€ùY»èÇàŸòYùô^\öY[òŸU]_Bà‹Çà€\‹”ò[YOHù^VÃL\H^[ô]]ò[ML]LçHõ^][\ÀXŸ[ù\àÿ\LHèÇàX\[à€\‹”ò[YOHùÀL»L»^[ô]]ò[MàœÇàŸòYùô^\öY[òŸSÿÿ][€üBà‹ÇàŸ]èÇÇà]èÇà‹[à€\‹”ò[YOHù^VÃL\H^[ô]]ò[Mõÿ⁄»XãLçHèû›ò⁄X⁄€›]ô]SXô[O‹‹[èÇà€\‹”ò[YOHù^^»õ€ùXõ€^[ô]]ò[NLõ^][\ÀXŸ[ù\àÿ\LKçHõ€ù[[€õ»èÇàÿ[[ô\à€\‹”ò[YOHùÀLÀçHLÀçH^]X[MÃàœÇàŸòYùô]_Bà‹ÇàŸ]èÇÇà]èÇà‹[à€\‹”ò[YOHù^VÃL\H^[ô]]ò[Mõÿ⁄»XãLçHèû›ò⁄X⁄€›]ô›Y\›”Xô[O‹‹[èÇà€\‹”ò[YOHù^^»õ€ùXõ€^[ô]]ò[NLõ^][\ÀXŸ[ù\àÿ\LKçHèÇà\Ÿ\ú»€\‹”ò[YOHùÀLÀçHLÀçH^]X[MÃàœÇà‹[èÇàŸòYùòY[ﬂH€[ô›XYŸHOOH	Ÿ\…»»	ÿY[‹…»à	ÿY[…ﬂHŸòYùò⁄[ô[àà	âà0≠»	ŸòYùò⁄[ô[üH	€[ô›XYŸHOOH	Ÿ\…»»	€öpÏ[‹…»à	ÿ⁄[ô[âﬂXBà‹‹[èÇà‹ÇàŸ]èÇàŸ]èÇàŸ]èÇÇàÀ à’Téà[ôõ‹õXX⁄pÏ€à[öXZô\õ»
ãﬂBà]à€\‹”ò[YOHòôÀ]⁄]Hõ›[ôYLûõ‹ô\àõ‹ô\ã[ô]]ò[LåŒLMà⁄Y›ÀLû»‹XŸK^KMèÇàà€\‹”ò[YOHù^Xò\ŸHõ€ùXõ€^[ô]]ò[NLãL»õ‹ô\ãXàõ‹ô\ã[ô]]ò[LLõ€ùY\‹^HèÇà›ò⁄X⁄€›]ú›\ï]_Bà⁄èÇÇà]à€\‹”ò[YOHô‹öY‹öYX€€ÀLH€Nô‹öYX€€ÀLàÿ\MèÇàÀ àö\ú›ò[YH
ãﬂBà]èÇàXô[€\‹”ò[YOHù^^»õ€ù\Ÿ[ZXõ€^[ô]]ò[MÃõÿ⁄»XãLHèÇà›ò⁄X⁄€›]ôö\ú›ò[Y_H
Çà€Xô[Çà[ú]à\OHù^Çàò[YO^Ÿõ‹õQ]Kôö\ú›ò[Y_Bà€ê⁄[ôŸO^ŸHOàŸ]õ‹õQ]J»ããôõ‹õQ]Kö\ú›ò[YNàKù\ôŸ]ùò[YHJ_BàXŸZ€\è^€[ô›XYŸHOOH	Ÿ\…»»	—Zãà€Ÿ∞ÎXI»à	—KôÀà€‹XIﬂBà€\‹”ò[YO^ÿÀYù[LÀçHKLà^^»õ›[ôY^õ‹ô\àôÀ[ô]]ò[MLÕLõÿ›\ŒòôÀ]⁄]Hõÿ›\Œõ›][ôKZY[àõÿ›\Œúö[ôÀLà	¬à\úõ‹úÀôö\ú›ò[YH»	ÿõ‹ô\ã\ôYMõÿ›\Œúö[ôÀ\ôYLÃ	»à	ÿõ‹ô\ã[ô]]ò[Låõÿ›\Œúö[ôÀ]X[MÃ	¬àXBàœÇàŸ\úõ‹úÀôö\ú›ò[YH	âà€\‹”ò[YOHù^VÃL\H^\ôYML]LHèûŸ\úõ‹úÀôö\ú›ò[Y_O‹üBàŸ]èÇÇàÀ à\›ò[YH
ãﬂBà]èÇàXô[€\‹”ò[YOHù^^»õ€ù\Ÿ[ZXõ€^[ô]]ò[MÃõÿ⁄»XãLHèÇà›ò⁄X⁄€›]õ\›ò[Y_H
Çà€Xô[Çà[ú]à\OHù^Çàò[YO^Ÿõ‹õQ]Kõ\›ò[Y_Bà€ê⁄[ôŸO^ŸHOàŸ]õ‹õQ]J»ããôõ‹õQ]K\›ò[YNàKù\ôŸ]ùò[YHJ_BàXŸZ€\è^€[ô›XYŸHOOH	Ÿ\…»»	—ZãàX\ù0Î[ô^â»à	—KôÀàX\ù[ô^âﬂBà€\‹”ò[YO^ÿÀYù[LÀçHKLà^^»õ›[ôY^õ‹ô\àôÀ[ô]]ò[MLÕLõÿ›\ŒòôÀ]⁄]Hõÿ›\Œõ›][ôKZY[àõÿ›\Œúö[ôÀLà	¬à\úõ‹úÀõ\›ò[YH»	ÿõ‹ô\ã\ôYMõÿ›\Œúö[ôÀ\ôYLÃ	»à	ÿõ‹ô\ã[ô]]ò[Låõÿ›\Œúö[ôÀ]X[MÃ	¬àXBàœÇàŸ\úõ‹úÀõ\›ò[YH	âà€\‹”ò[YOHù^VÃL\H^\ôYML]LHèûŸ\úõ‹úÀõ\›ò[Y_O‹üBàŸ]èÇÇàÀ à[XZ[
ãﬂBà]èÇàXô[€\‹”ò[YOHù^^»õ€ù\Ÿ[ZXõ€^[ô]]ò[MÃõÿ⁄»XãLHèÇà›ò⁄X⁄€›]ô[XZ[H
Çà€Xô[Çà[ú]à\OHô[XZ[Çàò[YO^Ÿõ‹õQ]Kô[XZ[Bà€ê⁄[ôŸO^ŸHOàŸ]õ‹õQ]J»ããôõ‹õQ]K[XZ[àKù\ôŸ]ùò[YHJ_BàXŸZ€\èHú€ŸöXPZô[\Àò€€HÇà€\‹”ò[YO^ÿÀYù[LÀçHKLà^^»õ›[ôY^õ‹ô\àôÀ[ô]]ò[MLÕLõÿ›\ŒòôÀ]⁄]Hõÿ›\Œõ›][ôKZY[àõÿ›\Œúö[ôÀLà	¬à\úõ‹úÀô[XZ[»	ÿõ‹ô\ã\ôYMõÿ›\Œúö[ôÀ\ôYLÃ	»à	ÿõ‹ô\ã[ô]]ò[Låõÿ›\Œúö[ôÀ]X[MÃ	¬àXBàœÇàŸ\úõ‹úÀô[XZ[	âà€\‹”ò[YOHù^VÃL\H^\ôYML]LHèûŸ\úõ‹úÀô[XZ[O‹üBàŸ]èÇÇàÀ à€ôH
ãﬂBà]èÇàXô[€\‹”ò[YOHù^^»õ€ù\Ÿ[ZXõ€^[ô]]ò[MÃõÿ⁄»XãLHèÇà›ò⁄X⁄€›]ú€ô_H
Çà€Xô[Çà[ú]à\OHù[Çàò[YO^Ÿõ‹õQ]Kú€ô_Bà€ê⁄[ôŸO^ŸHOàŸ]õ‹õQ]J»ããôõ‹õQ]K€ôNàKù\ôŸ]ùò[YHJ_BàXŸZ€\èHäÃH
MMJHL»
ÕL»ããàÇà€\‹”ò[YO^ÿÀYù[LÀçHKLà^^»õ›[ôY^õ‹ô\àôÀ[ô]]ò[MLÕLõÿ›\ŒòôÀ]⁄]Hõÿ›\Œõ›][ôKZY[àõÿ›\Œúö[ôÀLà	¬à\úõ‹úÀú€ôH»	ÿõ‹ô\ã\ôYMõÿ›\Œúö[ôÀ\ôYLÃ	»à	ÿõ‹ô\ã[ô]]ò[Låõÿ›\Œúö[ôÀ]X[MÃ	¬àXBàœÇàŸ\úõ‹úÀú€ôH	âà€\‹”ò[YOHù^VÃL\H^\ôYML]LHèûŸ\úõ‹úÀú€ô_O‹üBàŸ]èÇÇàÀ à€›[ùûH
ãﬂBà]à€\‹”ò[YOHú€Nò€€\‹[ãLàèÇàXô[€\‹”ò[YOHù^^»õ€ù\Ÿ[ZXõ€^[ô]]ò[MÃõÿ⁄»XãLHèÇà›ò⁄X⁄€›]ò€›[ùû_H
Çà€Xô[Çà[ú]à\OHù^Çàò[YO^Ÿõ‹õQ]Kò€›[ùû_Bà€ê⁄[ôŸO^ŸHOàŸ]õ‹õQ]J»ããôõ‹õQ]K€›[ùûNàKù\ôŸ]ùò[YHJ_BàXŸZ€\è^€[ô›XYŸHOOH	Ÿ\…»»	—Zãà\›Y‹»[öY‹Àÿ[òY0ËK\‹pÏXK[ÿ[òY‹ãããâ»à	—KôÀà[ö]Y›]\Àÿ[òYK‹Z[ã[ÿ[òY‹ãããâﬂBà€\‹”ò[YO^ÿÀYù[LÀçHKLà^^»õ›[ôY^õ‹ô\àôÀ[ô]]ò[MLÕLõÿ›\ŒòôÀ]⁄]Hõÿ›\Œõ›][ôKZY[àõÿ›\Œúö[ôÀLà	¬à\úõ‹úÀò€›[ùûH»	ÿõ‹ô\ã\ôYMõÿ›\Œúö[ôÀ\ôYLÃ	»à	ÿõ‹ô\ã[ô]]ò[Låõÿ›\Œúö[ôÀ]X[MÃ	¬àXBàœÇàŸ\úõ‹úÀò€›[ùûH	âà€\‹”ò[YOHù^VÃL\H^\ôYML]LHèûŸ\úõ‹úÀò€›[ùû_O‹üBàŸ]èÇÇàÀ à‹X⁄X[õ›\»
ãﬂBà]à€\‹”ò[YOHú€Nò€€\‹[ãLàèÇàXô[€\‹”ò[YOHù^^»õ€ù\Ÿ[ZXõ€^[ô]]ò[MÃõÿ⁄»XãLHèÇà›ò⁄X⁄€›]ú‹X⁄X[õ›\ﬂBà€Xô[Çà^\ôXBàõ›‹œ^ÃüBàò[YO^Ÿõ‹õQ]Kõõ›\ﬂBà€ê⁄[ôŸO^ŸHOàŸ]õ‹õQ]J»ããôõ‹õQ]Kõ›\ŒàKù\ôŸ]ùò[YHJ_BàXŸZ€\è^›ò⁄X⁄€›]ú‹X⁄X[õ›\‘XŸZ€\üBà€\‹”ò[YOHùÀYù[LÀçHKLà^^»õ›[ôY^õ‹ô\àõ‹ô\ã[ô]]ò[LåôÀ[ô]]ò[MLÕLõÿ›\ŒòôÀ]⁄]Hõÿ›\Œõ›][ôKZY[àõÿ›\Œúö[ôÀLàõÿ›\Œúö[ôÀ]X[MÃÇàœÇàŸ]èÇàŸ]èÇàŸ]èÇÇàÀ à’TŒàô\›[Y[àH€€ôö\õXX⁄pÏ€à
ãﬂBà]à€\‹”ò[YOHòôÀ]⁄]Hõ›[ôYLûõ‹ô\àõ‹ô\ã[ô]]ò[LåŒLMà⁄Y›ÀLû»‹XŸK^KMHèÇàà€\‹”ò[YOHù^Xò\ŸHõ€ùXõ€^[ô]]ò[NLãL»õ‹ô\ãXàõ‹ô\ã[ô]]ò[LLõ€ùY\‹^HèÇà›ò⁄X⁄€›]ú›\’]_Bà⁄èÇÇàÀ àõ€[»€ŸH	àôYô\úò[öY[
ãﬂBà]à€\‹”ò[YOHúMõ›[ôY^ôÀ[ô]]ò[MLõ‹ô\àõ‹ô\ã[ô]]ò[LåŒ‹XŸK^KLàèÇàXô[€\‹”ò[YOHù^^»õ€ùXõ€^\€]KNõ^][\ÀXŸ[ù\àÿ\LKçHèÇàY»€\‹”ò[YOHùÀLÀçHLÀçH^]X[MÃàœÇà‹[èû€[ô›XYŸHOOH	Ÿ\…»»	Ø’Y[ô\»[àÏŸY€»“PH»HôX€€Y[ôX⁄pÏ€è…»à	—»[›H]ôHH“PH‹àôYô\úò[€ŸO…ﬂO‹‹[èÇà€Xô[Çà]à€\‹”ò[YOHôõ^ÿ\LàèÇà[ú]à\OHù^Çàò[YO^‹õ€[–€ŸR[ú]Bà€ê⁄[ôŸO^ŸHOàŸ]õ€[–€ŸR[ú]
Kù\ôŸ]ùò[YKù’\\êÿ\ŸJ
J_BàXŸZ€\è^€[ô›XYŸHOOH	Ÿ\…»»	—ZãàíQSïëSíQÕI»à	—KôÀàíQSïëSíQÕIﬂBà€\‹”ò[YOHôõ^LHLÀçHKLà^^»õ›[ôY^õ‹ô\àõ‹ô\ã[ô]]ò[LåôÀ]⁄]Hõ€ù[[€õ»\\òÿ\ŸHõÿ›\Œúö[ôÀLàõÿ›\Œúö[ôÀ]X[MÃÇàœÇàù]€Çà\OHòù]€àÇà€ê€X⁄œ^⁄[ôP\Tõ€[ﬂBà€\‹”ò[YOHúMKLàôÀ\€]KNL›ô\éòôÀ\€]KN^]⁄]H^^»õ€ùXõ€õ›[ôY^ò[ú⁄][€ãX€€‹ú»⁄ö[öÀLÇàÇà€[ô›XYŸHOOH	Ÿ\…»»	–\Xÿ\â»à	–\IﬂBàÿù]€èÇàŸ]èÇÇà‹õ€[”Y\‹ÿYŸH	âà
àà€\‹”ò[YO^ÿ^VÃL\Hõ€ù[YY][Hõ^][\ÀXŸ[ù\àÿ\LH	¬àõ€[”Y\‹ÿYŸKù\HOOH	‹›XÿŸ\‹…»»	›^Y[Y\ò[MÃ	»à	›^\õ‹ŸKMå	¬àXBàÇà‹õ€[”Y\‹ÿYŸKù\HOOH	‹›XÿŸ\‹…»»
à⁄X⁄»€\‹”ò[YOHùÀL»L»^Y[Y\ò[MåàœÇà
Hà
à[\ù⁄\ò€H€\‹”ò[YOHùÀL»L»^\õ‹ŸKMåàœÇà
_Bà‹[èû‹õ€[”Y\‹ÿYŸKù^O‹‹[èÇà‹Çà
_BÇàÀ à\ŸH“PH‹ôY]»⁄X⁄ÿõﬁYà\Ÿ\à\»ò[[òŸH
ãﬂBàÿ]òZ[XõP‹ôY]»à	âà
à]à€\‹”ò[YOHúLà]Làõ‹ô\ã]õ‹ô\ã[ô]]ò[LåÕåõ^][\ÀXŸ[ù\àù\›YûKXô]ŸY[àèÇàXô[€\‹”ò[YOHôõ^][\ÀXŸ[ù\àÿ\Là›\ú€‹ã\⁄[ù\à^^»^\€]KNèÇà[ú]à\OHò⁄X⁄ÿõﬁÇà⁄X⁄ŸY^›\ŸP‹ôY]ﬂBà€ê⁄[ôŸO^ŸHOàŸ]\ŸP‹ôY] Kù\ôŸ]ò⁄X⁄ŸY
_Bà€\‹”ò[YOHúõ›[ôY^]X[Nõÿ›\Œúö[ôÀ]X[MÃÇàœÇà€⁄[ú»€\‹”ò[YOHùÀLÀçHLÀçH^X[Xô\ãMLàœÇà‹[èû€[ô›XYŸHOOH	Ÿ\…»»\ÿ\àZ\»‹∞ÍY]‹»“PH
		ÿ]òZ[XõP‹ôY]ﬂHT—\‹€öXõ\ Xà\ŸH^H“PH‹ôY]»
		ÿ]òZ[XõP‹ôY]ﬂHT—]òZ[XõJXO‹‹[èÇà€Xô[Çà›\ŸP‹ôY]»	âà
à‹[à€\‹”ò[YOHù^^»õ€ù[[€õ»õ€ùXõ€^Y[Y\ò[MÃèÇàIÿ‹ôY]–[[›[ùHT—à‹‹[èÇà
_BàŸ]èÇà
_BàŸ]èÇÇàÀ àöXŸHúôXZŸ›€à
ãﬂBà]à€\‹”ò[YOHú‹XŸK^KLà^^»èÇà]à€\‹”ò[YOHôõ^][\ÀXŸ[ù\àù\›YûKXô]ŸY[à^[ô]]ò[MåèÇà‹[èû›ò⁄X⁄€›]úöXŸT\î\ú€€üO‹‹[èÇà‹[à€\‹”ò[YOHôõ€ù[[€õ»èâŸòYùúöXŸT\î\ú€€üHT—‹‹[èÇàŸ]èÇà]à€\‹”ò[YOHôõ^][\ÀXŸ[ù\àù\›YûKXô]ŸY[à^[ô]]ò[MåèÇà‹[èû€[ô›XYŸHOOH	Ÿ\…»»	’›[HöXZô\õ‹…»à	’›[ò]ô[\ú…ﬂO‹‹[èÇà‹[à€\‹”ò[YOHôõ€ù[[€õ»èû››[[‹_O‹‹[èÇàŸ]èÇà]à€\‹”ò[YOHôõ^][\ÀXŸ[ù\àù\›YûKXô]ŸY[à^[ô]]ò[MåèÇà‹[èû›ò⁄X⁄€›]ú›Xù›[O‹‹[èÇà‹[à€\‹”ò[YOHôõ€ù[[€õ»èâ‹›Xù›[HT—‹‹[èÇàŸ]èÇÇàŸ\ÿ€›[ù[[›[ùà	âà
à]à€\‹”ò[YOHôõ^][\ÀXŸ[ù\àù\›YûKXô]ŸY[à^Y[Y\ò[MÃõ€ù\Ÿ[ZXõ€èÇà‹[èû€[ô›XYŸHOOH	Ÿ\…»»	—\ÿ›Y[ù…»à	—\ÿ€›[ù	ﬂH
ÿ\YYõ€[œÀò€Ÿ_JO‹‹[èÇà‹[à€\‹”ò[YOHôõ€ù[[€õ»èãIŸ\ÿ€›[ù[[›[ùHT—‹‹[èÇàŸ]èÇà
_BÇàÿ‹ôY]–[[›[ùà	âà
à]à€\‹”ò[YOHôõ^][\ÀXŸ[ù\àù\›YûKXô]ŸY[à^Y[Y\ò[MÃõ€ù\Ÿ[ZXõ€èÇà‹[èû€[ô›XYŸHOOH	Ÿ\…»»	–‹∞ÍY]‹»“PH\XÿY‹…»à	—“PH‹ôY]»\YY	ﬂO‹‹[èÇà‹[à€\‹”ò[YOHôõ€ù[[€õ»èãIÿ‹ôY]–[[›[ùHT—‹‹[èÇàŸ]èÇà
_BÇà]à€\‹”ò[YOHôõ^][\ÀXŸ[ù\àù\›YûKXô]ŸY[à^Xò\ŸHõ€ùY^òXõ€^[ô]]ò[NLL»õ‹ô\ã]õ‹ô\ã[ô]]ò[LåèÇà‹[èû›ò⁄X⁄€›]ù›[O‹‹[èÇà‹[à€\‹”ò[YOHôõ€ù[[€õ»^^^]X[NLèâ››[HT—‹‹[èÇàŸ]èÇàŸ]èÇÇÇàÀ à\õ\»	àö]òXﬁH⁄X⁄ÿõﬁX[ô]‹ûH
ãﬂBà]à€\‹”ò[YOHúLàèÇàXô[€\‹”ò[YOHôõ^][\À\›\ùÿ\LãçH›\ú€‹ã\⁄[ù\àèÇà[ú]à\OHò⁄X⁄ÿõﬁÇà⁄X⁄ŸY^Ÿõ‹õQ]KòY‹ôYU\õ\ﬂBà€ê⁄[ôŸO^ŸHOàŸ]õ‹õQ]J»ããôõ‹õQ]KY‹ôYU\õ\ŒàKù\ôŸ]ò⁄X⁄ŸYJ_Bà€\‹”ò[YOHõ]LçHõ›[ôYõ‹ô\ã[ô]]ò[LÃ^]X[Nõÿ›\Œúö[ôÀ]X[MÃ›\ú€‹ã\⁄[ù\à⁄ö[öÀLÇàœÇà‹[à€\‹”ò[YOHù^^»^[ô]]ò[MåŸ[X›[õ€ôHXY[ôÀ\ô[^YèÇà€[ô›XYŸHOOH	Ÿ\…»»
àÇàHpÎY»HXŸ\»‹ﬁ…»	ﬂBàù]€Çà\OHòù]€àÇà€ê€X⁄œ^ JHOà¬àKúô]ô[ùYò][

N¬àKú›‹õ‹Yÿ][€ä
N¬àò]öYÿ]J	À›\õZ[õ‹À^KX€€ôX⁄[€ô\… N¬à_Bà€\‹”ò[YOHù^V»ÃMêMóHõ€ùXõ€[ô\õ[ôH›ô\éù^V»Ãå–MPóH›\ú€‹ã\⁄[ù\àÇàÇà0Í\õZ[õ‹»H€€ôX⁄[€ô\¬àÿù]€èû…»	ﬂBàH^…»	ﬂBàù]€Çà\OHòù]€àÇà€ê€X⁄œ^ JHOà¬àKúô]ô[ùYò][

N¬àKú›‹õ‹Yÿ][€ä
N¬àò]öYÿ]J	À‹€]XÿKYK\ö]òX⁄YY	 N¬à_Bà€\‹”ò[YOHù^V»ÃMêMóHõ€ùXõ€[ô\õ[ôH›ô\éù^V»Ãå–MPóH›\ú€‹ã\⁄[ù\àÇàÇà€0Î]XÿHHö]òX⁄YYàÿù]€èÇàÇàœÇà
Hà
àÇàH]ôHôXY[ôXÿŸ\^…»	ﬂBàù]€Çà\OHòù]€àÇà€ê€X⁄œ^ JHOà¬àKúô]ô[ùYò][

N¬àKú›‹õ‹Yÿ][€ä
N¬àò]öYÿ]J	À›\õ\ÀX[ôX€€ô][€ú… N¬à_Bà€\‹”ò[YOHù^V»ÃMêMóHõ€ùXõ€[ô\õ[ôH›ô\éù^V»Ãå–MPóH›\ú€‹ã\⁄[ù\àÇàÇà\õ\»[ô€€ô][€ú¬àÿù]€èû…»	ﬂBà[ô^…»	ﬂBàù]€Çà\OHòù]€àÇà€ê€X⁄œ^ JHOà¬àKúô]ô[ùYò][

N¬àKú›‹õ‹Yÿ][€ä
N¬àò]öYÿ]J	À‹ö]òXﬁK\€XﬁI N¬à_Bà€\‹”ò[YOHù^V»ÃMêMóHõ€ùXõ€[ô\õ[ôH›ô\éù^V»Ãå–MPóH›\ú€‹ã\⁄[ù\àÇàÇàö]òXﬁH€XﬁBàÿù]€èÇàÇàœÇà
_Bà‹‹[èÇà€Xô[ÇàŸ\úõ‹úÀòY‹ôYU\õ\»	âà
à€\‹”ò[YOHù^VÃL\H^\ôYML]LHèûŸ\úõ‹úÀòY‹ôYU\õ\ﬂO‹Çà
_BàŸ]èÇÇàÀ àŸ[ô\ò[õ‹õH\úõ‹àYà[ûH
ãﬂBàŸ\úõ‹úÀôõ‹õH	âà
à]à€\‹”ò[YOHúL»ôÀ\ôYML^\ôYMÃ^^»õ›[ôY^õ‹ô\àõ‹ô\ã\ôYLåõ^][\ÀXŸ[ù\àÿ\LàèÇà[\ù⁄\ò€H€\‹”ò[YOHùÀMM⁄ö[öÀLàœÇà‹[èûŸ\úõ‹úÀôõ‹õ_O‹‹[èÇàŸ]èÇà
_BÇàÀ à›XõZ]’H
ãﬂBàù]€Çà\OHú›XõZ]Çà\ÿXõY^⁄\‘›XõZ][ôﬂBà€\‹”ò[YOHùÀYù[KMôÀ\€]KNL›ô\éòôÀ\€]KN\ÿXõYòôÀ[ô]]ò[M^]⁄]Hõ€ùXõ€^^»\\òÿ\ŸHòX⁄⁄[ôÀ]⁄Y\àõ›[ôY^⁄Y›À[Yò[ú⁄][€ãX€€‹ú»õ^][\ÀXŸ[ù\àù\›YûKXŸ[ù\àÿ\Là›\ú€‹ã\⁄[ù\àÇàÇàÿ⁄»€\‹”ò[YOHùÀMMàœÇà‹[èÇà⁄\‘›XõZ][ô»»ò⁄X⁄€›]òõ€⁄⁄[ô‘õÿŸ\‹⁄[ô»àò⁄X⁄€›]ò€€ôö\õPõ€⁄⁄[ô–ùüBà‹‹[èÇàÿù]€èÇàŸ]èÇàŸõ‹õOÇàŸ]èÇàŸ]èÇà
N¬üN¬