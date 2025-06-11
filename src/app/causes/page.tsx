import data from "@/assets/data/causes.json";
import { ICause } from "@/types";
import CauseCard from "@/components/cards/CauseCard";

const Causes = () => {
  return (
    <main className="bg-light-pearl dark:bg-midnight-slate py-10">
      <div className="section-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data?.map((item: ICause) => (
          <CauseCard key={item?._id} data={item} />
        ))}
      </div>
    </main>
  );
};

export default Causes;
