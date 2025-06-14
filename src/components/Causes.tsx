import { FaLongArrowAltRight } from "react-icons/fa";
import data from "@/assets/data/causes.json";
import { ICause } from "@/types";
import CauseCard from "./cards/CauseCard";
import Link from "next/link";

const Causes = () => {
  return (
    <section className="bg-light-pearl dark:bg-midnight-slate py-20">
      <div className="section-wrapper space-y-10">
        <div className="space-y-3.5">
          <div className="flex items-center justify-between gap-5">
            <div className="space-y-2">
              <h3>
                Featured <span className="text-teal-600">Causes</span>
              </h3>
            </div>

            <Link
              href="/causes"
              className="max-sm:hidden text-orange-500 font-semibold flex items-center gap-1.5 truncate"
            >
              See More <FaLongArrowAltRight className="size-5" />
            </Link>
          </div>

          <p>
            Explore our impactful initiatives dedicated to bringing positive
            change to communities in need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data?.slice(0, 8)?.map((item) => (
            <CauseCard key={item?._id} data={item as ICause} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Causes;
