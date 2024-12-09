import React from 'react'
import Image from "next/image"
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowDown } from "react-icons/io5";
import { IoArrowUp } from "react-icons/io5";


const Pick = () => {
  return (
    <div className='w-[1440px] h-auto flex justify-center bg-[#F6F7F9]'>
        {/* PickupCard */}
      <div className='mt-10 flex justify-between mb-10'>
      

      <div className="w-[582px] h-[136px]  bg-white px-4 py-4 rounded-lg shadow-xl p-6">
      <div className='flex gap-3'>
      <div className='rounded-full bg-blue-300 w-4 h-4 p-1 mt-[5px]'>
        <div className='rounded-full bg-blue-600 w-2 h-2'></div>
      </div>
<h3 className="text-xl font-semibold text-gray-800 text-center">Pick-Up</h3>
          
      </div>
      
<div className="mt-5 flex justify-between">
  {/* <!-- Location --> */}
  <div  >
    <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Locations</h1>
 
  <div className="flex gap-5">
  <p className='text-[14px] font-bold tracking-[-2%] text-[#90A3BF] '>Select your city</p>
  <IoIosArrowDown />
  </div>
  </div>
   

  {/* <!-- Date --> */}
   <div  >
    <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Date</h1>
 
  <div className="flex gap-5">
  <p className='text-[14px] font-normal tracking-[-2%] text-[#90A3BF] '>Select your Date</p>
  <IoIosArrowDown />
  </div>
  </div  >
   
  {/* <!-- Time --> */}
  <div  >
    <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Time</h1>
 
  <div className="flex gap-5">
  <p className='text-[14px] font-normal tracking-[-2%] text-[#90A3BF] '>Select your Time</p>
  <IoIosArrowDown />
  </div>
  </div>
</div>
</div>
<div className="arrow my-10 mx-10">
  <div className="flex bg-[#3563E9] w-[60px] h-[60px] hover:bg-[#2b4699] px-2 py-4 rounded-xl">
  <IoArrowUp className="text-white text-3xl" />
  <IoArrowDown className="text-white text-3xl" />
  </div>
</div>


<div className="w-[582px] h-[136px]  bg-white px-4 py-4 rounded-lg shadow-lg p-6">
      <div className='flex gap-3'>
      <div className='rounded-full bg-sky-300 w-4 h-4 p-1 mt-[5px]'>
        <div className='rounded-full bg-sky-500 w-2 h-2'></div>
      </div>
<h3 className="text-xl font-semibold text-gray-800 text-center">Day-Off</h3>
          
      </div>
      
<div className="mt-5 flex justify-between">
  {/* <!-- Location --> */}
  <div  >
    <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Locations</h1>
 
  <div className="flex gap-5">
  <p className='text-[14px] font-bold tracking-[-2%] text-[#90A3BF] '>Select your city</p>
  <IoIosArrowDown />
  </div>
  </div>
   

  {/* <!-- Date --> */}
   <div  >
    <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Date</h1>
 
  <div className="flex gap-5">
  <p className='text-[14px] font-normal tracking-[-2%] text-[#90A3BF] '>Select your Date</p>
  <IoIosArrowDown />
  </div>
  </div  >
   
  {/* <!-- Time --> */}
  <div  >
    <h1 className=" text-sm text-[#1A202C] mb-2 text-extrabold text-[16px] leading-[24px] tracking-[-2%]">Time</h1>
 
  <div className="flex gap-5">
  <p className='text-[14px] font-normal tracking-[-2%] text-[#90A3BF] '>Select your Time</p>
  <IoIosArrowDown />
  </div>
  </div>
</div>
</div>

</div>
</div>
  )
}

export default Pick