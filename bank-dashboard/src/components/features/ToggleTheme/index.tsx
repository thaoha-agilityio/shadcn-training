'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ToggleTheme = () => {
  const { setTheme, theme = 'light' } = useTheme();

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      onClick={handleToggle}
      variant="secondary"
      className="w-10 h-10 rounded-full"
    >
      {theme === 'dark' ? (
        <Sun style={{ height: '24px', width: '24px' }} />
      ) : (
        <Moon style={{ height: '24px', width: '24px' }} />
      )}
    </Button>
  );
};
