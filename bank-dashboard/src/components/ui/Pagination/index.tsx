import { ComponentProps } from 'react';
import Link from 'next/link';
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
} & Pick<ComponentProps<typeof Link>, 'href'> & // ✅ Use Link props
  Pick<ComponentProps<'a'>, 'className'> & // Optional for styling
  Pick<ComponentProps<typeof Button>, 'size'>;

const PaginationLink = ({
  isActive,
  size = 'default',
  className,
  href,
  children,
  ...props
}: PaginationLinkProps) => {
  return (
    <Link
      href={href}
      scroll={false} // ✅ Prevent scroll jump
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
    </Link>
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

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  createPageURL: (page: number | string) => string;
}

export const Pagination = ({
  totalPages,
  currentPage,
  createPageURL,
}: PaginationProps) => {
  const allPages = generatePagination(currentPage, totalPages);

  return (
    <PaginationWrapper className="mt-7">
      <PaginationContent>
        <PaginationItem>
          <PaginationArrow
            isPrevious
            href={createPageURL(currentPage - 1)}
            isDisabled={currentPage === 1}
          />
        </PaginationItem>

        {allPages.map((page, index) => {
          const isEllipsis = page === '...';

          return (
            <div key={`${page}-${index}`}>
              <PaginationItem key={`${page}-${index}`}>
                {isEllipsis ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    href={createPageURL(page)}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            </div>
          );
        })}
        <PaginationItem>
          <PaginationArrow
            href={createPageURL(currentPage + 1)}
            isDisabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationWrapper>
  );
};
