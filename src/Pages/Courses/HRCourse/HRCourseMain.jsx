/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { HRCourseDetailData } from "../../../Services/Data/CourseDetailData";
import CourseDetailCard from "../../../Components/Card/CourseDetailCard";
import HRCourseImageData from "../../../Services/Data/HRCourseImageData";

const HRCourseMain = () => {
  const [hrCourseDetailData] = useState(HRCourseDetailData);
  const [hrCourseImgData] = useState(HRCourseImageData);

  return (
    <>
      <div className="py-[6rem] px-[20rem] w-full relative object-cover max-xl:px-[5rem] max-md:px-[2rem]">
        <CourseDetailCard
          courseDetailCardData={hrCourseDetailData}
          imgCardData={hrCourseImgData}
        />
      </div>
    </>
  );
};

export default HRCourseMain;
