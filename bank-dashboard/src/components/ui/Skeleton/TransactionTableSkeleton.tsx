import { Skeleton } from '.';

export const TransactionSkeleton = () => (
  <div className="divide-y rounded-xl border">
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="flex items-center gap-4 px-4 py-3">
        {/* Icon */}
        <Skeleton className="h-6 w-6 rounded-full" />

        {/* Description & ID */}
        <div className="flex-1">
          <Skeleton className="h-4 w-40 mb-1" />
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
