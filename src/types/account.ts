export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  createdAt: string;
  updatedAt: string;
}

export type ProfileInput = Omit<UserProfile, 'id' | 'createdAt' | 'updatedAt'>;
