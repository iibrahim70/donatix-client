import { Link } from "react-router-dom";
import { buttonVariants } from "../components/ui/button";
import { IDonation } from "@/types";
import { useGetDonationsQuery } from "@/redux/services/api";

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
      <div className="section-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.data?.map((item: IDonation) => (
          <div
            key={item?._id}
            className="bg-light-gray dark:bg-shadow-gray rounded-md shadow-md p-5"
          >
            <img
              src={item?.donationImage}
              alt={item?.title}
              className="rounded-md h-40 object-cover w-full"
            />

            <div className="space-y-1 my-3">
              <h5 className="truncate">{item?.title}</h5>
              <p>{item?.category}</p>
              <h6>${item?.amount}</h6>
            </div>

            <Link
              to={`/donation-details/${item?._id}`}
              className={buttonVariants({ variant: "secondary" })}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Causes;
