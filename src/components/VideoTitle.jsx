import React from "react";
import logo from "../icons/icons8-info-50.png";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/2">{overview}</p>
      <div className="">
        <button className="bg-white hover:bg-gray-300 mx-2 cursor-pointer text-black py-2 px-8 font-bold text-lg rounded-md">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white mx-2 hover:bg-opacity-20 cursor-pointer py-2 px-8 text-lg rounded-md bg-opacity-30">
          <img className="inline-block w-6 mr-2" src={logo} alt="logo"></img>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
