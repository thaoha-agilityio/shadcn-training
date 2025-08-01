import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST() {
  // Create a cookie that deletes the token by setting maxAge to 0
  const expiredCookie = serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0, // Immediately expires
  });

  // Create a cookie that deletes the userId by setting maxAge to 0
  const expiredUserIdCookie = serialize('userId', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0, // Immediately expires
  });

  // Set cookie in response headers to clear it in browser
  const response = NextResponse.json({
    success: true,
    message: 'Logged out successfully',
  });

  response.headers.set(
    'Set-Cookie',
    expiredCookie + ', ' + expiredUserIdCookie,
  );

  return response;
}
