// Components
import { FinanceIcon, PaypalIcon, FinderIcon } from '@/components/icons';

// Utils
import { formatCurrency } from '@/utils';

interface RecentTransactionProps {
  index: number;
  description: string;
  date: string;
  amount: number;
}

export const RecentTransaction = ({
  index,
  description,
  date,
  amount,
}: RecentTransactionProps) => {
  const iconOptions = [
    { icon: FinanceIcon, bgColor: 'bg-balance' },
    { icon: PaypalIcon, bgColor: 'bg-income' },
    { icon: FinderIcon, bgColor: 'bg-save' },
  ];

  const { icon: SelectedIcon, bgColor } =
    iconOptions[index % iconOptions.length];
  const isPositiveAmount = amount >= 0;

  return (
    <div className="flex justify-between items-center">
      <div
        className={`w-10 h-10 rounded-full bg-${bgColor} flex justify-center items-center`}
      >
        <SelectedIcon />
      </div>
      <div>
        <p className="text-[13px] font-medium truncate max-w-[100px]">
          {description}
        </p>
        <p className="text-xs text-helper">{date}</p>
      </div>
      <p
        className={`font-medium text-[11px] ${
          isPositiveAmount ? 'text-positive' : 'text-dangerous'
        }`}
      >
        {formatCurrency(amount)}
      </p>
    </div>
  );
};
