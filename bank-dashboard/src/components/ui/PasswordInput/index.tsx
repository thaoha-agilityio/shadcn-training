'use client';

import { useState } from 'react';
import { EyeClosedIcon, EyeIcon } from 'lucide-react';

// Components
import { Input, InputProps } from '../Input';
import { Button } from '../Button';

const PasswordInput = ({ ...props }: InputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleShowHidePassword = () => setIsShowPassword((prev) => !prev);

  return (
    <Input
      label="Password"
      endContent={
        <Button onClick={handleShowHidePassword} variant="ghost">
          {isShowPassword ? <EyeIcon /> : <EyeClosedIcon />}
        </Button>
      }
      type={isShowPassword ? 'text' : 'password'}
      {...props}
    />
  );
};

export { PasswordInput };
