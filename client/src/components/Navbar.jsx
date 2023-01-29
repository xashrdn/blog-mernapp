import React, { useContext, useState } from "react";
import { User } from "./UserContext";
import { logo } from "../assets";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isLogged } = useContext(User);
  const navigate = useNavigate();
  const [dropDownMenu, setDropDownMenu] = useState(false);

  const profile = () => {
    dropDownMenu ? setDropDownMenu(false) : setDropDownMenu(true);
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
    alert("successfully logged out");
  };

  return (
    <div className="flex justify-evenly w-[100vw] h-[7vh] items-center sm:justify-between">
      <div className="py-4 px-4 w-[32vw] sm:px-12">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
          className=" w-[55px] h-[55px] object-contain cursor-pointer sm:w-[80px] sm:h-[50px]"
        />
      </div>
      <div className="py-4 px-4  w-[68vw] flex justify-end sm:px-12">
        {isLogged ? (
          <div className="flex items-center">
            <Link to="/newsfeed">
              <button
                type="button"
                className="text-center w-[26vw] mr-2 sm:w-[20vw] md:w-[16vw] lg:w-[12vw] inline-block px-6 py-2.5 bg-gray-600  text-white font-medium text-  leading-tight uppercase rounded-full shadow-md hover:bg-white hover:shadow-lg hover:text-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
              >
                BLOGS
              </button>
            </Link>
            <div className="inline-flex bg-white border rounded-md">
              <div className="w-[38vw]   px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md sm:w-[22vw] lg:w-[14vw]">
                {localStorage.getItem("name")}
              </div>
              <div className="relative">
                <button
                  onClick={profile}
                  type="button"
                  className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {dropDownMenu ? (
                  <div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                    <div className="p-2">
                      <Link
                        to="/myblogs"
                        className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                      >
                        My Blogs
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                      >
                        Settings
                      </Link>
                      <a
                        onClick={logOut}
                        className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 cursor-pointer"
                      >
                        Log Out
                      </a>
                    </div>
                  </div>
                ) : undefined}
              </div>
            </div>
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export default Navbar;
