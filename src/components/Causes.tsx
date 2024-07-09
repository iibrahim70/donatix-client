import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useGetDonationsQuery } from "@/redux/services/api";
import { ICause } from "@/types";
import useScreenSize from "@/hooks/useScreenSize";
import CauseCardSkeleton from "./skeletons/CauseCardSkeleton";
import CauseCard from "./cards/CauseCard";

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
    <section className="bg-light-pearl dark:bg-midnight-slate py-20">
      <div className="section-wrapper space-y-10">
        <div className="space-y-3.5">
          <div className="flex items-center justify-between gap-5">
            <div className="space-y-2">
              <h3>
                Featured <span className="text-teal-600">Causes</span>
              </h3>
            </div>

            <Link
              to="/causes"
              className="max-sm:hidden text-flame-orange font-semibold flex items-center gap-1.5 truncate"
            >
              See More <FaLongArrowAltRight className="size-5" />
            </Link>
          </div>

          <p>
            Explore our impactful initiatives dedicated to bringing positive
            change to communities in need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {isLoading
            ? Array.from({ length: sliceCount }).map((_, index) => (
                <CauseCardSkeleton key={index} />
              ))
            : data?.data
                ?.slice(0, sliceCount)
                ?.map((item: ICause) => <CauseCard data={item} />)}
        </div>
      </div>
    </section>
  );
};

export default Causes;
