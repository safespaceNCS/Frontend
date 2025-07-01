import { FaStar } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router";
import rect from "../assets/rect.png";
import ped from "../assets/ped.png";
import many from "../assets/many.png";
import donnu from "../assets/donnu.png";
import  CourseTemplate from '../pages/course'
import { useState } from "react";
const Guide=()=>{
    const [open,setOpen]=useState(false);
const onlineSafetyLessons = [
  {
    id: 1,
    title: "What Is Online Safety?",
    content: "Online safety means protecting your personal information and being smart online.Online safety means protecting your personal information and being smart online.Online safety means protecting your personal information and being smart online.Online safety means protecting your personal information and being smart online.Online safety means protecting your personal information and being smart online.Online safety means protecting your personal information and being smart online.Online safety means protecting your personal information and being smart online.Online safety means protecting your personal information and being smart online.",
  },
  {
    id: 2,
    title: "Creating Strong Passwords",
    content: "Use a mix of uppercase, lowercase, numbers, and symbols. Don’t reuse passwords!Use a mix of uppercase, lowercase, numbers, and symbols. Don’t reuse passwords!Use a mix of uppercase, lowercase, numbers, and symbols. Don’t reuse passwords!Use a mix of uppercase, lowercase, numbers, and symbols. Don’t reuse passwords!Use a mix of uppercase, lowercase, numbers, and symbols. Don’t reuse passwords!Use a mix of uppercase, lowercase, numbers, and symbols. Don’t reuse passwords!Use a mix of uppercase, lowercase, numbers, and symbols. Don’t reuse passwords!Use a mix of uppercase, lowercase, numbers, and symbols. Don’t reuse passwords!Use a mix of uppercase, lowercase, numbers, and symbols. Don’t reuse passwords!",
  },
  {
    id: 3,
    title: "Dealing with Strangers Online",
    content: "Never share personal info. If someone makes you uncomfortable, tell an adult.Never share personal info. If someone makes you uncomfortable, tell an adult.Never share personal info. If someone makes you uncomfortable, tell an adult.Never share personal info. If someone makes you uncomfortable, tell an adult.Never share personal info. If someone makes you uncomfortable, tell an adult.Never share personal info. If someone makes you uncomfortable, tell an adult.",
  },
];
// const learning = [
//   {
//     range: "teen",
//     img: ped,
//     description: "Explore how to build strong digital boundaries and recognize online manipulation.",
//     type: "Course",
//     rating: 5,
//     people: "32",
//   },
//   {
//     range: "teen",
//     img: many,
//     description: "Understand how to manage digital stress and reduce screen time anxiety.",
//     type: "Course",
//     rating: 3,
//     people: "15",
//   },
//   {
//     range: "kid",
//     img: rect,
//     description: "Join fun activities to learn about keeping your personal info safe online!",
//     type: "Game",
//     rating: 4,
//     people: "45",
//   },
//   {
//     range: "teen",
//     img: many,
//     description: "Learn how to detect phishing attempts and avoid online scams easily.",
//     type: "Course",
//     rating: 4,
//     people: "28",
//   },
//   {
//     range: "teen",
//     img: many,
//     description: "Discover strategies to deal with cyberbullies and support your friends.",
//     type: "Course",
//     rating: 5,
//     people: "40",
//   },
//   {
//     range: "teen",
//     img: many,
//     description: "Improve your privacy skills with real-life examples and interactive lessons.",
//     type: "Course",
//     rating: 4,
//     people: "18",
//   },
// ];
const learning = [
  {
    range: "parent",
    img: "https://i.pinimg.com/736x/e8/72/94/e87294e316df9b4f9e9ad9e1e91cc446.jpg", // parent using tablet with child
    description: "Learn how to set up parental controls on devices and apps your child uses daily.",
    type: "Guide",
    rating: 5,
    people: "60",
  },
  {
    range: "parent",
    img: "https://i.pinimg.com/736x/6a/b3/31/6ab331020d19d0444708bbd288887809.jpg", // kid watching screen, concerned parent
    description: "Understand the risks of screen addiction and how to create balanced screen time rules.",
    type: "Article",
    rating: 4,
    people: "34",
  },
  {
    range: "parent",
    img: "https://i.pinimg.com/736x/c9/6a/13/c96a1329d1f2f450b160a77a79f9243e.jpg", // mom and daughter talking
    description: "Explore conversations you should have with your child about online privacy and trust.",
    type: "Workshop",
    rating: 5,
    people: "47",
  },
  {
    range: "parent",
    img: "https://i.pinimg.com/736x/19/01/a1/1901a1c87425e2f50efb5f553840b395.jpg", // mother hugging upset daughter
    description: "Discover how to identify signs of cyberbullying and support your child emotionally.",
    type: "Guide",
    rating: 5,
    people: "52",
  },
  {
    range: "parent",
    img: "https://i.pinimg.com/736x/4e/e5/0f/4ee50f200ac62796cac38e9c9820c251.jpg", // parents helping kid on computer
    description: "Learn to monitor digital behavior respectfully and foster open communication.",
    type: "Webinar",
    rating: 4,
    people: "29",
  },
  
];


    return(<div className="absolute  pt-23 px-15 font-['Poppins']   ">
          {open &&(  <div className="fixed top-0 left-0 w-full h-full bg-gray-900/60  flex justify-center items-center z-50">
            <button onClick={()=>setOpen(false)} className="absolute top-[18vh] z-60 right-[25vw] font-bold">x</button>

            <CourseTemplate
      title="Online Safety Course"
      lessons={onlineSafetyLessons}
      badgeName="Safe Explorer"
      averageRating={4.8}
    />
        
        </div>)} 

      <div className=" grid grid-cols-4 gap-6 "> {learning.map(x=>( <div className=" border border-gray-200 space-y-2 h-[57vh] bg-white relative shadow-lg py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
<div className="absolute top-2 left-2 bg-gray-200/80 rounded-lg py-1 px-2">{x.range}</div>
<img src={x.img} className="h-[60%] place-self-center" />
<div className="truncate px-4">{x.description}</div>
<div className="flex flex-row  border-b border-gray-200 pb-4 px-4" ><div className="flex flex-row items-center ">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={index < x.rating ? "text-yellow-400 text-xl" : "text-gray-300 text-xl"}
        />
      ))}
     
    </div>
    <span className="mx-2">({x.people})</span>
    </div>
<div className="pb-4 font-semibold text-2xl px-2 flex flex-row justify-between items-center"><span>{x.type}</span>
 <a href="https://www.youtube.com/watch?v=2LrTw5LNHhE" className="p-2 text-white rounded-xl bg-[#20B486]"><MdOutlineArrowOutward/></a> </div>        

</div> ))} </div>  </div>);
};export default Guide;