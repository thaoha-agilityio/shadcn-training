import { cookies } from 'next/headers';

// Components
import { AppSidebar, HeaderHome } from '@/components/layouts';

import { SidebarProvider } from '@/components/ui/Sidebar';

// Services
import { getUserLoggedIn } from '@/services';

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value || '';
  const userId = cookieStore.get('userId')?.value || '';

  const { data: user } = await getUserLoggedIn(token, userId);

  const { avatar = '', firstName = '', lastName = '' } = user || {};
  const fullName = `${firstName} ${lastName}`;

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full min-h-screen">
        <HeaderHome avatar={avatar} fullName={fullName} />
        <div className="bg-secondary h-full">{children}</div>
      </div>
    </SidebarProvider>
  );
}
