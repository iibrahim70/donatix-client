import { buttonVariants } from "../ui/button";
import { FaRegHeart } from "react-icons/fa6";
import { format } from "date-fns";
import Link from "next/link";

const Footer = () => {
  const currentYear = format(new Date(), "yyyy");

  return (
    <footer className="bg-black/90 dark:bg-black/70 text-pale-silver">
      <div className="section-wrapper flex flex-col lg:flex-row gap-10 lg:gap-20 py-10 lg:pt-20 lg:pb-10">
        <div className="lg:w-1/3 space-y-5">
          <h1 className="font-bold text-3xl">
            <span className="text-flame-orange">Giver's</span> Heaven
          </h1>
          <p>
            Empowering Generosity: A Comprehensive Platform for All Types of
            Donations
          </p>

          <Link
            href="/causes"
            className={buttonVariants({
              variant: "destructive",
              className: "flex items-center gap-2",
            })}
          >
            Give Support <FaRegHeart />
          </Link>
        </div>

        <div className="w-full flex max-lg:flex-wrap justify-between gap-10">
          <div className="space-y-5">
            <h6>Explore</h6>

            <div className="space-y-2">
              <p>Get Involved</p>
              <p>About Us</p>
              <p>Volunteer</p>
              <p>Causes</p>
              <p>Projects</p>
              <p>Team</p>
            </div>
          </div>

          <div className="space-y-5">
            <h6>Resources</h6>

            <div className="space-y-2">
              <p>Documentation</p>
              <p>Terms of Service</p>
              <p>Changelog</p>
              <p>Support</p>
              <p>Changelog</p>
              <p>Help Center</p>
            </div>
          </div>

          <div className="space-y-5">
            <h6>Legal</h6>

            <div className="space-y-2">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
              <p>Licenses</p>
              <p>Accessibility Statement</p>
              <p>Disclaimer</p>
            </div>
          </div>

          <div className="space-y-5">
            <h6>Community</h6>

            <div className="space-y-2">
              <p>Events</p>
              <p>News</p>
              <p>Blog</p>
              <p>Forum</p>
              <p>Testimonials</p>
              <p>Stories</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="section-wrapper border border-shadow-gray" />

      <div className="section-wrapper flex flex-wrap items-center justify-between gap-5 lg:gap-10 py-5">
        <div className="flex items-center gap-3">
          <p>Privacy Policy</p>
          <p>|</p>
          <p>Terms of Use</p>
        </div>

        <p>
          All Rights Reserved © {currentYear}{" "}
          <a
            target="_blank"
            href="https://iibrahim-dev.netlify.app/"
            className="text-teal-600 font-semibold hover:underline underline-offset-2"
          >
            Ibrahim Khalil
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
