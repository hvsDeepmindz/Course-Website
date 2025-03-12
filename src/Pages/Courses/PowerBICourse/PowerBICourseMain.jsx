/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { PowerBICourseDetailData } from "../../../Services/Data/CourseDetailData";
import CourseDetailCard from "../../../Components/Card/CourseDetailCard";
import PowerBICourseImageData from "../../../Services/Data/PowerBiImageData";

const PowerBICourseMain = () => {
  const [powerBICourseDetailData] = useState(PowerBICourseDetailData);
  const [powerBICourseImgData] = useState(PowerBICourseImageData);

  return (
    <>
      <div className="py-[6rem] px-[20rem] w-full relative object-cover max-xl:px-[5rem] max-md:px-[2rem]">
        <CourseDetailCard
          courseDetailCardData={powerBICourseDetailData}
          imgCardData={powerBICourseImgData}
        />
      </div>
    </>
  );
};

export default PowerBICourseMain;
