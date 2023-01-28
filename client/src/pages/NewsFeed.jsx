import axios from "axios";
import { useState } from "react";
import { logo } from "../assets";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const NewsFeed = () => {
  const navigate = useNavigate();
  const [feeds, setFeeds] = useState([]);
  const getFeed = async () => {
    const result = await axios.get("http://localhost:8000/blogs");
    setFeeds(result?.data);
  };
  getFeed();
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
        {feeds?.map((el, key) => {
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
                <p className="py-2 text-sm text-gray-700">
                  publisher: {el?.publisher}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default NewsFeed;
