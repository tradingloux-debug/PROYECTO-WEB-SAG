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

// Fields accepted by both profile creation and profile editing.
export type ProfileInput = Omit<UserProfile, 'id' | 'createdAt' | 'updatedAt'>;
