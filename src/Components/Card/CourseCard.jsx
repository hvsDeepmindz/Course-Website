/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import ViewBtn from "../Btn/ViewBtn";

const CourseCard = ({ coursecardData, isVisible }) => {
  return (
    <>
      {coursecardData.map((e, index) => {
        return (
          <div
            className={`flex flex-col gap-[1rem] w-full relative h-full shadow-md bg-[#f2f2f2] transition-all 
            duration-[1s] ease-in-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[100px]"
            }`}
            key={e.id}
            style={{ transitionDelay: `${index * 0.6}s` }}
          >
            <div className="flex items-center justify-center w-auto h-auto">
              <img
                src={e.img}
                alt="course-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-[4rem] py-[4rem] w-full h-full flex flex-col gap-[1rem] items-center justify-start text-center">
              <h2 className="text-[3rem] text-[#212121] font-normal">
                {e.title}
              </h2>
              <p className="text-[2rem] font-normal text-[#414141]">{e.desc}</p>
              <div className="flex items-center justify-center w-full mt-[1rem]">
                <ViewBtn btnTitle={"Learn More"} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CourseCard;
