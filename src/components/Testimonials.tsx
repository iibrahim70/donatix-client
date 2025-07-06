import data from "@/assets/data/testimonials.json";
import { TestimonialCard } from "./cards";

const Testimonials = () => {
  return (
    <section className="bg-midnight-slate">
      <div className="container py-20 space-y-10">
        <div className="text-center space-y-2.5">
          <h3>Voices of Support</h3>

          <p className="text-[15px]">
            Here&apos;s what people like you are saying about supporting our
            mission and the impact we&apos;re making together.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.slice(0, 6)?.map((item) => (
            <TestimonialCard key={item?._id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
