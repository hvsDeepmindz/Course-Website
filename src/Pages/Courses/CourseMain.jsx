/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import CourseCard from "../../Components/Card/CourseCard";
import { CourseCardData } from "../../Services/Data/CourseData";

const CourseMain = () => {
  const [courseCardData] = useState(CourseCardData);
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setAnimate(true);
  }, []);

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
      <div className="py-[6rem] px-[20rem] w-full h-full relative object-cover max-xl:px-[5rem] max-md:px-[2rem]">
        <div
          className={`flex flex-col gap-[1rem] justify-start transform transition-all duration-[2s] ${
            animate
              ? "translate-y-0 opacity-100"
              : "translate-y-[100px] opacity-0"
          }`}
        >
          <h2 className="text-[3rem] font-medium text-[#212121]">
            Master Skills, Build Your Future
          </h2>
          <p className="text-[2rem] font-normal text-[#414141]">
            Take your career to the next level with our expert-curated courses.
            Learn practical skills through interactive lessons, real-world
            projects, and flexible study options. Whether you’re a beginner or
            an experienced professional, we have something for you. Stay
            competitive, gain industry-recognized certifications, and open doors
            to new opportunities. Join a thriving network of learners and start
            your journey toward success today. Invest in yourself and achieve
            your dreams!
          </p>
          <p className="text-[2rem] font-normal text-[#414141]">
            Unlock new opportunities with expert-led courses designed for all
            skill levels. Gain real-world experience, industry insights, and
            certifications to enhance your career. Our interactive lessons and
            hands-on projects help you master in-demand skills effortlessly.
            Join a dynamic learning community, stay ahead in your field, and
            achieve your professional goals. Whether you’re upskilling, changing
            careers, or refining expertise, we offer the right courses for your
            success. Start learning today and transform your future!
          </p>
        </div>
        <div
          ref={sectionRef}
          id="courseCard"
          className="relative mt-[4rem] grid grid-cols-3 w-full h-full gap-[4rem] max-xl:grid-cols-2 max-md:grid-cols-1"
        >
          <CourseCard coursecardData={courseCardData} isVisible={isVisible} />
        </div>
      </div>
    </>
  );
};

export default CourseMain;
