import { buttonVariants } from "../ui/button";
import { format } from "date-fns";
import { HeartHandshake } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = format(new Date(), "yyyy");

  return (
    <footer className="bg-black/5">
      <div className="section-wrapper flex flex-col lg:flex-row gap-10 lg:gap-20 py-10 lg:pt-20 lg:pb-10">
        <div className="lg:w-1/3 space-y-3.5">
          <h4>
            <span className="text-rose-600">Don</span>atix
          </h4>

          <p>
            Uniting hearts and hands to build a better future. Every donation,
            no matter how small, fuels impactful change and brings hope to
            communities in need around the globe.
          </p>

          <Link href="/causes" className={buttonVariants({})}>
            Give Support <HeartHandshake />
          </Link>
        </div>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <h6 className="text-white/85">Our Mission</h6>

            <div className="space-y-2">
              <p>About Us</p>
              <p>Our Causes</p>
              <p>Impact Stories</p>
              <p>Voluteer</p>
              <p>Partnerships</p>
              <p>Our Team</p>
            </div>
          </div>

          <div className="space-y-5">
            <h6 className="text-white/85">Get Involed</h6>

            <div className="space-y-2">
              <p>How to Donate</p>
              <p>Start a Fundraiser</p>
              <p>Corporate Giving</p>
              <p>Upcoming Events</p>
              <p>Newsletter</p>
              <p>Contact Us</p>
            </div>
          </div>

          <div className="space-y-5">
            <h6 className="text-white/85">Resources</h6>

            <div className="space-y-2">
              <p>FAQ</p>
              <p>Blog</p>
              <p>Annual Reports</p>
              <p>Press & Media</p>
              <p>Sitemap</p>
              <p>Careers</p>
            </div>
          </div>

          <div className="space-y-5">
            <h6 className="text-white/85">Legal & Policies</h6>

            <div className="space-y-2">
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
              <p>Disclaimer</p>
              <p>Accessibility</p>
              <p>Licenses</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="section-wrapper border border-shadow-gray" />

      {/* botton section */}
      <div className="section-wrapper flex flex-wrap items-center justify-between gap-5 py-5">
        <div className="flex items-center gap-3.5">
          <p>Privacy Policy</p>
          <p>|</p>
          <p>Terms of Use</p>
        </div>

        <p>
          © {currentYear} All Rights Reserved. Developed by {""}
          <a
            target="_blank"
            href="https://iibrahim-dev.vercel.app/"
            className="text-teal-600 font-semibold hover:underline underline-offset-2"
          >
            Ibrahim Khalil
          </a>
        </p>
      </div>
    </footer>
  );
};
