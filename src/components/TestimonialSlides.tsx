"use client";

import { ITestimonial } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TestimonialSlides = ({ data }: { data: ITestimonial[] }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      autoplay={{
        delay: 2000,
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
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {data?.map((item) => (
        <SwiperSlide
          key={item?._id}
          className="bg-light-gray dark:bg-shadow-gray p-8 space-y-4 shadow-md rounded-md border border-gray-300 dark:border-shadow-gray"
        >
          <p className="line-clamp-4">{item?.testimonial}</p>

          <div className="flex items-center gap-4">
            <div>
              <img
                src={item?.userImage}
                alt={item?.fullName}
                className="rounded-full size-16 object-cover"
              />
            </div>

            <div>
              <p className="font-semibold">{item?.fullName}</p>
              <p>{item?.designation}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlides;
