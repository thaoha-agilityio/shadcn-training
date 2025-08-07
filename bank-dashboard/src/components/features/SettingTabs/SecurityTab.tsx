import { Input, Typography, Button, Switch } from '@/components/common';

export const SecurityTab = () => (
  <form className="max-w-full">
    <div>
      <Typography variant="h3">Two-factor Authentication</Typography>

      <div className="flex items-center gap-4 mb-5 mt-4">
        <Switch checked />
        <Typography variant="span">
          Enable or disable two factor authentication
        </Typography>
      </div>
    </div>

    <div>
      <Typography variant="h3">Change Password</Typography>
      <div className="space-y-4 mt-4 w-full  md:w-[300px]">
        <Input
          label="Current Password"
          type="password"
          placeholder="********"
        />

        <Input label="New Password" type="password" placeholder="********" />
      </div>
    </div>

    <div className="flex justify-center md:justify-end mt-5">
      <Button type="submit" className="w-[190px] text-base h-[50px]">
        Save
      </Button>
    </div>
  </form>
);
