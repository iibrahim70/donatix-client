const CauseCardSkeleton = ({ index }: { index: number }) => {
  return (
    <div
      key={index}
      className="animate-pulse rounded-md shadow-md border border-pale-silver dark:border-shadow-gray"
    >
      <div className="bg-silver-moonstone dark:bg-shadow-slate rounded-t-md h-40 w-full" />

      <div className="p-5">
        <div className="space-y-2.5 pb-3.5">
          <div className="bg-silver-moonstone dark:bg-shadow-slate h-2.5 w-[70%] rounded-full" />

          <div className="space-y-1">
            <div className="bg-silver-moonstone dark:bg-shadow-slate h-1 rounded-full" />
            <div className="bg-silver-moonstone dark:bg-shadow-slate h-1 rounded-full" />
            <div className="bg-silver-moonstone dark:bg-shadow-slate h-1 rounded-full" />
          </div>
        </div>

        <div className="bg-silver-moonstone dark:bg-shadow-slate h-6 w-[30%]  lg:w-[40%] rounded-full" />
      </div>
    </div>
  );
};

export default CauseCardSkeleton;
