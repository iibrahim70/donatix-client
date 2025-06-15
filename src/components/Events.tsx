import data from "@/assets/data/events.json";
import { IEvent } from "@/types";
import { FaPlay } from "react-icons/fa";
import EventCard from "./cards/EventCard";

const Events = () => {
  return (
    <section className="section-wrapper py-20 space-y-10">
      <div className="text-center space-y-2.5">
        <h3>
          <span className="text-vivid-red">Upcoming</span> Events
        </h3>
        <p className="line-clamp-2">
          Be part of something extraordinary! Join our upcoming events <br /> to
          connect, inspire, and transform lives together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.map((item) => (
          <EventCard key={item?._id} data={item as IEvent} />
        ))}
      </div>
    </section>
  );
};

export default Events;
