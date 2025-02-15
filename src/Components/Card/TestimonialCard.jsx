/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "100%",
};

const TestimonialCard = ({ testimonialData }) => {
  return (
    <>
      <div className="px-[10rem] py-[6rem] relative bg-[#212140] object-cover w-full h-full max-xl:px-[5rem] max-md:px-[2rem]">
        <div className="flex flex-col gap-[1rem] justify-center items-center text-center">
          <h2 className="text-[3rem] font-normal text-[white]">
            Our Testimonials
          </h2>
          <div className="my-[0.2rem] w-[20%] h-[1px] bg-[goldenrod] max-lg:w-[60%] max-sm:w-[70%]"></div>
        </div>

        <Carousel autoplay style={contentStyle}>
          {testimonialData.map((e) => {
            return (
              <div
                className="w-full relative object-cover mb-[5rem] mt-[2rem]"
                key={e.id}
              >
                <div
                  className="border-[2px] border-[grey] rounded-xl px-[2rem] py-[2rem] w-full relative flex flex-col 
                  gap-[1rem]"
                >
                  <h2 className="text-[2.5rem] text-[white] font-normal">
                    <i className="fa-solid fa-arrows-to-dot text-[white]"></i>&nbsp; {e.title}
                  </h2>
                  <p className="text-[2rem] text-[#d2d2d2]">{e.desc}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default TestimonialCard;
