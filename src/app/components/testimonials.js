import React from 'react';
import GreenBackgroundWithImage from './GreenBackgroundWithImage';
import FeedbackSection from './FeedbackSection';

const Testimonials = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="md:ml-36">
        <GreenBackgroundWithImage />
      </div>
      <div className="md:mr-56 mt-12 md:mt-0">
        <h4 className="text-red-500 text-lg font-source">TESTIMONIALS</h4>
        <h1 className="mt-8 text-4xl font-bold">What Our Customers </h1>
        <h1 className="mt-2 text-4xl font-bold">Say About Us</h1>
        <p className="mt-6">
          &quot;I had the Pleasure of dining at Foodi last night, and&quot;
        </p>
        <p>I&apos;m still raving about the experience! The attention to</p>
        <p>detail in presentation and service was impeccable&quot;</p>
        <FeedbackSection />
      </div>
      
    </div>
  );
}

export default Testimonials;
