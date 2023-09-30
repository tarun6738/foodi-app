import React from 'react';
import Image from "next/image"
const ImageCard = (props) => {
  return (
    <>
      <div className="flex items-center w-fit border border-gray-200 rounded-2xl p-2 space-x-2 bg-white">
        <div className="flex-shrink-0">
          <Image src={props.imagesrc} alt="Product Image" width={64} height={64}className="w-16 h-16 object-cover rounded-md" />
        </div>
        <div className="flex-1">
          <h2 className="text-base font-semibold">{props.title}</h2>
          <div className="flex items-center space-x-1">
            <div className="text-yellow-400 text-sm">
              ★★★★☆
            </div>
            
          </div>
          <div className="text-sm font-semibold text-green-600">
            ${props.price}.99
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
