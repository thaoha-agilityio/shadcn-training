'use client';

import { DataTable } from '../../common/DataTable';
import { TransactionInfo } from '@/types';
import { columns } from './columns';

interface TransactionListProps {
  data: TransactionInfo[];
}

export function TransactionList({ data }: TransactionListProps) {
  return <DataTable columns={columns} data={data} />;
}
