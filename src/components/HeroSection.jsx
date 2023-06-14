import react from 'react'
import cover from "../images/cover.jpg"

const HeroSection = () =>{
    return (
        <div className='max-w-[1600px] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>

                    <h1 className=' px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-600'>Best</span></h1>

                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-600'>Air Sneakers</span> Delivered</h1>
                </div>
                <img
                className='w-full max-h-[500px] object-cover' src={cover} alt="nike" />
            </div>
        </div>
    )
};

export default HeroSection