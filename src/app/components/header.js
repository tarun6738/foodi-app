import React from "react";
import Nav from "@/app/components/nav";
import { FiSearch, FiPhoneCall } from "react-icons/fi";
import { PiBagBold } from "react-icons/pi";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="w-96 mt-8 ml-2 text-center">
          <h1 className="font-bold text-2xl">
            <span className="bg-green-600 text-white rounded-xl pl-2 pr-2 pt-1 pb-1 font-bold text-3xl mr-1">
              F
            </span>
            OODI
          </h1>
        </div>
        
        <div >
          <Nav />
        </div>
        <div className="mt-11 flex w-96 space-x-12">
          <div>
            <Link href="/">
              <FiSearch className="text-xl" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0 bg-green-500 text-white w-3 h-4 rounded-full flex items-center justify-center mt-[-3px]">
              <span className="text-xs">8</span>
            </div>
            <Link href="/">
              <PiBagBold className="text-xl mr-1" />
            </Link>
          </div>
          <div className="mt-[-10px]">
            <Link href="/">
              <button className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-2xl">
                <FiPhoneCall />
                <span>Contact</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
