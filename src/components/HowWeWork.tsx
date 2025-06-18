import data from "@/assets/data/static/how-we-works.json";
import {
  Database,
  Home,
  LineChart,
  FileText,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

interface IconMap {
  [key: string]: LucideIcon; // Use LucideIcon type for components
}

// Explicitly define the iconMap with typed keys
const iconMap: IconMap = { Home, Database, LineChart, FileText };

const HowWeWork = () => {
  return (
    <section className="bg-midnight-slate">
      <div className="section-wrapper space-y-10 py-20">
        <div className="text-center space-y-2.5">
          <h3>
            How it <span className="text-rose-600">Works</span>
          </h3>

          <p>
            Make a difference in just a few simple steps — fast, secure, and
            impactful giving.
          </p>
        </div>

        <div className="flex items-center justify-between gap-10 md:gap-20">
          {/* Left side  */}
          <div className="md:w-5/12">
            <div>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 450 525"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Background decorative shape */}
                <path
                  d="M208.29 525 C188.75 524.36 156.54 525.02 135 525 C60.44 525 0 464.56 0 390 V 50 C0 22.39 22.39 0 50 0 H270.33 C302.32 5.16 339.68 18.39 361.71 45 C402.14 94.03 392.05 174.45 400.16 233.27 C411.25 312.48 447.85 365.34 449.59 445.1 C450.21 474.38 450.12 500.54 450 525 H208.29 Z"
                  className="fill-emerald-900/90"
                />

                {/* Main foreground shape */}
                <path
                  d="M0 175 H270 V475 C270 502.614 247.614 525 220 525 H0 V175 Z"
                  className="fill-emerald-800/85"
                />

                {/* Flowing path to connect four steps */}
                <path
                  d="M400 50 C340 90, 320 150, 340 210 S 260 280, 200 320 S 150 420, 80 470"
                  strokeWidth="3.5"
                  className="stroke-teal-600"
                  strokeDasharray="6 12"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;200"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </path>

                {/* Markers for each of the four steps */}
                <circle
                  cx="400"
                  cy="50"
                  r="8"
                  strokeWidth="2"
                  className="fill-[#D1D5DB]/80 stroke-[#4B5563]"
                />

                <circle
                  cx="340"
                  cy="210"
                  r="8"
                  strokeWidth="2.5"
                  stroke="white"
                />

                <circle
                  cx="200"
                  cy="320"
                  r="8"
                  strokeWidth="2.5"
                  stroke="white"
                />

                <circle
                  cx="70"
                  cy="470"
                  r="8"
                  strokeWidth="2"
                  className="fill-[#D1D5DB]/80 stroke-[#4B5563]"
                />
              </svg>
            </div>
          </div>

          {/* Right side  */}
          <div className="md:w-7/12">
            <div className="flex flex-col gap-5">
              {data?.map((item, index) => {
                const IconComponent = iconMap[item?.icon];

                return (
                  <div key={index} className="flex gap-5 group cursor-pointer">
                    {/* Left column with icon and connecting line */}
                    <div className="flex flex-col items-center gap-3.5">
                      {IconComponent && (
                        <div className="size-12 bg-gray-800 rounded-full flex items-center justify-center text-teal-600 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-500">
                          <IconComponent className="size-6" />
                        </div>
                      )}

                      {/* Vertical line connector */}
                      {index < data?.length - 1 && (
                        <div className="w-0.5 flex-grow bg-gray-800" />
                      )}
                    </div>

                    {/* Right column with text content and metric */}
                    <div className="flex flex-col gap-3.5 pb-5 border-b border-black/50 group-last:border-none">
                      <div className="space-y-2.5">
                        <h6 className="text-white/80">{item?.title}</h6>

                        <p className="text-base">{item?.description}</p>
                      </div>

                      {/* Impact Highlight Metric */}
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="size-5 text-teal-600 transition-colors duration-500" />
                        <p className="font-medium">{item?.metric}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
