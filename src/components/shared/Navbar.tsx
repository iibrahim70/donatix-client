"use client";

import { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { IoMenu, IoClose } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useTheme } from "next-themes";
import navItems from "../../assets/data/navItems.json";

const Navbar = () => {
  const { setTheme } = useTheme();
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
            <span className="text-red-500">Giver's</span> Heaven
          </Link>
        </div>

        {/* middle */}
        <div className="max-lg:hidden flex justify-between gap-3.5">
          {navItems?.map((item, index) => (
            <Link key={index} href={item?.path}>
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

          {/* theme switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
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
