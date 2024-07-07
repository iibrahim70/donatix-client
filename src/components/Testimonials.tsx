import { useGetTestimonialsQuery } from "@/redux/services/api";
import { ITestimonial } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const { isLoading, data, error } = useGetTestimonialsQuery(undefined);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100dvh-64px)]">
        loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100dvh-64px)]">
        Error fetching data.
      </div>
    );
  }

  return (
    <section className="bg-light-pearl dark:bg-midnight-slate">
      <div className="section-wrapper py-20 space-y-10">
        <div className="text-center space-y-2.5">
          <h3>
            Voices of <span className="text-vivid-red">Support</span>
          </h3>
          <p className="line-clamp-2">
            Read what our supporters and beneficiaries have to say about <br />
            their experiences and the impact of our work.
          </p>
        </div>

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
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data?.data?.map((item: ITestimonial) => (
            <SwiperSlide
              key={item?._id}
              className="bg-light-gray dark:bg-shadow-gray p-8 space-y-4 shadow-md rounded-md border border-gray-300 dark:border-shadow-gray"
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
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
