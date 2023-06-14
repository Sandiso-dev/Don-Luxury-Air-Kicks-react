import React,{useState} from 'react'
import {data} from '../data/data'

export const Kicks = () => {
    const [kicks, setKicks] = useState(data)

    //function to filter items based with the cartagory they are in

    const CartagoryType = (cartagory) => {
        setKicks(
            data.filter((kick) => {
                return kick.cartagory === cartagory;
            })
        )
        }

    //function to filter items based on their price 

    const PriceValue = (price) =>{
        setKicks(
            data.filter((kick) => {
                return kick.price === price;
            })
        )
    }

  return (
    <div className='max-w-[1600px] m-auto px-4 py-12'>

        <h1 className="text-orange-600 font-bold text-4xl text-center">Latest Kick In Store </h1>

            {/*filtered by row*/}
        <div className='flex flex-col lg:flex-row justify-between'>


            {/*filterd by type*/}
            <div>
                <p className='font-bold text-gray-700'>Filter by Type</p>
                <div className='flex justify-between flex-wrap'>
                <button onClick={()=> setKicks(data)} className='border-orange-600 text-orange-600'>All</button>

                <button onClick={()=> CartagoryType('Hoodies')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Hoodies</button >

                <button onClick={()=> CartagoryType('Comming soon')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Comming Soon</button>

                <button onClick={()=> CartagoryType('Jordans')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Jordans</button>

                <button onClick={()=> CartagoryType('slides')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Slides</button>

                <button onClick={()=> CartagoryType('training')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Training</button>
                </div>
               
            </div>

            {/*filter by Price*/}
            <div>
                <p className='font-bold text-gray-700'>Filter by Price</p>

                <div className='flex justify-between max-w-[360px] w-full flex-wrap'>
                <button onClick={()=> PriceValue(300)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'><span>R</span> 300</button>

                <button onClick={()=> PriceValue(400)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'><span>R</span> 400</button>

                <button onClick={()=> PriceValue(600)}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'><span>R</span> 600</button>

                <button onClick={()=> PriceValue(700)}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'><span>R</span> 700</button>

                <button onClick={()=> PriceValue(800)}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'><span>R</span> 800</button>

                <button onClick={()=> PriceValue(1000)}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'><span>R</span> 1000</button>

                <button onClick={()=> PriceValue(1200)}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'><span>R</span> 1200</button>

                <button onClick={()=> PriceValue(2000)}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'><span>R</span> 2000</button>

                <button onClick={()=> PriceValue(3000)}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'><span>R</span> 3000</button>

                <button onClick={()=> PriceValue(15000)}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'><span>R</span> 15000</button>

                <button onClick={()=> PriceValue(12000)}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'><span>R</span> 12000</button>
                </div>
                

            </div>

        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

            {kicks.map((kick, index)=> (
                <div key={index}className='border shadow-lg hover:scale-110 duration-500'>

                    <img src={kick.img} alt="Air kicks" className='w-full h-[200] object-cover'/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{kick.name}</p>
                        <p className='text-orange-700'>R {kick.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
