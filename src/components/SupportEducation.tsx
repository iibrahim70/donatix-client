import { FaLongArrowAltRight, FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";
import { FaRegHeart } from "react-icons/fa6";

const SupportEducation = () => {
  return (
    <section className="section-wrapper flex max-md:flex-col-reverse items-center justify-between gap-10 md:gap-20 py-20">
      <div className="md:w-[60%] flex flex-col gap-10">
        <div className="space-y-2.5">
          <h3>
            Empower <span className="text-flame-orange">Education</span>
          </h3>
          <p className="line-clamp-2">
            Make a lasting impact with your donation. Empower individuals,{" "}
            <br />
            transform lives, and create brighter futures through education.
          </p>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-center gap-2.5">
            <h6>Community Centers</h6>
          </div>

          <p>
            We establish and support community centers in various regions to
            provide essential services and support to those in need.
          </p>
        </div>

        <div className="flex gap-5">
          <Link
            to="/causes"
            className={buttonVariants({
              variant: "destructive",
              className: "flex items-center gap-2",
            })}
          >
            Give Support <FaRegHeart />
          </Link>

          <Link
            to="/events"
            className={buttonVariants({
              variant: "ghost",
              className: "flex items-center gap-2",
            })}
          >
            Join Events <FaLongArrowAltRight className="size-5" />
          </Link>
        </div>
      </div>

      <div className="md:w-[40%] space-y-8">
        <div className="relative">
          <img
            src="https://res.cloudinary.com/ibrahim70/image/upload/banner-4_tgdotr.jpg"
            alt="Sample Video"
            className="object-cover rounded-3xl"
          />

          <button className="absolute inset-0 flex items-center justify-center">
            <span className="relative flex items-center justify-center size-[70px] bg-flame-orange rounded-full shadow">
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="wave" />
                <span className="wave" />
                <span className="wave" />
              </span>
              <FaPlay className="size-5 text-white relative z-10" />
            </span>
          </button>
        </div>

        <div className="space-y-8">
          <div className="space-y-1.5">
            <h5>Great Donners</h5>
            <p>
              Thank you all for your generosity. Together, we make a difference.
            </p>
          </div>

          <div className="flex items-center justify-start gap-2.5">
            <img
              src="https://images.pexels.com/photos/20436528/pexels-photo-20436528/free-photo-of-portrait-of-woman-in-hijab.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="User Image"
              className="rounded-full size-16 object-cover shadow-md border border-shadow-gray"
            />
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="User Image"
              className="rounded-full size-16 object-cover shadow-md border border-shadow-gray"
            />
            <img
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="User Image"
              className="rounded-full size-16 object-cover shadow-md border border-shadow-gray"
            />

            <div className="rounded-full size-16 object-cover shadow-md border border-shadow-gray flex items-center justify-center bg-vivid-red">
              <p className="font-semibold text-sm">150+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportEducation;
