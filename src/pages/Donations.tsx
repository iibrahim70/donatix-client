import { Link, useLocation } from "react-router-dom";
import { Button, buttonVariants } from "../components/ui/button";
import { cn } from "@/lib/utils";
import DonationsTable from "@/components/DonationsTable";
import useFetchData from "@/hooks/useFetchData";

const Donations = () => {
  const location = useLocation();

  const { isLoading, data } = useFetchData({
    queryKey: "donations",
    url: "https://givers-heaven-server.vercel.app/api/v1/donations",
  });

  // for homepage and donations page not inside dashboard donations
  const displayDonations = !location.pathname.startsWith("/donations")
    ? data?.slice(0, 6)
    : data;

  return (
    <section
      className={cn(
        "bg-light-white dark:bg-light-black min-h-dvh flex items-center justify-center",
        location.pathname.includes("/donations") ? "py-10" : "py-20"
      )}
    >
      <div className="section-wrapper w-full space-y-10">
        {/* this will show only inside homepage */}
        {!location.pathname.includes("/donations") && (
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="font-caveat text-light-coral">Featured Donations</p>
              <p>
                These initiatives are making a difference in the lives of those
                affected by disasters.
              </p>
            </div>

            <Link to="/donations" className={buttonVariants()}>
              See More
            </Link>
          </div>
        )}

        {/* this will show only inside homepage ande donations page not dashboard donations */}
        {!location.pathname.includes("/dashboard/donations") && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayDonations?.map((item, index) => (
              <div
                key={index}
                className="bg-deep-white dark:bg-deep-black rounded-md shadow-md p-5 space-y-3"
              >
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="rounded-md h-40 object-cover w-full"
                />
                <div className="space-y-1">
                  <h5>{item?.title}</h5>
                  <p>{item?.category}</p>
                  <h6>{item?.amount}</h6>
                </div>

                <Button variant="greyish-blue">View Details</Button>
              </div>
            ))}
          </div>
        )}

        {/* for dashboard donations */}
        {location.pathname.includes("/dashboard/donations") && (
          <DonationsTable />
        )}
      </div>
    </section>
  );
};

export default Donations;
