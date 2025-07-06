export const BlogCardSkeleton = () => (
  <div className="rounded-md shadow-md overflow-hidden border">
    <div className="bg-shadow-slate animate-pulse h-48 w-full" />

    <div className="p-5 space-y-3.5">
      <div className="h-5 w-3/4 bg-shadow-slate rounded animate-pulse" />

      <div className="space-y-1.5">
        <div className="h-3.5 w-full bg-shadow-slate rounded animate-pulse" />
        <div className="h-3.5 w-full bg-shadow-slate rounded animate-pulse" />
        <div className="h-3.5 w-2/3 bg-shadow-slate rounded animate-pulse" />
      </div>

      <div className="flex gap-2.5">
        <div className="h-4 w-1/4 bg-shadow-slate rounded-full animate-pulse" />
        <div className="h-4 w-1/5 bg-shadow-slate rounded-full animate-pulse" />
      </div>
    </div>

    <div className="p-5 flex items-center justify-between gap-5 border-t">
      <div className="flex items-center gap-2.5">
        <div className="size-10 bg-shadow-slate rounded-full animate-pulse" />
        <div className="h-4 w-24 bg-shadow-slate rounded animate-pulse" />
      </div>

      <div className="h-4 w-1/4 bg-shadow-slate rounded animate-pulse" />
    </div>
  </div>
);
