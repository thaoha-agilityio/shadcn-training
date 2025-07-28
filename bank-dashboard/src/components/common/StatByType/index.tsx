// Components
import { ReactNode } from 'react';
import {
  BalanceIcon,
  IncomeIcon,
  ExpenseIcon,
  SaveIcon,
} from '@/components/icons';

// Constants
import { PRICE_TYPE } from '@/constants';

// Utils
import { formatCurrency } from '@/utils';

const ICON_MAPPING: {
  [key in PRICE_TYPE]: { color: string; icon: ReactNode };
} = {
  [PRICE_TYPE.BALANCE]: {
    color: 'bg-bg-balance',
    icon: <BalanceIcon />,
  },
  [PRICE_TYPE.INCOME]: {
    color: 'bg-bg-income',
    icon: <IncomeIcon />,
  },
  [PRICE_TYPE.EXPENSE]: {
    color: 'bg-bg-expense',
    icon: <ExpenseIcon />,
  },
  [PRICE_TYPE.SAVING]: {
    color: 'bg-bg-save',
    icon: <SaveIcon />,
  },
};

interface StatByTypeProps {
  total: number;
  label: string;
  type: PRICE_TYPE;
}

export const StatByType = ({ total, label, type }: StatByTypeProps) => {
  const { color, icon } = ICON_MAPPING[type];

  return (
    <div className="flex gap-3 p-5 rounded-[20px] w-[190px] bg-white shadow-md items-center">
      <div className={`${color} w-[70px] h-[70px] rounded-full p-5`}>
        {icon}
      </div>
      <div className="text-left">
        <p className="text-xs text-helper">{label}</p>
        <p className="font-semibold text-md">{formatCurrency(total)}</p>
      </div>
    </div>
  );
};
