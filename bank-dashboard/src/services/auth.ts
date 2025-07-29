// Types
import { LoginPayload, LoginResponse } from '@/types';

// Services
import { apiClient } from './apiRequest';

// Constants
import { API_ENDPOINT, ERROR_MESSAGES } from '@/constants';

export const login = async (
  payload: LoginPayload,
): Promise<LoginResponse | string> => {
  try {
    const response = await apiClient.post(API_ENDPOINT.LOGIN, {
      body: {
        ...payload,
      },
    });

    return response.data as LoginResponse;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : ERROR_MESSAGES.LOGIN;

    return errorMessage;
  }
};
