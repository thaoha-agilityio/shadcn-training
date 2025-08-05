'use client';

import { ChangeEvent, useRef, useState } from 'react';

// Components
import { EditIcon } from '@/components/icons';
import { Avatar, Button } from '@/components/ui';
import { Input } from '@/components/common';

interface AvatarUploadProps {
  src: string;
  srcUpload?: string;
  onChange?: (file: File) => void;
}

export const AvatarUpload = ({
  onChange,
  src,
  srcUpload = '',
}: AvatarUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(src || srcUpload);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    onChange?.(file);
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
          <EditIcon className="text-card" />
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
