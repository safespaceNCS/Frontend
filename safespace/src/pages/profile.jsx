// import star from "../assets/star.png";
// import { FaStar } from "react-icons/fa6";
// import badge from "../assets/badge.png";
// import { useState } from "react";
// const Profile = () => {
// const badges = ["Privacy","defender","streetFree"]
// const number = 5;
// const total = 12;
// const streak = 7;
// const rating = 4;
// const [edit,setedit]=useState(false);
//     return (<div className=" p-20 pt-25 flex flex-row justify-between font-['Inter'] ">
          
//      <div className="w-[32%] space-y-4 p-4  rounded-lg shadow-2xl   border border-gray-200 text-sm">
      
//       <div className="border border-gray-200 shadow-lg rounded-lg p-4 flex justify-between items-center">
//         <div>
//           <p className="font-bold text-gray-700">Personal Infos</p>
//           <p className="text-gray-500 text-xs">
//             This are the personal details shown to users in the app.
//           </p>
//         </div>
//         <img src={star} alt="icon" className="h-12" /> 
//       </div>

//       <div className="border  border-gray-200 shadow-lg rounded-lg p-4 space-y-4">
//         <div className="flex justify-between items-center">
//           <p className="text-gray-500">Your Name</p>
//           {/* <button className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Edit</button> */}
//         </div>
//         <p className="font-medium">Belkharachouche Soundoud</p>

//         <div className="flex justify-between items-center mt-3">
//           <p className="text-gray-500">Email</p>
          <button className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Edit</button>
//         </div>
//         <p className="font-medium">siddxxd@gmail.com</p>

       
        
//       </div>

//       <div className="border  border-gray-200 shadow-lg rounded-lg p-4">
//         <div className="flex justify-between items-center mb-1">
//           <p className="text-gray-500">
//             About <span className="text-blue-500 font-medium">Soundous</span>
//           </p>
//           <button className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Edit</button>
//         </div>
//         <p className="text-gray-600 text-sm">
//           Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam
//           cras neque mauris ac arcu elit i ipsum dolor sit amet consectetur.
//         </p>
//       </div>

//       <div className="border border-gray-200 shadow-lg rounded-lg p-4 space-y-2">
//         <div className="flex justify-between">
//           <p className="font-medium">Ai Rafiqi</p>
//           <span className="bg-[#035CBA] text-white text-xs px-3 py-1 rounded-full">Verified</span>
//         </div>
//         <div className="flex justify-between">
//           <p className="text-gray-500">Reports</p>
//           <p className="font-medium">10</p>
//         </div>
//       </div>
//     </div>
//         <div className="border rounded-lg shadow-2xl border-gray-200 py-4 px-3 w-[32%]">
// <div className="border rounded-lg shadow-lg border-gray-200 flex flex-row gap-2 p-4 text-sm text-gray-700"><div className="flex flex-col"><p className="font-semibold">Learning Journey Details</p><p className="text-xs">This are the professional details shown to users in the app.</p></div><img src={star} className="h-12 place-self-center"/></div>
// <div className="p-2"><p className="font-semibold text-sm text-gray-700 my-2">Badges earned</p><div className="flex flex-wrap gap-4">{badges.map((x)=>(<div className="border border-gray-200 rounded-full py-1 px-2 text-gray-500 ">{x}</div>))}</div></div>
// <div>
//     <p className="my-3 text-gray-700 font-bold text-sm">Courses completed</p>
//     <div className=" relative border border-gray-200 shadow-lg rounded-lg py-2 pb-3 px-3 text-sm flex  flex-col"><span className="text-sm font-bold  ">{number}/{total}</span><span className="text-gray-500">of total courses</span> <div className=" absolute top-0 right-0 h-full flex px-2  bg-[#035CBA] rounded-br-lg rounded-tr-lg "><img src={badge} className="h-6 place-self-center"/></div></div>
// </div>
// <div>
//     <p className="my-3 text-gray-700 font-bold text-sm">Streak</p>
//     <div className=" relative border border-gray-200 shadow-lg rounded-lg py-2 pb-3 px-3 text-sm flex  flex-col"><span className="text-sm font-bold  ">{streak}</span><span className="text-gray-500">Don’t loose the flame !</span> <div className=" absolute top-0 right-0 h-full flex px-3  bg-[#FFCB00B2] rounded-br-lg rounded-tr-lg "><FaStar className="h-10 place-self-center text-white"/></div></div>
// </div>
// <div>
//     <p className="my-3 text-gray-700 font-bold text-sm">Next suggestion</p>
//     <div className=" relative border border-gray-200 shadow-lg rounded-lg py-2 pb-3 px-3 text-sm flex  flex-col text-gray-600">
//         <p className="text-[#035CBA] font-bold text-sm">How to Handle Mean Messages</p>
//     <div className="flex flex-row "><div className="flex">
//       {[...Array(5)].map((_, index) => (
//         <FaStar
//           key={index}
//           className={index < rating ? "text-yellow-400" : "text-gray-300"}
//         />
//       ))}
//     </div></div>
//     <p>excelent & safe conversation .. very knowledgeble personhappy to talk to with
// anyone </p>
// </div>
// <p className="text-[#035CBA] text-sm m-2 font-bold ">view more -&gt;</p>
//     </div>

