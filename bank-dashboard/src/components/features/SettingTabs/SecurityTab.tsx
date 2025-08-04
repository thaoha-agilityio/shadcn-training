import { Button, Input, Switch } from '@/components/ui';

export const SecurityTab = () => (
  <form className="max-w-full">
    <div>
      <h3 className="text-base font-semibold text-heading">
        Two-factor Authentication
      </h3>

      <div className="flex items-center gap-4 mb-5 mt-4">
        <Switch checked />
        <span className="text-sm ">
          Enable or disable two factor authentication
        </span>
      </div>
    </div>

    <div>
      <h3 className="text-base font-semibold text-heading">Change Password</h3>
      <div className="space-y-4 mt-4 w-full  md:w-[300px]">
        <Input
          label="Current Password"
          type="password"
          placeholder="********"
        />

        <Input label="New Password" type="password" placeholder="********" />
      </div>
    </div>

    <div className="flex justify-end mt-5">
      <Button type="submit" className="w-[190px] text-base h-[50px]">
        Save
      </Button>
    </div>
  </form>
);
