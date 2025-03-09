/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Header/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import ScrollTopBtn from "./Components/Btn/ScrollTopBtn";
import Courses from "./Pages/Courses/Courses";
import About from "./Pages/About/About";
import CommunicationCourse from "./Pages/Courses/CommunicationCourse/CommunicationCourse";
import HRCourse from "./Pages/Courses/HRCourse/HRCourse";
import ExcelCourse from "./Pages/Courses/ExcelCourse/ExcelCourse";
import PowerBICourse from "./Pages/Courses/PowerBICourse/PowerBICourse";
import TableauCourse from "./Pages/Courses/TableauCourse/TableauCourse";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col w-full">
          <Nav />
          <div className="mt-[0rem] w-full">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/aboutus" element={<About />}></Route>
              <Route path="/courses" element={<Courses />}></Route>
              <Route
                path="/courses/communicationCourse"
                element={<CommunicationCourse />}
              ></Route>
              <Route path="/courses/HRCourse" element={<HRCourse />}></Route>
              <Route
                path="/courses/ExcelCourse"
                element={<ExcelCourse />}
              ></Route>
              <Route
                path="/courses/PowerBICourse"
                element={<PowerBICourse />}
              ></Route>
              <Route
                path="/courses/TableauCourse"
                element={<TableauCourse />}
              ></Route>
            </Routes>
          </div>
          <ScrollTopBtn />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
