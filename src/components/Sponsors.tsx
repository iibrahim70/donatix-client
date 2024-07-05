import data from "@/assets/json/sponsors.json";

const Sponsors = () => {
  return (
    <section className="section-wrapper py-20">
      <div className="flex max-lg:flex-col items-center justify-between gap-10">
        <div className="lg:w-1/2 space-y-5">
          <h3>
            Our <span className="text-teal-600">Sponsors</span>
          </h3>
          <p>
            We are grateful for the generous support of our sponsors. Their
            contributions help us to continue our mission.
          </p>
        </div>

        <div className="w-full sm:w-[70%] lg:w-1/2 grid grid-cols-5 gap-5">
          {data?.map((item, index) => (
            <div key={index}>
              <img
                src={item}
                alt={`Sponsor Image ${index}`}
                className="size-14"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
