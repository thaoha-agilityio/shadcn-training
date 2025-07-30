import { Metadata } from 'next';

import { LoginForm } from '@/components/features';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login page for Bank Dashboard',
  openGraph: {
    title: 'Login',
    description: 'Login page for Bank Dashboard',
  },
};
const LoginPage = () => (
  <div className="mx-auto px-8 flex-col h-[calc(100vh-36px)] flex justify-center items-center">
    <LoginForm />
  </div>
);

export default LoginPage;
