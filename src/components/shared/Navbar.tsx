import { useEffect, useState } from "react";
import { useTheme } from "@/providers/ThemeProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaUser,
  FaLock,
} from "react-icons/fa";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  // Get user ID from localStorage
  const userId = localStorage.getItem("userId");

  // Define your navigation items as an array of objects
  const navItems = [
    { label: "Causes", link: "/causes" },
    { label: "Leaderboard", link: "/leaderboard" },
    { label: "Blogs", link: "/blogs" },
    { label: "About Us", link: "/about-us" },
    { label: "Contact Us", link: "/contact-us" },
  ];

  const handleLogOut = () => {
    localStorage.removeItem("userId");
    navigate("/", { replace: true });
  };

  // handle scroll event to toggle sticky class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 52) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // stop scrolling when nav is open on small devices
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav>
      {/* top section with social media icons and contact info */}
      <div className="bg-dark-charcoal text-pale-silver">
        <div
          className={cn(
            "section-wrapper flex items-center justify-between py-3.5"
          )}
        >
          {/* left side */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3.5">
              <FaTwitter className="size-[18px] text-teal-500" />
              <FaLinkedinIn className="size-[18px] text-teal-500" />
              <FaInstagram className="size-[18px] text-teal-500" />
              <FaFacebook className="size-[18px] text-teal-500" />
            </div>

            <div className="max-md:hidden flex items-center gap-3.5">
              <FaPhone className="size-4" />
              <p>+1-1323-4353-555</p>
            </div>
          </div>

          {/* right side */}
          <div className="flex items-center gap-8 text-sm">
            <div className="max-lg:hidden flex items-center gap-3">
              <p>FAQ</p>

              <p>|</p>
              <p>What We Do</p>
              <p>|</p>
              <p>Become A Volunteer</p>
            </div>

            <div className="flex items-center gap-3.5">
              <Link to="/signin" className="flex items-center gap-1.5">
                <FaLock />
                <p>Signin</p>
              </Link>

              <Link to="/signup" className="flex items-center gap-1.5">
                <FaUser />
                <p>Signup</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder to prevent content jump */}
      <div className={cn(isSticky && "h-16")} />

      {/* main navigation bar */}
      <div
        className={cn(
          "bg-pure-white dark:bg-midnight-slate shadow-md top-0 z-20 transition-all duration-300 ease-in-out",
          isSticky &&
            "dark:bg-dark-charcoal transition-colors ease-in-out duration-300 fixed top-0 left-0 right-0"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between py-3",
            location?.pathname?.includes("/dashboard")
              ? "px-5"
              : "section-wrapper"
          )}
        >
          {/* left side */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="lg:hidden"
            >
              <IoMenu className="size-6" />
            </button>

            <Link to="/" className="font-bold text-lg md:text-xl">
              <span className="text-flame-orange">Giver's</span> Heaven
            </Link>
          </div>

          {/* middle */}
          <div className="max-lg:hidden flex justify-between gap-5">
            {navItems?.map((item, index) => (
              <Link key={index} to={item?.link as string}>
                {item?.label}
              </Link>
            ))}
          </div>

          {/* right side */}
          <div className="flex items-center justify-between gap-3">
            {userId ? (
              <Button onClick={handleLogOut}>Logout</Button>
            ) : (
              <Link
                to="/signin"
                className={buttonVariants({
                  variant: "outline",
                })}
              >
                Login
              </Link>
            )}

            {/* theme switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-md" variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* mobile navigation overlay */}
          <div
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={cn(
              "bg-black/50 fixed top-0 left-0 w-full h-full backdrop-blur-md z-50 lg:hidden",
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            )}
          ></div>

          {/* mobile navigation content */}
          <div
            className={cn(
              "bg-pure-white dark:bg-dark-charcoal absolute top-0 left-0 w-1/2 min-h-screen max-h-screen z-50 lg:hidden px-3 py-10 rounded transition-transform ease-in-out duration-300",
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            {/* closing button */}
            <div
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex justify-end mb-5"
            >
              <button>
                <IoClose className="size-6" />
              </button>
            </div>

            {/* navigation items */}
            <div className="flex flex-col gap-1">
              {navItems?.map((item, index) => (
                <Link
                  key={index}
                  to={item?.link as string}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="px-4 py-2 rounded hover:bg-pale-silver dark:hover:bg-midnight-slate duration-300 transition-all cursor-pointer"
                >
                  {item?.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
