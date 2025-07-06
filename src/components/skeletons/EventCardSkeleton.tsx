export const EventCardSkeleton = () => (
  <div className="rounded-md shadow-md overflow-hidden border">
    <div className="bg-shadow-slate animate-pulse h-48" />

    <div className="p-5 space-y-2.5">
      <div className="h-5 w-3/4 bg-shadow-slate rounded animate-pulse" />

      <div className="space-y-1.5">
        <div className="h-3.5 w-full bg-shadow-slate rounded animate-pulse" />
        <div className="h-3.5 w-full bg-shadow-slate rounded animate-pulse" />
        <div className="h-3.5 w-2/3 bg-shadow-slate rounded animate-pulse" />
      </div>
    </div>

    <div className="p-5 space-y-2.5 border-t">
      <div className="flex items-center gap-2.5 w-full">
        <div className="bg-shadow-slate animate-pulse size-4 rounded" />
        <div className="h-3.5 w-1/2 bg-shadow-slate rounded animate-pulse" />
      </div>

      <div className="flex items-center gap-2.5 w-full">
        <div className="bg-shadow-slate animate-pulse size-4 rounded" />
        <div className="h-3.5 w-1/3 bg-shadow-slate rounded animate-pulse" />
      </div>
    </div>
  </div>
);
