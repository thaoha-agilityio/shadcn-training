'use client';

import { usePathname, useSearchParams } from 'next/navigation';

// Components
import { columns } from './columns';
import { DataTable } from '@/components/common/DataTable';
import { Pagination } from '@/components/ui/Pagination';

// Constants
import { PAGINATION_LIMIT, SEARCH_PARAMS } from '@/constants';

// Services
import { TransactionInfo } from '@/types';

// Utils
import { calculateTotalPages } from '@/utils';

type TransactionListProps = {
  cardNumber: string;
  transactions: TransactionInfo[];
  totalCount?: number;
};

export function Transactions({
  cardNumber,
  transactions,
  totalCount = 0,
}: TransactionListProps) {
  const transactionsWithCardNumber = (transactions || []).map((tx) => ({
    ...tx,
    cardNumber,
  }));

  const totalPages = calculateTotalPages(totalCount, PAGINATION_LIMIT);

  const searchParams = useSearchParams() ?? '';
  const pathname = usePathname() ?? '';
  const currentPage = Number(searchParams.get(SEARCH_PARAMS.PAGE)) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set(SEARCH_PARAMS.PAGE, pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  return (
    <div>
      <DataTable columns={columns} data={transactionsWithCardNumber || []} />

      <Pagination
        totalPages={totalPages}
        createPageURL={createPageURL}
        currentPage={currentPage}
      />
    </div>
  );
}
