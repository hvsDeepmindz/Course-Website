/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import ImageCard from "./ImageCard";

const CourseDetailCard = ({ courseDetailCardData = [], imgCardData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {courseDetailCardData.map((e) => {
        return (
          <div
            className="flex flex-col gap-[1rem] w-full transition-all duration-[0.4s] ease-in-out"
            key={e.id}
          >
            <div className={`flex flex-col gap-[1rem] w-full`}>
              <h2 className="text-[3rem] font-medium text-[#212121]">
                {e.mainHeading}
              </h2>
              <p className="text-[2rem] font-normal text-[#212121]">
                Duration:{" "}
                <span className="text-[2rem] text-[#414141] font-normal">
                  {e.duration}
                </span>
              </p>
              <p className="text-[2rem] font-normal text-[#414141]">
                {e.mainDesc}
              </p>
            </div>
            <div
              ref={sectionRef}
              className={`mt-[2rem] w-full grid grid-cols-4 gap-[2rem] justify-center transition-all duration-[0.4s] ease-in-out 
              max-lg:grid-cols-2 max-sm:grid-cols-1`}
            >
              <ImageCard imgData={imgCardData} isVisible={isVisible} />
            </div>
            <h2 className="text-[2.5rem] text-[#212121] font-normal mt-[2rem]">
              Learning Objectives
            </h2>
            <div className="flex flex-col gap-[1rem] w-full">
              {e?.objectives.map((obj) => {
                return (
                  <p
                    className="text-[2rem] text-[#414141] font-normal"
                    key={obj.id}
                  >
                    {obj.id}:&nbsp; {obj.objectiveDesc}
                  </p>
                );
              })}
            </div>
            <div className="mt-[2rem]">
              {e?.module.map((moduleEle) => {
                return (
                  <div
                    className="flex flex-col gap-[1rem] mb-[4rem] w-full"
                    key={moduleEle.id}
                  >
                    <h2 className="text-[2.5rem] font-normal text-[#212121]">
                      {moduleEle.moduleHeading}
                    </h2>
                    {moduleEle?.moduleDescData.map((moduleDescEle) => {
                      return (
                        <p
                          className="text-[2rem] font-normal text-[#414141]"
                          key={moduleDescEle.id}
                        >
                          <i className="fa-solid fa-circle text-[1.2rem] text-[grey]"></i>
                          &nbsp; {moduleDescEle.moduleDesc}
                        </p>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="w-full">
              <h2 className="text-[2.5rem] text-[#212121] font-normal">
                <i className="fa-solid fa-hand-point-right text-[#414141] text-[2rem]"></i>
                &nbsp; Frequently Asked Questions (FAQs)
              </h2>
              <div className="mt-[2rem] w-full flex flex-col gap-[2rem]">
                {e.FAQ?.map((eleFAQ, index) => (
                  <div
                    key={eleFAQ.id}
                    className="border-[1px] border-[#d6d6d6] rounded-xl px-[2rem] py-[1.5rem] flex flex-col w-full"
                  >
                    <div className="flex items-center w-full justify-between gap-[1rem]">
                      <button
                        className="text-[2rem] font-normal text-[#212121] w-full text-left"
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                      >
                        {eleFAQ.ques}
                      </button>
                      <i
                        className="fa-solid fa-chevron-down text-[#212121] text-[1.4rem] cursor-pointer"
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                      ></i>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openIndex === index ? "max-h-40 mt-[1rem]" : "max-h-0"
                      }`}
                    >
                      <p className="text-[2rem] font-normal text-[#414141] p-4">
                        {eleFAQ.ans}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CourseDetailCard;
