import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { ICause } from "@/types";

const CauseCard = ({ data }: { data: ICause }) => {
  return (
    <div
      key={data?._id}
      className="bg-light-gray dark:bg-shadow-gray rounded-md shadow-md"
    >
      <div className="relative mb-2.5">
        <img
          src={data?.donationImage}
          alt={data?.title}
          className="rounded-t-md h-40 object-cover w-full"
        />

        <span className="absolute -translate-y-1/2 right-2.5 bg-deep-teal text-pale-silver text-xs px-2.5 py-1 rounded-full">
          {data?.category}
        </span>
      </div>

      <div className="p-5">
        <div className="space-y-1.5 pb-3.5">
          <h6 className="truncate">{data?.title}</h6>
          <p className="line-clamp-3">{data?.description}</p>
          <p className="font-bold">${data?.amount}</p>
        </div>

        <Link
          to={`/donation-details/${data?._id}`}
          className={buttonVariants({
            variant: "destructive",
            size: "sm",
            className: "text-sm",
          })}
        >
          Explore Further
        </Link>
      </div>
    </div>
  );
};

export default CauseCard;
