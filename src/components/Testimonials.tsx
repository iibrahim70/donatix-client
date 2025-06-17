import data from "@/assets/data/testimonials.json";
import TestimonialSlides from "./TestimonialSlides";

const Testimonials = () => {
  return (
    <section className="bg-midnight-slate">
      <div className="section-wrapper py-20 space-y-10">
        <div className="text-center space-y-2.5">
          <h3>
            Voices of <span className="text-vivid-red">Support</span>
          </h3>
          <p>
            Read what our supporters and beneficiaries have to say about <br />
            their experiences and the impact of our work.
          </p>
        </div>

        <TestimonialSlides data={data} />
      </div>
    </section>
  );
};

export default Testimonials;
