import { create } from 'zustand';

interface AuthState {
  isExtrasUnlocked: boolean;
  unlockExtras: () => void;
  lockExtras: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isExtrasUnlocked: false,
  unlockExtras: () => set({ isExtrasUnlocked: true }),
  lockExtras: () => set({ isExtrasUnlocked: false }),
}));