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
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const allPages = generatePagination(currentPage, totalPages);

  return (
    <PaginationWrapper className="mt-7">
      <PaginationContent>
        {/* Previous button */}
        <PaginationItem>
          <PaginationArrow
            isPrevious
            isDisabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          />
        </PaginationItem>

        {/* Page number buttons */}
        {allPages.map((page, index) => {
          const isEllipsis = page === '...';

          return (
            <PaginationItem key={`${page}-${index}`}>
              {isEllipsis ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  isActive={currentPage === page}
                  onClick={() => onPageChange(+page)}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          );
        })}

        {/* Next button */}
        <PaginationItem>
          <PaginationArrow
            isDisabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationWrapper>
  );
};
