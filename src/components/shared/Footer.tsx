import { cn } from "@/lib/utils";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/90 dark:bg-black/70 text-pale-silver">
      <div
        className={cn(
          "flex flex-col xl:flex-row gap-10 xl:gap-20 py-10 xl:pt-20 xl:pb-10",
          location?.pathname?.includes("/dashboard")
            ? "px-5"
            : "section-wrapper"
        )}
      >
        <div className="xl:w-1/3 space-y-5">
          <h1 className="font-bold text-3xl">
            <span className="text-ruby-red">Giver's</span> Heaven
          </h1>
          <p>
            Empowering Generosity: A Comprehensive Platform for All Types of
            Donations
          </p>
        </div>

        <div className="w-full flex max-xl:flex-wrap justify-between gap-10">
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

          <div className="space-y-5">
            <h6>Connect</h6>

            <div className="space-y-2">
              <p>Contact Us</p>
              <p>Careers</p>
              <p>Newsletter</p>
              <p>Partnerships</p>
              <p>Press</p>
              <p>Feedback</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="section-wrapper border" />

      <div className="section-wrapper flex flex-wrap items-center justify-between gap-5 lg:gap-10 py-5">
        <p>
          All Rights Reserved. © 2024{" "}
          <a
            target="_blank"
            href="https://iibrahim-dev.netlify.app/"
            className="text-blue-700 font-semibold hover:underline hover:underline-offset-2"
          >
            Ibrahim Khalil
          </a>
        </p>

        <div className="flex items-center gap-3">
          <FaTwitter className="size-6" />
          <FaLinkedinIn className="size-6" />
          <FaInstagram className="size-6" />
          <FaFacebook className="size-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
