export type BookingStatus = 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';

export interface Booking {
  id: string;
  bookingCode: string;
  experienceId: string;
  experienceTitle: string;
  experienceSlug: string;
  experienceLocation: string;
  experienceImage?: string;
  date: string;
  adults: number;
  children: number;
  pricePerPerson: number;
  subtotal: number;
  total: number;
  currency: 'USD';
  customerFirstName: string;
  customerLastName: string;
  email: string;
  phone: string;
  country: string;
  notes?: string;
  status: BookingStatus;
  createdAt: string;
}

export interface BookingDraft {
  experienceId: string;
  experienceTitle: string;
  experienceSlug: string;
  experienceLocation: string;
  experienceImage?: string;
  pricePerPerson: number;
  date: string;
  adults: number;
  children: number;
}
