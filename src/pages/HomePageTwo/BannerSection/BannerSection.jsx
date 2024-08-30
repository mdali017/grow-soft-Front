import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BannerSection = () => {
  const bannerSectionData = [
    {
      id: 1,
      title: "Innovate Your Business",
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Technology at Your Fingertips",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Transform Your Workflow",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      title: "Innovative Design Solutions",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      title: "Empower Your Team",
      img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="min-h-[400px] -">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerSectionData.map((banner) => (
          <SwiperSlide key={banner.id}>
            <header>
              <div
                className="w-full bg-center bg-cover h-[38rem] "
                style={{
                  backgroundImage: `url(${banner.img})`,
                }}
              >
                <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                  <div className="text-center">
                    <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                      {banner.title}
                    </h1>
                    <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      Start project
                    </button>
                  </div>
                </div>
              </div>
            </header>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSection;
