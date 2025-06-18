"use client";

import { ITestimonial } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

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
          className="bg-shadow-gray p-8 space-y-5 shadow-md rounded-lg"
        >
          <p className="line-clamp-4">{item?.testimonial}</p>

          <div className="flex items-center gap-4">
            <div>
              <Image
                src={item?.auth_id?.avatar}
                alt={item?.auth_id?.fullName}
                width={500}
                height={500}
                className="rounded-full size-16 object-cover"
              />
            </div>

            <div>
              <h6 className="font-semibold text-lg">
                {item?.auth_id?.fullName}
              </h6>

              <p>{item?.designation}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlides;
