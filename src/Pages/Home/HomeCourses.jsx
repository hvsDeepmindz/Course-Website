/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { HomeCourseData } from "../../Services/Data/CourseData";

const HomeCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 1024) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1536) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const top = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index * itemsPerPage);
  };

  return (
    <div
      ref={sectionRef}
      className="py-[6rem] px-[10rem] relative w-full h-full object-cover max-xl:px-[5rem] max-md:px-[2rem] bg-[#212121]"
    >
      <div
        className={`flex flex-col gap-[1rem] justify-center items-center text-center w-full transition-all duration-[1s] ease-in-out transform ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[50px]"
        }`}
      >
        <h2 className="text-[3rem] font-normal text-[white]">
          Course Highlights
        </h2>
        <div className="my-[0.2rem] w-[20%] h-[1px] bg-[goldenrod] max-lg:w-[60%] max-sm:w-[70%]"></div>
      </div>

      <div className="relative flex flex-col items-center mt-[4rem]">
        <div
          className={`grid w-full h-full justify-center gap-[4rem] transition-transform duration-[0.5s] ease-in-out ${
            itemsPerPage === 1
              ? "grid-cols-1"
              : itemsPerPage === 2
              ? "grid-cols-2"
              : "grid-cols-3"
          }`}
        >
          {HomeCourseData.slice(currentIndex, currentIndex + itemsPerPage).map(
            (e, index) => (
              <div
                key={e.id}
                className={`border-[1px] border-[grey] hover:border-[white] rounded-xl transition-all duration-[1s] ease-in-out 
                transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[100px]"
                }`}
                style={{ transitionDelay: `${index * 0.6}s` }}
              >
                <div className="px-[2rem] py-[2rem] cursor-pointer w-full h-full">
                  <h2 className="text-[2.5rem] text-[white] font-normal">
                    <i className="fa-solid fa-book text-[white]"></i>&nbsp;{" "}
                    {e.title}
                  </h2>
                  <div className="flex flex-col gap-[2rem] max-sm:gap-[1rem] w-full mt-[2rem]">
                    {e.desc.map((ele) => (
                      <p
                        key={ele.id}
                        className="text-[2rem] font-normal text-[#d2d2d2]"
                      >
                        <i className="fa-solid fa-arrows-to-dot text-[1.6rem]"></i>
                        &nbsp; {ele.descContent}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex gap-[0.8rem] mt-[4rem]">
          {Array.from({
            length: Math.ceil(HomeCourseData.length / itemsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-[1rem] h-[1rem] rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex / itemsPerPage === index
                  ? "bg-[goldenrod] w-[2rem] h-[2rem]"
                  : "bg-[gray] w-[2rem] h-[2rem]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCourses;
