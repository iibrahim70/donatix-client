"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import navItems from "@/assets/data/nav-items.json";
import { Menu } from "lucide-react";
import { buttonVariants } from "../ui";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="py-2.5 sticky top-0 bg-black/80 shadow-md z-20 ">
      <div className="section-wrapper flex items-center justify-between gap-10">
        {/* left side */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden"
          >
            <Menu />
          </button>

          <Link href="/" className="font-semibold text-lg md:text-xl">
            <span className="text-rose-600">Giv</span>ify
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
          {/* navigation items */}
          <div className="flex flex-col gap-1.5">
            {navItems?.map((item, index) => (
              <Link
                key={index}
                href={item?.path}
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="px-3.5 py-1.5 hover:bg-red-500 rounded duration-300 transition-colors cursor-pointer text-muted-foreground hover:text-foreground"
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
