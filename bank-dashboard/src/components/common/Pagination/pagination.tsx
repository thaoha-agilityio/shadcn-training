import { ComponentProps } from 'react';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Components
import { Button, buttonVariants } from '@/components/common';

const PaginationWrapper = ({ className, ...props }: ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    data-slot="pagination"
    className={cn('flex w-full justify-end', className)}
    {...props}
  />
);

const PaginationContent = ({ className, ...props }: ComponentProps<'ul'>) => (
  <ul
    data-slot="pagination-content"
    className={cn('flex flex-row items-center gap-1', className)}
    {...props}
  />
);

const PaginationItem = ({ ...props }: ComponentProps<'li'>) => (
  <li data-slot="pagination-item" {...props} />
);

type PaginationLinkProps = {
  isActive?: boolean;
  children?: React.ReactNode;
  size?: 'default' | 'sm' | 'lg';
} & Pick<ComponentProps<typeof Button>, 'onClick' | 'className' | 'type'>;

const PaginationLink = ({
  isActive,
  children,
  className,
  type = 'button',
  size = 'default',
  onClick,
  ...props
}: PaginationLinkProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        'text-primary',
        buttonVariants({
          variant: isActive ? 'default' : 'ghost',
          size,
          className: isActive ? 'size-10' : 'hover:text-primary/70',
        }),
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

interface PaginationArrowProps extends ComponentProps<typeof PaginationLink> {
  isDisabled?: boolean;
  isPrevious?: boolean;
}

const PaginationArrow = ({
  isDisabled,
  isPrevious,
  className,
  ...props
}: PaginationArrowProps) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn(
      'gap-1 px-2.5 sm:pr-2.5',
      isDisabled && 'pointer-events-none text-primary/50',
      className,
    )}
    {...props}
  >
    {isPrevious && <ChevronLeftIcon />}
    <span className="hidden sm:block">{isPrevious ? 'Previous' : 'Next'}</span>
    {!isPrevious && <ChevronRightIcon />}
  </PaginationLink>
);

const PaginationEllipsis = ({
  className,
  ...props
}: ComponentProps<'span'>) => (
  <span
    aria-hidden
    data-slot="pagination-ellipsis"
    className={cn('flex size-10 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontalIcon className="size-4" />
    <span className="sr-only">More pages</span>
  </span>
);

export {
  PaginationWrapper,
  PaginationContent,
  PaginationItem,
  PaginationArrow,
  PaginationEllipsis,
  PaginationLink,
};
