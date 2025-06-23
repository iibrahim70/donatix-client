"use client";

import { useState } from "react";
import { Trophy, Award, Medal, Flame } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ILeaderboard } from "@/types";

const DonorLeaderboard = ({ data }: { data: ILeaderboard[] }) => {
  const [timeRange, setTimeRange] = useState("This Month");

  const topThree = data?.slice(0, 3);
  const others = data?.slice(3);

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {topThree?.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center p-5 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-3.5  border cursor-pointer space-y-5"
          >
            <div
              className={cn(
                "absolute -top-5 size-[30px] flex items-center justify-center rounded-full bg-white ring-2",
                index === 0
                  ? "ring-orange-500"
                  : index === 1
                  ? "ring-amber-500"
                  : "ring-slate-500"
              )}
            >
              {index === 0 ? (
                <Trophy className="text-orange-500 size-5" />
              ) : index === 1 ? (
                <Award className="text-amber-500 size-5" />
              ) : (
                <Medal className="text-slate-500 size-5" />
              )}
            </div>

            <Image
              src={item?.auth_id?.avatar}
              alt={item?.auth_id?.name}
              width={500}
              height={500}
              className={cn(
                "size-20 rounded-full object-cover ring-2 p-0.5 mt-5",
                index === 0
                  ? "ring-orange-500"
                  : index === 1
                  ? "ring-amber-500"
                  : "ring-slate-500"
              )}
            />

            <div className="text-center space-y-1.5">
              <h6>{item?.auth_id?.name}</h6>
              <p className="text-bases font-bold">${item?.amount_donated}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl shadow-xl border">
        <div className="flex flex-col md:flex-row gap-3.5 justify-between items-center p-5">
          <h5>All Contributors</h5>

          <div className="flex p-1 rounded-xl border">
            {["This Month", "All Time"]?.map((item) => (
              <button
                key={item}
                onClick={() => setTimeRange(item)}
                className={cn(
                  "px-4 py-1.5 text-sm font-semibold rounded-md transition-colors duration-300 cursor-pointer",
                  timeRange === item
                    ? "bg-white text-rose-600 shadow-sm"
                    : "text-muted-foreground hover:text-teal-600"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="p-5 text-xs font-semibold uppercase tracking-wider">
                  Rank
                </th>

                <th className="p-5 text-xs font-semibold uppercase tracking-wider">
                  Donor
                </th>

                <th className="p-5 text-xs font-semibold uppercase tracking-wider text-center">
                  Amount Donated
                </th>

                <th className="hidden md:table-cell p-5 text-xs font-semibold uppercase tracking-wider text-center">
                  Total Donation
                </th>

                <th className="hidden lg:table-cell p-5 text-xs font-semibold uppercase tracking-wider text-center">
                  Last Donation
                </th>
              </tr>
            </thead>

            <tbody>
              {others?.map((item, index) => (
                <tr
                  key={item?._id}
                  className="border-t text-muted-foreground even:bg-slate-500/10"
                >
                  <td className="p-3.5 ">{index + 4}</td>

                  <td className="p-3.5">
                    <div className="flex items-center">
                      <Image
                        src={item?.auth_id?.avatar}
                        alt={item?.auth_id?.name}
                        width={500}
                        height={500}
                        className="size-10 rounded-full mr-2.5"
                      />

                      <span>{item?.auth_id?.name}</span>

                      {item?.isRecurring && (
                        <Flame className="ml-1.5 text-orange-500" />
                      )}
                    </div>
                  </td>

                  <td className="p-3.5 text-center">${item?.amount_donated}</td>

                  <td className="hidden md:table-cell p-3.5 text-center">
                    {item?.total_donation}
                  </td>

                  <td className="hidden lg:table-cell p-3.5 text-center">
                    {item?.last_donation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DonorLeaderboard;
