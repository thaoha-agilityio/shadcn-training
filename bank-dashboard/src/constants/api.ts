export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_ENDPOINT = {
  LOGIN: '/login',
  USERS: '/users',
  TRANSACTIONS: '/transactions',
  ACCOUNTS: '/accounts',
  INVESTMENTS: '/investments',
  CREDIT_CARDS: '/credit-cards',
  LOANS: '/loans',
  SERVICES: '/services',
  PRIVILEGES: '/privileges',
  SETTING: '/setting',
  DASHBOARD: '/dashboard',
  CARDS: '/cards',
};

export const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

export const API_ROUTE_ENDPOINT = {
  LOGIN: '/api/login',
  LOGOUT: '/api/logout',
};

export const IMGBB_URL = `${process.env.NEXT_PUBLIC_IMGBB_URL}?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`;
