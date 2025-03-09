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
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleNavigation = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
    setIsDropdownOpen(null);
    setIsMobileDropdownOpen(null);
  };

  const handleSelectedView = (selectedView) => {
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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(null);
        setIsMobileDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
              if (e.submenu) {
                return (
                  <div
                    key={e.id}
                    className="relative cursor-pointer"
                    onMouseEnter={() => setIsDropdownOpen(e.id)}
                    onMouseLeave={() => setIsDropdownOpen(null)}
                  >
                    <span
                      className={`navlink border-b-[1px] pb-[0.5rem] border-none ${e.class}`}
                    >
                      {e.title} &nbsp;
                      <i className="fa-solid fa-chevron-down text-[1.4rem] relative bottom-[0.2rem]"></i>
                    </span>
                    {isDropdownOpen === e.id && (
                      <div
                        ref={dropdownRef}
                        className="absolute left-[-6rem] mt-[0.2rem] px-[2rem] py-[2rem] border-[1px] border-[#d2d2d2] w-[300px] 
                        bg-white shadow-lg rounded-lg z-50 flex flex-col gap-[1rem]"
                      >
                        {e.submenu.map((sub) => (
                          <Link
                            key={sub.id}
                            to={sub.to}
                            className="block text-[2rem] hover:text-[darkblue] text-black transition"
                            onClick={handleNavigation}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <Link
                    key={e.id}
                    to={e.to}
                    onClick={() => {
                      handleNavigation();
                      handleSelectedView(e.title);
                    }}
                    className={`navlink ${
                      view === e.title
                        ? "border-b-[1px] pb-[0.5rem] border-[#212121]"
                        : "border-none"
                    } ${e.class}`}
                  >
                    {e.title}
                  </Link>
                );
              }
            })}
          </ul>
        </nav>
        <div className="relative flex items-center justify-center gap-[2rem]">
          <a
            href="#"
            target="_blank"
            className="fa-brands fa-facebook text-[#424262] text-[2.8rem] hover:opacity-[0.5] transition-all duration-[0.2s] ease-in-out"
          ></a>
          <a
            href="#"
            target="_blank"
            className="fa-brands fa-linkedin text-[#424262] text-[2.8rem] hover:opacity-[0.5] transition-all duration-[0.2s] ease-in-out"
          ></a>
          <a
            href="#"
            target="_blank"
            className="fa-brands fa-instagram text-[#424262] text-[2.8rem] hover:opacity-[0.5] transition-all duration-[0.2s] ease-in-out"
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

      <div
        ref={sidebarRef}
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-full h-screen bg-[white] transition-transform duration-[0.3s] ease-in-out 
        lg:hidden z-[999]`}
      >
        <div className="flex justify-end p-[1rem]">
          <HiMenuAlt1
            size={20}
            className="text-[#212121] cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul
          className={`flex flex-col justify-center items-center text-center h-full px-[6rem] py-[0rem] gap-[3rem] text-[black]`}
        >
          {navlink.map((e) => {
            if (e.submenu) {
              return (
                <div key={e.id} className="w-full flex flex-col items-center">
                  <span
                    className="block text-[2rem] font-semibold cursor-pointer"
                    onClick={() =>
                      setIsMobileDropdownOpen(
                        isMobileDropdownOpen === e.id ? null : e.id
                      )
                    }
                  >
                    {e.title} &nbsp;
                    <i className="fa-solid fa-chevron-down text-[1.4rem] relative bottom-[0.2rem]"></i>
                  </span>
                  <div
                    className={`w-full overflow-y-auto flex flex-col gap-[0.5rem] justify-center items-center text-center transition-all duration-300 ease-in-out z-[100] 
                    ${
                      isMobileDropdownOpen === e.id
                        ? "max-h-[300px] mt-[1rem] mb-[-2rem] translate-y-0 opacity-[1]"
                        : "max-h-0 -translate-y-full opacity-0"
                    }`}
                  >
                    {e.submenu.map((sub) => (
                      <Link
                        key={sub.id}
                        to={sub.to}
                        className="block text-[1.6rem] text-black py-[0.5rem] transition"
                        onClick={handleNavigation}
                      >
                        <i className="fa-solid fa-circle text-[1rem] text-[grey]"></i>
                        &nbsp; {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <Link
                  key={e.id}
                  to={e.to}
                  onClick={handleNavigation}
                  className={`relative navlink ${e.class}`}
                >
                  {e.title}
                </Link>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
};

export default Nav;
