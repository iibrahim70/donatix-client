import { useGetDonationsQuery } from "@/redux/services/api";
import { ICause } from "@/types";
import CauseCard from "@/components/cards/CauseCard";

const Causes = () => {
  const { isLoading, error, data } = useGetDonationsQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100dvh-64px)]">
        loading...
      </div>
    );
  }

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
        {data?.data?.map((item: ICause) => (
          <CauseCard data={item} />
        ))}
      </div>
    </main>
  );
};

export default Causes;
