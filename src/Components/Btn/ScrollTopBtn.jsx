/* eslint-disable no-unused-vars */
import React from "react";

const ScrollTopBtn = () => {
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        onClick={handleToTop}
        className="fixed bottom-[3rem] z-[99] right-[3rem] cursor-pointer rounded-full px-[1.8rem] py-[1.5rem] bg-[#4e4e98]"
      >
        <i className="fa-solid fa-arrow-up text-[2rem] text-[white]"></i>
      </div>
    </>
  );
};

export default ScrollTopBtn;
