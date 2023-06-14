import React from 'react'
import firstCard from '../images/2.jpg'
import secondCard from '../images/7.jpg'
import thirdCard from '../images/88.jpg'

const CardSneakers = () => {
  return (
    <div className='max-w-[1600px] mx-auto p-6 py-14 grid md:grid-cols-3 gap-6'>
        {/*card 1*/}
        <div className='rounded-xl relative '>

            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-3 pt-4'>Summer fit's limited</p>
            <p>Out from 06/2023</p>
            <button className='border-white  bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>

            <img className='max-h-[200px] md:max-h-[200px] w-full object-cover ' src={secondCard} alt=""/>
        </div>

         {/*card 2*/}
        <div className='rounded-xl relative '>

            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-3 pt-4'>Costume Limited Design AirForce 3</p>
            <p>Out from 04/2023</p>
            <button className='border-white  bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>

            <img className='max-h-[200px] md:max-h-[200px] w-full object-cover ' src={firstCard} alt=""/>
        </div>

         {/*card 3*/}
        <div className='rounded-xl relative '>

            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-3 pt-4'>Red Devil Limited Air Force 6</p>
            <p>Out from 03/2023</p>
            <button className='border-white  bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>

            <img className='max-h-[200px] md:max-h-[200px] w-full object-cover ' src={thirdCard} alt="red-relved"/>
        </div>

    </div>
  )
}

export default CardSneakers