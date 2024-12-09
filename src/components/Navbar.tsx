import React from 'react'
  import Image from 'next/image'

  import { RiSearch2Line } from "react-icons/ri";
  import { VscSettings } from "react-icons/vsc";
import Link from 'next/link';
import { IoHeartSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

  
  export default function Header() {
    return (
      <> 
      <div className='w-[1440px] h-[80px] border-slate-10000 border-b-2 bg-white  text-white'>
          <div className=' w-[1365px] border-slate-800 border-r-2 mt-9 bg-white text-white flex flex-row  h-[40px]'>
<div className="flex items-center">
  <Image
    className="ml-2"
    src="/logo-type.jpg"
    alt="Logo"
    width={32}
    height={32}
  />
  <p className="font-bold text-black text-base ml-3">
    High Fidelity Dashboard - Home Rent
  </p>
</div>

      <h1 className='text-slate-600 ml-[800px] flex  mt-2'>Latest updated: <p className='text-black font-semibold'>8 Aug 2022</p></h1>
          </div>
        </div>
         {/* navbar */}
        <nav className='bg-white py-4 px-5 shadow-md flex items-center justify-between w-[1440px] h-[124px]'>
       {/* logo & search bar */}
       <div className='flex items-center space-x-16'>
        {/* logo */}
      <div className='text-2xl font-bold text-blue-600'>MORENT</div>
        {/* search bar */}
         <div className='relative w-[492px] h-[44px]'>
        <input type="text" placeholder='Search something here '
        className='w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
        style={{borderRadius:'60px'}}
        />
          <div className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500'>
          <RiSearch2Line />
          </div>
          <div className='absolute text-2xl  right-4 top-1/2 transform -translate-y-1/2 text-gray-500' >
          <VscSettings />
          </div>
         </div>
       </div>
       {/* icon left han side k */}
       <div className='flex items-center mt-3 space-x-4'>
       <Link href="/favourite">
  <div className="relative">
    <IoHeartSharp className="text-2xl text-gray-600 cursor-pointer" />
    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
  </div>
</Link>

       <Link href={'/notification'}> 
<div className="relative">
  <IoNotifications className="text-2xl text-gray-600 cursor-pointer" />
  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
</div>
       </Link>
       <Link href={'/ setting'}> 
       <IoMdSettings className="text-2xl text-gray-600 cursor-pointer" />

       </Link>
       {/* profile */}
       <Link href={'/ profile'}> 
       <div className='w-10 h-10 rounded-full border overflow-hidden border-gray-300 flex itmes-center justify-center '>
       <Image
  src="/Profile.jpg"
  alt="Profile"
  width={128}
  height={128}
  className="rounded-full object-cover"
/>

       </div>
       </Link>
       </div>
        </nav>
        </>
    )
  };