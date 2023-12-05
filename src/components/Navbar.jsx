import React from 'react'
import usaFlag from "../assets/usa-flag.svg"
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className='flex w-full h-[60px] bg-white shadow-lg justify-between px-8 items-center'>
        <div className='flex w-[8%] justify-start'>
            <span id='brand' className='font-bold text-2xl text-[#243746]'>SOAX</span>
        </div>
        <div className='w-[70%] flex justify-between'>
          <span className='text-[#243746] font-bold text-[14px] cursor-pointer hover:text-[#4954DC]'>Home</span>
          <span className='text-[#243746] font-bold text-[14px] cursor-pointer hover:text-[#4954DC]'>Products</span>
          <span className='text-[#243746] font-bold text-[14px] cursor-pointer hover:text-[#4954DC]'>Contact</span>
          <span className='text-[#243746] font-bold text-[14px] cursor-pointer hover:text-[#4954DC]'>Privacy-police</span>
          <span className='text-[#243746] font-bold text-[14px] cursor-pointer hover:text-[#4954DC]'>Terms-of-service</span>
          <span className='text-[#243746] font-bold text-[14px] cursor-pointer hover:text-[#4954DC]'>About-us</span>
          <span className='text-[#243746] font-bold text-[14px] cursor-pointer hover:text-[#4954DC]'>Proxy-location</span>
          <span className='text-[#243746] font-bold text-[14px] cursor-pointer hover:text-[#4954DC]'>Use-case</span>
        </div>
        <div className='w-[8%] max-h-[100%] flex justify-between items-center'>
        <img src={usaFlag} alt={'usa-flag'} className='object-cover h-[20px]' />
        <div className='flex items-center justify-between'>
        <span className='uppercase text-[#243746] font-medium'>EN</span>
        <RiArrowDropDownLine className='cursor-pointer' style={{fontSize: "32px", fontWeight: 700}} />
        </div>
        </div>
    </nav>
  )
}

export default Navbar