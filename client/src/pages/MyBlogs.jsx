import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logo } from "../assets";
import Footer from "../components/Footer";

const MyBlogs = () => {
  const navigate = useNavigate();
  const [myBlog, setMyBlog] = useState([]);
  const getMyBlog = async () => {
    const result = await axios.get(
      `https://xashblog.vercel.app/blog/${localStorage.getItem("userId")}`
    );
    setMyBlog(result?.data);
  };
  getMyBlog();

  return (
    <div className="bg-black h-[screen] w-[100%] text-white">
      <div className="flex items-center justify-center">
        <img
          onClick={() => navigate("/")}
          className=" cursor-pointer mt-2"
          width="140px"
          heigth="140px"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="flex flex-wrap-reverse justify-evenly mt-2 w-[98vw] gap-2">
        {myBlog?.map((el, key) => {
          return (
            <div
              key={key}
              className="h-[60vh] w-[50vw] rounded-lg shadow-md 2xl:max-w-sm border-white border-2 p-1 mt-5"
            >
              <img
                className="object-cover w-full h-48"
                src={el?.image}
                alt="image"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                  {el?.title}
                </h4>
                <p className="mb-2 leading-normal text-white">
                  {el?.paragraph}
                </p>
                <p className="py-2 text-sm text-gray-700">publisher: You</p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default MyBlogs;
