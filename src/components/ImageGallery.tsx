import { GridGallery } from "./ui";

const ImageGallery = () => {
  return (
    <section className="bg-midnight-slate py-20">
      <div className="container space-y-10">
        <div className="text-center space-y-2.5">
          <h3>Stories Through Images</h3>

          <p className="text-[15px]">
            Explore our dynamic carousel showcasing the impact of your
            donations. Each image tells a story of hope, resilience, and
            generosity.
          </p>
        </div>

        <GridGallery />
      </div>
    </section>
  );
};

export default ImageGallery;
