export const CauseCardSkeleton = () => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden border">
      <div className="h-40 bg-shadow-slate animate-pulse" />

      <div className="p-5 space-y-3.5">
        <div className="space-y-3.5">
          <div className="h-5 w-3/4 bg-shadow-slate rounded animate-pulse" />

          <div className="space-y-1.5">
            <div className="h-3.5 w-full bg-shadow-slate rounded animate-pulse" />
            <div className="h-3.5 w-full bg-shadow-slate rounded animate-pulse" />
            <div className="h-3.5 w-2/3 bg-shadow-slate rounded animate-pulse" />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <div className="h-4 w-1/4 bg-shadow-slate rounded animate-pulse" />
            <div className="h-4 w-1/6 bg-shadow-slate rounded animate-pulse" />
          </div>

          <div className="w-full bg-shadow-slate rounded-full h-2 animate-pulse" />
        </div>

        <div className="w-full h-8 bg-shadow-slate rounded-md animate-pulse" />
      </div>
    </div>
  );
};
