import { TScreenSize } from "@/types";
import { useEffect, useState } from "react";

const useScreenSize = () => {
  // Define breakpoints for different screen sizes
  const breakpoints: Record<TScreenSize, number> = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 4,
  };

  // State to hold the current screen size and slice count
  const [screenSize, setScreenSize] = useState<TScreenSize>("md");
  const [sliceCount, setSliceCount] = useState<number>(breakpoints[screenSize]);

  // Effect to update screen size based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) setScreenSize("xl");
      else if (width >= 1024) setScreenSize("lg");
      else if (width >= 768) setScreenSize("md");
      else setScreenSize("sm");
    };

    // Initial call to set screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect to update slice count whenever screen size changes
  useEffect(() => {
    setSliceCount(breakpoints[screenSize]);
  }, [screenSize]);

  // Return sliceCount as an object to be accessed by the component
  return { sliceCount };
};

export default useScreenSize;
