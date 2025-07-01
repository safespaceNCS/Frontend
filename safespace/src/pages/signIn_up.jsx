import { Link } from "react-router";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import SignIn from "../components/signIn";
import SignUp from "../components/signUp";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
const SignIn_up =()=>{
    const [sign, setSign] = useState(false);
    const toggleSign = (x) => {
        setSign(x);
    }
    return(<div className=" relative overflow-hidden font-['Poppins']">
<Link to="/"><FaArrowLeft className="absolute text-white top-5 left-10 font-extrabold text-3xl"/></Link>
        <div className="h-[50vh] w-[100vw] bg-[#035CBA]"></div>
<div className="relative h-[50vh] w-[100vw] bg-white mx-20">
<div className=" absolute top-20 left-1 grid grid-cols-3 gap-4">
    <img src={first} className="h-[20vh]"/>
<img src={second} className="h-[20vh]"/>
<img src={third} className="h-[20vh]" />
</div>
</div>
     <div className="absolute top-1/2 -translate-y-1/2 right-20 z-10">
   {sign? <SignUp goto={toggleSign}/>: <SignIn goto={toggleSign}/>}
</div>
    </div>)
};export default SignIn_up