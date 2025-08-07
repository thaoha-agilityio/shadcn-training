// Components
import { Typography } from '@/components/common';
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
          ? 'text-white bg-gradient-to-r from-warm-blue to-primary'
          : 'text-title bg-card border-2 border-catskill-white',
      )}
    >
      <div className="flex justify-between items-center px-5">
        <div>
          <Typography className={classTitle}>Balance</Typography>
          <Typography variant="h4" className="font-semibold">
            {formatCurrency(totalBalance)}
          </Typography>
        </div>
        <ChipCardIcon />
      </div>
      <div className="mt-[23px] mb-4 grid grid-cols-2 gap-x-10 px-5">
        <Typography variant="label" className={classTitle}>
          card holder
        </Typography>
        <Typography variant="label" className={classTitle}>
          valid thur
        </Typography>
        <Typography variant="h4" className="text-sm">
          {username}
        </Typography>
        <Typography variant="h4" className="text-sm">
          {validDate}
        </Typography>
      </div>
      <div
        className={cn(
          'flex justify-between items-center h-[52px] py-4 border-t px-5 bg-white/20 rounded-b-2xl',
          isColor ? 'border-white/10' : 'border-t-2 border-catskill-white',
        )}
      >
        <p>{formatCardNumber(cardNumber.toString())}</p>
        <VisaIcon className={isColor ? 'text-white' : 'text-visa'} />
      </div>
    </div>
  );
};
