// import React from 'react'

import { Link } from "react-router-dom";

const Footer = () => {
  const handleOnClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="py-[6rem] px-[20rem] max-xl:px-[20rem] max-md:px-[2rem] w-[100%] relative object-cover">
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#f2f2f2]"></div>
        <div className="relative grid grid-cols-4 justify-center w-[100%] gap-[6rem] max-xl:grid-cols-2 max-md:grid-cols-1">
          <div className="flex flex-col justify-start items-start gap-[1rem] ml-auto mr-auto max-xl:ml-0 max-xl:mr-0 max-md:justify-center max-md:items-center max-md:text-center">
            <h3 className="text-[2rem] text-[#212121] font-normal uppercase border-t-[1px] border-b-[1px] border-[grey] py-[0.5rem]">
              Latest Courses
            </h3>
            <ul className="flex flex-col gap-[1.5rem] py-[1rem]">
              <Link
                to={"/"}
                onClick={handleOnClick}
                className="capitalize font-normal text-[#212121] text-[2rem]"
              >
                Rule of third
              </Link>
              <Link
                to={"/"}
                onClick={handleOnClick}
                className="capitalize font-normal text-[#212121] text-[2rem]"
              >
                Understanding Computational
              </Link>
              <Link
                to={"/"}
                onClick={handleOnClick}
                className="capitalize font-normal text-[#212121] text-[2rem]"
              >
                Tips of shadows
              </Link>
              <Link
                to={"/"}
                onClick={handleOnClick}
                className="capitalize font-normal text-[#212121] text-[2rem]"
              >
                Exposure & metadata
              </Link>
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-[1rem] ml-auto mr-auto max-xl:ml-0 max-xl:mr-0 max-md:justify-center max-md:items-center max-md:text-center">
            <h3 className="text-[2rem] text-[#212121] font-normal uppercase border-t-[1px] border-b-[1px] border-[grey] py-[0.5rem]">
              We are here
            </h3>
            <ul className="flex flex-col gap-[1.5rem] py-[1rem] w-[100%]">
              <Link
                to={"/"}
                onClick={handleOnClick}
                className="capitalize font-normal text-[#212121] text-[2rem]"
              >
                Dehli India
              </Link>
              <a
                href="mailto:info@xyz.com"
                className="capitalize font-normal text-[#212121] text-[2rem]"
              >
                contact@
                <br />
                info@xyz.com
              </a>
              <a
                href="tel:01010101"
                className="capitalize font-normal text-[#212121] text-[2rem]"
              >
                +91-01010101
              </a>
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-[1rem] ml-auto mr-auto max-xl:ml-0 max-xl:mr-0 max-md:justify-center max-md:items-center max-md:text-center">
            <h3 className="text-[2rem] text-[#212121] font-normal uppercase border-t-[1px] border-b-[1px] border-[grey] py-[0.5rem]">
              Our Links
            </h3>
            <ul className="flex flex-col gap-[1.5rem] py-[1rem]">
              <Link
                to={"/"}
                onClick={handleOnClick}
                className="capitalize font-normal text-[#212121] text-[2rem]"
              >
                About Us
              </Link>
              <Link
                to={"/"}
                onClick={handleOnClick}
                className="capitalize font-normal text-[#212121] text-[2rem]"
              >
                Our Courses
              </Link>
              <Link
                to={"/"}
                onClick={handleOnClick}
                className="capitalize font-normal text-[#212121] text-[2rem]"
              >
                Services
              </Link>
              <Link
                to={"/"}
                onClick={handleOnClick}
                className="capitalize font-normal text-[#212121] text-[2rem]"
              >
                Contact
              </Link>
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-[1rem] ml-auto mr-auto max-xl:ml-0 max-xl:mr-0 max-md:justify-center max-md:items-center max-md:text-center">
            <h3 className="text-[2rem] text-[#212121] font-normal uppercase border-t-[1px] border-b-[1px] border-[grey] py-[0.5rem]">
              We are open
            </h3>
            <ul className="flex flex-col gap-[1.5rem] py-[1rem]">
              <p className="capitalize font-normal text-[#212121] text-[2rem]">
                Mon to Sun: 11:00 AM - 9:00 PM
              </p>
              <p className="capitalize font-normal text-[#212121] text-[2rem]">
                Tuesday: Closed
              </p>
              <p className="capitalize font-normal text-[#212121] text-[2rem]">
                Facebook and online queries Responded in 2 -8 Hours
              </p>
              <p className="capitalize font-normal text-[#212121] text-[2rem]">
                Try Now.
              </p>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-center py-[1rem] px-[2rem] w-[100%] bg-[#19223b]">
        <p className="text-[2rem] text-[white] font-normal">
          &copy; Copright XYZ 2024 | All right reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
