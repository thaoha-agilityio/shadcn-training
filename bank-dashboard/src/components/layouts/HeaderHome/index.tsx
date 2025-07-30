import { ToggleTheme } from '@/components/features';
import { Input } from '@/components/ui';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';

import { Search, LogOut } from 'lucide-react';

export const HeaderHome = () => {
  return (
    <div className="flex justify-between items-center pt-4 px-3 md:px-4">
      <div className="flex flex-1/2 justify-center md:justify-start">
        <h1 className="text-title text-center text-2xl font-semibold">
          Overview
        </h1>
      </div>

      <div className="flex items-center gap-2 md:gap-5">
        <Input
          placeholder="Search for something"
          startContent={
            <Search className="text-helper w-5 h-5 hidden md:block" />
          }
          variant="subtle"
          className="w-full pl-[55px] hidden md:block"
        />
        <ToggleTheme />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="px-0">
              <Avatar contentFallback="SC" extraStyle="w-10 h-10" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-fit p-2">
            <Button variant="ghost">
              <LogOut /> Logout
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
