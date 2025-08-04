'use server';

// Constants
import { API_ENDPOINT, ERROR_MESSAGES } from '@/constants';

// Services
import { apiClient, FailedResponse, SuccessResponse } from './apiRequest';

// Types
import { UserInfo, UserPayload } from '@/types';
import { revalidateTag } from 'next/cache';

export const getUserLoggedIn = async (
  token: string,
  userId?: string,
): Promise<SuccessResponse<UserInfo> | FailedResponse> => {
  try {
    const { data, error } = await apiClient.get(
      `${API_ENDPOINT.USERS}/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        next: {
          tags: [API_ENDPOINT.USERS],
        },
      },
    );

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

export const updateUser = async (
  token: string,
  userId: string,
  payload: UserPayload,
): Promise<SuccessResponse<UserInfo> | FailedResponse> => {
  try {
    const { data, error } = await apiClient.patch(
      `${API_ENDPOINT.USERS}/${userId}`,
      {
        body: payload,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (error) {
      return {
        data: null,
        error: error,
      };
    }

    revalidateTag(API_ENDPOINT.USERS);

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
