import React from 'react'
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] Footer w-[1440px] h-[480px]">
  <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
       <div className='flex items-center'>
       <h1 className="h-11 me-3"></h1>
          <span className="self-center text-[32px] font-bold whitespace-nowrap text-[#3563E9] w-36">
            MORENT
          </span>
       </div>
       <p className='font-medium text-base text-[#131313] opacity-60 pl-3 pt-5'>Our vision is to provide convenience<br/> and help increase your sales buisness.</p>
        
          
      </div>
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 leading-6">
        <div>
          <h2 className="mb-6 text-xl font-semibold text-[#1A202C]">
            About
          </h2>
          <ul className="text-[#131313] opacity-60 font-medium text-base">
            <li className="mb-4"><p className="hover:underline">How it works</p> 
              
          </li>
            <li className="mb-4">
            <p className="hover:underline">Featured</p> 
            </li>
            <li className="mb-4">
            <p className="hover:underline">Partnership</p> 
            </li>
            <li className="mb-4">
            <p className="hover:underline">Buisness Relation</p> 
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="mb-6 text-xl font-semibold text-[#1A202C]">
            Community
          </h2>
          <ul className="font-medium text-base text-[#131313] opacity-60">
            <li className="mb-4">
            <p className="hover:underline">Events</p> 
            </li>
            <li className="mb-4">
            <p className="hover:underline">Blog</p> 
            </li>
            <li className="mb-4">
            <p className="hover:underline">Podcast</p> 
            </li>
            <li className="mb-4">
            <p className="hover:underline">Invite a friend</p> 
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-xl font-semibold text-[#1A202C]">
            Socials
          </h2>
          <ul className="font-medium text-base text-[#131313] opacity-60">
            <li className="mb-4">
            
            <p className="hover:underline">Discord</p> 
            
            </li>

            <li className="mb-4">
            
            <p className="hover:underline">Instagram</p> 
            
            </li>

            <li className="mb-4">
            
            <p className="hover:underline">Twitter</p> 
            
            </li>

            <li className="mb-4">
            
            <p className="hover:underline">Facebook</p> 
            
            </li>
           </ul>
        </div>
      </div>
    </div>
    <hr className="my-6 sm:mx-auto bg-[#131313] opacity-60 lg:my-8 border border-gray-300" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-base font-bold text-[#1A202C] sm:text-center">
        © 2022{" "}
        <Link href="#" className="hover:underline">
          MORENT
        </Link>
        . All Rights Reserved.
      </span>
      <div className="flex mt-4 sm:justify-center sm:mt-0 gap-11 font-semibold text-base text-[#1A202C]">
       <p>Privacy Policy</p>
       <p>Terms & Conditions</p>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer