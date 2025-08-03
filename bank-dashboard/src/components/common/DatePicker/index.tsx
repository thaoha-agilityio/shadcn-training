'use client';

import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

// Components
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';
import { Button } from '@/components/ui/Button';
import { Calendar } from '@/components/ui/Calendar';

interface DatePickerProps {
  value: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}

export const DatePicker = ({ value, onSelect }: DatePickerProps) => (
  <>
    <label className="text-md mb-2">Date of birth</label>
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full pl-3 text-left font-normal border-input-ring rounded-lg h-10 text-helper',
          )}
        >
          {value ? format(value, 'PPP') : 'Date of birth'}
          <CalendarIcon
            className="ml-auto h-4 w-4 opacity-50"
            color="#718EBF"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          selected={value}
          onSelect={onSelect}
          mode="single"
          disabled={(date) =>
            date > new Date() || date < new Date('1900-01-01')
          }
        />
      </PopoverContent>
    </Popover>
  </>
);
