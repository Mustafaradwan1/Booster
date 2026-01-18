"use client"
import Link from 'next/link'
import { FaRegUser } from "react-icons/fa";

import { CiSearch } from "react-icons/ci";

const NavBotns = () => {
  return (
    <div className='flex items-center gap-4'>
        <CiSearch className='text-2xl cursor-pointer hover:text-[var(--text-main-color)]'/> 
        <FaRegUser className='text-xl cursor-pointer hover:text-[var(--text-main-color)]'/> 
        
        <button className='
          bg-gradient-main
          bg-gradient-main-hover
          transition-all duration-300 
          rounded-lg
        '>
          <Link href={"/Login"} className='
          py-2 px-6 block text-white 
          '>Login</Link>
        </button>
    </div>
  )
}

export default NavBotns