// Components
import { Transactions } from './Transactions';

// Services
import { getTransactionList } from '@/services';

type TransactionListProps = {
  cardNumber: string;
  currentPage: number;
};

export async function TransactionList({
  cardNumber,
  currentPage,
}: TransactionListProps) {
  const { data: transactions, totalCount = 0 } = await getTransactionList(
    currentPage,
    5,
  );

  const transactionsWithCardNumber = (transactions || []).map((tx) => ({
    ...tx,
    cardNumber,
  }));

  return (
    <Transactions
      cardNumber={cardNumber}
      transactions={transactionsWithCardNumber}
      totalCount={totalCount}
    />
  );
}
