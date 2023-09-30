import React from 'react'
import Link from "next/link"
import {Inconsolata} from '@next/font/google'
import ServicesContainer from './Services'
const StoryandServices = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h4 className="text-red-500 text-lg font-source">OUR STORY & SERVICES</h4>
          <h1 className='mt-6 text-4xl font-bold'>Our Culinary Journey </h1>
          <h1 className='mt-1 text-4xl font-bold'>And Services</h1>
          <p className='mt-6'>Rooted in passion, we curate unforgettable dining</p>
          <p className='mt-1'>experiences and offer exceptional services,</p>
          <p className='mt-1'>blending culinary artistry with warm hospitality.</p>
          <Link href="/"><button className="bg-green-500 px-8 py-2 text-white mt-6 rounded-3xl">Explore</button></Link>
        </div>
        <div>
          <ServicesContainer/>
        </div>
      </div>
    </>
  )
}

export default StoryandServices