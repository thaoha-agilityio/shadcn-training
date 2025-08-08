import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/common/Sonner';

// Providers
import { ThemeProvider } from '@/providers';

const inter = Inter({
  // variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bank Dashboard',
  description: 'Bank Dashboard application',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
