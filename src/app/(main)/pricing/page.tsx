import data from "@/assets/data/pricing.json";
import PricingPlans from "@/components/PricingPlans";

const Pricing = () => {
  return (
    <main className="bg-midnight-slate py-10">
      <div className="section-wrapper space-y-5">
        <div className="text-center space-y-2.5">
          <h3>Choose Your Plan</h3>
          <p>
            Flexible subscriptions designed to empower both individual donors
            and large organizations.
          </p>
        </div>

        <PricingPlans data={data} />
      </div>
    </main>
  );
};

export default Pricing;
