import React from "react";
import Image from "next/image"
const StandoutCard = (props) => {
  return (
    <div className="w-80 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
      
      <div className="flex justify-center h-48">
        <Image
          src={props.imagesrc} 
          alt="Product"
          width={176}
          height={276}
          className="h-48 object-cover"
        />
      </div>

      
      <div className="p-4">
        
        <h2 className="text-xl font-semibold mb-2">{props.title}</h2>

        
        <p className="text-gray-600 mb-2">{props.desc}</p>

       
        <div className="flex items-center justify-between mb-2">
          <span className="text-green-600 font-semibold">${props.price}.99</span>

          {/* Add some spacing here */}
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-400 fill-current mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 1l1.9 5.7h6.1l-4.9 3.6 1.9 5.8-4.9-3.6-4.9 3.6 1.9-5.8-4.9-3.6h6.1z"
              />
            </svg>
            <span className="text-gray-600">{props.rating}</span>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default StandoutCard;
