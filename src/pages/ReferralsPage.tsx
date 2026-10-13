import React, { useEffect, useState } from 'react';
import { useAccount } from '../context/AccountContext';
import { useLanguage } from '../context/LanguageContext';
import { useRouter } from '../context/RouterContext';
import { storageService } from '../services/storage';
import { referralService } from '../services/referralService';
import { ReferralProgramState } from '../types/referral';
import { ReferralCard } from '../components/referrals/ReferralCard';
import { GiaCreditsCard } from '../components/referrals/GiaCreditsCard';
import { UserCircle, Save, Pencil, CalendarCheck, Gift, LogOut, ShieldCheck } from 'lucide-react';

const emptyForm = { firstName: '', lastName: '', email: '', phone: '', country: '' };

export const ReferralsPage: React.FC = () => {
  const { language } = useLanguage();
  const { navigate } = useRouter();
  const { profile, saveProfile, removeProfile } = useAccount();
  const [editing, setEditing] = useState(!profile);
  const [form, setForm] = useState(profile ? {
    firstName: profile.firstName,
    lastName: profile.lastName,
    email: profile.email,
    phone: profile.phone,
    country: profile.country,
  } : emptyForm);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);
  const [bookingCount, setBookingCount] = useState(0);
  const [referralState, setReferralState] = useState<ReferralProgramState>(() => referralService.getState());

  useEffect(() => {
    let active = true;
    storageService.listRecentBookings().then(bookings => {
      if (!active) return;
      const ownBookings = profile
        ? bookings.filter(item => item.email.trim().toLowerCase() === profile.email.trim().toLowerCase())
        : [];
      setBookingCount(ownBookings.length);
      if (profile) setReferralState(referralService.unlockAfterFirstBooking(profile, bookings));
    });
    return () => { active = false; };
  }, [profile]);

  const copy = {
    es: {
      eyebrow: 'Mi cuenta GIA', title: profile ? 'Tu perfil de viajero' : 'Crea tu perfil',
      subtitle: 'Guarda tus datos para consultar tus reservas y acceder al programa Comparte GIA.',
      firstName: 'Nombre', lastName: 'Apellido', email: 'Correo electrónico', phone: 'Teléfono / WhatsApp', country: 'País',
      create: 'Crear mi cuenta', save: 'Guardar cambios', edit: 'Editar perfil', logout: 'Cerrar perfil en este dispositivo',
      required: 'Completa todos los campos y escribe un correo válido.', saved: 'Perfil guardado correctamente.',
      localNote: 'Tus datos se guardan de forma privada en este dispositivo. Nunca guardamos una contraseña en el navegador.',
      reservations: 'Mis reservas', reservationCount: 'Reservas asociadas a tu correo', view: 'Ver mis reservas',
      lockedTitle: 'Tu código se activará con tu primera reserva',
      lockedText: 'Crear una cuenta no genera un código. Después de registrar tu primera reserva con este mismo correo, recibirás tu código personal de recomendación.',
      book: 'Hacer mi primera reserva', program: 'Comparte GIA', credits: 'Créditos y recomendaciones',
    },
    en: {
      eyebrow: 'My GIA account', title: profile ? 'Your traveler profile' : 'Create your profile',
      subtitle: 'Save your details to track bookings and access the Share GIA program.',
      firstName: 'First name', lastName: 'Last name', email: 'Email address', phone: 'Phone / WhatsApp', country: 'Country',
      create: 'Create my account', save: 'Save changes', edit: 'Edit profile', logout: 'Remove profile from this device',
      required: 'Complete every field and enter a valid email.', saved: 'Profile saved successfully.',
      localNote: 'Your details are stored privately on this device. We never store a password in the browser.',
      reservations: 'My bookings', reservationCount: 'Bookings linked to your email', view: 'View my bookings',
      lockedTitle: 'Your code unlocks after your first booking',
      lockedText: 'Creating an account does not generate a code. After your first booking is registered with this same email, you will receive your personal referral code.',
      book: 'Make my first booking', program: 'Share GIA', credits: 'Credits and referrals',
    },
  }[language];

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    setError('');
    if (Object.values(form).some(value => !value.trim()) || !form.email.includes('@')) {
      setError(copy.required);
      return;
    }
    saveProfile({ ...form, email: form.email.trim().toLowerCase() });
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="bg-neutral-50/60 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <header>
          <span className="text-xs font-mono font-bold text-teal-800 uppercase tracking-wider">{copy.eyebrow}</span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display mt-1">{copy.title}</h1>
          <p className="text-sm text-neutral-500 mt-2">{copy.subtitle}</p>
        </header>

        <section className="bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8 shadow-2xs">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center"><UserCircle className="w-7 h-7" /></div>
              <div><h2 className="font-bold text-slate-900">{profile ? `${profile.firstName} ${profile.lastName}` : copy.title}</h2><p className="text-xs text-neutral-500">{profile?.email || copy.subtitle}</p></div>
            </div>
            {profile && !editing && <button type="button" onClick={() => setEditing(true)} className="px-4 py-2 rounded-xl border border-neutral-200 text-xs font-bold flex items-center gap-2 hover:bg-neutral-50"><Pencil className="w-3.5 h-3.5" />{copy.edit}</button>}
          </div>

          {editing ? (
            <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(['firstName', 'lastName', 'email', 'phone', 'country'] as const).map((field, index) => (
                <label key={field} className={field === 'country' ? 'sm:col-span-2' : ''}>
                  <span className="text-xs font-semibold text-neutral-700 block mb-1">{copy[field]}</span>
                  <input type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'} value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })} autoComplete={['given-name','family-name','email','tel','country-name'][index]} className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-teal-700 outline-hidden" />
                </label>
              ))}
              {error && <p className="sm:col-span-2 text-xs text-rose-600">{error}</p>}
              <div className="sm:col-span-2 flex flex-wrap gap-3">
                <button type="submit" className="px-5 py-3 bg-slate-900 text-white text-xs font-bold rounded-xl flex items-center gap-2"><Save className="w-4 h-4" />{profile ? copy.save : copy.create}</button>
                {profile && <button type="button" onClick={() => setEditing(false)} className="px-5 py-3 bg-neutral-100 text-neutral-700 text-xs font-bold rounded-xl">{language === 'es' ? 'Cancelar' : 'Cancel'}</button>}
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs"><div><span className="text-neutral-400 block">{copy.phone}</span><strong>{profile?.phone}</strong></div><div><span className="text-neutral-400 block">{copy.country}</span><strong>{profile?.country}</strong></div><div><span className="text-neutral-400 block">{copy.reservationCount}</span><strong>{bookingCount}</strong></div></div>
          )}
          {saved && <p className="mt-4 text-xs font-semibold text-emerald-700">{copy.saved}</p>}
          <div className="mt-5 pt-4 border-t border-neutral-100 flex items-start gap-2 text-[11px] text-neutral-500"><ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" /><span>{copy.localNote}</span></div>
        </section>

        {profile && (
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button type="button" onClick={() => navigate('/mis-reservas')} className="text-left bg-white rounded-2xl border border-neutral-200 p-5 hover:border-teal-300"><CalendarCheck className="w-5 h-5 text-teal-700 mb-3" /><strong className="block text-slate-900">{copy.reservations}</strong><span className="text-xs text-neutral-500">{copy.view} · {bookingCount}</span></button>
            <div className="bg-white rounded-2xl border border-neutral-200 p-5"><Gift className="w-5 h-5 text-amber-500 mb-3" /><strong className="block text-slate-900">{copy.program}</strong><span className="text-xs text-neutral-500">{copy.credits}</span></div>
          </section>
        )}

        {profile && referralState.currentCode ? (
          <><ReferralCard state={referralState} /><GiaCreditsCard balance={referralState.creditsBalance} transactions={referralState.transactions} /></>
        ) : profile ? (
          <section className="rounded-3xl bg-slate-950 text-white p-7 sm:p-9 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="max-w-2xl"><Gift className="w-8 h-8 text-amber-400 mb-4" /><h2 className="text-2xl font-black font-display">{copy.lockedTitle}</h2><p className="text-sm text-slate-300 mt-2 leading-relaxed">{copy.lockedText}</p></div>
            <button type="button" onClick={() => navigate('/experiencias')} className="px-5 py-3 bg-amber-400 text-slate-950 text-xs font-black rounded-xl shrink-0">{copy.book}</button>
          </section>
        ) : null}

        {profile && <button type="button" onClick={() => { removeProfile(); setEditing(true); setForm(emptyForm); }} className="text-xs text-neutral-500 hover:text-rose-600 flex items-center gap-2"><LogOut className="w-4 h-4" />{copy.logout}</button>}
      </div>
    </div>
  );
};
