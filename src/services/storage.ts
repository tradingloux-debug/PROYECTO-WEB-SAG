import { Booking } from '../types/booking';

const LOCAL_STORAGE_KEY = 'gia_experiences_bookings_v1';

export interface StorageService {
  saveBooking(booking: Booking): Promise<Booking>;
  getBookingByCode(code: string, email?: string): Promise<Booking | null>;
  listRecentBookings(): Promise<Booking[]>;
  updateBookingStatus(id: string, status: Booking['status']): Promise<Booking | null>;
}

/**
 * Local storage adapter ready to be swapped with Firestore in Sprint 2.
 * Mirrors async collection queries so components require zero changes when Firestore is activated.
 */
class LocalStorageService implements StorageService {
  private getStored(): Booking[] {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (!raw) return [];
      return JSON.parse(raw);
    } catch (e) {
      console.warn('Could not read bookings from local storage', e);
      return [];
    }
  }

  private setStored(bookings: Booking[]): void {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookings));
    } catch (e) {
      console.error('Could not save bookings to local storage', e);
    }
  }

  async saveBooking(booking: Booking): Promise<Booking> {
    const current = this.getStored();
    // Prepend so latest is first
    const updated = [booking, ...current.filter(b => b.id !== booking.id)];
    this.setStored(updated);
    return booking;
  }

  async getBookingByCode(code: string, email?: string): Promise<Booking | null> {
    const current = this.getStored();
    const cleanCode = code.trim().toUpperCase();
    const cleanEmail = email?.trim().toLowerCase();

    const found = current.find(b => {
      const codeMatches = b.bookingCode.toUpperCase() === cleanCode;
      if (!codeMatches) return false;
      if (cleanEmail) {
        return b.email.toLowerCase() === cleanEmail;
      }
      return true;
    });

    return found || null;
  }

  async listRecentBookings(): Promise<Booking[]> {
    return this.getStored();
  }

  async updateBookingStatus(id: string, status: Booking['status']): Promise<Booking | null> {
    const current = this.getStored();
    let updatedBooking: Booking | null = null;
    const next = current.map(b => {
      if (b.id === id) {
        updatedBooking = { ...b, status };
        return updatedBooking;
      }
      return b;
    });
    this.setStored(next);
    return updatedBooking;
  }
}

export const storageService = new LocalStorageService();
