import { Play } from "lucide-react";
import BlurredImage from "./shared/BlurredImage";
import { SupportEducationCard } from "./cards";

const SupportEducation = () => {
  return (
    <section className="bg-gray-900/20 py-20">
      <div className="section-wrapper grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left side */}
        <div className="flex flex-col gap-8">
          <div className="space-y-3.5">
            <h2 className="leading-[50px]">
              Support Education, Transform Lives
            </h2>

            <p>
              Help unlock brighter futures by funding essential educational
              resources. Your support fuels opportunity, growth, and long-term
              impact for students and communities.
            </p>
          </div>

          <SupportEducationCard />
        </div>

        {/* Right side */}
        <div className="relative w-full h-[400px] lg:h-[600px] border rounded-xl overflow-hidden group shadow-xl cursor-pointer">
          <BlurredImage
            src="https://res.cloudinary.com/ibrahim70/image/upload/banner-4_tgdotr.jpg"
            alt="A student smiling and holding books"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/25" />

          <button className="absolute inset-0 flex items-center justify-center cursor-pointer">
            <span className="relative flex items-center justify-center size-[70px] bg-orange-600 rounded-full transition-all duration-300 ease-in-out group-hover:scale-110">
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="wave" />
                <span className="wave" />
                <span className="wave" />
              </span>
              <Play className="text-white size-6 z-10" />
            </span>
          </button>

          <div className="absolute bottom-7 left-7">
            <h5>Watch Our Story</h5>

            <p>See how your contributions create real change.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportEducation;
