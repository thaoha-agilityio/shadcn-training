import { Metadata } from 'next';
import { cookies } from 'next/headers';

// Components
import {
  BalanceHistoryChart,
  ExpensePieChart,
  MyCard,
  QuickTransfer,
  WeeklyTransactionChart,
  TransactionItem,
} from '@/components/features';
import { Typography } from '@/components/common';

// Services
import { getCardDetails, getTransactionList } from '@/services';

// Constants
import { COOKIE_KEYS, PREVIEW_IMAGE } from '@/constants';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard page for Bank Dashboard',
  openGraph: {
    title: 'Dashboard',
    description: 'Dashboard page for Bank Dashboard',
    images: [
      {
        url: PREVIEW_IMAGE,
        alt: 'preview image',
      },
    ],
  },
};

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const userId = cookieStore.get(COOKIE_KEYS.USER_ID)?.value || '';

  const { data: cardDetails } = await getCardDetails(userId);
  const {
    cardHolderName = '',
    cardNumber = '',
    validThru = '',
    balance = 0,
  } = cardDetails || {};

  const { data: transactions } = await getTransactionList(1, 3);

  return (
    <div className="py-5 px-6">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-2/3">
          <Typography variant="h2">My Cards</Typography>
          <div className="flex flex-nowrap overflow-x-auto pt-4 overflow-y-hidden gap-10">
            <MyCard
              isColor
              username={cardHolderName}
              totalBalance={balance}
              validDate={validThru}
              cardNumber={cardNumber}
            />
            <MyCard
              username={cardHolderName}
              totalBalance={balance}
              validDate={validThru}
              cardNumber={cardNumber}
            />
          </div>
        </div>

        <div className="flex-1/3">
          <Typography variant="h2">Recent Transaction</Typography>
          <div className="flex flex-col gap-3 rounded-xl bg-card min-w-[231px] p-[15px] mt-5">
            {transactions?.map(
              ({ id, description, createdAt, amount }, index) => (
                <TransactionItem
                  key={id}
                  index={index}
                  description={description}
                  date={createdAt}
                  amount={amount}
                />
              ),
            )}
          </div>
        </div>
      </div>

      {/* Weekly Activity */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="mt-5 flex-2/3">
          <Typography variant="h2">Weekly Activity</Typography>
          <WeeklyTransactionChart />
        </div>
        <div className="mt-5 flex-1/3">
          <Typography variant="h2">Expense Statistics</Typography>
          <ExpensePieChart />
        </div>
      </div>

      {/* Quick Transfer */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="mt-5 flex-1/3">
          <Typography variant="h2">Quick Transfer</Typography>
          <QuickTransfer />
        </div>

        <div className="mt-5 flex-2/3">
          <Typography variant="h2">Balance History</Typography>
          <BalanceHistoryChart />
        </div>
      </div>
    </div>
  );
}
