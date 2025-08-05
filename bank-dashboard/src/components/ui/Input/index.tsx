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

export { inputVariants };
