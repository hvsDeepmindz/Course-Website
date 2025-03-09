/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AboutTopBannerData } from "../../Services/Data/TopBannerData";
import TopBanner from "../../Components/Card/TopBanner";
import AboutMain from "./AboutMain";

const About = () => {
  const [aboutTopBannerData] = useState(AboutTopBannerData);

  return (
    <>
      <TopBanner topBannerData={aboutTopBannerData} />
      <AboutMain />
    </>
  );
};

export default About;
