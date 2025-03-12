/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import TopBanner from "../../../Components/Card/TopBanner";
import { TableauCourseTopBannerData } from "../../../Services/Data/TopBannerData";
import TableauBICourseMain from "./TableauCourseMain";

const TableauCourse = () => {
  const [tableauCourseTopBannerData] = useState(TableauCourseTopBannerData);

  return (
    <>
      <TopBanner topBannerData={tableauCourseTopBannerData} />
      <TableauBICourseMain />
    </>
  );
};

export default TableauCourse;
