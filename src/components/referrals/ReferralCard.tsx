import React, { useState } from 'react';
import { ReferralProgramState } from '../../types/referral';
import { Copy, Check, Share2, Users, Gift, Sparkles, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '../../services/analytics';

interface ReferralCardProps {
  state: ReferralProgramState;
}

export const ReferralCard: React.FC<ReferralCardProps> = ({ state }) => {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const code = state.currentCode.code;

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      trackEvent('referral_code_copied', { code });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = () => {
    trackEvent('referral_page_viewed', { action: 'share' });
    if (navigator.share) {
      navigator.share({
        title: 'GIA Experiences - El Salvador',
        text: `¡Usa mi código ${code} en GIA Experiences para obtener un 10% de descuento en experiencias turísticas auténticas por El Salvador!`,
        url: window.location.origin,
      }).catch(() => {});
    } else {
      handleCopy();
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-800 space-y-6">
      <div className="max-w-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold font-mono">
          <Gift className="w-3.5 h-3.5 text-amber-400" />
          <span>Programa Comparte GIA</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
          Invita a tus amigos a descubrir El Salvador
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Tus invitados obtienen un <strong>10% de descuento</strong> en su primera reserva, y tú acumulas <strong>${state.currentCode.rewardValue} USD en Créditos GIA</strong> por cada experiencia completada.
        </p>
      </div>

      {/* Code Share Box */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-mono text-slate-300 block mb-1">
            Tu código de recomendación
          </span>
          <span className="text-2xl sm:text-3xl font-black font-mono tracking-widest text-amber-400">
            {code}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="px-4 py-2.5 bg-white text-slate-950 font-bold text-xs rounded-xl shadow-xs hover:bg-neutral-100 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? '¡Copiado!' : 'Copiar código'}</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="px-4 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>Compartir</span>
          </button>
        </div>
      </div>

      {/* Metrics Counters */}
      <div className="grid grid-cols-3 gap-3 pt-2">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
          <span className="text-[11px] text-slate-400 block">Personas invitadas</span>
          <span className="text-xl sm:text-2xl font-black font-mono text-white mt-1 block">
            {state.invitedCount}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
          <span className="text-[11px] text-slate-400 block">Reservas completadas</span>
          <span className="text-xl sm:text-2xl font-black font-mono text-white mt-1 block">
            {state.completedBookingsCount}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
          <span className="text-[11px] text-slate-400 block">Crédito GIA acumulado</span>
          <span className="text-xl sm:text-2xl font-black font-mono text-amber-400 mt-1 block">
            ${state.creditsBalance} USD
          </span>
        </div>
      </div>
    </div>
  );
};
