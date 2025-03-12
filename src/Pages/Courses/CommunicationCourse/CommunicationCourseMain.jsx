/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CommuncationCourseDetailData } from "../../../Services/Data/CourseDetailData";
import CourseDetailCard from "../../../Components/Card/CourseDetailCard";
import CommunicationCourseImageData from "../../../Services/Data/CommunicationImageData";

const CommunicationCourseMain = () => {
  const [communcationCourseDetailData] = useState(CommuncationCourseDetailData);
  const [communicationCourseImageData] = useState(CommunicationCourseImageData);

  return (
    <>
      <div className="py-[6rem] px-[20rem] w-full relative object-cover max-xl:px-[5rem] max-md:px-[2rem]">
        <CourseDetailCard
          courseDetailCardData={communcationCourseDetailData}
          imgCardData={communicationCourseImageData}
        />
      </div>
    </>
  );
};

export default CommunicationCourseMain;