//         </div>
//         <div className="w-[32%] space-y-4 p-4  rounded-lg shadow-2xl   border border-gray-200 text-sm">
      
//       <div className="border border-gray-200 shadow-lg rounded-lg p-4 flex justify-between items-center">
//         <div>
//           <p className="font-bold text-gray-700">Credentials</p>
//           <p className="text-gray-500 text-xs">
// You can guide and limit your terms of confidentiality here .          </p>
//         </div>
//         <img src={star} alt="icon" className="h-12" /> 
//       </div>

//       <div className="border  border-gray-200 shadow-lg rounded-lg p-4 space-y-4">
//         <div className="flex justify-between items-center">
//           <p className="text-gray-600 text-sm">Password</p>
//           <button onClick={()=>setedit(!edit)} className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Edit</button>
//         </div>
//        { edit &&<div><p className="font-medium">Belkharachouche Soundoud</p>
// <div className="flex justify-between items-center mt-3">
//           <p className="text-gray-600 text-sm">Confirm Password</p>
          
//         </div>
//         <p className="font-medium">siddxxd@gmail.com</p>
//         <div className="flex justify-between items-center mt-3">
//           <p className="text-gray-600 text-sm">Change Password</p>
//         </div>
//         <p className="font-medium">siddxxd@gmail.com</p>

//        </div>
//        }
//       </div>
    
//       <div className="border  border-gray-200 shadow-lg rounded-lg p-4">
//         <div className="flex justify-between items-center mb-1">
//           <p className="  text-sm font-bold">
//             Enable <span className="text-[#035CBA] font-bold">Emails</span>
//           </p>
//           <button className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">Enable</button>
//         </div>
//         <p className="text-gray-600 text-sm ">
//          You can enable daily emails and confirmations coming from our Email house
// Subscribe to get daily affirmations !
//         </p>
//       </div>

      
//     </div>

