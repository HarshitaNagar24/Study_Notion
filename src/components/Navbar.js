import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={Logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-x-6 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-x-4 text-gray-100">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-gray-700">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-gray-700">
              Signup
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
              className="bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-gray-700"
            >
              Logout
            </button>
          </Link>
        )}

        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-gray-800 py-[8px] px-[12px] rounded-[8px] border border-gray-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
