/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ImageCard = ({ imgData, isVisible }) => {
  return (
    <>
      {imgData.map((e, index) => {
        return (
          <div
            className={`flex items-center justify-center w-auto h-auto transition-all duration-[0.5s] ease-in-out px-[1rem] py-[1rem] rounded-md border-[1px] border-[#d2d2d2] transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[100px]"
            }`}
            key={e.id}
            style={{ transitionDelay: `${index * 0.6}s` }}
          >
            <img
              src={e.img}
              alt="img"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        );
      })}
    </>
  );
};

export default ImageCard;