//     </div>)};export default Profile;
import star from "../assets/star.png";
import { FaStar } from "react-icons/fa6";
import badge from "../assets/badge.png";
import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../authcontext";
const Profile = () => {
    const user=useAuth()
  // Password state
  const [edit, setEdit] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Profile state
  const [editEmail, setEditEmail] = useState(false);
  const [editAbout, setEditAbout] = useState(false);
  const [name, setName] = useState(user.user.name);
  const [email, setEmail] = useState(user.user.email);
  const [about, setAbout] = useState(
    "Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit i ipsum dolor sit amet consectetur."
  );

  const badges = ["Privacy", "defender", "streetFree"];
  const number = 5;
  const total = 12;
  const streak = 7;
  const rating = 4;

  const handleSavePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("New password and confirmation do not match.");
      return;
    }

    console.log("Saving password:", {
      currentPassword,
      newPassword,
    });

    setEdit(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleSaveEmail = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    
    console.log("Saving email:", email);
    setEditEmail(false);
  };

  const handleSaveAbout = () => {
    console.log("Saving about:", about);
    setEditAbout(false);
  };

  return (
    <div className="p-20 pt-25 flex flex-row justify-between font-['Inter']">
      {/* Left Column - Personal Info */}
      <div className="w-[32%] space-y-4 p-4 rounded-lg shadow-2xl border border-gray-200 text-sm">
        <div className="border border-gray-200 shadow-lg rounded-lg p-4 flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-700">Personal Infos</p>
            <p className="text-gray-500 text-xs">
              These are the personal details shown to users in the app.
            </p>
          </div>
          <img src={star} alt="icon" className="h-12" /> 
        </div>

        <div className="border border-gray-200 shadow-lg rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-500">Your Name</p>
          </div>
          <p className="font-medium">{name}</p>

          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500">Email</p>
            <button 
              onClick={() => editEmail ? handleSaveEmail() : setEditEmail(true)}
              className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
            >
              {editEmail ? "Save" : "Edit"}
            </button>
          </div>
          
          {editEmail ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="font-medium">{email}</p>
          )}
        </div>

        <div className="border border-gray-200 shadow-lg rounded-lg p-4">
          <div className="flex justify-between items-center mb-1">
            <p className="text-gray-500">
              About <span className="text-blue-500 font-medium">Soundous</span>
            </p>
            <button 
              onClick={() => editAbout ? handleSaveAbout() : setEditAbout(true)}
              className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
            >
              {editAbout ? "Save" : "Edit"}
            </button>
          </div>
          
          {editAbout ? (
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-600 text-sm">{about}</p>
          )}
        </div>

        <div className="border border-gray-200 shadow-lg rounded-lg p-4 space-y-2">
          <div className="flex justify-between">
            <p className="font-medium">Ai Rafiqi</p>
            <span className="bg-[#035CBA] text-white text-xs px-3 py-1 rounded-full">Verified</span>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Reports</p>
            <p className="font-medium">{user.user.reportsCount}</p>
          </div>
        </div>
      </div>

      {/* Middle Column - Learning Journey */}
      <div className="border rounded-lg shadow-2xl border-gray-200 py-4 px-3 w-[32%]">
        <div className="border rounded-lg shadow-lg border-gray-200 flex flex-row gap-2 p-4 text-sm text-gray-700">
          <div className="flex flex-col">
            <p className="font-semibold">Learning Journey Details</p>
            <p className="text-xs">These are the professional details shown to users in the app.</p>
          </div>
          <img src={star} className="h-12 place-self-center" alt="star icon"/>
        </div>
        
        <div className="p-2">
          <p className="font-semibold text-sm text-gray-700 my-2">Badges earned</p>
          <div className="flex flex-wrap gap-4">
            {badges.map((badgeName, index) => (
              <div key={index} className="border border-gray-200 rounded-full py-1 px-2 text-gray-500">
                {badgeName}
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <p className="my-3 text-gray-700 font-bold text-sm">Courses completed</p>
          <div className="relative border border-gray-200 shadow-lg rounded-lg py-2 pb-3 px-3 text-sm flex flex-col">
            <span className="text-sm font-bold">{number}/{total}</span>
            <span className="text-gray-500">of total courses</span> 
            <div className="absolute top-0 right-0 h-full flex px-2 bg-[#035CBA] rounded-br-lg rounded-tr-lg">
              <img src={badge} className="h-6 place-self-center" alt="badge"/>
            </div>
          </div>
        </div>
        
        <div>
          <p className="my-3 text-gray-700 font-bold text-sm">Streak</p>
          <div className="relative border border-gray-200 shadow-lg rounded-lg py-2 pb-3 px-3 text-sm flex flex-col">
            <span className="text-sm font-bold">{streak}</span>
            <span className="text-gray-500">Don't lose the flame!</span> 
            <div className="absolute top-0 right-0 h-full flex px-3 bg-[#FFCB00B2] rounded-br-lg rounded-tr-lg">
              <FaStar className="h-10 place-self-center text-white"/>
            </div>
          </div>
        </div>
        
        <div>
          <p className="my-3 text-gray-700 font-bold text-sm">Next suggestion</p>
          <div className="relative border border-gray-200 shadow-lg rounded-lg py-2 pb-3 px-3 text-sm flex flex-col text-gray-600">
            <p className="text-[#035CBA] font-bold text-sm">How to Handle Mean Messages</p>
            <div className="flex flex-row">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < rating ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>
            </div>
            <p>Excellent & safe conversation... very knowledgeable person happy to talk to with anyone</p>
          </div>
          <Link to="/learningHub" className="text-[#035CBA] text-sm m-2 font-bold">view more →</Link>
        </div>
      </div>

      {/* Right Column - Credentials */}
      <div className="w-[32%] space-y-4 p-4 rounded-lg shadow-2xl border border-gray-200 text-sm">
        <div className="border border-gray-200 shadow-lg rounded-lg p-4 flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-700">Credentials</p>
            <p className="text-gray-500 text-xs">
              You can guide and limit your terms of confidentiality here.
            </p>
          </div>
          <img src={star} alt="icon" className="h-12" />
        </div>

        <div className="border border-gray-200 shadow-lg rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 text-sm">Password</p>
            <button
              onClick={() => setEdit(!edit)}
              className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
            >
              {edit ? "Cancel" : "Edit"}
            </button>
          </div>

          {edit ? (
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <label className="block mb-1 text-gray-500">Current Password</label>
                <input
                  type="password"
                  className="w-full p-2 bg-gray-100 rounded outline-none focus:ring-2 focus:ring-blue-500"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-500">New Password</label>
                <input
                  type="password"
                  className="w-full p-2 bg-gray-100 rounded outline-none focus:ring-2 focus:ring-blue-500"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                />
              </div>

              <div>
                <label className="block mb-1 text-gray-500">Confirm New Password</label>
                <input
                  type="password"
                  className="w-full p-2 bg-gray-100 rounded outline-none focus:ring-2 focus:ring-blue-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                />
              </div>

              <button
                onClick={handleSavePassword}
                className="bg-[#035CBA] text-white px-5 py-2 rounded text-sm mt-2 hover:bg-blue-700 transition-colors"
              >
                Save
              </button>
            </div>
          ) : (
            <p className="font-medium text-gray-600">••••••••</p>
          )}
        </div>

        <div className="border border-gray-200 shadow-lg rounded-lg p-4">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-bold">
              Enable <span className="text-[#035CBA] font-bold">Emails</span>
            </p>
            <button className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">
              Enable
            </button>
          </div>
          <p className="text-gray-600 text-sm">
            You can enable daily emails and confirmations coming from our Email house.
            Subscribe to get daily affirmations!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;