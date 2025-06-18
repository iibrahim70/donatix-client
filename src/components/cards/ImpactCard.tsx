"use client";

import data from "@/assets/data/static/impact-data.json";
import CountUp from "react-countup";

export const ImpactCard = () => {
  return (
    <div className="bg-gray-900 p-7 rounded-xl space-y-5">
      <h5 className="text-center tracking-wide">Our Global Impact</h5>

      <div className="grid grid-cols-2 gap-5">
        {data?.map((item, index) => (
          <div key={index} className="text-center space-y-1">
            <h4 className="text-blue-500">
              <CountUp
                end={item?.end}
                duration={item?.duration}
                suffix={item?.suffix}
                prefix={item?.prefix}
                decimals={item?.decimals}
                enableScrollSpy
              />
            </h4>
            <p>{item?.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
