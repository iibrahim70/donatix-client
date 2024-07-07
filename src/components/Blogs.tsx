import data from "@/assets/json/blogs.json";
import { IBlog } from "@/types";
import BlogCard from "./cards/BlogCard";
import useScreenSize from "@/hooks/useScreenSize";

const Blogs = () => {
  const { sliceCount } = useScreenSize();

  return (
    <section className="section-wrapper py-20 space-y-10">
      <div className="text-center space-y-2.5">
        <h3>
          Stories <span className="text-flame-orange">&</span> Insights
        </h3>
        <p className="line-clamp-2">
          Discover inspiring stories, project updates, and insights from our
          team. <br /> Stay informed about our latest efforts and how you can
          help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data?.slice(0, sliceCount)?.map((item: IBlog) => (
          <BlogCard data={item} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
