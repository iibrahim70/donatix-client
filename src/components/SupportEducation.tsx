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
            <h2 className="leading-tight">
              Support Education, Transform Lives
            </h2>

            <p className="text-base max-w-xl">
              Help unlock brighter futures by funding essential educational
              resources. Your support fuels opportunity, growth, and long-term
              impact for students and communities.
            </p>
          </div>

          <SupportEducationCard />
        </div>

        {/* Right side */}
        <div className="relative w-full h-[400px] lg:h-[600px] rounded-xl overflow-hidden group shadow-xl cursor-pointer">
          <BlurredImage
            src="https://res.cloudinary.com/ibrahim70/image/upload/banner-4_tgdotr.jpg"
            alt="Support Education"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/20" />

          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-100 animate-wave" />

            <span className="relative flex items-center justify-center size-20 bg-white/20 backdrop-blur-md ring-2 ring-white/50 rounded-full transition-all duration-500 ease-in-out group-hover:bg-white/30 group-hover:scale-105">
              <Play className="relative z-10 size-8 drop-shadow-lg" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportEducation;
