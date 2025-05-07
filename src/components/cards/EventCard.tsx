import { IEvent } from "@/types";
import { buttonVariants } from "../ui/button";
import Link from "next/link";

const EventCard = ({ data }: { data: IEvent }) => {
  return (
    <div
      key={data?._id}
      className="bg-light-gray dark:bg-shadow-gray rounded-md shadow-md"
    >
      <div className="flex items-center justify-between gap-5">
        <div className="w-1/2 md:w-[40%]">
          <img
            src={data?.bannerImage}
            alt={data?.title}
            className="rounded-md object-cover"
          />
        </div>

        <div className="w-1/2 md:w-[60%] py-3.5">
          <div className="space-y-2.5 pb-4">
            <p className="text-sm font-medium">{data?.date}</p>

            <p className="text-lg font-bold truncate">{data?.title}</p>
            <p className="line-clamp-2">{data?.description}</p>
          </div>

          <div className="flex items-center justify-between gap-5">
            <Link
              href={`/donation-details/${data?._id}`}
              className={buttonVariants({
                size: "sm",
                className: "text-sm",
              })}
            >
              View Insights
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
