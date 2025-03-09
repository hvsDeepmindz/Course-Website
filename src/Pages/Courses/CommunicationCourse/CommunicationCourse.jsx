/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { CommunicationCourseTopBannerData } from "../../../Services/Data/TopBannerData";
import TopBanner from "../../../Components/Card/TopBanner";

const CommunicationCourse = () => {
  const [communicationCourseTopBannerData] = useState(
    CommunicationCourseTopBannerData
  );

  return (
    <>
      <TopBanner topBannerData={communicationCourseTopBannerData} />
    </>
  );
};

export default CommunicationCourse;
