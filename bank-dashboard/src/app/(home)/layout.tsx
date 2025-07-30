import { AppSidebar } from '@/components/layouts';
import { HeaderHome } from '@/components/layouts/HeaderHome';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/Sidebar';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <div className="flex flex-col w-full">
        <HeaderHome />
        {children}
      </div>
    </SidebarProvider>
  );
}
