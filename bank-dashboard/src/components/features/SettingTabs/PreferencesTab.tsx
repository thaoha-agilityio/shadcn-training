import { Button, Switch } from '@/components/ui';
import { Input, Typography } from '@/components/common';

export const PreferencesTab = () => (
  <form className="max-w-full space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Input label="Currency" placeholder="USD" />
      <Input
        label="Time Zone"
        placeholder="(GMT-12:00) International Date Line West"
      />
    </div>

    <div className="space-y-4">
      <Typography variant="h3">Notification</Typography>
      <div className="flex items-center gap-4">
        <Switch checked />
        <label>I send or receive digital currency</label>
      </div>
      <div className="flex items-center gap-4">
        <Switch checked />
        <label>I receive merchant order</label>
      </div>
      <div className="flex items-center gap-4">
        <Switch checked={false} />
        <label>There are recommendation for my account</label>
      </div>
    </div>

    <div className="flex justify-center md:justify-end mt-5">
      <Button type="submit" className="w-[190px] text-base h-[50px]">
        Save
      </Button>
    </div>
  </form>
);
