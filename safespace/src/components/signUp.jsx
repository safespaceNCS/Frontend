import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = ({goto}) => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const password = watch("password");

  return (
    <div className="w-[35vw] max-h-[90vh] bg-white rounded-2xl shadow-lg flex flex-col px-8 py-10">
      
      <div className="flex flex-row items-start justify-between mb-6">
        <div>
          <p className="text-sm">Welcome to <span className="text-[#035CBA] font-bold  font-['Rosario']">RAFIQI</span></p>
          <p className="text-4xl font-bold text-[#035CBA] font-['Inter']">Sign Up</p>
        </div>
        <div className="text-left">
          <p className="text-sm text-gray-400">Already have an account?</p>
          <button onClick={()=>goto(false)} className="text-sm text-[#035CBA] cursor-pointer hover:underline">Sign in</button>
        </div>
      </div>

      
      <div className="flex mb-8 justify-end">
       <button className="flex flex-row items-center justify-center h-10 py-2 w-[65%] border border-[#035CBA] rounded-lg text-sm text-[#035CBA] font-semibold">
          <FcGoogle className="text-lg mr-2" />
          Sign in with Google
        </button>
      </div>

    
     
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-row gap-4">
 
  <div className="w-2/3">
    <label htmlFor="username" className="block mb-2 text-sm">
      Username
    </label>
    <input
      type="text"
      id="username"
      placeholder="username"
      className="border p-3 rounded-md w-full text-sm focus:border-blue-500 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      {...register("username", {
        required: "Username is required",
        minLength: {
          value: 3,
          message: "Username must be at least 3 characters",
        },
        maxLength: {
          value: 20,
          message: "Username must be less than 20 characters",
        },
        pattern: {
          value: /^[a-zA-Z0-9_]+$/,
          message: "Username can only contain letters, numbers, and underscores",
        },
      })}
    />
  </div>


  <div className="w-1/3">
    <label htmlFor="age" className="block mb-2 text-sm">
      Age
    </label>
    <input
      type="number"
      id="age"
      min="13"
      max="120"
      placeholder=" your age"
      className="border p-3 rounded-md w-full text-sm focus:border-blue-500 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      {...register("age", {
        required: "Age is required",
        min: {
          value: 13,
          message: "You must be at least 13 years old",
        },
        max: {
          value: 120,
          message: "Please enter a valid age",
        },
      })}
    />
  </div>
</div>

 
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="email"
            className="border p-3 rounded-md w-full text-sm focus:border-blue-500 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />
         
        </div>

       
        {/* <div>
          <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            type="number"
            id="age"
            min="13"
            max="120"
            placeholder="Enter your age"
            className="border p-3 rounded-md w-full text-sm focus:border-blue-500 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("age", {
              required: "Age is required",
              min: {
                value: 13,
                message: "You must be at least 13 years old"
              },
              max: {
                value: 120,
                message: "Please enter a valid age"
              }
            })}
          />
         
        </div> */}

    
        <div className="relative">
          <label htmlFor="password" className="block mb-2 text-sm">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder=" password"
            className="border p-3 pr-10 rounded-md w-full text-sm focus:border-blue-500 border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              },
              validate: (value) => {
                return (
                  [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                    pattern.test(value)
                  ) || "Must include uppercase, lowercase, number, and special character"
                );
              }
            })}
          />
          <button
            type="button"
            className="absolute right-3 top-10 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaEye />:<FaEyeSlash /> }
          </button>
{(errors.password || errors.age || errors.email || errors.username) && (
  <p className="mt-1 text-sm text-red-600">
    {
     errors.username?.message||
     errors.email?.message ||
     errors.password?.message ||
     errors.age?.message 
    }
  </p>
)}

          
        </div>

      
        {/* {password && (
          <div className="mb-2">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Password strength:</span>
              <span>
                {password.length < 8 ? "Weak" : 
                 password.length < 12 ? "Medium" : "Strong"}
              </span>
            </div>
            <div className="h-1 bg-gray-200 rounded-full">
              <div
                className={`h-1 rounded-full ${
                  password.length < 8 ? "bg-red-500" :
                  password.length < 12 ? "bg-yellow-500" : "bg-green-500"
                }`}
                style={{
                  width: `${Math.min(100, (password.length / 16) * 100)}%`
                }}
              ></div>
            </div>
          </div>
        )} */}

       
        {/* <div className="mt-4">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 mr-2"
              {...register("terms", {
                required: "You must accept the terms and conditions"
              })}
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the <span className="text-[#035CBA] cursor-pointer hover:underline">Terms of Service</span> and <span className="text-[#035CBA] cursor-pointer hover:underline">Privacy Policy</span>
            </label>
          </div>
          {errors.terms && (
            <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
          )}
        </div> */}

        <button
          type="submit"
          className="w-full bg-[#035CBA] text-white py-3 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium mt-6"
        >
          Create Account
        </button>
      </form> 
      <p className="text-[#035CBA] mt-2 text-sm text-center">Your privacy matters – your data is safe with us.</p>
    </div>
  );
};

export default SignUp;