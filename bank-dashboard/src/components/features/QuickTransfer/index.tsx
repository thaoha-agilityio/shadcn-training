// Components
import { SendIcon } from '@/components/icons';
import { Input } from '@/components/common';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';

// Constants
import { QUICK_TRANSFER_DATA } from '@/constants';

export const QuickTransfer = () => (
  <div className="py-8 px-6 bg-card rounded-2xl mt-4 h-[300px]">
    <div className="flex gap-10">
      {QUICK_TRANSFER_DATA.map(({ id, name, role, img }) => (
        <div key={id} className="flex flex-col items-center">
          <Avatar src={img} extraStyle="size-[70px] rounded-full" />
          <p className="text-md">{name}</p>
          <p className="text-helper text-sm">{role}</p>
        </div>
      ))}
    </div>
    <div className="flex mt-7 justify-between items-center">
      <span className="text-helper">Write amount</span>
      <Input
        variant="subtle"
        defaultValue={525.5}
        endContent={
          <Button className="h-[50px] rounded-4xl w-[100px]">
            Send <SendIcon className="text-card" />
          </Button>
        }
      />
    </div>
  </div>
);
