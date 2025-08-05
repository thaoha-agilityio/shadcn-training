// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { API_ENDPOINT } from './constants';

const PUBLIC_ROUTES = ['/', API_ENDPOINT.LOGIN];
const PRIVATE_ROUTES = [
  API_ENDPOINT.DASHBOARD,
  API_ENDPOINT.SETTING,
  API_ENDPOINT.ACCOUNTS,
];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const pathname = request.nextUrl.pathname;
  const isAuthenticated = !!token;

  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  const isPrivateRoute = PRIVATE_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (pathname === '/' && isAuthenticated) {
    return NextResponse.redirect(new URL(API_ENDPOINT.DASHBOARD, request.url));
  }

  if (pathname === '/' && !isAuthenticated) {
    return NextResponse.redirect(new URL(API_ENDPOINT.LOGIN, request.url));
  }

  // Redirect unauthenticated users trying to access private routes
  if (isPrivateRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL(API_ENDPOINT.LOGIN, request.url));
  }

  // Redirect authenticated users trying to access login/register
  if (isPublicRoute && isAuthenticated && pathname === API_ENDPOINT.LOGIN) {
    return NextResponse.redirect(new URL(API_ENDPOINT.DASHBOARD, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all routes except public/static
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
