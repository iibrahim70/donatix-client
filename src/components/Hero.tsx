import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { BlurredImage } from "./shared";
import { cn } from "@/lib/utils";
import { HeartHandshake } from "lucide-react";
import { caveat } from "@/lib/font";

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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Foreground Content */}
      <div className="w-full relative z-10 section-wrapper flex flex-col items-start justify-start space-y-5">
        <h4 className={cn(caveat?.className, "text-rose-600")}>
          Help Starts With You
        </h4>

        <h1 className="max-sm:text-[40px] truncate">
          Be a <span className="text-teal-600">Lifeline</span> for <br /> Those
          in Need
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
            Give Support <HeartHandshake className="size-5" />
          </Link>

          <Link
            href="/non-profits"
            className={buttonVariants({ variant: "outline" })}
          >
            Start Fundraising
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
