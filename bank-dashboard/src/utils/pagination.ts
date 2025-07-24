/**
 * @param currentPage: number
 * @param totalPages: number
 * @returns [1,2,3,4,5] / [1,2,3,4, ...,10] / [1, 2, ..., 8, 9, 10] / [1, ..., 4, 5, 6, ..., 10]
 */

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 5 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 4 pages,
  // show the first 4, an ellipsis, and the last page.
  if (currentPage <= 4) {
    return [1, 2, 3, 4, '...', totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

/**
 * Calculates the total number of pages based on the total number of items and items per page.
 * @param allItems The total number of items.
 * @param itemsPerPage The number of items per page.
 * @returns The total number of pages.
 */
export const calculateTotalPages = (
  allItems: number,
  itemsPerPage: number,
): number => Math.ceil(allItems / itemsPerPage);
