import React, { createContext, useContext, useMemo, useState } from 'react';
import { accountService } from '../services/accountService';
import { ProfileInput, UserProfile } from '../types/account';

// Browser-local profile provider used by account, checkout, and referral flows.

interface AccountContextValue {
  profile: UserProfile | null;
  saveProfile: (input: ProfileInput) => UserProfile;
  removeProfile: () => void;
}

const AccountContext = createContext<AccountContextValue | undefined>(undefined);

export const AccountProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [profile, setProfile] = useState<UserProfile | null>(() => accountService.getProfile());

  const value = useMemo<AccountContextValue>(() => ({
    profile,
    saveProfile: (input) => {
      const next = accountService.saveProfile(input);
      setProfile(next);
      return next;
    },
    removeProfile: () => {
      accountService.removeProfile();
      setProfile(null);
    },
  }), [profile]);

  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
};

export const useAccount = () => {
  const context = useContext(AccountContext);
  if (!context) throw new Error('useAccount must be used inside AccountProvider');
  return context;
};
