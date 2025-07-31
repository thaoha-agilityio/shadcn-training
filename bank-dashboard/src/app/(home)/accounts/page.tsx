import { StatByType } from '@/components/common/StatByType';
import { MyCard, TransactionList } from '@/components/features';
import { TransactionItem } from '@/components/features/Transactions/TransactionItem';
import { Tabs } from '@/components/ui/Tabs';
import { PRICE_TYPE } from '@/constants';
import { MY_CARD } from '@/mocks';
import { TRANSACTION_STATUS } from '@/types';

const TABS_DATA = [
  {
    value: 'all_transactions',
    label: 'All Transactions',
    content: <TransactionList data={[]} />,
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

const Accounts = () => {
  const titleStyle = 'text-title text-lg font-semibold';

  return (
    <div className="bg-secondary md:min-h-screen py-7 px-6">
      <div className="flex justify-between flex-wrap gap-2 md:gap-6">
        <StatByType
          total={12750}
          label="My balance"
          type={PRICE_TYPE.BALANCE}
        />
        <StatByType total={5600} label="Income" type={PRICE_TYPE.INCOME} />
        <StatByType total={1230} label="Expense" type={PRICE_TYPE.EXPENSE} />
        <StatByType
          total={5000}
          label="Total saving"
          type={PRICE_TYPE.SAVING}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-10 mt-5">
        {/* Last Transaction */}
        <div className="flex-2/3">
          <p className={titleStyle}>Last Transaction</p>
          <div className="flex flex-col gap-3 rounded-xl bg-card min-w-[231px] p-[15px] mt-6">
            <TransactionItem
              isLast
              index={0}
              description="Deposit from my"
              date="25 January 2021"
              amount={5400}
              status={TRANSACTION_STATUS.PENDING}
            />
            <TransactionItem
              isLast
              index={1}
              description="Deposit from my"
              date="25 January 2021"
              amount={5400}
              status={TRANSACTION_STATUS.PENDING}
            />
            <TransactionItem
              isLast
              index={2}
              description="Deposit from my"
              date="25 January 2021"
              amount={-5400}
              status={TRANSACTION_STATUS.PENDING}
            />
          </div>
        </div>

        {/* My Cards */}
        <div>
          <p className={titleStyle}>My Cards</p>
          <div className="mt-5">
            <MyCard isColor {...MY_CARD} />
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
