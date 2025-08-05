import { ComponentProps, JSX } from 'react';

import { inputVariants } from '@/components/ui';
import { Label } from '@/components/ui/Label';
import { cn } from '@/lib/utils';

export interface InputProps extends ComponentProps<'input'> {
  errorMessage?: string;
  label?: string;
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  variant?: 'subtle' | 'outline';
}

export const Input = ({
  errorMessage = '',
  label = '',
  variant = 'outline',
  startContent,
  endContent,
  className,
  type,
  ...props
}: InputProps) => (
  <div>
    {!!label && (
      <Label className="text-md text-text-helper font-normal">{label}</Label>
    )}
    <div className="relative flex flex-col gap-2">
      {!!startContent && (
        <div className="absolute top-5 left-6 flex items-center">
          {startContent}
        </div>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          inputVariants({
            variant,
          }),
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-1',
          errorMessage ? 'border-destructive' : '',
          className,
        )}
        {...props}
      />
      {!!endContent && (
        <div className="absolute top-1 right-0 flex items-center">
          {endContent}
        </div>
      )}
    </div>

    {!!errorMessage && (
      <p className="text-destructive text-xs">{errorMessage}</p>
    )}
  </div>
);
