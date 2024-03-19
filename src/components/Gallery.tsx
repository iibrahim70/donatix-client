import { useGetDonationsQuery } from "@/redux/services/api";
import { IDonation } from "@/types";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Skeleton from "react-loading-skeleton";
import { useSkeletonTheme } from "@/hooks/useSkeletonTheme";

const Gallery = () => {
  const { skeletonBaseColor, skeletonHighlightColor } = useSkeletonTheme();

  // Fetching data for donations
  const { isLoading, error, data } = useGetDonationsQuery(undefined);

  // Check if data exists before mapping
  const donationImages = data?.data?.map(
    (donation: IDonation) => donation.donationImage
  );

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-dvh">
        Error fetching data.
      </div>
    );
  }

  return (
    <section className="bg-light-white dark:bg-light-black">
      <div className="section-wrapper py-20 space-y-10">
        <div className="text-center space-y-2">
          <p className="font-caveat text-light-coral">Stories Through Images</p>
          <p>
            Explore our dynamic carousel showcasing the impact of your
            donations. <br /> Each image tells a story of hope, resilience, and
            generosity.
          </p>
        </div>

        <LightGallery
          elementClassNames="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-5 gap-10 xl:gap-5"
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
            : donationImages.map((item: string, index: number) => (
                <img
                  key={index}
                  className="w-full h-full object-cover cursor-pointer rounded hover:scale-110 duration-500 lg-thumbnail"
                  src={item}
                  alt={`Donation Image ${index}`}
                />
              ))}
        </LightGallery>
      </div>
    </section>
  );
};

export default Gallery;
