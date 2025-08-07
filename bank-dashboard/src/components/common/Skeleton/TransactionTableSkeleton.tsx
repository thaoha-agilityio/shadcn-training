import { Skeleton } from '.';

export const TransactionSkeleton = () => (
  <div className="bg-card rounded-2xl border border-secondary px-5 py-4">
    <div className="grid grid-cols-6 p-3 text-xs font-medium text-helper">
      <div>Description</div>
      <div>Transaction ID</div>
      <div>Type</div>
      <div>Card</div>
      <div>Date</div>
      <div>Amount</div>
      <div></div>
    </div>
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="grid grid-cols-6 gap-4 px-4 py-3 items-baseline">
        {/* Icon */}

        <div className="flex items-center gap-2">
          <Skeleton className="size-5 rounded-full" />
          <Skeleton className="h-4 w-40" />
        </div>

        {/* Type */}
        <Skeleton className="h-4 w-20" />

        {/* Card */}
        <Skeleton className="h-4 w-16" />

        {/* Date */}
        <Skeleton className="h-4 w-28" />

        {/* Amount */}
        <Skeleton className="h-4 w-16" />

        {/* Download Button */}
        <Skeleton className="h-8 w-20 rounded-full" />
      </div>
    ))}
  </div>
);
