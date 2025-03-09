/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TopBannerBtn = ({ btnTitle }) => {
  return (
    <>
      <button
        className={`px-[2rem] py-[1rem] rounded-md bg-[#212121] text-[white] transition-all duration-[0.2s] ease-in-out 
        cursor-pointer border-[1px] border-[#212121] hover:border-[white] hover:bg-transparent hover:text-[white] text-[2rem]`}
      >
        {btnTitle}
      </button>
    </>
  );
};

export default TopBannerBtn;
