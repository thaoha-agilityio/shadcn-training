import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// Services
import { apiClient } from '@/services';

// Constants
import { API_ENDPOINT, ERROR_MESSAGES } from '@/constants';

export async function GET() {
  const cookieStore = cookies();

  const token = (await cookieStore).get('token')?.value;
  const userId = (await cookieStore).get('userId')?.value;

  if (!token || !userId) {
    return NextResponse.json(
      { success: false, error: 'Unauthorized: Missing credentials' },
      { status: 401 },
    );
  }

  try {
    const result = await apiClient.get(`${API_ENDPOINT.USERS}/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return NextResponse.json({ success: true, user: result.data });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : ERROR_MESSAGES.ERROR_TO_FETCH_API;

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}
