import { Link, useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
const NavBar = () => {
  const location = useLocation();

  const leftPages = [
    { page: "Home", link: "/" },

    {student:[{ page: "Talk to AI", link: "/chat" },
    { page: "Report", link: "/report" }]},
    {school:[{ page: "report", link: "/school" },
    { page: "Report", link: "/report" }]}
  ];

  const rightPages = [
    { page: "LearningHub", link: "/learningHub" },
    { page: "Profile", link: "/profile" },
    { page: "Contact", link: "/Sign" },
  ];
 const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); 
       };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const linkClass = (path) =>
    `text-md font-semibold px-3 py-2 transition ${
      location.pathname === path ? "text-blue-900 font-bold" : "text-[#035CBA]"
    }`;

  return (
     <div
      className={`w-[100vw] px-20 py-4 fixed top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex items-center w-full">
        {/* Left nav with space-between */}
        <div className="flex justify-between flex-1">
          {leftPages.map((x, index) => (
            <Link key={index} to={x.link} className={linkClass(x.link)}>
              {x.page}
            </Link>
          ))}
        </div>

        {/* Logo centered */}
        <div className="mx-40 text-xl font-extrabold text-[#035CBA] font-['Playpen_Sans'] whitespace-nowrap">
          RAFIQI
        </div>

        {/* Right nav with space-between */}
        <div className="flex justify-between flex-1">
          {rightPages.map((x, index) => (
            <Link key={index} to={x.link} className={linkClass(x.link)}>
              {x.page}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
