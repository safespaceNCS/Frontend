import { FcGoogle } from "react-icons/fc";
import fourth from "../assets/fourth.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';
import { useAuth } from "../authcontext";
import { useNavigate } from "react-router";
const SignIn = ({goto}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {login}=useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const onSubmit = async(data) => {
    console.log(data);
     try {
      const res = await axios.post('http://192.168.43.143:5000/api/auth/login',data, {
        headers: {
          'Content-Type': 'application/json',
          
        }
       
      } );
      console.log(res.data);
      const { token, user } = res.data;
      login(token,user);
if (user.role === "Child") {
        navigate("/");
      } else if (user.role === "SchoolPsychologist" || user.role === "admin") {
        navigate("/dash");
      } else {
        navigate("/"); 
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-[35vw] h-[80vh] bg-white rounded-2xl shadow-lg flex flex-col px-8 py-10 ">
      <div className="flex flex-row items-start justify-between mb-6">
        <div>
           
          <p className="text-sm font-['Poppins']">Welcome to <span className="text-[#035CBA] font-bold font-['Rosario']">RAFIQI</span></p>
          <p className="text-4xl font-bold text-[#035CBA] font-['Inter']">Sign in</p>
        </div>
        <div className="">
          <p className="text-sm text-gray-400">No account?</p>
          <button  onClick={()=>goto(true)} className="text-sm text-[#035CBA] cursor-pointer hover:underline">Sign up</button>
        </div>
      </div>

      <div className="flex flex-row items-end justify-between mb-8">
        <button className="flex flex-row items-center justify-center h-10 py-2 w-[65%] border border-[#035CBA] rounded-lg text-sm text-[#035CBA] font-semibold">
          <FcGoogle className="text-lg mr-2" />
          Sign in with Google
        </button>
        <img src={fourth} className="h-18" alt="Decoration" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="relative">
          <label htmlFor="email" className="block mb-2 text-sm ">
            Enter your username or email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="username or email address"
            className="border p-3 pr-10 rounded-md w-full text-sm focus:border-[#035CBA] border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#035CBA]"
            {...register("email", {
              required: "Email is required",
              onChange: () => clearErrors("email"),
            })}
          />
        </div>

        <div className="relative mb-1">
          <label htmlFor="password" className="block mb-2 text-sm ">
            Enter your Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            className="border p-3 pr-10 rounded-md w-full text-sm focus:border-[#035CBA] border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#035CBA]"
            {...register("password", {
              required: "Password is required",
              onChange: () => clearErrors("password"),
            })}
          />
          <button
            type="button"
            className="absolute top-10 right-3 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>

    
        <div className="grid grid-cols-2 gap-2 mt-2">
  <div className="min-w-0">
    {(errors.email || errors.password) && (
      <p className="text-red-500 text-sm truncate">
        {errors.email?.message || errors.password?.message}
      </p>
    )}
  </div>
  <p className="text-sm text-[#035CBA] cursor-pointer hover:underline text-right">
    Forgot password?
  </p>
</div>
        <button
          type="submit"
          className="w-full bg-[#035CBA] text-white py-2 mt-5 px-4 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-[#035CBA] focus:ring-opacity-50 font-medium"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;