'use client';

import { useState } from 'react';
import { EyeClosedIcon, EyeIcon } from 'lucide-react';

// Components
import { Input, InputProps, Button } from '@/components/common';

const PasswordInput = ({ ...props }: InputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleShowHidePassword = () => setIsShowPassword((prev) => !prev);

  return (
    <Input
      label="Password"
      endContent={
        <Button type="button" onClick={handleShowHidePassword} variant="ghost">
          {isShowPassword ? <EyeIcon /> : <EyeClosedIcon />}
        </Button>
      }
      type={isShowPassword ? 'text' : 'password'}
      {...props}
    />
  );
};

export { PasswordInput };
