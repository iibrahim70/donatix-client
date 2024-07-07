import data from "@/assets/json/events.json";
import { IEvent } from "@/types";
import { FaPlay } from "react-icons/fa";
import EventCard from "./cards/EventCard";

const Events = () => {
  return (
    <section className="bg-light-pearl dark:bg-midnight-slate py-20 space-y-10">
      <div className="text-center space-y-2.5">
        <h3>
          Upcoming <span className="text-vivid-red">Events</span>
        </h3>
        <p className="line-clamp-2">
          Be part of something extraordinary! Join our upcoming events <br /> to
          connect, inspire, and transform lives together.
        </p>
      </div>

      <div className="section-wrapper flex max-md:flex-col-reverse items-center justify-between gap-10 md:gap-20">
        <div className="md:w-1/2 flex flex-col gap-5">
          {data?.slice(0, 2)?.map((item: IEvent) => (
            <EventCard data={item} />
          ))}
        </div>

        <div className="md:w-1/2 relative">
          <img
            src="https://res.cloudinary.com/ibrahim70/image/upload/v1720354571/banner-1_qfn32u.jpg"
            alt="Sample Video"
            className="object-cover rounded-[55px]"
          />

          <button className="absolute inset-0 flex items-center justify-center">
            <span className="relative flex items-center justify-center size-[70px] bg-flame-orange rounded-full shadow">
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="wave" />
                <span className="wave" />
                <span className="wave" />
              </span>
              <FaPlay className="size-5 text-white relative z-10" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
