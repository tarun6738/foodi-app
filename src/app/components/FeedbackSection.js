import React from "react";

const FeedbackSection = () => {
  return (
    <div className="mt-4 flex items-center space-x-4">
      {/* Circular images */}
      <div className="relative">
        <img
          src="/female1.png"
          alt="Image 1"
          className="w-16 h-16 object-cover rounded-full transform translate-x-[-10px]"
        />
      </div>
      <div className="relative">
        <img
          src="/female2.png"
          alt="Image 2"
          className="w-16 h-16 object-cover rounded-full transform translate-x-[-5px]"
        />
      </div>
      <div className="relative">
        <img
          src="/male1.png"
          alt="Image 3"
          className="w-16 h-16 object-cover rounded-full"
        />
      </div>

      {/* Customer feedback */}
      <div>
        <p className="font-semibold">Customer feedback</p>
        <div className="flex items-center space-x-2">
          {/* Rating */}
          <p className="font-semibold text-yellow-500">★<span className="text-black">4.5</span></p>
          {/* Number of reviews */}
          <p>(18.8k reviews)</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
