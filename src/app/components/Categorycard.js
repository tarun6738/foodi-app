import React from "react";

const Categorycard = (props) => {
  const cardStyles = {
    
    height: "210px", 
  };
  return (
    <div className="w-56 h-52 sm:w-72 sm:h-72 relative border border-gray-300 rounded-2xl shadow-lg" style={cardStyles}>
      <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mt-[-12px] sm:mt-[16px]">
        <img
          src={props.imagesource}
          alt="Category Image"
          className="w-20 h-20 object-cover rounded-full absolute inset-0 m-auto mt-[-12px] sm:mt-[24px]"
        />
      </div>
      <h2 className="text-lg font-semibold text-center mt-2 sm:mt-0">
        {props.title}
      </h2>
      <p className="text-sm text-gray-500 text-center mt-2">
        {props.subtitle}
      </p>
    </div>
  );
};

export default Categorycard;
