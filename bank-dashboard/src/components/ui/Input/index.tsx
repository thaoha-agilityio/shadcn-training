import { ComponentProps, JSX } from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';

interface InputProps extends ComponentProps<'input'> {
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
}: InputProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'subtle':
        return 'rounded-3xl h-[50px] bg-subtle pl-12';

      case 'outline':
        return 'bg-transparent border-helper';

      default:
        return 'bg-transparent';
    }
  };

  return (
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
            'placeholder:text-helper dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            'focus-visible:border-ring',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
            errorMessage ? 'border-destructive' : '',
            getVariantClasses(),
            className,
          )}
          {...props}
        />
        {!!endContent && <div>{endContent}</div>}
      </div>

      {!!errorMessage && (
        <p className="text-destructive text-xs">{errorMessage}</p>
      )}
    </div>
  );
};

export { Input };
