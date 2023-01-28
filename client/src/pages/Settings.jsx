import React from "react";
import { logo } from "../assets/";
import { Link } from "react-router-dom";
import axios from "axios";

const Settings = () => {
  const deleteAll = () => {
    axios.delete(
      `https://xashblog.vercel.app/blogs/${localStorage.getItem("userId")}`
    );
    alert("successfully deleted");
  };
  return (
    <div className="bg-[#111] flex justify-center items-center h-[100vh] w-[100vw] flex-col">
      <Link to="/">
        <img width="140px" heigth="140px" src={logo} alt="" />
      </Link>

      <button
        onClick={deleteAll}
        className="mt-5 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
      >
        Delete all blog
      </button>
    </div>
  );
};

export default Settings;
