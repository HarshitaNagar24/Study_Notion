import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }
  return (
    <form onSubmit={submitHandler}>
      <label className="w-full">
        <p className="text-[0.890rem] text-gray-200 mb-1 leading-[1.375rem] mt-7">
          Email Address <sup className="text-pink-900">*</sup>
        </p>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email Address"
          className="bg-gray-800 rounded-[0.5rem] text-gray-5 w-full p-[8px]"
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.890rem] text-gray-200 mb-1 leading-[1.375rem] mt-3">
          Password <sup className="text-pink-900">*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          required
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          className="bg-gray-800 rounded-[0.5rem] text-gray-5 w-full p-[8px]"
        />
        <span onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-[79px]  cursor-pointer"> 

          {showPassword ? <AiOutlineEyeInvisible fontSize={22} fill="#AFB2BF" /> : <AiOutlineEye fontSize={22} fill="#AFB2BF"/>}
        </span>
        <Link to="#">
          <p className="text-xs mt-1 text-blue-300 max-w-max ml-auto">Forgot Password?</p>
        </Link>
      </label>
      <button className="bg-yellow-500 rounded-[8px] font-medium text-gray-900 px-[199px] py-[8px] mt-2">Sign In</button>
    </form>
  );
};

export default LoginForm;
