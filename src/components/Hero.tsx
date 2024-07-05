import { useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Blurhash } from "react-blurhash";
import { cn } from "@/lib/utils";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://res.cloudinary.com/dskofr3ma/image/upload/hero-banner_vhnwkr.png";
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(false);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center text-pale-silver">
      {!imageLoaded && (
        <div className="absolute inset-0 z-0">
          <Blurhash
            hash="L6DcBn00IV}s?^hz9Gpw0g?H4o^k"
            width="100%"
            height="100%"
          />
        </div>
      )}

      <div
        className={cn(
          "absolute inset-0 bg-cover transition-opacity duration-500 ease-in-out",
          imageLoaded
            ? "bg-[url('https://res.cloudinary.com/dskofr3ma/image/upload/hero-banner_vhnwkr.png')] opacity-100"
            : "bg-none opacity-0"
        )}
      ></div>

      <div className="w-full relative z-10 section-wrapper flex flex-col items-start justify-start space-y-5">
        <p className="text-flame-orange">Need Help...</p>
        <h1 className="truncate">
          Being <span className="text-teal-600">Life Saver</span> <br /> For
          Someone
        </h1>
        <img
          src="https://res.cloudinary.com/dskofr3ma/image/upload/poverty_e9hafo.png"
          alt="Poverty Image"
          className="w-[60%] sm:w-[40%] md-w-[30%] lg:w-[25%] h-auto"
        />

        <div className="flex gap-5">
          <Link
            to="/causes"
            className={buttonVariants({
              variant: "destructive",
              className: "flex items-center gap-2",
            })}
          >
            Give Support <FaRegHeart className="size-5" />
          </Link>

          <Button variant="ghost">Discover</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
