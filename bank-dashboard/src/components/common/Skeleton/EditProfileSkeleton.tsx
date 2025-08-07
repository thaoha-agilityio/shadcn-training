import { Skeleton } from '.';

export const EditProfileSkeleton = () => (
  <div className="flex flex-col md:flex-row items-center md:items-start gap-9 mt-5">
    {/* Avatar */}
    <div>
      <Skeleton className="size-[130px] rounded-full" />
    </div>

    <div className="flex gap-7 flex-col md:flex-row w-full flex-1">
      <div className="flex flex-col gap-5 w-full">
        {/* Row 1 */}
        <div>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        <div>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Row 2 */}
        <div>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        <div>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full">
        {/* Row 3 */}
        <div>
          <Skeleton className="h-4 w-32 mb-2" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <div>
          <Skeleton className="h-4 w-10 mb-2" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Row 4 */}
        <div>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        <div>
          <Skeleton className="h-4 w-16 mb-2" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        {/* Save Button */}
        <div className="flex justify-end mt-3">
          <Skeleton className="h-10 w-32 rounded-md" />
        </div>
      </div>
    </div>
  </div>
);
