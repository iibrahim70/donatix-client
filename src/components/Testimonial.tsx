import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      name: "Alexandra Davis",
      designation: "Founder, ABC Foundation",
      review:
        "In the aftermath of disaster, every donation counts. We are deeply thankful for the generous support from our donors, like you, Alexandra. Your contributions have been instrumental in our mission to provide immediate relief and long-term recovery to affected communities.",
      imageUrl:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "James Thompson",
      designation: "Director, XYZ Charity",
      review:
        "James, your dedication to our cause has been nothing short of inspiring. With your support, we have been able to reach and assist those most affected by disasters, providing essential resources and rebuilding hope.",
      imageUrl:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Sophia Roberts",
      designation: "CEO, PQR Fund",
      review:
        "Sophia, your commitment to the well-being of disaster-stricken communities has been remarkable. Your contributions have enabled us to provide crucial healthcare services and support to those in need, making a tangible difference in their lives.",
      imageUrl:
        "https://images.pexels.com/photos/20436528/pexels-photo-20436528/free-photo-of-portrait-of-woman-in-hijab.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Oliver Wilson",
      designation: "President, LMN Foundation",
      review:
        "Oliver, thank you for standing with us in our efforts to protect the environment amidst disasters. Your generous donations have supported our initiatives to preserve natural habitats, ensuring a sustainable future for all.",
      imageUrl:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "Isabella Garcia",
      designation: "Chairperson, RST Charity",
      review:
        "Isabella, your dedication to helping the homeless during disasters has been commendable. Your donations have provided shelter, food, and support to those most vulnerable in our communities, giving them hope for a better tomorrow.",
      imageUrl:
        "https://images.pexels.com/photos/20439891/pexels-photo-20439891/free-photo-of-portrait-of-brunette-woman.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      name: "Nathan Adams",
      designation: "Director, UVW Fund",
      review:
        "Nathan, your unwavering support has been a beacon of hope for those facing adversity after disasters. Your donations have helped us bring relief, comfort, and a sense of normalcy to communities in their darkest hours.",
      imageUrl:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

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
        {data?.map((item) => (
          <SwiperSlide
            key={item?.id}
            className="p-8 space-y-4 shadow-md bg-light-white dark:bg-light-black"
          >
            <p className="text-justify line-clamp-4">{item?.review}</p>

            <div className="flex items-center gap-4">
              <div>
                <img
                  src={item?.imageUrl}
                  alt={item?.designation}
                  className="rounded-full size-16 object-cover"
                />
              </div>

              <div>
                <p className="font-semibold">{item?.name}</p>
                <p>{item?.designation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Testimonial;
