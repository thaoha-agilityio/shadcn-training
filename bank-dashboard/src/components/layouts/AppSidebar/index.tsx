'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Components
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/Sidebar';
import { LogoIcon } from '@/components/icons';

// Constants
import { LINKS } from '@/constants';

export const AppSidebar = () => {
  const path = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="p-5 pb-0">
        <LogoIcon />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="py-2">
              {LINKS.map(({ name, href, icon, disable }) => {
                const Icon = icon;
                const isActive = path === href;

                return (
                  <SidebarMenuItem key={name}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={
                        disable ? 'pointer-events-none cursor-not-allowed' : ''
                      }
                    >
                      <Link
                        href={href}
                        className={cn(
                          'relative flex items-center gap-5 h-[60px] px-4 text-sm transition-colors',
                          'text-muted-foreground hover:text-foreground',
                          'data-[active=true]:text-primary data-[active=true]:font-medium',
                          'before:absolute before:left-0 before:top-2 before:bottom-2',
                          'before:w-[5px] before:rounded-r-md before:bg-primary',
                          'data-[active=false]:before:content-none',
                        )}
                      >
                        <Icon
                          className={
                            isActive ? 'text-primary' : 'text-sidebar-icon'
                          }
                        />
                        <span>{name}</span>
                      </Link>
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
};
