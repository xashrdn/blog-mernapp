import React from "react";
import { useNavigate } from "react-router-dom";
import { logo } from "../assets";
import axios from "axios";
import { useState } from "react";
import Footer from "../components/Footer";

const CreateBlog = () => {
  const [title, setTitle] = useState();
  const navigate = useNavigate();
  const [paragraph, setParagraph] = useState();
  const [image, setImage] = useState();

  const publish = async () => {
    const result = await axios.post("http://localhost:8000/blog", {
      publisher: localStorage.getItem("name"),
      title: title,
      paragraph: paragraph,
      image: image,
    });
    if (result.status == 201) {
      navigate("/");
      alert("Blog published successfully");
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen bg-[#111]">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <div className="flex items-center justify-center">
          <img
            onClick={() => navigate("/")}
            className="bg-black cursor-pointer"
            width="70px"
            heigth="70px"
            src={logo}
            alt="logo"
          />
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="mt-6">
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="News"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Paragraph
            </label>
            <textarea
              onChange={(e) => setParagraph(e.target.value)}
              placeholder="Information..."
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40 h-64"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-gray-800">
              Image
            </label>
            <input
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image (url)"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              type="Submit"
              onClick={publish}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default CreateBlog;
