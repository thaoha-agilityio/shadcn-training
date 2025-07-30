import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'cookie';

// Services
import { apiClient } from '@/services';

// Constants
import { API_ENDPOINT, ERROR_MESSAGES } from '@/constants';

// Types
import { LoginResponse } from '@/types';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // This calls your existing login function
    const result = await apiClient.post(API_ENDPOINT.LOGIN, { body: data });

    if (!result || typeof result === 'string') {
      return NextResponse.json(
        { success: false, error: result || ERROR_MESSAGES.LOGIN },
        { status: 401 },
      );
    }

    const { accessToken } = result.data as LoginResponse;

    // ✅ Set secure, HTTP-only cookie
    const cookie = serialize('token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 day
    });

    // ✅ Return a response with cookie header
    const response = NextResponse.json(result);

    response.headers.set('Set-Cookie', cookie);

    return response;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : ERROR_MESSAGES.LOGIN;

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}
