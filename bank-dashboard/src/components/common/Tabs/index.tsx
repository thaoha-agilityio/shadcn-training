import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

// Components
import {
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsWrapper,
} from '@/components/ui/Tabs';

// Types
import { TabType } from '@/types';

interface TabsProps extends ComponentProps<typeof TabsWrapper> {
  tabs: TabType[];
  defaultValue?: string;
  extraStyle?: string;
}

export const Tabs = ({
  tabs,
  defaultValue,
  className,
  extraStyle,
  ...props
}: TabsProps) => {
  const initialValue = defaultValue ?? tabs[0].value;

  return (
    <TabsWrapper
      defaultValue={initialValue}
      className={cn('w-full', className)}
      {...props}
    >
      <div className="w-full border-b border-border">
        <TabsList className={extraStyle}>
          {tabs.map(({ value, label, onClick }) => (
            <TabsTrigger
              key={value}
              value={value}
              onClick={onClick}
              className="pb-2 cursor-pointer"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {tabs.map(({ value, content }) => (
        <TabsContent key={value} value={value} className="mt-2">
          {content}
        </TabsContent>
      ))}
    </TabsWrapper>
  );
};
