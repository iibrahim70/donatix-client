import { Link } from "react-router-dom";
import { Button, buttonVariants } from "./ui/button";
import { Progress } from "antd";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaPlay, FaLongArrowAltRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";

const AboutUs = () => {
  const data = [
    "Disaster Relief",
    "Healthcare",
    "Education",
    "Poverty Alleviation",
    "Children and Youth",
    "Veterans and Military",
  ];

  return (
    <section className="section-wrapper">
      {/* first col */}
      <div className="md:w-[80%] xl:w-full mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:relative -top-10 max-sm:gap-y-5 text-pale-silver">
        <div className="bg-teal-800 p-10 flex items-center">
          <div className="space-y-5">
            <h3>Education</h3>
            <p>
              Education is crucial for rebuilding lives. Help us provide
              educational resources and support to those in need.
            </p>

            <Button variant="ghost">Support Education</Button>
          </div>
        </div>

        <div className="bg-deep-blue p-10 flex items-center">
          <div className="space-y-5">
            <h3>Become a Volunteer</h3>
            <p>Join us in making a difference! Every contribution counts.</p>

            <Button size="link" variant="link">
              Join our Cause
            </Button>
          </div>
        </div>

        <div className="relative max-sm:col-span-1 max-xl:col-span-2">
          <img
            src="https://res.cloudinary.com/ibrahim70/image/upload/banner-4_tgdotr.jpg"
            alt="Sample Video"
            className="w-full h-60 sm:h-80 object-cover"
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
      </div>

      {/* second col */}
      <div className="py-20 flex max-lg:flex-col items-center justify-between gap-10 lg:gap-20">
        <div className="lg:w-1/2 space-y-5">
          <p className="text-flame-orange font-caveat text-3xl">About Us</p>
          <h2 className="leading-tight">
            Helping Those <br /> in Need
          </h2>
          <p>
            At our core, we are dedicated to providing support and resources to
            communities in need. Our mission is to stand with these communities,
            offering a helping hand as they rebuild and recover.
          </p>

          <Link
            to="/about-us"
            className={buttonVariants({
              className: "flex items-center gap-2",
            })}
          >
            More About <FaLongArrowAltRight className="size-5" />
          </Link>
        </div>

        <div className="md:w-[70%] lg:w-1/2 bg-deep-teal text-pale-silver p-10 rounded-md shadow-md space-y-5">
          <div className="grid grid-cols-2 gap-5">
            {data?.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <IoMdCheckmarkCircleOutline className="bg-teal-600 text-pale-silver shadow-md size-8 rounded-full p-1.5" />
                <p className="truncate">{item}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3.5">
            <h5>Total Donations</h5>
            <Progress
              percent={45}
              status="active"
              showInfo={false}
              strokeColor="#0d9488"
              trailColor="#1F1F1F"
            />
            <div className="flex justify-between font-semibold">
              <p>Total Collected - $6B</p>
              <p>Target Goal - $10B</p>
            </div>
          </div>

          <Link
            to="/causes"
            className={buttonVariants({
              variant: "destructive",
              className: "flex items-center gap-2",
            })}
          >
            Give Support <FaRegHeart />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
