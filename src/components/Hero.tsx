import { Button, buttonVariants } from "./ui/button";
import { FaRegHeart } from "react-icons/fa6";
import Link from "next/link";
import BlurredImage from "./BlurredImage";
import { cn } from "@/lib/utils";
import { caveat } from "@/app/layout";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-56px)] flex items-center overflow-hidden">
      {/* Background Image */}
      <BlurredImage
        src="https://res.cloudinary.com/ibrahim70/image/upload/hero-banner_vhnwkr.png"
        alt="Hero Background"
        className="object-cover"
        fill
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Foreground Content */}
      <div className="w-full relative z-10 section-wrapper flex flex-col items-start justify-start space-y-5">
        <h4 className={cn(caveat.className, "text-orange-600")}>
          Need Help...
        </h4>

        <h1 className="max-sm:text-[40px] truncate">
          Being <span className="text-teal-600">Life Saver</span> <br /> For
          Someone
        </h1>

        <div className="w-[50%] sm:w-[40%] md:w-[30%] lg:w-[25%] h-10 relative">
          <BlurredImage
            src="https://res.cloudinary.com/ibrahim70/image/upload/poverty_e9hafo.png"
            alt="Poverty Image"
            height={50}
            className="object-contain"
          />
        </div>

        <div className="flex gap-5">
          <Link href="/causes" className={buttonVariants()}>
            Give Support <FaRegHeart className="size-5" />
          </Link>

          <Button variant="outline">Discover</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
