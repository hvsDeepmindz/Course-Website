/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import HomeCourses from "./HomeCourses";
import TestimonialCard from "../../Components/Card/TestimonialCard";
import { HomeTestimonialData } from "../../Services/Data/TestimonialData";

const Home = () => {
  const [hometestimonialdata] = useState(HomeTestimonialData);

  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeCourses />
      <TestimonialCard testimonialData={hometestimonialdata} />
    </>
  );
};

export default Home;
