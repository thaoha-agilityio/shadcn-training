import { createWithEqualityFn } from 'zustand/traditional';
import { persist } from 'zustand/middleware';

// Types
import { UserInfo as User } from '@/types';

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string;
  user: Omit<User, 'password'>;
}

interface AuthStore extends AuthState {
  setAuthenticated: (isAuthenticated: boolean) => void;
  setAuth: (user: Omit<User, 'password'>) => void;
  setAccessToken: (accessToken: string) => void;
  clearAuth: () => void;
}

const INITIAL_AUTH_STATE = {
  isAuthenticated: false,
  accessToken: '',
  user: {} as Omit<User, 'password'>,
};

export const useAuthStore = createWithEqualityFn<AuthStore>()(
  persist<AuthStore>(
    (set) => ({
      ...INITIAL_AUTH_STATE,

      setAuthenticated: (isAuthenticated) => {
        set({ isAuthenticated });
      },

      setAuth: (user) => {
        set({
          user,
        });
      },

      setAccessToken: (accessToken) => {
        set({ accessToken });
      },

      clearAuth: () => {
        set({ ...INITIAL_AUTH_STATE });
      },
    }),
    { name: 'auth' },
  ),
);
