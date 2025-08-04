import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockReturnValue('/appointments'),
  useSearchParams: jest.fn(() => ({
    get: jest.fn(),
    set: jest.fn(),
    delete: jest.fn(),
  })),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
  })),
}));

jest.mock('next-themes', () => ({
  useTheme: jest.fn(),
}));

jest.mock('next/cache', () => ({
  revalidateTag: jest.fn(),
}));
