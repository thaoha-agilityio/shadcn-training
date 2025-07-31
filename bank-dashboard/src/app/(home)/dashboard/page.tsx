import {
  BalanceHistoryChart,
  ExpensePieChart,
  MyCard,
  QuickTransfer,
  RecentTransaction,
  WeeklyTransactionChart,
} from '@/components/features';

// TODO: Replace with real data
import { MY_CARD } from '@/mocks';

export default function Home() {
  const titleStyle = 'text-title text-lg font-semibold';

  return (
    <div className="bg-secondary md:min-h-screen py-5 px-6">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-2/3">
          <p className={titleStyle}>My Cards</p>
          <div className="flex flex-nowrap overflow-x-auto pt-4 overflow-y-hidden gap-10">
            <MyCard isColor {...MY_CARD} />
            <MyCard {...MY_CARD} />
          </div>
        </div>

        <div className="flex-1/3">
          <p className={titleStyle}>Recent Transaction</p>
          <div className="flex flex-col gap-3 rounded-xl bg-card min-w-[231px] p-[15px] mt-5">
            <RecentTransaction
              index={0}
              description="Deposit from my"
              date="25 January 2021"
              amount={5400}
            />
            <RecentTransaction
              index={1}
              description="Deposit from my"
              date="25 January 2021"
              amount={5400}
            />
            <RecentTransaction
              index={2}
              description="Deposit from my"
              date="25 January 2021"
              amount={-5400}
            />
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
