"use client";

import { useState } from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import navItems from "../../assets/data/navItems.json";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-background dark:bg-background shadow-md sticky top-0 z-20">
      <div className="section-wrapper flex items-center justify-between py-2.5">
        {/* left side */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden"
          >
            <IoMenu className="size-6" />
          </button>

          <Link href="/" className="font-semibold text-lg md:text-xl">
            <span className="text-rose-500">Giv</span>ify
          </Link>
        </div>

        {/* middle */}
        <div className="max-lg:hidden flex justify-between gap-3.5">
          {navItems?.map((item, index) => (
            <Link
              key={index}
              href={item?.path}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-[15px]"
            >
              {item?.label}
            </Link>
          ))}
        </div>

        {/* right side */}
        <div className="flex items-center justify-between gap-3.5">
          <Link
            href="/signin"
            className={buttonVariants({
              variant: "outline",
            })}
          >
            Login
          </Link>
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
            "bg-background dark:bg-background absolute top-0 left-0 w-1/2 min-h-screen max-h-screen z-50 lg:hidden px-3 py-10 rounded transition-transform ease-in-out duration-300",
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
                href={item?.path}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="px-4 py-2 rounded duration-300 transition-all cursor-pointer"
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
