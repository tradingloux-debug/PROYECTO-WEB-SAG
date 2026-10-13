import React, { useState, useEffect } from 'react';
import { referralService } from '../services/referralService';
import { tripStorage } from '../services/tripStorage';
import { ReferralProgramState } from '../types/referral';
import { MyTrip } from '../types/trip';
import { ReferralCard } from '../components/referrals/ReferralCard';
import { GiaCreditsCard } from '../components/referrals/GiaCreditsCard';
import { useRouter } from '../context/RouterContext';
import { useLanguage } from '../context/LanguageContext';
import { trackEvent } from '../services/analytics';
import {
  Gift,
  Coins,
  BookmarkCheck,
  Calendar,
  Users,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const ReferralsPage: React.FC = () => {
  const { navigate } = useRouter();
  const { language } = useLanguage();

  const [referralState, setReferralState] = useState<ReferralProgramState>(() =>
    referralService.getState()
  );
  const [savedTrips, setSavedTrips] = useState<MyTrip[]>(() =>
    tripStorage.getTrips()
  );

  useEffect(() => {
    trackEvent('referral_page_viewed');
  }, []);

  return (
    <div className="bg-neutral-50/60 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Title */}
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-teal-800 uppercase tracking-wider">
            Mi Cuenta GIA
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
            Programa de Fidelización y Créditos
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500">
            Comparte El Salvador con tus amigos y gana créditos aplicables a tus próximas reservas.
          </p>
        </div>

        {/* 1. Referral Card */}
        <ReferralCard state={referralState} />

        {/* 2. GIA Credits Wallet Card */}
        <GiaCreditsCard
          balance={referralState.creditsBalance}
          transactions={referralState.transactions}
        />

        {/* 3. Mis Viajes Guardados */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
              <BookmarkCheck className="w-5 h-5 text-teal-700" />
              <span>Mis Viajes Guardados</span>
            </h2>
            <button
              type="button"
              onClick={() => navigate('/planea-con-gia')}
              className="text-xs font-bold text-teal-800 hover:text-teal-950 flex items-center gap-1"
            >
              <span>Crear nuevo viaje</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {savedTrips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {savedTrips.map(trip => (
                <div
                  key={trip.id}
                  className="bg-white rounded-2xl border border-neutral-200/90 p-5 shadow-2xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-teal-800">
                      {trip.daysCount} Días
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-900">
                      ${trip.estimatedTotal} USD
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 truncate">
                    {trip.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500">
                    {trip.destinations.join(' · ')}
                  </p>
                  <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-[11px] text-neutral-400">
                      {trip.travelersCount} viajeros
                    </span>
                    <button
                      type="button"
                      onClick={() => navigate('/planea-con-gia')}
                      className="text-xs font-bold text-teal-700 hover:text-teal-900"
                    >
                      Abrir en planeador →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 text-center text-xs text-neutral-400">
              Aún no tienes viajes guardados. Diseña tu primera ruta personalizada con Planea con GIA.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
