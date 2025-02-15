/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import home_about_img from "/Media/Home/1.jpg";

const HomeAbout = () => {

  return (
    <div
      className={`py-[6rem] px-[20rem] w-full relative object-cover max-xl:px-[5rem] max-md:px-[2rem] 
      transition-all duration-[1s] ease-in-out`}
    >
      <div className="relative grid grid-cols-2 w-full gap-[6rem] justify-center max-lg:grid-cols-1 max-lg:gap-[4rem]">
        <div className="flex flex-col gap-[1rem] justify-center w-full">
          <h2 className="text-[3rem] font-normal text-[#212121]">About Us</h2>
          <div className="my-[0.2rem] w-full h-[1px] bg-[goldenrod]"></div>
          <p className="text-[2rem] font-normal text-[#414141]">
            We believe in empowering learners with high-quality, accessible, and
            engaging education. Our platform offers a diverse range of courses,
            designed by industry experts, to help students and professionals
            enhance their skills and achieve their career goals. With a strong
            focus on innovation and practical learning, we ensure every course
            delivers real-world value.
          </p>
          <p className="text-[2rem] font-normal text-[#414141]">
            Whether you’re looking to upskill, switch careers, or explore new
            interests, we provide the tools and guidance you need to succeed.
            Join our thriving community of learners and take the next step in
            your educational journey with confidence and excellence.
          </p>
        </div>
        <div className="flex items-center justify-center w-auto h-auto border-[1px] border-[grey] px-[1rem] py-[1rem] rounded-md">
          <img
            src={home_about_img}
            alt="img"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
