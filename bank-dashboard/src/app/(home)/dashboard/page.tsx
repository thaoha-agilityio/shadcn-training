import {
  MyCard,
  RecentTransaction,
  WeeklyTransactionChart,
} from '@/components/features';
import { FinanceIcon } from '@/components/icons';

const props = {
  username: 'John Doe',
  totalBalance: 1234.56,
  validDate: '12/29',
  cardNumber: '3778123412341234',
};

export default function Home() {
  const titleStyle = 'text-title text-lg font-semibold';
  return (
    <div className="bg-secondary h-[calc(100vh-70px)] py-5 px-6">
      <div className="flex justify-between">
        <div>
          <p className={titleStyle}>My Cards</p>
          <div className="flex gap-6 pt-4">
            <MyCard isColor {...props} />
            <MyCard {...props} />
          </div>
        </div>

        <div>
          <p className={titleStyle}>Recent Transaction</p>
          <div className="flex flex-col gap-3 rounded-xl bg-card w-[231px] p-[15px] mt-5">
            <RecentTransaction
              description="Deposit from my"
              date="25 January 2021"
              amount={5400}
            />
            <RecentTransaction
              description="Deposit from my"
              date="25 January 2021"
              amount={5400}
            />
            <RecentTransaction
              description="Deposit from my"
              date="25 January 2021"
              amount={-5400}
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <p className={titleStyle}>Weekly Activity</p>
        <WeeklyTransactionChart />
      </div>
    </div>
  );
}
