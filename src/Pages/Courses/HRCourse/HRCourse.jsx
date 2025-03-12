/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TopBanner from "../../../Components/Card/TopBanner";
import { HRCourseTopBannerData } from "../../../Services/Data/TopBannerData";
import HRCourseMain from "./HRCourseMain";

const HRCourse = () => {
  const [hrCourseTopBannerData] = useState(HRCourseTopBannerData);

  return (
    <>
      <TopBanner topBannerData={hrCourseTopBannerData} />
      <HRCourseMain />
    </>
  );
};

export default HRCourse;
