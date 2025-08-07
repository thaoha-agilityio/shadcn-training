'use client';

import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

// Components
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/common/Popover';
import { Button, Calendar } from '@/components/common';

interface DatePickerProps {
  value: Date | undefined;
  onSelect: (date: Date | undefined) => void;
  label?: string;
  errorMessage?: string;
}

export const DatePicker = ({
  value,
  onSelect,
  label,
  errorMessage,
}: DatePickerProps) => (
  <div className="flex flex-col space-y-1">
    {!!label && <label className="text-md">{label}</label>}
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full pl-3 text-left font-normal text-foreground rounded-lg h-9 bg-transparent border border-helper dark:border-helper',
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
    {errorMessage && <p className="text-destructive text-xs">{errorMessage}</p>}
  </div>
);
