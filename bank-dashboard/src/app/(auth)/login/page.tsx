import { Metadata } from 'next';

// Components
import { LoginForm } from '@/components/features';

// Constants
import { PREVIEW_IMAGE } from '@/constants';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login page for Bank Dashboard',
  openGraph: {
    title: 'Login',
    description: 'Login page for Bank Dashboard',
    images: [
      {
        url: PREVIEW_IMAGE,
        alt: 'preview image',
      },
    ],
  },
};

const LoginPage = () => (
  <div className="mx-auto px-8 flex-col h-[calc(100vh-36px)] flex justify-center items-center">
    <LoginForm />
  </div>
);

export default LoginPage;
