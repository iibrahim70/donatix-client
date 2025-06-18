"use client";

import CountUp from "react-countup";

export const ImpactCard = () => {
  return (
    <div className="bg-gray-900 p-7 rounded-xl space-y-5">
      <h5 className="text-center tracking-wide">Our Global Impact</h5>

      <div className="grid grid-cols-2 gap-5">
        <div className="text-center space-y-1">
          <h4 className="text-blue-500">
            <CountUp end={15} duration={5} suffix="+" enableScrollSpy />
          </h4>
          <p className="text-sm">Years of Service</p>
        </div>

        <div className="text-center space-y-1">
          <h4 className="text-blue-500">
            <CountUp
              prefix="$"
              end={48.5}
              decimals={1}
              duration={10}
              suffix="M+"
              enableScrollSpy
            />
          </h4>
          <p className="text-sm">Funds Raised</p>
        </div>

        <div className="text-center space-y-1">
          <h4 className="text-blue-500">
            <CountUp
              end={33.3}
              decimals={1}
              duration={7}
              suffix="K+"
              enableScrollSpy
            />
          </h4>
          <p className="text-sm">Lives Touched</p>
        </div>

        <div className="text-center space-y-1">
          <h4 className="text-blue-500">
            <CountUp end={95} duration={7} suffix="%" enableScrollSpy />
          </h4>
          <p className="text-sm">Direct Impact</p>
        </div>
      </div>
    </div>
  );
};
