import { Link, useLocation } from "react-router-dom";
import { Button, buttonVariants } from "../components/ui/button";
import { cn } from "@/lib/utils";
import DonationsTable from "@/components/DonationsTable";
import useFetchData from "@/hooks/useFetchData";
import { IDonations } from "@/types";
import Skeleton from "react-loading-skeleton";

const Donations = () => {
  const location = useLocation();

  // Fetching data for donations
  const { isLoading, data } = useFetchData({
    queryKey: "donations",
    url: "https://givers-heaven-server.vercel.app/api/v1/donations",
  });

  // Determine which donations to display based on the current page
  const displayDonations = !location?.pathname?.startsWith("/donations")
    ? data?.slice(0, 6) // Display 6 donations on the homepage
    : data; // Display all donations on the donations page

  return (
    <section
      className={cn(
        "bg-light-white dark:bg-light-black",
        location?.pathname?.includes("/donations")
          ? "py-10" // No padding for the donations page
          : "py-20 min-h-dvh flex items-center justify-center" // Padding for homepage and other pages
      )}
    >
      {/* Display only on the homepage and donations page, not on the dashboard */}
      {!location?.pathname?.includes("/dashboard/donations") && (
        <div className="section-wrapper w-full space-y-10">
          {/* Display only on the homepage */}
          {!location?.pathname?.includes("/donations") && (
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <p className="font-caveat text-light-coral">
                  Featured Donations
                </p>
                <p>
                  These initiatives are making a difference in the lives of
                  those affected by disasters.
                </p>
              </div>

              {/* Button to see more donations */}
              <Link to="/donations" className={buttonVariants()}>
                See More
              </Link>
            </div>
          )}

          {/* Display grid of donations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <div key={index}>
                    <Skeleton
                      height={200}
                      baseColor="#02011B"
                      highlightColor="#384259"
                    />
                    <Skeleton
                      height={45}
                      baseColor="#02011B"
                      highlightColor="#384259"
                    />
                    <Skeleton
                      height={25}
                      baseColor="#02011B"
                      highlightColor="#384259"
                    />
                  </div>
                ))
              : displayDonations?.map((item: IDonations) => (
                  <div
                    key={item?._id}
                    className="bg-deep-white dark:bg-deep-black rounded-md shadow-md p-5"
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
                      <Button variant="greyish-blue">View Details</Button>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      )}

      {/* Display donations table for the dashboard */}
      {location?.pathname?.includes("/dashboard/donations") && (
        <DonationsTable />
      )}
    </section>
  );
};

export default Donations;
