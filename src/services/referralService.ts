import { ReferralCode, CreditTransaction, ReferralProgramState } from '../types/referral';

const REFERRAL_STORAGE_KEY = 'gia_referral_program_v1';

const DEFAULT_STATE: ReferralProgramState = {
  currentCode: {
    id: 'code-andrea-10',
    userId: 'user-current-session',
    code: 'ANDREA10',
    discountType: 'percentage',
    discountValue: 10, // 10% de descuento
    rewardType: 'credits',
    rewardValue: 15, // $15 USD en créditos GIA por reserva completada
    active: true,
    createdAt: new Date().toISOString(),
  },
  invitedCount: 3,
  completedBookingsCount: 2,
  creditsBalance: 30, // $30 USD disponibles
  transactions: [
    {
      id: 'tx-1',
      userId: 'user-current-session',
      amount: 15,
      type: 'EARNED',
      source: 'Reserva completada por invitado (Carlos M.)',
      bookingId: 'GIA-891244',
      createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    },
    {
      id: 'tx-2',
      userId: 'user-current-session',
      amount: 15,
      type: 'EARNED',
      source: 'Reserva completada por invitado (Elena P.)',
      bookingId: 'GIA-642109',
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    },
  ],
};

export const referralService = {
  getState(): ReferralProgramState {
    try {
      const raw = localStorage.getItem(REFERRAL_STORAGE_KEY);
      if (!raw) {
        localStorage.setItem(REFERRAL_STORAGE_KEY, JSON.stringify(DEFAULT_STATE));
        return DEFAULT_STATE;
      }
      return JSON.parse(raw);
    } catch (e) {
      return DEFAULT_STATE;
    }
  },

  saveState(state: ReferralProgramState): void {
    try {
      localStorage.setItem(REFERRAL_STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Error saving referral state', e);
    }
  },

  validateCode(
    code: string,
    currentUserCode?: string
  ): { valid: boolean; discountType?: 'percentage' | 'fixed'; discountValue?: number; message?: string } {
    const clean = code.trim().toUpperCase();

    if (!clean) {
      return { valid: false, message: 'Ingresa un código' };
    }

    // Rule: User cannot use their own referral code
    const state = this.getState();
    const ownCode = currentUserCode || state.currentCode.code;
    if (clean === ownCode.toUpperCase()) {
      return {
        valid: false,
        message: 'No puedes utilizar tu propio código de recomendación.',
      };
    }

    // Accepted active promo and referral codes
    const validCodes: Record<string, { type: 'percentage' | 'fixed'; value: number }> = {
      ANDREA10: { type: 'percentage', value: 10 },
      BIENVENIDO5: { type: 'percentage', value: 5 },
      SURFCITY15: { type: 'fixed', value: 15 },
      EXPLORAGIA: { type: 'percentage', value: 8 },
    };

    if (validCodes[clean]) {
      const promo = validCodes[clean];
      return {
        valid: true,
        discountType: promo.type,
        discountValue: promo.value,
        message:
          promo.type === 'percentage'
            ? `¡Código aplicado! ${promo.value}% de descuento.`
            : `¡Código aplicado! $${promo.value} USD de descuento.`,
      };
    }

    return {
      valid: false,
      message: 'Código inválido o no reconocido. Verifica el código e intenta nuevamente.',
    };
  },

  redeemCredits(amountToRedeem: number, bookingId?: string): boolean {
    const state = this.getState();
    if (amountToRedeem <= 0 || amountToRedeem > state.creditsBalance) {
      return false;
    }

    const nextState: ReferralProgramState = {
      ...state,
      creditsBalance: state.creditsBalance - amountToRedeem,
      transactions: [
        {
          id: 'tx_' + Date.now(),
          userId: state.currentCode.userId,
          amount: amountToRedeem,
          type: 'REDEEMED',
          source: 'Descuento aplicado en reserva',
          bookingId,
          createdAt: new Date().toISOString(),
        },
        ...state.transactions,
      ],
    };

    this.saveState(nextState);
    return true;
  },
};
