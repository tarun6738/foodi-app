import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPepperHot } from "react-icons/fa";
import { BsPlayFill } from "react-icons/bs";
import Imagecard from "@/app/components/imagecard";

const herosection = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="mt-28 ml-36">
          <div>
            <h1 className="text-5xl font-bold">Dive into Delights</h1>
            <h1 className="mt-3 text-5xl font-bold">
              Of Delectable <span className="text-green-700">Food</span>
            </h1>
          </div>
          <div>
            <h4 className="mt-10">
              Where Each Plate Weaves a Story of Culinary Mastery{" "}
            </h4>
            <h4 className="mt-1">and Passionate Crafsmanship</h4>
          </div>
          <div className="flex items-center">
            <Link href="/">
              <button className="mt-7 bg-green-600 text-white px-4 py-2 rounded-3xl">
                Order Now
              </button>
            </Link>
            <h2 className="mt-6 ml-5">Watch Video</h2>
            <div>
              <Link href="/">
                <BsPlayFill className="rounded-full text-3xl mt-6 ml-4 " />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative mr-10">
          <div className="w-96 h-96 bg-green-500 rounded-full mr-20 mt-16 relative"></div>
          <Image
            src="/girlfood.png"
            alt="Your Image"
            width={500}
            height={300}
            className="absolute rounded-full top-[-8px] left-1/2 transform -translate-x-1/2 -ml-8"
          />
          <div className="absolute bg-white p-2 rounded-lg shadow-md text-center text-red-500 flex items-center top-[69px] -ml-16">
            Hot Spicy Food{" "}
            <span className="ml-2">
              <FaPepperHot />
            </span>
          </div>
            <div className="absolute flex items-center top-[390px] space-x-8">
              <Imagecard imagesrc="/noodlesimg.png" title="Spicy Noodles" price="18"/>
              <Imagecard imagesrc="/saladimg.png" title="Vegetarian Salad" price="23"/>
            </div>
        </div>
      </div>
    </>
  );
};

export default herosection;
