import React, { useContext, useState } from "react";
import { User } from "./UserContext";
import { logo } from "../assets";
import { useNavigate } from "react-router-dom";

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
    <div className="flex justify-between w-[100vw] h-[8vh] items-center">
      <div className="py-4 px-12">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
          width="70px"
          className="cursor-pointer"
        />
      </div>
      <div className="py-4 px-12  ">
        <div className="relative flex flex-col justify-center  overflow-hidden"></div>
        {isLogged ? (
          <div>
            <div className="inline-flex bg-white border rounded-md">
              <div className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md">
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
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                      >
                        My Blog
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                      >
                        Settings
                      </a>
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
