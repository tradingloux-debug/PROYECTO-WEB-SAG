import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { useBookingDraft } from '../context/BookingDraftContext';
import { GiaLogo } from '../components/common/GiaLogo';
import {
  CheckCircle2,
  Copy,
  Check,
  Calendar,
  Users,
  MapPin,
  ArrowRight,
  BookmarkCheck,
  Info,
  Mail,
} from 'lucide-react';

export const ConfirmationPage: React.FC = () => {
  const { navigate } = useRouter();
  const { t, language } = useLanguage();
  const { lastConfirmedBooking } = useBookingDraft();
  const [copied, setCopied] = useState(false);

  // Fallback demo booking if user accessed directly
  const booking = lastConfirmedBooking || {
    bookingCode: 'GIA-784291',
    experienceTitle: 'Ascenso al Cráter Turquesa del Volcán Santa Ana (Ilamatepec)',
    experienceLocation: 'Parque Nacional Los Volcanes, Santa Ana',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    adults: 2,
    children: 0,
    total: 90,
    customerFirstName: 'Viajero',
    customerLastName: 'GIA',
    email: 'viajero@ejemplo.com',
    status: 'PENDING',
  };

  const handleCopyCode = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(booking.bookingCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-neutral-50/60 min-h-screen py-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-neutral-200/90 shadow-sm p-6 sm:p-10 text-center space-y-8">
          {/* Brand Logo & Success Icon */}
          <div className="flex flex-col items-center gap-4">
            <GiaLogo size="md" />
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight font-display">
              {t.confirmation.title}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-md mx-auto leading-relaxed">
              {t.confirmation.subtitle}
            </p>
          </div>

          {/* Booking Code Card */}
          <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-5 max-w-md mx-auto">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 block mb-1">
              {t.confirmation.codeLabel}
            </span>
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl sm:text-3xl font-black font-mono tracking-wider text-neutral-900">
                {booking.bookingCode}
              </span>
              <button
                type="button"
                onClick={handleCopyCode}
                className="p-2 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 text-neutral-600 transition-colors shadow-2xs"
                title={t.confirmation.copyCode}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {copied && (
              <p className="text-[11px] text-emerald-600 font-medium mt-1.5 animate-in fade-in">
                {t.confirmation.codeCopied}
              </p>
            )}
          </div>

          {/* Summary Table */}
          <div className="text-left bg-neutral-50/50 rounded-2xl border border-neutral-200/80 p-5 space-y-3 text-xs">
            <h3 className="font-bold text-neutral-900 text-sm pb-2 border-b border-neutral-200">
              {t.confirmation.detailsTitle}
            </h3>

            <div className="flex items-start justify-between gap-4 py-1">
              <span className="text-neutral-500 shrink-0">Experiencia</span>
              <span className="font-semibold text-neutral-900 text-right">
                {booking.experienceTitle}
              </span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-neutral-500">{t.confirmation.date}</span>
              <span className="font-mono font-medium text-neutral-900 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-teal-700" />
                {booking.date}
              </span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-neutral-500">{t.confirmation.guests}</span>
              <span className="font-medium text-neutral-900 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-teal-700" />
                {booking.adults} adultos {booking.children > 0 && `· ${booking.children} niños`}
              </span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-neutral-500">{t.confirmation.contactInfo}</span>
              <span className="font-medium text-neutral-900 truncate">
                {booking.customerFirstName} {booking.customerLastName} ({booking.email})
              </span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="text-neutral-500">{t.confirmation.status}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                {language === 'es' ? 'REGISTRADA / EN COORDINACIÓN' : 'REGISTERED / IN COORDINATION'}
              </span>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-neutral-200 text-sm font-bold">
              <span className="text-neutral-900">{language === 'es' ? 'Total estimado' : 'Estimated total'}</span>
              <span className="font-mono text-base text-teal-900">${booking.total} USD</span>
            </div>
          </div>

          {/* Contact Support Note with direct WhatsApp & Email */}
          <div className="p-4 bg-teal-50/70 rounded-2xl border border-teal-200/80 space-y-2.5 text-xs text-neutral-700">
            <p className="font-bold text-[#063A5B]">
              {language === 'es' ? '¿Deseas confirmar más rápido con un asesor?' : 'Want to speed up confirmation with a specialist?'}
            </p>
            <p className="text-neutral-600 text-[11px]">
              {language === 'es'
                ? `Escríbenos directamente a WhatsApp con tu código ${booking.bookingCode} para coordinar transporte o responder cualquier duda.`
                : `Message us on WhatsApp with your booking code ${booking.bookingCode} to arrange logistics or answer any questions.`}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href={`https://wa.me/50370119564?text=${encodeURIComponent(
                  `Hola, acabo de registrar la reserva ${booking.bookingCode} para ${booking.experienceTitle}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-white font-bold rounded-lg text-xs"
              >
                <span>WhatsApp (+503 7011-9564)</span>
              </a>
              <a
                href="mailto:guiaexperiencessv@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#063A5B] font-bold rounded-lg border border-neutral-200 text-xs"
              >
                <Mail className="w-3.5 h-3.5 text-[#00A6A6]" />
                <span>guiaexperiencessv@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate('/mis-reservas')}
              className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <BookmarkCheck className="w-4 h-4" />
              <span>{t.confirmation.viewBookingBtn}</span>
            </button>
            <button
              type="button"
              onClick={() => navigate('/experiencias')}
              className="w-full sm:w-auto px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>{t.confirmation.exploreMoreBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
