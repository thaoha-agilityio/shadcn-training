import { ToggleTheme } from '@/components/features';

export const HeaderAuth = () => {
  return (
    <div className="flex justify-end p-3">
      <ToggleTheme />
    </div>
  );
};
