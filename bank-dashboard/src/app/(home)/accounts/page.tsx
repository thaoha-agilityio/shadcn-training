import { cookies } from 'next/headers';

// Components
import { StatByType } from '@/components/common/StatByType';
import { MyCard, TransactionList } from '@/components/features';
import { TransactionItem } from '@/components/features/Transactions/TransactionItem';
import { Tabs } from '@/components/ui/Tabs';

// Constants
import { PRICE_TYPE } from '@/constants';

// Services
import { getCardDetails, getTransactionList } from '@/services';

const Accounts = async ({
  searchParams,
}: {
  searchParams?: {
    page?: number;
  };
}) => {
  const titleStyle = 'text-title text-lg font-semibold';
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

  const currentPage = searchParams?.page || 1;

  const TABS_DATA = [
    {
      value: 'all_transactions',
      label: 'All Transactions',
      content: (
        <TransactionList cardNumber={cardNumber} currentPage={currentPage} />
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
      <div className="flex justify-between flex-wrap gap-2 md:gap-6">
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
      <div className="flex flex-col md:flex-row gap-10 mt-5">
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
