/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { TableauCourseDetailData } from "../../../Services/Data/CourseDetailData";
import CourseDetailCard from "../../../Components/Card/CourseDetailCard";
import TableauCourseImageData from "../../../Services/Data/TableauImageData";

const TableauBICourseMain = () => {
  const [tableauCourseDetailData] = useState(TableauCourseDetailData);
  const [tableauCourseImgData] = useState(TableauCourseImageData);

  return (
    <>
      <div className="py-[6rem] px-[20rem] w-full relative object-cover max-xl:px-[5rem] max-md:px-[2rem]">
        <CourseDetailCard
          courseDetailCardData={tableauCourseDetailData}
          imgCardData={tableauCourseImgData}
        />
      </div>
    </>
  );
};

export default TableauBICourseMain;
