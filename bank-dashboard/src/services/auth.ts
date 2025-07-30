// Types
import { LoginPayload, LoginResponse } from '@/types';

// Services
import { apiClient, FailedResponse, SuccessResponse } from './apiRequest';

// Constants
import { API_ROUTE_ENDPOINT, DOMAIN, ERROR_MESSAGES } from '@/constants';

export const login = async (
  payload: LoginPayload,
): Promise<SuccessResponse<LoginResponse> | FailedResponse> => {
  try {
    const { data, error } = await apiClient.post<LoginResponse>(
      API_ROUTE_ENDPOINT.LOGIN,
      {
        body: {
          ...payload,
        },
        baseUrl: DOMAIN,
      },
    );

    if (error) {
      return {
        data: null,
        error: error,
      };
    }

    return {
      data,
      error: '',
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : ERROR_MESSAGES.LOGIN;

    return {
      data: null,
      error: errorMessage,
    };
  }
};

export const logout = async () => {
  try {
    await apiClient.post(API_ROUTE_ENDPOINT.LOGOUT, { baseUrl: DOMAIN });
  } catch (error) {
    return error;
  }
};
