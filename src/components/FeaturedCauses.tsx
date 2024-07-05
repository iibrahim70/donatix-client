import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import { useGetDonationsQuery } from "@/redux/services/api";
import { ICause, TScreenSize } from "@/types";
import useScreenSize from "@/hooks/useScreenSize";
import CauseCard from "./cards/CauseCard";

const FeaturedCauses = () => {
  const { isLoading, error, data } = useGetDonationsQuery(undefined);

  const screenSize = useScreenSize();
  const breakpoints: Record<TScreenSize, number> = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 4,
  };
  const sliceCount = breakpoints[screenSize];

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

          <Link to="/donations" className={buttonVariants()}>
            See More
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data?.data?.slice(0, sliceCount)?.map((item: ICause) => (
            <CauseCard data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCauses;
