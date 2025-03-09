/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  AboutOurMissionData,
  AboutOurVisionData,
  AboutStoryData,
} from "../../Services/Data/AboutData";
import vision_img from "/Media/About/1.jpg";
import mission_img from "/Media/About/2.jpg";

const AboutMain = () => {
  const [aboutStoryData] = useState(AboutStoryData);
  const [aboutOurVisionData] = useState(AboutOurVisionData);
  const [aboutOurMissionData] = useState(AboutOurMissionData);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <div
        id="aboutMain"
        className="py-[6rem] px-[20rem] max-xl:px-[5rem] max-md:px-[2rem] w-full relative object-cover"
      >
        <div
          className={`flex flex-col justify-start gap-[1rem] transform transition-all duration-[2s] ${
            animate
              ? "translate-y-0 opacity-100"
              : "translate-y-[100px] opacity-0"
          }`}
        >
          <h2 className="text-[3rem] font-normal text-[#212121]">
            Know Our Story
          </h2>
          <div className="w-full h-[1px] bg-[goldenrod] my-[0.5rem]"></div>
          {aboutStoryData.map((e) => {
            return (
              <div className="flex flex-col gap-[2rem] w-full" key={e.id}>
                <p className="text-[2rem] font-normal text-[#414141]">
                  {e.desc}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-[6rem] max-lg:mt-[4rem] w-full grid grid-cols-2 gap-[4rem] justify-center max-lg:grid-cols-1">
          <div className="flex flex-col gap-[1rem] w-full justify-start">
            <h2 className="text-[3rem] font-normal text-[#212121]">
              Our Vision
            </h2>
            {aboutOurVisionData.map((e) => {
              return (
                <div className="flex flex-col gap-[1rem] w-full" key={e.id}>
                  <p className="text-[2rem] text-[#414141] font-normal">
                    {e.desc}
                  </p>
                </div>
              );
            })}
          </div>
          <div
            className="flex items-center justify-center w-auto h-full transition-all duration-[0.4s] ease-in-out px-[1rem] py-[1rem] rounded-md 
            border-[1px] border-[#d2d2d2] bg-[#f2f2f2]"
          >
            <img
              src={vision_img}
              alt="img"
              className="w-full h-full rounded-md transition-all duration-[0.4s] ease-in-out object-cover"
            />
          </div>
        </div>
        <div className="mt-[6rem] max-lg:mt-[4rem] w-full grid grid-cols-2 gap-[4rem] justify-center max-lg:grid-cols-1">
          <div
            className="flex items-center justify-center w-auto h-auto transition-all duration-[0.4s] ease-in-out px-[1rem] py-[1rem] rounded-md 
            border-[1px] border-[#d2d2d2] bg-[#f2f2f2] max-lg:order-2"
          >
            <img
              src={mission_img}
              alt="img"
              className="w-full h-full rounded-md transition-all duration-[0.4s] ease-in-out object-cover"
            />
          </div>
          <div className="flex flex-col gap-[1rem] w-full justify-start">
            <h2 className="text-[3rem] font-normal text-[#212121]">
              Our Mission
            </h2>
            {aboutOurMissionData.map((e) => {
              return (
                <div className="flex flex-col gap-[1rem] w-full" key={e.id}>
                  <p className="text-[2rem] text-[#414141] font-normal">
                    {e.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMain;
