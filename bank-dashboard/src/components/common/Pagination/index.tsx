import {
  PaginationArrow,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationWrapper,
} from '@/components/ui/Pagination';

// Utils
import { generatePagination } from '@/utils';

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
