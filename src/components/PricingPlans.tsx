"use client";

import { useState } from "react";
import { Badge, Button } from "./ui";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { IPrice } from "@/types";

const Pricingitems = ({ data }: { data: IPrice[] }) => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <>
      {/* monthly yearly toggle */}
      <div className="flex items-center justify-center gap-3.5 py-1.5 pb-7">
        <span className="font-semibold text-white/80">Monthly</span>

        <label
          htmlFor="billing-cycle-toggle"
          className="relative inline-flex items-center cursor-pointer group"
        >
          <input
            type="checkbox"
            id="billing-cycle-toggle"
            className="sr-only peer"
            onChange={(e) =>
              setBillingCycle(e?.target?.checked ? "yearly" : "monthly")
            }
          />

          <div
            className="w-12 h-7 rounded-full bg-gray-300 shadow-inner
        peer peer-checked:bg-teal-600 peer-checked:group-hover:bg-teal-700
        group-hover:bg-gray-400 after:content-[''] after:absolute after:top-1 after:left-[4px]
        after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all duration-300 peer-checked:after:translate-x-full peer-checked:after:border-white"
          />
        </label>

        <div className="inline-flex items-center gap-2.5">
          <span className="font-semibold text-white/80">Yearly</span>
          <Badge>Save 17%</Badge>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {data?.map((item) => (
          <div
            key={item?._id}
            className={cn(
              "border-2 p-10 rounded-xl shadow-xl transform transition-transform hover:scale-105 duration-300 relative cursor-pointer space-y-2.5",
              item?.highlight && "border-2 border-emerald-600"
            )}
          >
            {item?.highlight && (
              <span className="bg-emerald-600 text-sm font-extrabold px-3.5 py-2 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 shadow-lg">
                MOST POPULAR
              </span>
            )}

            <h5 className="text-shadow-white">{item?.title}</h5>

            <div className="flex items-end gap-0.5">
              <h2 className="text-teal-600">
                {billingCycle === "monthly"
                  ? item?.price?.monthly
                  : item?.price?.yearly}
              </h2>

              <span className="text-lg font-medium text-muted-foreground">
                /{billingCycle === "monthly" ? "mo" : "yr"}
              </span>
            </div>

            <p className="text-gray-200 py-1.5">{item?.description}</p>

            <ul className="text-muted-foreground pb-5">
              {item?.features?.map((feature) => (
                <li key={feature} className="flex items-center gap-1.5">
                  <Check className="text-emerald-600 size-5" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant="secondary"
              className="absolute bottom-5 right-5 left-5"
            >
              {item?.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pricingitems;
