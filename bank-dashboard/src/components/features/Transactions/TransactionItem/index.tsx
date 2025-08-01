// Components
import {
  UserIcon,
  SettingTransactionIcon,
  RenewICon,
  FinanceIcon,
  FinderIcon,
  PaypalIcon,
} from '@/components/icons';
import { TRANSACTION_STATUS } from '@/types';

// Utils
import { formatCurrency, formatDateShort, maskCardNumber } from '@/utils';

interface TransactionItemProps {
  isLast?: boolean;
  index: number;
  description: string;
  date: string;
  amount: number;
  status?: TRANSACTION_STATUS;
  cardNumber?: string;
}

export const TransactionItem = ({
  isLast = false,
  index,
  description,
  date,
  amount,
  status,
  cardNumber = '',
}: TransactionItemProps) => {
  const recentTransactionIcons = [
    { icon: FinanceIcon, bgColor: 'bg-balance' },
    { icon: PaypalIcon, bgColor: 'bg-income' },
    { icon: FinderIcon, bgColor: 'bg-save' },
  ];

  const lastTransactionIcons = [
    { icon: RenewICon, bgColor: 'bg-save' },
    { icon: SettingTransactionIcon, bgColor: 'bg-income' },
    { icon: UserIcon, bgColor: 'bg-expense' },
  ];

  const iconOptions = isLast ? lastTransactionIcons : recentTransactionIcons;

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
      <div className="w-[120px]">
        <p className="text-[13px] font-medium">{description}</p>
        <p className="text-xs text-helper">{formatDateShort(date)}</p>
      </div>
      {!!isLast && (
        <>
          <p className="text-xs text-helper capitalize hidden md:block">
            {maskCardNumber(cardNumber)}
          </p>
          <p className="text-xs text-helper capitalize hidden md:block">
            {status}
          </p>
        </>
      )}
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
