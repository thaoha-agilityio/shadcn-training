// Types
import { LoginPayload, LoginResponse } from '@/types';

// Services
import { apiClient } from './apiRequest';

// Constants
import { ERROR_MESSAGES } from '@/constants';

export const login = async (
  payload: LoginPayload,
): Promise<LoginResponse | string> => {
  try {
    const response = await apiClient.post('/api/login', {
      body: {
        ...payload,
      },
      baseUrl: 'http://localhost:3000',
    });

    return response.data as LoginResponse;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : ERROR_MESSAGES.LOGIN;

    return errorMessage;
  }
};
