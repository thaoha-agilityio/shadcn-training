import { AppSidebar } from '@/components/layouts';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/Sidebar';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <section className="flex-1">{children}</section>
      </SidebarProvider>
    </main>
  );
}
