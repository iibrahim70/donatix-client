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
      <div className="section-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data?.data?.map((item: IDonation) => (
          <div
            key={item?._id}
            className="bg-light-gray dark:bg-shadow-gray rounded-md shadow-md"
          >
            <div className="relative mb-2.5">
              <img
                src={item?.donationImage}
                alt={item?.title}
                className="rounded-t-md h-40 object-cover w-full"
              />

              <span className="absolute -translate-y-1/2 right-2.5 bg-flame-orange/85 px-2.5 py-1 rounded-full">
                {item?.category}
              </span>
            </div>

            <div className="p-5">
              <div className="space-y-1.5 pb-3.5">
                <h6 className="truncate">{item?.title}</h6>
                <p className="line-clamp-3">{item?.description}</p>
                <p className="font-bold">${item?.amount}</p>
              </div>

              <Link
                to={`/donation-details/${item?._id}`}
                className={buttonVariants({
                  variant: "secondary",
                  size: "sm",
                })}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Causes;
