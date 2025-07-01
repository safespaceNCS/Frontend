import { FaStar } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom"; // ✅ Correct import
import rect from "../assets/rect.png";
import ped from "../assets/ped.png";
import many from "../assets/many.png";
import CourseTemplate from '../pages/course';
import { useState } from "react";

const Learn = () => {
  const [open, setOpen] = useState(false);

  // ✅ Safely get role from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const isChild = user?.role === "Child";

  const onlineSafetyLessons = [
    {
      id: 1,
      title: "What Is Online Safety?",
      content: "Online safety means protecting your personal information and being smart online.".repeat(8),
    },
    {
      id: 2,
      title: "Creating Strong Passwords",
      content: "Use a mix of uppercase, lowercase, numbers, and symbols. Don’t reuse passwords!".repeat(9),
    },
    {
      id: 3,
      title: "Dealing with Strangers Online",
      content: "Never share personal info. If someone makes you uncomfortable, tell an adult.".repeat(6),
    },
  ];

  const learning = [
    {
      range: "teen",
      img: ped,
      description: "Explore how to build strong digital boundaries and recognize online manipulation.",
      type: "Course",
      rating: 5,
      people: "32",
    },
    {
      range: "teen",
      img: many,
      description: "Understand how to manage digital stress and reduce screen time anxiety.",
      type: "Course",
      rating: 3,
      people: "15",
    },
    {
      range: "kid",
      img: rect,
      description: "Join fun activities to learn about keeping your personal info safe online!",
      type: "Game",
      rating: 4,
      people: "45",
    },
    {
      range: "teen",
      img: many,
      description: "Learn how to detect phishing attempts and avoid online scams easily.",
      type: "Course",
      rating: 4,
      people: "28",
    },
    {
      range: "teen",
      img: many,
      description: "Discover strategies to deal with cyberbullies and support your friends.",
      type: "Course",
      rating: 5,
      people: "40",
    },
    {
      range: "teen",
      img: many,
      description: "Improve your privacy skills with real-life examples and interactive lessons.",
      type: "Course",
      rating: 4,
      people: "18",
    },
  ];

  return (
    <div className="absolute pt-23 px-15 font-['Poppins']">
      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900/60 flex justify-center items-center z-50">
          <button onClick={() => setOpen(false)} className="absolute top-[18vh] z-60 right-[25vw] font-bold">x</button>
          <CourseTemplate
            title="Online Safety Course"
            lessons={onlineSafetyLessons}
            badgeName="Safe Explorer"
            averageRating={4.8}
          />
        </div>
      )}

      <div className="grid grid-cols-4 gap-6">
        {learning.map((x, index) => (
          <div key={index} className="border border-gray-200 space-y-2 h-[57vh] bg-white relative shadow-lg py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
            <div className="absolute top-2 left-2 bg-gray-200/80 rounded-lg py-1 px-2">{x.range}</div>
            <img src={x.img} className="h-[60%] place-self-center" alt={x.type} />
            <div className="truncate px-4">{x.description}</div>
            <div className="flex flex-row border-b border-gray-200 pb-4 px-4">
              <div className="flex flex-row items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < x.rating ? "text-yellow-400 text-xl" : "text-gray-300 text-xl"}
                  />
                ))}
              </div>
              <span className="mx-2">({x.people})</span>
            </div>
            <div className="pb-4 font-semibold text-2xl px-2 flex flex-row justify-between items-center">
              <span>{x.type}</span>
              {isChild ? (
                x.type === "Game" ? (
                  <a
                    href="https://cyberhero-7sdw.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white rounded-xl bg-[#20B486]"
                  >
                    <MdOutlineArrowOutward />
                  </a>
                ) : (
                  <button
                    onClick={() => setOpen(true)}
                    className="p-2 text-white rounded-xl bg-[#20B486]"
                  >
                    <MdOutlineArrowOutward />
                  </button>
                )
              ) : (
                <Link
                to="/sign"
                  title="Sign in as a child to access"
                  className="p-2 text-white rounded-xl bg-gray-400 "
                >
                  <MdOutlineArrowOutward />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
