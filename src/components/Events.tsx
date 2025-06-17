import data from "@/assets/data/events.json";
import EventCard from "./cards/EventCard";
import { IEvent } from "@/types";

const Events = () => {
  return (
    <section className="bg-black/10 py-20">
      <div className="section-wrapper space-y-10">
        <div className="text-center space-y-2.5">
          <h3>
            <span className="text-teal-600">Upcoming</span> Events
          </h3>

          <p>
            Join our upcoming events to connect, inspire, and <br /> create
            lasting impact together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.slice(0, 6)?.map((item) => (
            <EventCard key={item?._id} data={item as IEvent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
