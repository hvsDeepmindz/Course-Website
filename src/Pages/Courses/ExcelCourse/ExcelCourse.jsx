/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TopBanner from "../../../Components/Card/TopBanner";
import { ExcelCourseTopBannerData } from "../../../Services/Data/TopBannerData";
import ExcelCourseMain from "./ExcelCourseMain";

const ExcelCourse = () => {
  const [excelCourseTopBannerData] = useState(ExcelCourseTopBannerData);

  return (
    <>
      <TopBanner topBannerData={excelCourseTopBannerData} />
      <ExcelCourseMain />
    </>
  );
};

export default ExcelCourse;
