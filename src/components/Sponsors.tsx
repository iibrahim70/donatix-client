import data from "@/assets/data/sponsors.json";
import { Button } from "./ui";
import { MoveRight } from "lucide-react";

const Sponsors = () => {
  return (
    <section className="bg-midnight-slate py-20">
      <div className="section-wrapper space-y-10">
        <div className="text-center space-y-3.5">
          <h3>Our Valued Sponsors</h3>
          <p>
            We are incredibly grateful for the support of these organizations{" "}
            <br />
            and individuals who help make our mission possible.
          </p>
        </div>

        {/* Sponsor Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 items-center justify-items-center">
          {data?.map((item) => (
            <div
              key={item?._id}
              className="flex items-center justify-center bg-transparent border-2 rounded-xl shadow-xl transform transition-all duration-300 hover:border-emerald-600 hover:scale-105 hover:shadow-2xl w-full h-30 cursor-pointer p-5"
            >
              <img
                src={item?.logo}
                alt={`${item?.name} Logo`}
                className="rounded-lg object-contain filter grayscale hover:grayscale-0 transition-filter duration-300"
              />
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-bl from-emerald-600 to text-emerald-600 mt-[60px] cursor-pointer text-center mx-auto rounded-xl p-10 shadow-xl space-y-3.5 max-w-4xl transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
          <h4 className="text-white">Interested in Becoming a Sponsor?</h4>

          <p className="text-white/70">
            Partner with us and make a tangible impact. Learn how your <br />
            organization can contribute to a better future.
          </p>

          <Button>
            Learn More <MoveRight className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
