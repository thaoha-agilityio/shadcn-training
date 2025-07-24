import { ComponentProps } from 'react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Components
import { Button, buttonVariants } from '@/components/ui/Button';

// Utils
import { generatePagination } from '@/utils';

const PaginationWrapper = ({ className, ...props }: ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    data-slot="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
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
} & Pick<ComponentProps<typeof Button>, 'size'> &
  ComponentProps<'a'>;

const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) => (
  <a
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
  />
);

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
    size="default"
    className={cn(
      'gap-1 px-2.5 sm:pr-2.5',
      isDisabled && 'pointer-events-none',
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

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onChangePage?: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  const allPages = generatePagination(currentPage, totalPages);

  return (
    <PaginationWrapper>
      <PaginationContent>
        <PaginationItem>
          <PaginationArrow isPrevious href="#" isDisabled />
        </PaginationItem>

        {allPages.map((page, index) => {
          const isEllipsis = page === '...';

          return (
            <>
              <PaginationItem key={`${page}-${index}`}>
                {isEllipsis ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink href="#" isActive={currentPage === page}>
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            </>
          );
        })}
        <PaginationItem>
          <PaginationArrow href="#" />
        </PaginationItem>
      </PaginationContent>
    </PaginationWrapper>
  );
};
