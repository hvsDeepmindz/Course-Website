/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Header/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import ScrollTopBtn from "./Components/Btn/ScrollTopBtn";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col w-full">
          <Nav />
          <div className="mt-[0rem] w-full">
            <Routes>
              <Route path="/" element={<Home />}></Route>
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
