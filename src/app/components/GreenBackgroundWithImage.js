import React from "react";

const GreenBackgroundWithImage = () => {
  
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-green-500 rounded-t-full mt-40 w-80 h-56 ml-4"></div>
      <img
        src="/pngwing2.png"
        alt="Image"
        className="h-96 object-cover relative z-10 ml-9"
      />
      <div className="absolute bg-white p-2 rounded-lg shadow-md text-center flex items-center ml-64 w-44 -mt-5">
            Our Best Chef{" "}
            <span className="ml-2">
              😄
            </span>
          </div>
    </div>
  );
};

export default GreenBackgroundWithImage;
