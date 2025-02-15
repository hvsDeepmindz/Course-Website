/* eslint-disable no-unused-vars */
// import React from 'react'

import { useEffect, useRef, useState } from "react";
import NavLink from "../../Services/Data/NavData";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

const Nav = () => {
  const [navlink] = useState(NavLink);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState("Home");
  const sidebarRef = useRef(null);
  const [scrollingUp, setScrollingUp] = useState(false);
  const prevScrollY = useRef(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  const handleView = (selectedView) => {
    setView(selectedView);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingUp(currentScrollY < prevScrollY.current);
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`header fixed top-0 left-0 z-[999] px-[2rem] py-[2rem] shadow-sm flex justify-center 
        items-center gap-[4rem] w-[100%] max-lg:justify-end`}
        ref={sidebarRef}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full bg-[white] transition-all duration-[0.4s] ease-linear ${
            scrollingUp ? "opacity-[0.5]" : "opacity-[1]"
          }`}
        ></div>
        <nav className="relative navbar w-[auto] hidden lg:flex">
          <ul className="flex items-start gap-[4rem] transition-all duration-[0.2s] ease-in-out">
            {navlink.map((e) => {
              return (
                <Link
                  key={e.id}
                  to={e.to}
                  onClick={() => {
                    handleNavigation();
                    handleView(e.title);
                  }}
                  className={`navlink ${
                    view === e.title
                      ? "border-b-[1px] pb-[0.5rem] border-[#212121]"
                      : "border-b-[1px] pb-[0.5rem] border-none"
                  } ${e.class}`}
                >
                  {e.title}
                </Link>
              );
            })}
          </ul>
        </nav>
        <div className="relative flex items-center justify-center gap-[2rem]">
          <a
            href="#"
            target="_blank"
            className="fa-brands fa-facebook text-[#424262] text-[2.8rem] hover:opacity-[0.5] 
            transition-all duration-[0.2s] ease-in-out"
          ></a>
          <a
            href="#"
            target="_blank"
            className="fa-brands fa-linkedin text-[#424262] text-[2.8rem] hover:opacity-[0.5] 
            transition-all duration-[0.2s] ease-in-out"
          ></a>
          <a
            href="#"
            target="_blank"
            className="fa-brands fa-instagram text-[#424262] text-[2.8rem] hover:opacity-[0.5] 
            transition-all duration-[0.2s] ease-in-out"
          ></a>
          <div className="lg:hidden">
            <HiMenuAlt1
              size={20}
              className="text-[#212121] cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}

      <div
        ref={sidebarRef}
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-[auto] h-screen bg-[white] transition-transform duration-[0.3s] ease-in-out 
        lg:hidden z-[999]`}
      >
        <div className="flex justify-end p-[1rem]">
          <HiMenuAlt1
            size={20}
            className="text-[#212121] cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul className="flex flex-col justify-center h-[100%] px-[6rem] py-[6rem] gap-[4rem] text-[black]">
          {navlink.map((e) => {
            return (
              <Link
                key={e.id}
                to={e.to}
                onClick={handleNavigation}
                className={`navlink ${e.class}`}
              >
                {e.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Nav;
