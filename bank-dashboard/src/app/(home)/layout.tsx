import { cookies } from 'next/headers';

// Components
import { AppSidebar, HeaderHome } from '@/components/layouts';

import { SidebarProvider } from '@/components/ui/Sidebar';

// Services
import { getUserLoggedIn } from '@/services';
import { COOKIE_KEYS } from '@/constants';

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_KEYS.TOKEN)?.value || '';
  const userId = cookieStore.get(COOKIE_KEYS.USER_ID)?.value || '';

  const { data: user } = await getUserLoggedIn(token, userId);

  const { avatar = '', firstName = '', lastName = '' } = user || {};

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full min-h-screen">
        <HeaderHome avatar={avatar} fullName={`${firstName} ${lastName}`} />
        <div className="bg-secondary h-full">{children}</div>
      </div>
    </SidebarProvider>
  );
}
