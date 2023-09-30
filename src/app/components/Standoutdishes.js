import React from 'react'
import StandoutCard from './Standoutcard'

const Standoutdishes = () => {
  return (
    <>
      <div>
        <div>
          <h6 className='text-red-500 text-lg font-source'>SPECIAL DISHES</h6>
          <h1 className='text-4xl font-bold mt-4'>Standout Dishes</h1>
          <h1 className='mt-1 text-4xl font-bold'>From Our Menu</h1>
        </div>
        <div className='mt-8 flex space-x-28 ml-24'>
          <StandoutCard imagesrc="/Fattoushsalad.png" title="Fattoush Salad" desc="Description of the item" price="24" rating="4.9"/>
          <StandoutCard imagesrc="/Vegetablesalad.png" title="Vegetable Salad" desc="Description of the item" price="26" rating="4.6"/>
          <StandoutCard imagesrc="/Eggsalad.png" title="Egg vegi Salad" desc="Description of the item" price="23" rating="4.5"/>
        </div>
      </div>
    </>
  )
}

export default Standoutdishes