/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CourseTopBannerData } from "../../Services/Data/TopBannerData";
import TopBanner from "../../Components/Card/TopBanner";
import CourseMain from "./CourseMain";

const Courses = () => {
  const [courseTopBannerData] = useState(CourseTopBannerData);

  return (
    <>
      <TopBanner topBannerData={courseTopBannerData} />
      <CourseMain />
    </>
  );
};

export default Courses;
