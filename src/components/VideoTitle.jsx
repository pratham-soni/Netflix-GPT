import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-7xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="">
        <button className="bg-gray-300 hover:bg-gray-200 mx-2 cursor-pointer text-black py-3 px-8 text-lg font-bold rounded-md opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-300 mx-2 hover:bg-gray-200 cursor-pointer text-black py-3 px-8 text-lg font-bold rounded-md opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
