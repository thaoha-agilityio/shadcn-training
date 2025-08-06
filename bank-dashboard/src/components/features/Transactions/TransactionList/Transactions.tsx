'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

// Components
import { columns } from './columns';
import { DataTable, Pagination } from '@/components/common';

// Constants
import { PAGINATION_LIMIT, SEARCH_PARAMS } from '@/constants';

// Services
import { TransactionInfo } from '@/types';

// Utils
import { calculateTotalPages } from '@/utils';
import { useTransition } from 'react';
import { TransactionSkeleton } from '@/components/ui';

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
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const searchParams = useSearchParams() ?? '';
  const pathname = usePathname() ?? '';
  const { replace } = useRouter();
  const totalPages = calculateTotalPages(totalCount, PAGINATION_LIMIT);
  const currentPage = Number(searchParams.get(SEARCH_PARAMS.PAGE)) || 1;

  const transactionsWithCardNumber = (transactions || []).map((tx) => ({
    ...tx,
    cardNumber,
  }));

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set(SEARCH_PARAMS.PAGE, pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set(SEARCH_PARAMS.PAGE, page.toString());

    startTransition(() => {
      replace(`${pathname}?${params}`);
    });
  };

  return (
    <div>
      {isPending ? (
        <TransactionSkeleton />
      ) : (
        <DataTable columns={columns} data={transactionsWithCardNumber || []} />
      )}

      <Pagination
        totalPages={totalPages}
        createPageURL={createPageURL}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
