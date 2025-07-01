import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../authcontext";

const NavBar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const user = useAuth();

  const role =   user?.user?.role

  const leftPages =
    role === "Child"
      ? [
          { page: "Home", link: "/" },
          { page: "Talk to AI", link: "/chat" },
          { page: "Report", link: "/report" },
        ]
      : role === "SchoolPsychologist"
      ? [
          
          { page: "Dashboard", link: "/dash" },
          { page: "Reports", link: "/schoolRepports" },
        ]
      : role === "Admin"
      ? [
          { page: "Home", link: "/home" },
          { page: "Dashboard", link: "/dash" },
        ]
      : [
          { page: "Home", link: "/" },
          { page: "ParentsHub", link: "/GuidingHub" }
          
        ];

  const rightPages =
    role === "Child"
      ? [
          { page: "LearningHub", link: "/learningHub" },
          { page: "Profile", link: "/profile" },
          { page: "Logout" },
        ]
      : role === "SchoolPsychologist"
      ? [
          
          { page: "Students", link: "/students" },
          { page: "Logout" },
        ]
      : role === "Admin"
      ? [
          { page: "Create Users", link: "/create" },
          { page: "Logout" },
        ]
      : [{ page: "LearningHub", link: "/learningHub" },
          { page: "Sign In", link: "/sign" },
        ];

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
        <div className="flex justify-between flex-1">
          {leftPages.map((x, index) => (
            <Link key={index} to={x.link} className={linkClass(x.link)}>
              {x.page}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <div className="mx-40 text-xl font-extrabold text-[#035CBA] font-['Playpen_Sans'] whitespace-nowrap">
          RAFIQI
        </div>

        <div className="flex justify-between flex-1">
          {rightPages.map((x, index) =>
            x.page === "Logout" ? (
              <button
                key={index}
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/sign";
                }}
                className={linkClass("/sign")}
              >
                {x.page}
              </button>
            ) : (
              <Link key={index} to={x.link} className={linkClass(x.link)}>
                {x.page}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
