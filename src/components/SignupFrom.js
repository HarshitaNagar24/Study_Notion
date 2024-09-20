import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupFrom = ({setIsLoggedIn}) => {
  const [fromData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword , setShowPassword] = useState(false);
  const [showConfirmPassword , setShowConfirmPassword] = useState(false);
  const[accountType, setAccountType] = useState("student");
  const navigate = useNavigate();
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event){
    event.preventDefault();
    if(fromData.password !==  fromData.confirmPassword){
      toast.error('Passwords do not match');
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData={
      ...fromData
    }
    const finalData={
      ...accountData,
      accountType:accountType
    }
    console.log(finalData);
    navigate('/dashboard');

  }
  return (
    <div>
      {/* Student-Instructor Tab */}
      <div className="flex bg-gray-900 max-w-max px-2 py-2 gap-x-1 my-6 rounded-full">
        <button className={`${accountType === "student" ? "bg-gray-700 text-gray-100" :"bg-transparent text-gray-200"} py-1 px-3 rounded-full transition-all duration-200`} onClick={()=>setAccountType("student")}>Student</button>
        <button onClick={()=>setAccountType("instructor")} className={`${accountType === "instructor" ? "bg-gray-700 text-gray-100" :"bg-transparent text-gray-200"}py-1 px-3 rounded-full transition-all duration-200`}>Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
        {/* first and last name div */}
        <div className="w-full flex gap-3">
          <lable className="w-full">
            <p className="text-[0.890rem] text-gray-200 mb-1 leading-[1.375rem] mt-3">
              First Name <sup className="text-pink-900">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              onChange={changeHandler}
              value={fromData.firstName}
              className="bg-gray-800 rounded-[0.5rem] text-gray-5 w-full p-[8px]"
            />
          </lable>
          <lable className="w-full">
            <p className="text-[0.890rem] text-gray-200 mb-1 leading-[1.375rem] mt-3">
              Last Name <sup className="text-pink-900">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              onChange={changeHandler}
              value={fromData.lastName}
              className="bg-gray-800 rounded-[0.5rem] text-gray-5 w-full p-[8px]"
            />
          </lable>
        </div>
        {/* Email field */}
        <lable>
          <p className="text-[0.890rem] text-gray-200 mb-1 leading-[1.375rem] mt-1">
            Email Address <sup className="text-pink-900">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter your Email Address"
            onChange={changeHandler}
            value={fromData.email}
            className="bg-gray-800 rounded-[0.5rem] text-gray-5 w-full p-[8px]"
          />
        </lable>
        {/* password field */}
        <div className="w-full flex gap-3">
          <lable className="w-full relative">
            <p className="text-[0.890rem] text-gray-200 mb-1 leading-[1.375rem] mt-1">
              Create Password <sup className="text-pink-900">*</sup>
            </p>
            <input
              required
              type={showPassword ? ("text") : ("password")}
              name="password"
              placeholder="Create Password"
              onChange={changeHandler}
              value={fromData.password}
              className="bg-gray-800 rounded-[0.5rem] text-gray-5 w-full p-[8px]"
            />
            <span onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-[40px]  cursor-pointer">
                {showPassword ? (<AiOutlineEyeInvisible fontSize={22} fill="#AFB2BF"/>) :(<AiOutlineEye fontSize={22} fill="#AFB2BF"/>)}
            </span>
          </lable>
          <lable className="w-full relative">
            <p className="text-[0.890rem] text-gray-200 mb-1 leading-[1.375rem] mt-1">
              Confirm Password <sup className="text-pink-900">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? ("text") : ("password")}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={fromData.confirmPassword}
              className="bg-gray-800 rounded-[0.5rem] text-gray-5 w-full p-[8px]"
            />
            <span onClick={() => setShowConfirmPassword((prev) => !prev)} className="absolute right-3 top-[40px]  cursor-pointer">
                {showConfirmPassword ? (<AiOutlineEyeInvisible  fontSize={22} fill="#AFB2BF"/>) :(<AiOutlineEye  fontSize={22} fill="#AFB2BF"/>)}
            </span>
          </lable>
        </div>
        <button className="w-full bg-yellow-500 rounded-[8px] font-medium text-gray-900 py-2 mt-3">Create Account</button>
      </form>
    </div>
  );
};

export default SignupFrom;
