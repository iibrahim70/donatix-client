import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import { useGetDonationsQuery } from "@/redux/services/api";
import { ICause } from "@/types";
import useScreenSize from "@/hooks/useScreenSize";
import CauseCardSkeleton from "./skeletons/CauseCardSkeleton";
import CauseCard from "./cards/CauseCard";

const FeaturedCauses = () => {
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
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="font-caveat text-flame-orange">Featured Causes</p>
            <p>
              Our initiatives strive to improve lives and bring positive change
              to communities in need.
            </p>
          </div>

          <Link to="/causes" className={buttonVariants()}>
            See More
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {isLoading
            ? Array.from({ length: sliceCount }).map((_, index) => (
                <CauseCardSkeleton index={index} />
              ))
            : data?.data
                ?.slice(0, sliceCount)
                ?.map((item: ICause) => <CauseCard data={item} />)}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCauses;
