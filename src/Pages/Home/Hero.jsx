/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ViewBtn from "../../Components/Btn/ViewBtn";
import { HomeCarouselData } from "../../Services/Data/CarouselData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  const [homecarouseldata] = useState(HomeCarouselData);

  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        speed={1000}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[70vh] relative object-cover"
      >
        {homecarouseldata.map((e) => {
          return (
            <SwiperSlide key={e.id}>
              <div
                className="pt-[30rem] pb-[15rem] px-[20rem] max-md:pt-[20rem] max-md:pb-[10rem] w-full h-full relative object-cover bg-no-repeat bg-center bg-cover 
                max-xl:px-[5rem] max-md:px-[2rem]"
              >
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-[0.4s] ease-linear"
                  src={e.bannerImg}
                  autoPlay
                  loop
                  muted
                ></video>
                <div className="absolute top-0 left-0 w-full h-full object-cover bg-[white] opacity-[0.7]"></div>
                <div
                  className="relative w-full h-full justify-center flex flex-col border-l-[2px] max-md:border-none border-[#414141] 
                  px-[4rem] gap-[1rem] max-md:justify-center max-md:items-center max-md:text-center animated-content max-md:px-0"
                >
                  <h1 className="text-[5rem] max-xl:text-[4rem] max-md:text-[3rem] font-normal text-[#212121] mr-[60rem] max-2xl:mr-[20rem] max-md:mr-0">
                    {e.title}
                  </h1>
                  <p className="text-[2.5rem] max-md:text-[2rem] font-normal text-[#212121]">
                    {e.desc}
                  </p>
                  <div className="flex items-center w-auto gap-[2rem] mt-[2rem]">
                    <ViewBtn btnTitle={"Learn More"} />
                    <ViewBtn btnTitle={"About Us"} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <style>
        {`
          .swiper-pagination-bullet {
            width: 15px;
            height: 15px;
          }
        `}
      </style>
    </>
  );
};

export default Hero;
