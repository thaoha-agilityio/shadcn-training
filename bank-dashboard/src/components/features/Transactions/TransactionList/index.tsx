'use client';

import { TransactionInfo } from '@/types';
import { columns } from './columns';
import { DataTable } from '@/components/common/DataTable';

interface TransactionListProps {
  data: TransactionInfo[];
}

export function TransactionList({ data }: TransactionListProps) {
  return <DataTable columns={columns} data={data} />;
}
