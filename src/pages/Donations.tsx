import { Link, useLocation } from "react-router-dom";
import { Button, buttonVariants } from "../components/ui/button";
import { cn } from "@/lib/utils";
import DonationsTable from "@/components/DonationsTable";
import { IDonation } from "@/types";
import Skeleton from "react-loading-skeleton";
import { useGetDonationsQuery } from "@/redux/services/api";
import { useSkeletonTheme } from "@/hooks/useSkeletonTheme";

const Donations = () => {
  const location = useLocation();
  const { skeletonBaseColor, skeletonHighlightColor } = useSkeletonTheme();

  // Fetching data for donations
  const { isLoading, error, data } = useGetDonationsQuery(undefined);

  // Determine which donations to display based on the current page
  const displayDonations = !location?.pathname?.startsWith("/donations")
    ? data?.data?.slice(0, 6) // Display 6 donations on the homepage
    : data?.data; // Display all donations on the donations page

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100dvh-64px)]">
        Error fetching data.
      </div>
    );
  }

  return (
    <main
      className={cn(
        "bg-light-pearl dark:bg-midnight-slate",
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
                <p className="font-caveat text-ruby-red">Featured Donations</p>
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
                      baseColor={skeletonBaseColor}
                      highlightColor={skeletonHighlightColor}
                    />
                    <Skeleton
                      height={45}
                      baseColor={skeletonBaseColor}
                      highlightColor={skeletonHighlightColor}
                    />
                    <Skeleton
                      height={25}
                      baseColor={skeletonBaseColor}
                      highlightColor={skeletonHighlightColor}
                    />
                  </div>
                ))
              : displayDonations?.map((item: IDonation) => (
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
      )}

      {/* Display donations table for the dashboard */}
      {location?.pathname?.includes("/dashboard/donations") && (
        <DonationsTable />
      )}
    </main>
  );
};

export default Donations;
