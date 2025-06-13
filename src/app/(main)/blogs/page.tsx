import data from "@/assets/data/blogs.json";
import BlogCard from "@/components/cards/BlogCard";
import { IBlog } from "@/types";

const Blogs = () => {
  return (
    <main className="bg-light-pearl dark:bg-midnight-slate py-10">
      <div className="section-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data?.map((item: IBlog) => (
          <BlogCard key={item?._id} data={item} />
        ))}
      </div>
    </main>
  );
};

export default Blogs;
