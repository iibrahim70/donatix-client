import {
  Check,
  HeartHandshake,
  MoveRight,
  Play,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import React from "react";

// A self-contained, custom progress bar component styled with Tailwind CSS.
const CustomProgressBar = ({ percentage, collected, goal }) => {
  return (
    <div className="w-full space-y-2">
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-teal-500 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between font-semibold text-sm text-gray-600 dark:text-gray-400">
        <p>
          Collected:{" "}
          <span className="text-gray-800 dark:text-white">${collected}</span>
        </p>
        <p>
          Goal: <span className="text-gray-800 dark:text-white">${goal}</span>
        </p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const areasOfFocus = [
    "Poverty Alleviation",
    "Disaster Relief",
    "Children and Youth",
    "Healthcare",
    "Veterans and Military",
    "Education",
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="section-wrapper py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column: Narrative and Feature Cards */}
          <div className="flex flex-col gap-12">
            <div className="space-y-4">
              <span className="text-flame-orange font-semibold tracking-wider uppercase">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
                Helping Those in Need, Together.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
                At our core, we are dedicated to providing support and resources
                to communities in need. Our mission is to stand with these
                communities, offering a helping hand as they rebuild and
                recover.
              </p>
              <a
                href="/about-us"
                className="inline-flex items-center gap-2 font-bold text-teal-600 hover:text-teal-500 transition-colors"
              >
                Learn More About Our Mission <MoveRight className="size-5" />
              </a>
            </div>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-teal-600 text-white p-8 rounded-xl flex flex-col gap-4 group">
                <BookOpen className="size-10 opacity-80" />
                <h4 className="font-bold text-xl">Support Education</h4>
                <p className="text-white/80 text-sm">
                  Help us provide vital educational resources and support to
                  children in need.
                </p>
                <a
                  href="/causes"
                  className="inline-flex items-center gap-2 font-semibold text-sm mt-auto opacity-80 group-hover:opacity-100 transition-opacity"
                >
                  Donate Now <ArrowRight className="size-4" />
                </a>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl flex flex-col gap-4 group">
                <Users className="size-10 text-teal-500" />
                <h4 className="font-bold text-xl text-gray-800 dark:text-white">
                  Become a Volunteer
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Join us in making a difference! Every contribution counts.
                </p>
                <a
                  href="/volunteer"
                  className="inline-flex items-center gap-2 font-semibold text-sm mt-auto text-teal-600 group-hover:text-teal-500 transition-colors"
                >
                  Join Our Cause <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Impact and Data */}
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-80 rounded-2xl overflow-hidden group shadow-lg">
              <img
                src="https://res.cloudinary.com/ibrahim70/image/upload/banner-5_deafcq.jpg"
                alt="Volunteers helping the community"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="relative flex items-center justify-center size-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full transition-all duration-300 ease-in-out group-hover:bg-white/30 group-hover:scale-105">
                  <Play className="text-white relative z-10 size-8 ml-1 drop-shadow-lg" />
                </span>
              </button>
            </div>

            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-sm space-y-8">
              <h4 className="font-bold text-xl text-gray-800 dark:text-white">
                Our Areas of Focus
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {areasOfFocus.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 size-6 rounded-full p-1 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-700 space-y-4">
                <h5 className="font-bold text-gray-800 dark:text-white">
                  Total Donations
                </h5>
                <CustomProgressBar
                  percentage={65}
                  collected={"6B"}
                  goal={"10B"}
                />
              </div>

              <a
                href="/donate"
                className="w-full inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-flame-orange hover:bg-rose-700 text-white font-bold transition-colors"
              >
                Give Support <HeartHandshake className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
