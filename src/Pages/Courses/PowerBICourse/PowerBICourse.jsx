/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TopBanner from "../../../Components/Card/TopBanner";
import { PowerBICourseTopBannerData } from "../../../Services/Data/TopBannerData";
import PowerBICourseMain from "./PowerBICourseMain";

const PowerBICourse = () => {
  const [powerBICourseTopBannerData] = useState(PowerBICourseTopBannerData);

  return (
    <>
      <TopBanner topBannerData={powerBICourseTopBannerData} />
      <PowerBICourseMain />
    </>
  );
};

export default PowerBICourse;
