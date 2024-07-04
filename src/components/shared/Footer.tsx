import { cn } from "@/lib/utils";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black/90 dark:bg-black/70 text-pale-silver py-10 lg:py-20">
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-5 gap-10",
          location?.pathname?.includes("/dashboard")
            ? "px-5"
            : "section-wrapper"
        )}
      >
        {/* left side */}
        <div className="col-span-2 space-y-5">
          <h1 className="font-bold text-3xl">
            <span className="text-ruby-red">Giver's</span> Heaven
          </h1>
          <p>
            Building Hope Together: A Platform for Post-Disaster Relief
            Donations
          </p>

          <div className="flex items-center gap-3">
            <FaFacebook className="size-7" />
            <FaLinkedin className="size-7" />
            <FaTwitter className="size-7" />
          </div>
        </div>

        {/* right side */}
        <div className="col-span-3 flex items-start max-md:flex-col justify-between gap-10">
          <div className="space-y-5">
            <h5>Get Involved</h5>

            <div className="space-y-2">
              <p>About Us</p>
              <p>Volunteer</p>
              <p>Causes</p>
              <p>Projects</p>
              <p>Team</p>
            </div>
          </div>

          <div className="space-y-5">
            <h5>Resources</h5>

            <div className="space-y-2">
              <p>Licenses</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Changelog</p>
            </div>
          </div>

          <div className="space-y-5">
            <h5>Contact</h5>

            <div className="space-y-2">
              <p>Joy Bangla Road, Gazipur</p>
              <p>xyz@gmail.com</p>
              <p>111 2222 0000</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
