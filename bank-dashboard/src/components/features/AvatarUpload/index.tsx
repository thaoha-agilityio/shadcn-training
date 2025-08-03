'use client';

import { ChangeEvent, useRef, useState } from 'react';

// Components
import { EditIcon } from '@/components/icons';
import { Input } from '@/components/ui';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';

export const AvatarUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(
    'https://tse3.mm.bing.net/th/id/OIP.WdWvcVdr6qONXPNvzDfLnwHaHa?pid=Api&P=0&h=220',
  );

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const triggerUpload = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <div className="relative w-[130px]">
        <Avatar
          src={previewUrl}
          contentFallback="sc"
          extraStyle="w-[130px] h-[130px] rounded-full"
        />
        <Button
          className="w-[30px] h-[30px] rounded-full absolute bottom-0 right-0"
          type="button"
          onClick={triggerUpload}
        >
          <EditIcon />
        </Button>
      </div>

      <Input
        type="file"
        className="hidden"
        accept="image/*"
        id="avatar-upload"
        ref={inputRef}
        onChange={handleFileChange}
      />
    </>
  );
};
