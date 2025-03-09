/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CommuncationCourseDetailData } from "../../../Services/Data/CourseDetailData";
import CourseDetailCard from "../../../Components/Card/CourseDetailCard";

const CommunicationCourseMain = () => {
  const [communcationCourseDetailData] = useState(CommuncationCourseDetailData);

  return (
    <>
      <div className="py-[6rem] px-[20rem] w-full relative object-cover max-xl:px-[5rem] max-md:px-[2rem]">
        <CourseDetailCard courseDetailCardData={communcationCourseDetailData} />
      </div>
    </>
  );
};

export default CommunicationCourseMain;
