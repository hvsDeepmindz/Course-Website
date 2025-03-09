/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CommunicationCourseTopBannerData } from "../../../Services/Data/TopBannerData";
import TopBanner from "../../../Components/Card/TopBanner";
import CommunicationCourseMain from "./CommunicationCourseMain";

const CommunicationCourse = () => {
  const [communicationCourseTopBannerData] = useState(
    CommunicationCourseTopBannerData
  );

  return (
    <>
      <TopBanner topBannerData={communicationCourseTopBannerData} />
      <CommunicationCourseMain />
    </>
  );
};

export default CommunicationCourse;
