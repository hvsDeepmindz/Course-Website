/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ExcelCourseDetailData } from "../../../Services/Data/CourseDetailData";
import CourseDetailCard from "../../../Components/Card/CourseDetailCard";
import ExcelCourseImageData from "../../../Services/Data/ExcelImageData";

const ExcelCourseMain = () => {
  const [excelCourseDetailData] = useState(ExcelCourseDetailData);
  const [excelCourseImgData] = useState(ExcelCourseImageData);

  return (
    <>
      <div className="py-[6rem] px-[20rem] w-full relative object-cover max-xl:px-[5rem] max-md:px-[2rem]">
        <CourseDetailCard
          courseDetailCardData={excelCourseDetailData}
          imgCardData={excelCourseImgData}
        />
      </div>
    </>
  );
};

export default ExcelCourseMain;
