'use server';

import { cookies } from 'next/headers';

// Types
import { LoginPayload, LoginResponse } from '@/types';

// Services
import { apiClient, FailedResponse, SuccessResponse } from './apiRequest';

// Constants
import { API_ENDPOINT, COOKIE_KEYS, ERROR_MESSAGES } from '@/constants';

export const login = async (
  payload: LoginPayload,
): Promise<SuccessResponse<LoginResponse> | FailedResponse> => {
  try {
    const { data, error } = await apiClient.post<LoginResponse>(
      API_ENDPOINT.LOGIN,
      {
        body: {
          ...payload,
        },
      },
    );

    if (error) {
      return {
        data: null,
        error: error,
      };
    }

    const { accessToken, user } = data as LoginResponse;

    // Set cookies
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_KEYS.TOKEN, accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    });

    cookieStore.set(COOKIE_KEYS.USER_ID, String(user.id), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    });

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
  const cookieStore = await cookies();

  // Delete cookies
  cookieStore.delete(COOKIE_KEYS.TOKEN);
  cookieStore.delete(COOKIE_KEYS.USER_ID);

  return { success: true };
};
