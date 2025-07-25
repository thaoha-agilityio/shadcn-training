import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { LINKS } from '@/constants';

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="p-4">
          <SidebarGroupContent>
            <SidebarMenu>
              {LINKS.map(({ name, href, icon, isActive }) => {
                const Icon = icon;

                return (
                  <SidebarMenuItem key={name} className="h-12">
                    <SidebarMenuButton asChild isActive={isActive}>
                      <a href={href} className="gap-5">
                        <Icon />
                        <span>{name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
