import React from 'react';
import { PiBowlFood } from 'react-icons/pi';
import { AiOutlineFieldTime,AiOutlineShoppingCart,AiOutlineGift } from "react-icons/ai";
const Services = ({icon: Icon, title, description}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-64">
      <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center">
        {Icon && <Icon className="text-white text-5xl text-green-500" />}
      </div>
      <h2 className="text-2xl font-bold text-center mt-1 text-green-500">{title}</h2>
      <p className="text-gray-600 text-center mt-3 text-sm">
        {description}
      </p>
    </div>
  );
};
const ServicesContainer = () => {
  return (
    <div className="grid grid-cols-2 gap-4 -mt-8 mr-36">
      {/* Top Row */}
      <div>
        <Services title="CATERING" description="Delight your guests with our flavours and presentation" icon={PiBowlFood}/>
      </div>
      <div>
        <Services title="FAST DELIVERY" description="We deliver your order propmtly to your door" icon={AiOutlineFieldTime}/>
      </div>

      {/* Bottom Row */}
      <div>
        <Services title="ONLINE ORDERING" description="Explore menu & order with ease using our Online Ordering" icon={AiOutlineShoppingCart}/>
      </div>
      <div>
        <Services title="GIFT CARDS" description="Give the gift of exceptional dining with Foodi gift cards" icon={AiOutlineGift}/>
      </div>
    </div>
  );
};
export default ServicesContainer;