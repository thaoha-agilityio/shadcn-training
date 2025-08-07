import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

export const typographyVariants = cva('font-normal text-sm leading-6', {
  variants: {
    variant: {
      h1: 'text-title text-2xl font-semibold capitalize',
      h2: 'text-title text-lg font-semibold',
      h3: 'text-base font-semibold text-heading',
      h4: 'text-md font-medium',
      p: 'text-xs',
      span: 'text-sm leading-4',
      label: 'uppercase text-[10px]',
    },
  },
  defaultVariants: {
    variant: 'p',
  },
});

interface Props
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
}

export const Typography = ({
  variant,
  children,
  asChild,
  className,
  ...props
}: Props) => {
  const Comp = asChild ? Slot : variant ?? 'p';

  return (
    <Comp {...props} className={cn(typographyVariants({ variant, className }))}>
      {children}
    </Comp>
  );
};
