'use client';

import { ColumnDef } from '@tanstack/react-table';

// Types
import { TransactionInfo } from '@/types';

// Components
import { ArrowIcon } from '../../icons';
import { Button } from '../../ui/Button';

// Utils
import { formatCurrency } from '@/utils';

export const columns: ColumnDef<TransactionInfo>[] = [
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const date = row.getValue('date') as string;
      const isPositiveAmount = amount >= 0;

      return (
        <div className="flex gap-2.5 items-center">
          <ArrowIcon
            className={!isPositiveAmount ? 'rotate-180' : 'rotate-none'}
          />
          <div>
            <span className="truncate max-w-[120px]">
              {row.getValue('description')}
            </span>
            <span className="block md:hidden text-helper">{date}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'transactionId',
    header: 'TransactionId',
    cell: ({ row }) => (
      <span className="hidden md:block">{row.getValue('transactionId')}</span>
    ),
  },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ row }) => (
      <span className="hidden md:block">{row.getValue('type')}</span>
    ),
  },
  {
    accessorKey: 'cardId',
    header: 'Card',
    cell: ({ row }) => (
      <span className="hidden md:block">{row.getValue('cardId')}</span>
    ),
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => (
      <span className="hidden md:block">{row.getValue('date')}</span>
    ),
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const isPositiveAmount = amount >= 0;
      const formatted = formatCurrency(amount);

      return (
        <p
          className={`font-medium ${
            isPositiveAmount ? 'text-positive' : 'text-dangerous'
          }`}
        >
          {formatted}
        </p>
      );
    },
  },
  {
    accessorKey: 'receipt',
    header: 'Receipt',
    cell: () => (
      <Button className="hidden md:block text-xs rounded-4xl" variant="outline">
        Download
      </Button>
    ),
  },
];
