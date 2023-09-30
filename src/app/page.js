import React from 'react';
import Herosection from './components/herosection';
import PopularCategories from './components/PopularCategories';
import Categorycard from './components/Categorycard';
import Standoutdishes from './components/Standoutdishes';
import Testimonials from './components/testimonials';
import StoryandServices from './components/StoryandServices';
const Page = () => {
  return (
    <>
      <Herosection />
      <PopularCategories />
      <div className="mt-8 sm:mt-12 mx-4 sm:mx-8 flex flex-col sm:flex-row sm:space-x-4 justify-between">
        <Categorycard imagesource="/burgerimg.png" title="Main Dish" subtitle="(86 dishes)" />
        <Categorycard imagesource="/sandwichimg.png" title="Break Fast" subtitle="(12 dishes)" />
        <Categorycard imagesource="/icecreamimg.png" title="Dessert" subtitle="(48 Dessert)" />
        <Categorycard imagesource="/juiceimg.png" title="Browse All" subtitle="(255 items)" />
      </div>
      <div className='mt-24 ml-10'>
        <Standoutdishes/>

      </div>
      <div className='mt-32'>
        <Testimonials/>
      </div>
      <div className='mt-24 ml-20'>
        <StoryandServices/>
      </div>
    </>
  );
};

export default Page;
