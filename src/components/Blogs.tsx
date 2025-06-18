import data from "@/assets/data/blogs.json";
import { IBlog } from "@/types";
import { BlogCard } from "./cards";

const Blogs = () => {
  return (
    <section className="bg-gray-900/20">
      <div className="section-wrapper py-20 space-y-10">
        <div className="text-center space-y-2.5">
          <h3>
            Stories <span className="text-flame-orange">&</span> Insights
          </h3>
          <p>
            Discover inspiring stories, project updates, and insights from our
            team. <br /> Stay informed about our latest efforts and how you can
            help.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data?.slice(0, 8)?.map((item: IBlog) => (
            <BlogCard key={item?._id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
