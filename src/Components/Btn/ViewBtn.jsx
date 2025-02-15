/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ViewBtn = ({ btnTitle }) => {
  return (
    <>
      <button
        className={`px-[2rem] py-[1rem] rounded-md bg-[#212121] text-[white] transition-all duration-[0.2s] ease-in-out 
        cursor-pointer border-[1px] border-[#212121] hover:bg-transparent hover:text-[#212121] text-[2rem]`}
      >
        {btnTitle}
      </button>
    </>
  );
};

export default ViewBtn;
