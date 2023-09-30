import React from "react";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube, AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
    <div className="flex space-x-56 mt-48 ml-20">
      <div>
        <h1 className="font-bold text-2xl">
          <span className="bg-green-600 text-white rounded-xl pl-2 pr-2 pt-1 pb-1 font-bold text-3xl mr-1">
            F
          </span>
          OODI
        </h1>
        <p className="mt-6">Savor the artistry where</p>
        <p>every dish is a culinary</p>
        <p>masterpiece</p>
      </div>
      <div>
        <h1 className="font-bold text-xl">Useful links</h1>
        <div className="mt-4">
          <ul>
            <li>About us</li>
            <li className="mt-2">Events</li>
            <li className="mt-2">Blogs</li>
            <li className="mt-2">FAQ</li>
          </ul>
        </div>
      </div>
      <div>
      <h1 className="font-bold text-xl">Main Menu</h1>
        <div className="mt-4">
          <ul>
            <li>Home</li>
            <li className="mt-2">Offers</li>
            <li className="mt-2">Menus</li>
            <li className="mt-2">Reservation</li>
          </ul>
        </div>
      </div>
      <div>
      <h1 className="font-bold text-xl">Contact us</h1>
        <div className="mt-4">
          <ul>
            <li>example@email.com</li>
            <li className="mt-2">+64 958 248 966</li>
            <li className="mt-2">Social Media</li>
            
          </ul>
        </div>
      </div>
    </div>
    <div className="mt-16 ml-16 flex space-x-8">
    <div className="bg-green-300 rounded-full w-12 h-12 flex items-center justify-center">
      <FiFacebook className="text-black text-3xl" />
    </div>
    <div className="bg-green-300 rounded-full w-12 h-12 flex items-center justify-center">
      <BsInstagram className="text-black text-3xl" />
    </div>
    <div className="bg-green-300 rounded-full w-12 h-12 flex items-center justify-center">
      <FaXTwitter className="text-black text-3xl" />
    </div>
    <div className="bg-green-300 rounded-full w-12 h-12 flex items-center justify-center">
      <AiOutlineYoutube className="text-black text-3xl" />
    </div>
    <div className="" style={{ display: 'flex', alignItems: 'center', marginLeft:'195px'}}>
  Copyright <AiOutlineCopyrightCircle /> 2023 Tarun | All rights reserved
</div>


    </div>
    </>
  );
};

export default Footer;
