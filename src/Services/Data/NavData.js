const NavLink = [
  {
    id: 1,
    title: "Home",
    to: "/",
    class:
      "text-[2rem] text-[black] max-md:text-[2rem] font-normal hover:scale-[1.1] transition-all duration-[0.2s] navlink tracking-[0] hover:text-[darkblue]",
  },
  {
    id: 2,
    title: "About Us",
    to: "/aboutus",
    class:
      "text-[2rem] text-[black] max-md:text-[2rem] font-normal hover:scale-[1.1] transition-all duration-[0.2s] navlink tracking-[0] hover:text-[darkblue]",
  },
  {
    id: 3,
    title: "Course",
    to: "#",
    class:
      "text-[2rem] text-[black] max-md:text-[2rem] font-normal hover:scale-[1.1] transition-all duration-[0.2s] navlink tracking-[0] hover:text-[darkblue]",
    submenu: [
      { id: 1, title: "Our Course", to: "/courses" },
      {
        id: 2,
        title: "Communication Skills",
        to: "/courses/communicationCourse",
      },
      { id: 3, title: "HR Generalist Course", to: "/courses/HRCourse" },
      { id: 4, title: "Advanced Excel", to: "/courses/ExcelCourse" },
      { id: 5, title: "Power BI", to: "/courses/PowerBICourse" },
      { id: 6, title: "Tableau", to: "/courses/TableauCourse" },
    ],
  },
  {
    id: 4,
    title: "Knowledge Session",
    to: "/",
    class:
      "text-[2rem] text-[black] max-md:text-[2rem] font-normal hover:scale-[1.1] transition-all duration-[0.2s] navlink tracking-[0] hover:text-[darkblue]",
  },
  {
    id: 5,
    title: "Study Abroad",
    to: "/",
    class:
      "text-[2rem] text-[black] max-md:text-[2rem] font-normal hover:scale-[1.1] transition-all duration-[0.2s] navlink tracking-[0] hover:text-[darkblue]",
  },
  {
    id: 6,
    title: "Gallery",
    to: "#",
    class:
      "text-[2rem] text-[black] max-md:text-[2rem] font-normal hover:scale-[1.1] transition-all duration-[0.2s] navlink tracking-[0] hover:text-[darkblue]",
    submenu: [
      {
        id: 1,
        title: "Photos",
        to: "/",
      },
      { id: 2, title: "Videos", to: "/" },
    ],
  },
  {
    id: 7,
    title: "Contact Us",
    to: "/",
    class:
      "text-[2rem] text-[black] max-md:text-[2rem] font-normal hover:scale-[1.1] transition-all duration-[0.2s] navlink tracking-[0] hover:text-[darkblue]",
  },
];

export default NavLink;
