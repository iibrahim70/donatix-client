import { IBlog } from "@/types";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";

const BlogCard = ({ data }: { data: IBlog }) => {
  return (
    <div
      key={data?._id}
      className="bg-light-gray dark:bg-shadow-gray rounded-md shadow-md"
    >
      <div className="relative mb-2.5">
        <img
          src={data?.bannerImage}
          alt={data?.title}
          className="rounded-t-md h-40 object-cover w-full"
        />

        <img
          src={data?.avatar}
          className="absolute -translate-y-1/2 right-2.5 size-12 object-cover rounded-full"
        />
      </div>

      <div className="p-5">
        <div className="space-y-4 pb-4">
          <h6 className="truncate">{data?.title}</h6>
          <p className="line-clamp-3">{data?.description}</p>

          <p>
            <span className="text-sm">By</span>{" "}
            <span className="font-semibold hover:underline underline-offset-4">
              {data?.fullName}
            </span>
          </p>
        </div>

        <div className="flex items-center justify-between gap-5">
          <Link
            to={`/donation-details/${data?._id}`}
            className={buttonVariants({
              variant: "secondary",
              size: "sm",
              className: "text-sm",
            })}
          >
            View Details
          </Link>

          <p>{data?.publishedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
