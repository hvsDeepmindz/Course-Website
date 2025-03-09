/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ViewBtn from "../Btn/ViewBtn";
import TopBannerBtn from "../Btn/TopBannerBtn";

const TopBanner = ({ topBannerData }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      {topBannerData.map((e) => (
        <div
          className="pt-[20rem] pb-[9rem] px-[20rem] w-full h-full relative object-cover max-xl:px-[5rem] max-md:px-[2rem] transition-all 
          duration-[0.4s] ease-in-out mt-[7.5rem] max-sm:mt-[7rem] max-sm:pt-[6rem]"
          key={e.id}
        >
          <video
            className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-[0.4s] ease-linear"
            src={e.bannerVideo}
            autoPlay
            loop
            muted
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-[black] opacity-[0.5]"></div>
          <div
            className={`relative w-full h-full flex flex-col gap-[1rem] max-sm:justify-center max-sm:items-center 
            max-sm:text-center transform transition-all duration-[1.5s] ${
              animate
                ? "translate-y-0 opacity-100"
                : "translate-y-[100px] opacity-0"
            }`}
          >
            <h1 className="text-[5rem] max-xl:text-[4rem] max-md:text-[3.5rem] text-[white] font-medium">
              {e.mainHeading}
            </h1>
            <p className="text-[white] font-normal text-[2.2rem] max-sm:text-[2rem]">
              {e.desc}
            </p>
            {e?.btnView === "yes" && (
              <a
                className="flex justify-start w-auto mt-[2rem]"
                href={e.linkToPage}
              >
                <TopBannerBtn btnTitle={"Learn More"} />
              </a>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default TopBanner;
