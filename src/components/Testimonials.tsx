import { useGetTestimonialsQuery } from "@/redux/services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ITestimonial } from "@/types";
import { useSkeletonTheme } from "@/hooks/useSkeletonTheme";
import Skeleton from "react-loading-skeleton";
import "swiper/css";

const Testimonials = () => {
  const { skeletonBaseColor, skeletonHighlightColor } = useSkeletonTheme();
  const { isLoading, data, error } = useGetTestimonialsQuery(undefined);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100dvh-64px)]">
        Error fetching data.
      </div>
    );
  }

  return (
    <main className="section-wrapper my-20 space-y-10">
      <div className="text-center space-y-2">
        <p className="font-caveat text-light-coral">Top Doner's</p>
        <p>
          In times of crisis, the generosity of our donors shines bright.
          <br /> Discover the heartfelt words from our top supporters and their
          impact on our mission.
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index}>
                <Skeleton
                  height={200}
                  baseColor={skeletonBaseColor}
                  highlightColor={skeletonHighlightColor}
                />
                <Skeleton
                  height={45}
                  baseColor={skeletonBaseColor}
                  highlightColor={skeletonHighlightColor}
                />
              </div>
            ))}
          </div>
        ) : (
          data?.data?.map((item: ITestimonial) => (
            <SwiperSlide
              key={item?._id}
              className="p-8 space-y-4 shadow-md bg-light-white dark:bg-light-black"
            >
              <p className="line-clamp-4">{item?.testimonial}</p>

              <div className="flex items-center gap-4">
                <div>
                  <img
                    src={item?.userImage}
                    alt={item?.designation}
                    className="rounded-full size-16 object-cover"
                  />
                </div>

                <div>
                  <p className="font-semibold">{item?.fullName}</p>
                  <p>{item?.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </main>
  );
};

export default Testimonials;
