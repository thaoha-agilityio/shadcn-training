import { Button, Input, Switch } from '@/components/ui';

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
      <h3 className="text-base font-semibold text-heading">Notification</h3>
      <div className="flex items-center gap-4">
        <Switch checked />
        <label>I send or receive digital currency</label>
      </div>
      <div className="flex items-center gap-4">
        <Switch checked />
        <label>I receive merchant order</label>
      </div>
      <div className="flex items-center gap-4">
        <Switch checked={true} />
        <label>There are recommendation for my account</label>
      </div>
    </div>

    <div className="flex justify-end">
      <Button type="submit" className="w-[190px] text-base h-[50px]">
        Save
      </Button>
    </div>
  </form>
);
