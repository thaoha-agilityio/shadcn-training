// Constants
import { API_ROUTE_ENDPOINT, DOMAIN, ERROR_MESSAGES } from '@/constants';

// Services
import { apiClient, FailedResponse, SuccessResponse } from './apiRequest';

// Types
import { UserInfo } from '@/types';

export const getUserLoggedIn = async (): Promise<
  SuccessResponse<UserInfo> | FailedResponse
> => {
  try {
    const { data, error } = await apiClient.get(API_ROUTE_ENDPOINT.USER, {
      baseUrl: DOMAIN,
    });

    if (error) {
      return {
        data: null,
        error: error,
      };
    }

    return {
      data: data as UserInfo,
      error: '',
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : ERROR_MESSAGES.ERROR_TO_FETCH_API;

    return {
      data: null,
      error: errorMessage,
    };
  }
};
