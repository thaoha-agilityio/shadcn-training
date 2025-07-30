import { FinanceIcon } from '@/components/icons';
import { formatCurrency } from '@/utils';

interface RecentTransactionProps {
  description: string;
  date: string;
  amount: number;
}

export const RecentTransaction = ({
  description,
  date,
  amount,
}: RecentTransactionProps) => {
  return (
    <div className="flex justify-between items-center rounded-xl bg-white w-[231px] p-[15px]">
      <div className="w-10 h-10 rounded-full bg-bg-balance flex justify-center items-center ">
        <FinanceIcon />
      </div>
      <div>
        <p className="text-[13px] font-medium">{description}</p>
        <p className="text-xs text-helper">{date}</p>
      </div>
      <p className="text-[11px]">{formatCurrency(amount)}</p>
    </div>
  );
};
