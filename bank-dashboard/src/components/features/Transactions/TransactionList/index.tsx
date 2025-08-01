// Components
import { columns } from './columns';
import { DataTable } from '@/components/common/DataTable';

// Services
import { getTransactionList } from '@/services';

type TransactionListProps = {
  cardNumber: string;
};

export async function TransactionList({ cardNumber }: TransactionListProps) {
  const { data: transactions } = await getTransactionList(1, 5);

  const transactionsWithCardNumber = (transactions || []).map((tx) => ({
    ...tx,
    cardNumber,
  }));

  return (
    <DataTable columns={columns} data={transactionsWithCardNumber || []} />
  );
}
