import { Link } from "react-router-dom";
import { Button, buttonVariants } from "./ui/button";
import { useGetDonationsQuery } from "@/redux/services/api";
import { IDonation } from "@/types";

const FeaturedCauses = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.data?.slice(0, 6)?.map((item: IDonation) => (
            <div
              key={item?._id}
              className="bg-light-gray dark:bg-shadow-gray rounded-md shadow-md p-5"
            >
              {/* Donation Image */}
              <img
                src={item?.donationImage}
                alt={item?.title}
                className="rounded-md h-40 object-cover w-full"
              />

              {/* Donation Details */}
              <div className="space-y-1 my-3">
                <h5 className="truncate">{item?.title}</h5>
                <p>{item?.category}</p>
                <h6>${item?.amount}</h6>
              </div>

              {/* Button to view donation details */}
              <Link to={`/donation-details/${item?._id}`}>
                <Button variant="secondary">View Details</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCauses;
