import { cn } from "@/lib/utils";
import { MoveRight, Play, BookOpen, ArrowRight, HandHeart } from "lucide-react";
import Link from "next/link";
import { BlurredImage } from "./shared";
import { ImpactCard } from "./cards";
import { caveat } from "@/lib/font";

const AboutUs = () => {
  return (
    <section className="bg-gray-900/20 py-20">
      <div className="section-wrapper grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left Column*/}
        <div className="col-span-3 flex flex-col gap-10">
          <div className="space-y-5">
            <h4 className={cn(caveat?.className, "text-rose-600")}>
              Who We Are
            </h4>

            <h2 className="leading-tight">Helping Those in Need, Together.</h2>

            <p className="text-[15px] max-w-xl">
              At our core, we are dedicated to providing support and resources
              to communities in need. Our mission is to stand with these
              communities, offering a helping hand as they rebuild and recover.
            </p>

            <button className="inline-flex items-center gap-2.5 font-bold text-sm text-teal-600 hover:text-teal-500 transition-colors">
              Learn More About Our Mission <MoveRight className="size-5" />
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-teal-600 text-white p-8 rounded-xl flex flex-col gap-3.5 cursor-pointer group">
              <BookOpen className="size-10 opacity-90" />
              <h6>Support Education</h6>

              <p className="text-white/80">
                Help us provide vital educational resources and support to
                children in need.
              </p>

              <button className="inline-flex items-center gap-2.5 font-semibold text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                Donate Now <ArrowRight className="size-4" />
              </button>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl flex flex-col gap-3.5 cursor-pointer group">
              <HandHeart className="size-10 text-teal-600" />
              <h6>For Non-Profits</h6>

              <p className="text-white/80">
                Non-profits can join us to raise funds and expand their reach.
              </p>

              <Link
                href="/non-profits"
                className="inline-flex items-center gap-2.5 font-semibold text-sm text-teal-600 group-hover:text-teal-500 transition-colors"
              >
                Get Started <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-2 flex flex-col gap-10">
          <div className="relative w-full h-[305px] rounded-xl overflow-hidden group shadow-xl cursor-pointer">
            <BlurredImage
              src="https://res.cloudinary.com/ibrahim70/image/upload/banner-5_deafcq.jpg"
              alt="About Us"
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

          <div>
            <ImpactCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

// 344.266
