import react from "react"
import { useState } from "react"
import {AiOutlineMenu, AiOutlineSearch,AiOutlineClose, AiFillTag} from "react-icons/ai"
import {BsFillCartFill, BsFillSaveFill} from "react-icons/bs"
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return(
     <div className="max-w-[1600px] mx-auto flex justify-between items-center p-4">
      {/*left  side nav*/}
      <div className="flex items-center">
        <div onClick={()=> setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30}/>         
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
         <span className="text-orange-600">Macaido</span> Luxury <span className="font-bold">Air Sneakers</span>
        </h1>
        <div className="hidden md:flex items-center bg-gray-200 rounded-full p-1.5">
          <p className="bg-black text-white rounded-full p-2
          ">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/*search input */}

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[300px] ">
        <AiOutlineSearch size={27}/>
        <input type="text"placeholder="Search your taste" className="bg-transparent p-2
         w-full"/>
      </div>

      {/*cartt button */}

      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={23} className="mr-2"/> your cart
      </button>

      {/*mobile menu */}
      {/* dimm background*/}
      {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
      

      {/*sidebar*/}
      <div className={nav? "fixed top-0 left-0 w-[300px] h-screen bg-white duration-300 z-10" :"fixed top-0 left-[-100%] w-[300px] h-screen bg-white duration-300 z-10"}>
        <AiOutlineClose
        onClick={()=> setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer" />

        <h2 className="text-2xl p-4
        ">Don Luxury <span className="font-bold">Air Sneakers</span></h2>

        <nav>
          <ul>
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>

            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favourites
            </li>

            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>

            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>

            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> promotions
            </li>

            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" />New arravals
            </li>

            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" />Invite Friends
            </li>
          </ul>
        </nav>
      </div>
     </div>
  )
};

export default Navbar
