// Components
import { ChipCardIcon, VisaIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

// Utils
import { formatCardNumber, formatCurrency } from '@/utils';

interface MyCardProps {
  isColor?: boolean;
  username: string;
  totalBalance: number;
  validDate: string;
  cardNumber: string;
}

export const MyCard = ({
  isColor = false,
  username,
  totalBalance,
  validDate,
  cardNumber,
}: MyCardProps) => {
  const classTitle = isColor ? 'text-white' : 'text-helper';

  return (
    <div
      className={cn(
        'min-w-[265px] h-[180px] rounded-2xl pt-4 ',
        isColor
          ? 'text-white bg-gradient-to-r from-[#4C49ED] to-[#0A06F4]'
          : 'text-title bg-card border-2 border-catskill-white',
      )}
    >
      <div className="flex justify-between items-center px-5">
        <div>
          <p className={cn('text-xs', classTitle)}>Balance</p>
          <p className="font-semibold text-md">
            {formatCurrency(totalBalance)}
          </p>
        </div>
        <ChipCardIcon />
      </div>
      <div className="mt-[23px] mb-4 grid grid-cols-2 gap-x-10 px-5">
        <p className={cn('uppercase text-[10px]', classTitle)}>card holder</p>
        <p className={cn('uppercase text-[10px]', classTitle)}>valid thur</p>
        <p className="text-sm font-semibold">{username}</p>
        <p className="text-sm font-semibold">{validDate}</p>
      </div>
      <div
        className={cn(
          'flex justify-between items-center h-[52px] py-4 border-t px-5 bg-white/20 rounded-b-2xl',
          isColor ? 'border-white/10' : 'border-t-2 border-catskill-white',
        )}
      >
        <p>{formatCardNumber(cardNumber.toString())}</p>
        <VisaIcon {...(!isColor && { color: '#9199AF' })} />
      </div>
    </div>
  );
};
