export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen bg-gradient-to-r from-[#4C49ED] to-[#718EBF]">
      {children}
    </main>
  );
}
