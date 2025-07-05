import {
  BlogCardSkeleton,
  CauseCardSkeleton,
  EventCardSkeleton,
} from "@/components/skeletons";

const page = () => {
  return (
    <div className="bg-midnight-slate ">
      <div className="section-wrapper py-10 space-y-5">
        <div className="grid grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <CauseCardSkeleton key={index} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <EventCardSkeleton key={index} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
