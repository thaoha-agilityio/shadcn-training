// Services
import { login } from '@/services/auth';

// Stores
import { useAuthStore } from '@/stores';

// Types
import { LoginPayload } from '@/types';

// Constants
import { ERROR_MESSAGES } from '@/constants';

export const useAuthSignIn = () => {
  const [setAuthenticated, setAccessToken] = useAuthStore((state) => [
    state.setAuthenticated,
    state.setAccessToken,
  ]);

  const handleLogin = async (payload: LoginPayload) => {
    const result = await login(payload);

    if (!result || typeof result === 'string') {
      // handle error string
      return {
        success: false,
        error: result || ERROR_MESSAGES.LOGIN,
      };
    }

    const { accessToken } = result;

    setAccessToken(accessToken);
    setAuthenticated(true);

    return {
      success: true,
      data: result,
    };
  };

  return {
    handleLogin,
  };
};
