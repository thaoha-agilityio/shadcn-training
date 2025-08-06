import { Metadata } from 'next';
import { cookies } from 'next/headers';

// Components
import {
  MyCard,
  TransactionList,
  TransactionItem,
} from '@/components/features';
import { Tabs, StatByType } from '@/components/common';
import { TransactionSkeleton } from '@/components/ui';

// Constants
import { PRICE_TYPE } from '@/constants';

// Services
import { getCardDetails, getTransactionList } from '@/services';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Account',
  description: 'Account page for Bank Dashboard',
  openGraph: {
    title: 'Account',
    description: 'Account page for Bank Dashboard',
  },
};

const Accounts = async ({
  searchParams,
}: {
  searchParams?: {
    page?: number;
  };
}) => {
  const titleStyle = 'text-title text-lg font-semibold';

  // Fetch transactions and card details
  const { data: transactions } = await getTransactionList(1, 3);
  const cookieStore = await cookies();
  const userId = cookieStore.get('userId')?.value || '';
  const { data: cardDetails } = await getCardDetails(userId);
  const {
    cardNumber = '',
    cardHolderName = '',
    validThru = '',
    balance = 0,
    save = 0,
    expense = 0,
    income = 0,
  } = cardDetails || {};

  // Get current page from search params
  const params = await searchParams;
  const currentPage = params?.page || 1;

  const TABS_DATA = [
    {
      value: 'all_transactions',
      label: 'All Transactions',
      content: (
        <Suspense fallback={<TransactionSkeleton />}>
          <TransactionList cardNumber={cardNumber} currentPage={currentPage} />
        </Suspense>
      ),
    },
    {
      value: 'income',
      label: 'Income',
      content: <div>Your profile content</div>,
    },
    {
      value: 'expense',
      label: 'Expense',
      content: <div>Your profile content</div>,
    },
  ];

  return (
    <div className="py-7 px-6">
      <div className="flex justify-between flex-wrap md:flex-nowrap gap-2 md:gap-7">
        <StatByType
          total={balance}
          label="My balance"
          type={PRICE_TYPE.BALANCE}
        />
        <StatByType total={income} label="Income" type={PRICE_TYPE.INCOME} />
        <StatByType total={expense} label="Expense" type={PRICE_TYPE.EXPENSE} />
        <StatByType
          total={save}
          label="Total saving"
          type={PRICE_TYPE.SAVING}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-10 mt-5 items-center">
        {/* Last Transaction */}
        <div className="flex-2/3">
          <p className={titleStyle}>Last Transaction</p>
          <div className="flex flex-col gap-3 rounded-xl bg-card min-w-[231px] p-[15px] mt-6">
            {transactions?.map(
              ({ id, description, createdAt, amount, status }, index) => (
                <TransactionItem
                  isLast
                  key={id}
                  index={index}
                  description={description}
                  date={createdAt}
                  amount={amount}
                  status={status}
                  cardNumber={cardNumber}
                />
              ),
            )}
          </div>
        </div>

        {/* My Cards */}
        <div>
          <p className={titleStyle}>My Cards</p>
          <div className="mt-5">
            <MyCard
              isColor
              username={cardHolderName}
              totalBalance={balance}
              validDate={validThru}
              cardNumber={cardNumber}
            />
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-5">
        <p className={titleStyle}>Recent Transactions</p>
        <Tabs tabs={TABS_DATA} />
      </div>
    </div>
  );
};

export default Accounts;
