import data from "@/assets/data/causes.json";
import { ICause } from "@/types";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { CauseCard } from "./cards";

const Causes = () => {
  return (
    <section className="bg-midnight-slate py-20">
      <div className="container space-y-10">
        <div className="space-y-3.5">
          <div className="flex items-center justify-between gap-5">
            <h3>Featured Causes</h3>

            <Link
              href="/causes"
              className="max-md:hidden hover:underline hover:underline-offset-4 text-blue-600 hover:text-blue-500 transition-colors duration-300 text-[15px] font-semibold flex items-center gap-1.5 text-whit"
            >
              <span>Explore Causes</span>
              <MoveRight className="size-5" />
            </Link>
          </div>

          <p className="text-[15px]">
            Discover powerful campaigns making a real difference. Join us to
            support and transform lives today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data?.slice(0, 8)?.map((item) => (
            <CauseCard key={item?._id} data={item as ICause} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Causes;
