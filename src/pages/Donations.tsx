import { Link, useLocation } from "react-router-dom";
import { Button, buttonVariants } from "../components/ui/button";
import { cn } from "@/lib/utils";

const Donations = () => {
  const location = useLocation();
  const data = [
    {
      image:
        "https://images.pexels.com/photos/6647110/pexels-photo-6647110.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Emergency Food Relief",
      category: "Food",
      amount: "$500",
      detailLink: "/donation-post-1",
    },
    {
      image:
        "https://images.pexels.com/photos/5710033/pexels-photo-5710033.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Winter Clothing Drive",
      category: "Clothing",
      amount: "$500",
      detailLink: "/donation-post-2",
    },
    {
      image:
        "https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Shelter for Families",
      category: "Shelter",
      amount: "$1000",
      detailLink: "/donation-post-3",
    },
    {
      image:
        "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Clean Water Initiative",
      category: "Water",
      amount: "$500",
      detailLink: "/donation-post-4",
    },
    {
      image:
        "https://images.pexels.com/photos/8250993/pexels-photo-8250993.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Education Supplies Drive",
      category: "Education",
      amount: "$300",
      detailLink: "/donation-post-5",
    },
    {
      image:
        "https://images.pexels.com/photos/3930883/pexels-photo-3930883.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Toy Drive for Children",
      category: "Toys",
      amount: "$500",
      detailLink: "/donation-post-6",
    },
    {
      image: "image7.jpg",
      title: "Medical Supplies Relief",
      category: "Medical",
      amount: "$800",
      detailLink: "/donation-post-7",
    },
    {
      image: "image8.jpg",
      title: "Home Reconstruction Project",
      category: "Housing",
      amount: "$1500",
      detailLink: "/donation-post-8",
    },
    {
      image: "image9.jpg",
      title: "School Building Renovation",
      category: "Education",
      amount: "$1200",
      detailLink: "/donation-post-9",
    },
  ];

  const displayDonations = !location.pathname.startsWith("/donations")
    ? data?.slice(0, 6)
    : data;

  return (
    <section
      className={cn(
        "bg-light-white dark:bg-light-black min-h-dvh flex items-center justify-center",
        location.pathname.startsWith("/donations") ? "py-10" : "py-20"
      )}
    >
      <div className="section-wrapper w-full space-y-10">
        {!location.pathname.startsWith("/donations") && (
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
      </div>
    </section>
  );
};

export default Donations;
