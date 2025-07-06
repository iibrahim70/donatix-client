import data from "@/assets/data/events.json";
import { IEvent } from "@/types";
import { EventCard } from "./cards";

const Events = () => {
  return (
    <section className="bg-gray-900/20 py-20">
      <div className="container space-y-10">
        <div className="text-center space-y-2.5">
          <h3>Upcoming Events</h3>

          <p className="text-[15px] bg-emerald-">
            Join our upcoming events to connect, inspire, and create lasting
            impact together.
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
