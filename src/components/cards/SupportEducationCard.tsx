"use client";

import { useState } from "react";
import data from "@/assets/data/avatars.json";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui";

export const SupportEducationCard = () => {
  const [amount, setAmount] = useState("");
  const presetAmounts = [10, 25, 50, 100, 250, 500, 750, 1000];

  return (
    <>
      <Card
        className="bg-transparent cursor-pointer"
        style={{ boxShadow: "5px 5px 5px oklch(21% 0.034 264.665)" }}
      >
        <CardHeader>
          <div className="grid grid-cols-4 gap-2.5">
            {presetAmounts?.map((value) => (
              <button
                key={value}
                onClick={() => setAmount(String(value))}
                className={cn(
                  "flex items-center justify-center border rounded-xl py-2 cursor-pointer hover:border-teal-600 transition-colors duration-300",
                  amount === String(value) && "bg-teal-600"
                )}
              >
                ${value}
              </button>
            ))}
          </div>
        </CardHeader>

        <CardContent className="space-y-2.5">
          <div className="relative">
            <input
              type="number"
              placeholder="Or enter a custom amount"
              value={amount}
              onChange={(e) => setAmount(e?.target?.value)}
              className="border rounded-xl px-3.5 py-2.5 hover:border-rose-600 focus:outline-none transition-colors duration-500 w-full"
            />

            <Button className="max-lg:hidden absolute top-1/2 -translate-y-1/2 right-2.5">
              Donate Now
            </Button>
          </div>

          <Button className="lg:hidden w-full">Donate Now</Button>
        </CardContent>

        <CardFooter>
          <p>
            Donate anonymously or{" "}
            <Link
              href="/signin"
              className="text-blue-600 hover:text-blue-500 underline underline-offset-2 transition-colors duration-300"
            >
              sign in
            </Link>{" "}
            to track your impact.
          </p>
        </CardFooter>
      </Card>

      {/* Social Proof Section */}
      <div className="flex max-lg:flex-col items-center gap-5">
        <div className="flex items-center cursor-pointer">
          <div className="flex -space-x-3.5">
            {data?.map((src, index) => (
              <Avatar key={index} className="size-[60px] ring-2 ring-white/50">
                <Image
                  src={src}
                  alt={`Donor ${index + 1}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </Avatar>
            ))}
          </div>

          <div className="size-[60px] rounded-full bg-gray-800 flex items-center justify-center ring-2 ring-white/50 -ml-3.5 z-10">
            <span className="font-semibold text-xs">150+</span>
          </div>
        </div>

        <p>
          Your gift of{" "}
          <span className="font-semibold text-white">${amount}</span> helps
          provide essential school supplies for students in need.
        </p>
      </div>
    </>
  );
};
