"use client";

import Image from "next/image";
import { Avatar, Input } from "../ui";
import { BellDot, Menu, Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarNavigation } from "./SidebarNavigation";
import { SidebarFooter } from "./SidebarFooter";

export const Header = () => {
  const [menuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between gap-5 border-b-2 shadow-xl py-1 px-10">
        <div className="max-lg:hidden relative w-1/4">
          <Input placeholder="Search" />

          <button
            type="button"
            className="absolute inset-y-0 right-2.5 cursor-pointer flex items-center text-white/70"
          >
            <Search className="size-5" />
          </button>
        </div>

        <div className="lg:hidden">
          <button
            className="p-2 bg-white/90 rounded-full shadow-xl"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="text-black size-5" />
          </button>
        </div>

        <div className="flex items-center gap-3.5">
          <button className="p-1.5 bg-gray-700 rounded-full shadow-xl">
            <BellDot className="size-5" />
          </button>

          <Avatar className="size-11">
            <Image
              src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="User Image"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </Avatar>
        </div>
      </header>

      {/* mobile navigation overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={cn(
          "bg-white/25 dark:bg-black/30 fixed top-0 right-0 w-full h-full backdrop-blur-md z-50 cursor-pointer lg:hidden",
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      ></div>

      {/* mobile navigation content */}
      <div
        className={cn(
          "bg-midnight-slate absolute top-0 left-0 w-1/2 md:w-3/12 min-h-dvh max-h-dvh z-50 lg:hidden px-3 py-10 rounded transition-transform ease-in-out duration-300 flex flex-col justify-between",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="space-y-8">
          <SidebarHeader />
          <SidebarNavigation />
        </div>

        <SidebarFooter />
      </div>
    </>
  );
};
