import { useTheme } from "@/providers/ThemeProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, buttonVariants } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setIsMenuOpen] = useState(false);
  const { setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  // Get user ID from localStorage
  const userId = localStorage.getItem("userId");

  // Define your navigation items as an array of objects
  const navItems = [
    { label: "All Donations", link: "/donations" },
    { label: "Leaderboard", link: "/leaderboard" },

    // Conditional rendering of Dashboard & Volunteer
    userId ? { label: "Dashboard", link: "/dashboard" } : null,
    userId ? { label: "Volunteer", link: "/volunteer" } : null,

    { label: "About Us", link: "/about-us" },
  ].filter(Boolean); // Filter out falsy values (null, undefined, etc.)

  const handleLogOut = () => {
    localStorage.removeItem("userId");
    navigate("/", { replace: true });
  };

  // stop scrolling when nav is open on small devices
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="bg-pure-white dark:bg-dark-charcoal shadow-md sticky top-0 z-10">
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
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
            <IoMenu className="size-6" />
          </button>

          <Link to="/" className="font-bold text-xl">
            <span className="text-flame-orange">Giver's</span> Heaven
          </Link>
        </div>

        {/* middle */}
        <div className="max-md:hidden flex justify-between gap-5">
          {navItems.map((item, index) => (
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
            <Link to="/signin" className={buttonVariants()}>
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
          onClick={() => setIsMenuOpen(false)}
          className={cn(
            "bg-black/60 fixed top-0 right-0 w-full h-full backdrop-blur-md z-50 md:hidden",
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        ></div>

        {/* mobile navigation content */}
        <div
          className={cn(
            "bg-light-white dark:bg-light-black absolute top-0 left-0 w-1/2 min-h-dvh max-h-dvh z-50 md:hidden px-3 py-10 rounded transition-transform ease-in-out duration-300",
            menuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* closing button */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="flex justify-end mb-5"
          >
            <button>
              <IoClose className="size-6" />
            </button>
          </div>

          {/* navigation items */}
          <div className="flex flex-col gap-1">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item?.link as string}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-deep-black duration-300 transition-all cursor-pointer"
              >
                {item?.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
