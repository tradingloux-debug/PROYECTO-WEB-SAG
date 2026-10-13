import { ProfileInput, UserProfile } from '../types/account';
import { Booking } from '../types/booking';

const PROFILE_STORAGE_KEY = 'gia_user_profile_v1';

// Centralizes local profile persistence so the UI never stores passwords.

const normalizeEmail = (email: string) => email.trim().toLowerCase();

export const accountService = {
  getProfile(): UserProfile | null {
    try {
      const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },

  saveProfile(input: ProfileInput): UserProfile {
    const current = this.getProfile();
    const now = new Date().toISOString();
    const profile: UserProfile = {
      ...input,
      email: normalizeEmail(input.email),
      id: current?.id || `user_${Date.now()}`,
      createdAt: current?.createdAt || now,
      updatedAt: now,
    };
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
    return profile;
  },

  removeProfile(): void {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
  },

  bookingBelongsToProfile(booking: Booking, profile: UserProfile | null): boolean {
    return Boolean(profile && normalizeEmail(booking.email) === normalizeEmail(profile.email));
  },
};
