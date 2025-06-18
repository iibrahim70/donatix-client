import data from "@/assets/data/testimonials.json";
import TestimonialSlides from "./TestimonialSlides";
import { TestimonialCard } from "./cards";
import Link from "next/link";
import { buttonVariants } from "./ui";
import { HeartHandshake } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="bg-midnight-slate">
      <div className="section-wrapper py-20 space-y-10">
        <div className="text-center space-y-2.5">
          <h3>
            Voices of <span className="text-vivid-red">Support</span>
          </h3>
          <p>
            Here's what people like you are saying about supporting our <br />{" "}
            mission and the impact we're making together.
          </p>
        </div>

        {/* <TestimonialSlides data={data} /> */}

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <TestimonialCard data={data} />
        </div>

        {/* Call to Action Section */}
        <div className="bg-blue-600 mt-[60px] cursor-pointer text-center mx-auto rounded-xl p-10 shadow-xl space-y-3.5 max-w-4xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
          <h4 className="text-white/95">Ready to make a difference?</h4>

          <p>
            Join our growing community of impactful donors and help us continue
            our mission.
          </p>

          <Link href="/causes" className={buttonVariants()}>
            Give Support <HeartHandshake className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
