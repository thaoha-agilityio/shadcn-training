// Components
import { AppSidebar, HeaderHome } from '@/components/layouts';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/Sidebar';

// Services
import { getUserLoggedIn } from '@/services';

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: user } = await getUserLoggedIn();
  const { avatar = '', firstName = '', lastName = '' } = user || {};
  const fullName = `${firstName} ${lastName}`;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <div className="flex flex-col w-full h-screen">
        <HeaderHome avatar={avatar} fullName={fullName} />
        <div className="bg-secondary min-h-calc(100vh - 70px) md:h-screen ">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
