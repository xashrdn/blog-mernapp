import React from "react";
import Navbar from "./Navbar";
import { blog } from "../assets";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-black text-white">
      <Navbar />
      <div className="flex justify-center items-center flex-col h-[87vh]">
        <img src={blog} alt="" />
        <Link to="/createblog">
          <button
            type="button"
            className="mt-5 w-[50vw] inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-white hover:shadow-lg hover:text-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            Create Blog
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Content;
