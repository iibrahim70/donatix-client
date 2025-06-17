import { Database, Home, LineChart } from "lucide-react";

const HowWeWork = () => {
  return (
    <section className="bg-light-pearl dark:bg-midnight-slate">
      <div className="section-wrapper flex max-md:flex-col-reverse items-center justify-between gap-20 py-20">
        {/* left side */}
        <div className="md:w-1/2 relative h-[525px]">
          <div className="flex justify-end">
            <img
              src="https://res.cloudinary.com/ibrahim70/image/upload/banner-2_tiw4nw.jpg"
              alt="About Banner"
              className="w-[70%] h-[350px] object-cover rounded rounded-tr-[80px]"
            />
          </div>

          <img
            src="https://res.cloudinary.com/ibrahim70/image/upload/banner-3_h51ywr.jpg"
            alt="About Banner"
            className="w-[60%] h-[350px] object-cover absolute left-0 -translate-y-1/2 rounded rounded-bl-[80px]"
          />
        </div>

        {/* right side */}
        <div className="md:w-1/2 flex flex-col gap-10">
          <h2 className="lg:mb-5">
            How <span className="text-flame-orange">We</span> Work
          </h2>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <Home className="size-10 bg-teal-600 text-pale-silver rounded-full p-2.5" />
              <h6>Community Centers</h6>
            </div>

            <p>
              We establish and support community centers in various regions to
              provide essential services and support to those in need.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <Database className="size-10 bg-teal-600 text-pale-silver rounded-full p-2.5" />
              <h6>Data-Driven Approach</h6>
            </div>

            <p>
              We utilize a data-driven approach to identify areas of greatest
              need and allocate resources effectively across England, Wales,
              Scotland, and Northern Ireland.
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5">
              <LineChart className="size-10 bg-teal-600 text-pale-silver rounded-full p-2.5" />
              <h6>Focused Support</h6>
            </div>

            <p>
              We provide focused support tailored to the specific needs of
              communities, ensuring that every donation has a meaningful impact
              on the lives of individuals and families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
