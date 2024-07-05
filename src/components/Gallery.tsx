import { useGetDonationsQuery } from "@/redux/services/api";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Skeleton from "react-loading-skeleton";
import { useSkeletonTheme } from "@/hooks/useSkeletonTheme";
import { ICause } from "@/types";
import useScreenSize from "@/hooks/useScreenSize";

const Gallery = () => {
  const sliceCounts = {
    xl: 12, // Custom value for xl screens
    lg: 9, // Custom value for lg screens
    md: 6, // Custom value for md screens
    sm: 6, // Custom value for sm screens
  };

  const { sliceCount } = useScreenSize(sliceCounts);
  const { skeletonBaseColor, skeletonHighlightColor } = useSkeletonTheme();

  // Fetching data for donations
  const { isLoading, error, data } = useGetDonationsQuery(undefined);

  // Check if data exists before mapping
  const donationImages = data?.data?.map(
    (donation: ICause) => donation.donationImage
  );

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-dvh">
        Error fetching data.
      </div>
    );
  }

  return (
    <section className="section-wrapper py-20 space-y-10">
      <div className="text-center space-y-2.5">
        <h3>
          <span className="text-flame-orange">Stories</span> Through Images
        </h3>
        <p className="line-clamp-2">
          Explore our dynamic carousel showcasing the impact of your donations.{" "}
          <br /> Each image tells a story of hope, resilience, and generosity.
        </p>
      </div>

      <LightGallery
        elementClassNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        plugins={[lgZoom]}
      >
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div key={index}>
                <Skeleton
                  height={200}
                  baseColor={skeletonBaseColor}
                  highlightColor={skeletonHighlightColor}
                />
              </div>
            ))
          : donationImages
              ?.slice(0, sliceCount)
              ?.map((item: string, index: number) => (
                <img
                  key={index}
                  className="w-full h-full object-cover cursor-pointer rounded scale-100 lg:hover:scale-110 duration-500 lg-thumbnail"
                  src={item}
                  alt={`Cause Image ${index}`}
                />
              ))}
      </LightGallery>
    </section>
  );
};

export default Gallery;
