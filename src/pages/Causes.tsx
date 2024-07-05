import { useGetDonationsQuery } from "@/redux/services/api";
import { ICause } from "@/types";
import CauseCard from "@/components/cards/CauseCard";
import CauseCardSkeleton from "@/components/skeletons/CauseCardSkeleton";
import useScreenSize from "@/hooks/useScreenSize";

const Causes = () => {
  const { sliceCount } = useScreenSize();
  const { isLoading, error, data } = useGetDonationsQuery(undefined);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100dvh-64px)]">
        Error fetching data.
      </div>
    );
  }

  return (
    <main className="bg-light-pearl dark:bg-midnight-slate py-10">
      <div className="section-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {isLoading
          ? Array.from({ length: sliceCount }).map((_, index) => (
              <CauseCardSkeleton index={index} />
            ))
          : data?.data?.map((item: ICause) => <CauseCard data={item} />)}
      </div>
    </main>
  );
};

export default Causes;
