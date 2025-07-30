import { HeaderAuth } from '@/components/layouts/HeaderAuth';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-gradient-to-r from-[#4C49ED] to-[#718EBF]">
      <HeaderAuth />
      {children}
    </main>
  );
}
