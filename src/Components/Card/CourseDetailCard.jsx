/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CourseDetailCard = ({ courseDetailCardData }) => {
  return (
    <>
      {courseDetailCardData.map((e) => {
        return <div className="" key={e.id}></div>;
      })}
    </>
  );
};

export default CourseDetailCard;
