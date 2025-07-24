import { ComponentProps, JSX } from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';

const inputVariants = cva(
  'placeholder:text-helper dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-lg border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring',
  {
    variants: {
      variant: {
        subtle: 'rounded-3xl h-[50px] bg-subtle pl-12',
        outline: 'bg-transparent border-helper',
      },
    },
    defaultVariants: {
      variant: 'outline',
    },
  },
);
export interface InputProps extends ComponentProps<'input'> {
  errorMessage?: string;
  label?: string;
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  variant?: 'subtle' | 'outline';
}

const Input = ({
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
      <Label className="text-md text-text-helper pb-3">{label}</Label>
    )}
    <div className="relative flex flex-col gap-2">
      {!!startContent && (
        <div className="absolute top-4 left-6 flex items-center">
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
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          errorMessage ? 'border-destructive' : '',
          className,
        )}
        {...props}
      />
      {!!endContent && (
        <div className="absolute top-0 right-0 flex items-center">
          {endContent}
        </div>
      )}
    </div>

    {!!errorMessage && (
      <p className="text-destructive text-xs">{errorMessage}</p>
    )}
  </div>
);

export { Input };
