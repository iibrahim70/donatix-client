import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { FaRegHeart } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import DynamicBlurImage from "./DynamicBlurImage";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-70px)] flex items-center text-white overflow-hidden">
      {/* Background Image */}
      <DynamicBlurImage
        src="https://res.cloudinary.com/ibrahim70/image/upload/hero-banner_vhnwkr.png"
        alt="Hero Background"
        className="object-cover z-0"
        priority
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/25 z-0" />

      {/* Foreground Content */}
      <div className="w-full relative z-10 section-wrapper flex flex-col items-start justify-start space-y-5">
        <p className="text-flame-orange font-caveat text-3xl">Need Help...</p>
        <h1 className="max-sm:text-[40px] truncate">
          Being <span className="text-teal-600">Life Saver</span> <br /> For
          Someone
        </h1>

        <div className="w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] h-10 relative">
          <DynamicBlurImage
            src="https://res.cloudinary.com/ibrahim70/image/upload/poverty_e9hafo.png"
            alt="Poverty Image"
            className="object-contain"
          />
        </div>

        <div className="flex gap-5">
          <Link
            href="/causes"
            className={buttonVariants({
              variant: "destructive",
              className: "flex items-center gap-2",
            })}
          >
            Give Support <FaRegHeart />
          </Link>

          <Button variant="ghost">Discover</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
