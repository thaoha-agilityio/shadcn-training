'use client';

import { ComponentProps } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/lib/utils';

// Types
import { TabType } from '@/types';

const TabsWrapper = ({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Root>) => (
  <TabsPrimitive.Root
    data-slot="tabs"
    className={cn('flex flex-col gap-2', className)}
    {...props}
  />
);

const TabsList = ({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List
    data-slot="tabs-list"
    className={cn(
      'text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]',
      className,
    )}
    {...props}
  />
);

const TabsTrigger = ({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger
    data-slot="tabs-trigger"
    className={cn(
      'relative data-[state=active]:text-primary inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 px-2 py-1 text-xs font-medium text-helper whitespace-nowrap disabled:pointer-events-none disabled:opacity-50',
      // underline effect for active tab
      'data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0',
      'data-[state=active]:after:h-1 data-[state=active]:after:bg-primary data-[state=active]:after:rounded-t-[4px]',
      className,
    )}
    {...props}
  />
);

const TabsContent = ({
  className,
  ...props
}: ComponentProps<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content
    data-slot="tabs-content"
    className={cn('flex-1 outline-none', className)}
    {...props}
  />
);

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
      <TabsList className={extraStyle}>
        {tabs.map(({ value, label, onClick }) => (
          <TabsTrigger
            key={value}
            value={value}
            onClick={onClick}
            className="pb-2"
          >
            {label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map(({ value, content }) => (
        <TabsContent key={value} value={value} className="mt-2">
          {content}
        </TabsContent>
      ))}
    </TabsWrapper>
  );
};
