import { cookies } from 'next/headers';

import {
  BalanceHistoryChart,
  ExpensePieChart,
  MyCard,
  QuickTransfer,
  WeeklyTransactionChart,
  TransactionItem,
} from '@/components/features';

// Services
import { getCardDetails, getTransactionList } from '@/services';

export default async function Home() {
  const cookieStore = await cookies();
  const userId = cookieStore.get('userId')?.value || '';

  const { data: cardDetails } = await getCardDetails(userId);
  const {
    cardHolderName = '',
    cardNumber = '',
    validThru = '',
    balance = 0,
  } = cardDetails || {};

  const { data: transactions } = await getTransactionList(1, 3);

  const titleStyle = 'text-title text-lg font-semibold';

  return (
    <div className="py-5 px-6">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-2/3">
          <p className={titleStyle}>My Cards</p>
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
          <p className={titleStyle}>Recent Transaction</p>
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
          <p className={titleStyle}>Weekly Activity</p>
          <WeeklyTransactionChart />
        </div>
        <div className="mt-5 flex-1/3">
          <p className={titleStyle}>Expense Statistics</p>
          <ExpensePieChart />
        </div>
      </div>

      {/* Quick Transfer */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="mt-5 flex-1/3">
          <p className={titleStyle}>Quick Transfer</p>
          <QuickTransfer />
        </div>

        <div className="mt-5 flex-2/3">
          <p className={titleStyle}>Balance History</p>
          <BalanceHistoryChart />
        </div>
      </div>
    </div>
  );
}
