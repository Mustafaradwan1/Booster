"use client"
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useTheme } from '@/ThemeProvider/ThemeContext ';

const NavBotns = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className='flex items-center gap-4'>
        <div className='flexCenter cursor-pointer relative w-[40px] h-[40px] rounded-full shadow bg-gray-200'>
          <span className='flexCenter rounded-full absolute w-[20px]  h-[20px] -right-2 -top-[5px] bg-[var(--main-color)] text-white'>0</span>
          <FaShoppingCart className='text-xl text-black'/>
         </div>
        <button>
          <Link href={"/Login"} className='bg-[var(--main-color)] flex items-center px-5 text-white h-[40px] rounded-md'>Login</Link>
        </button>
      <button
        className="cursor-pointer text-2xl rounded-full text-[var(--foreground)]"
        onClick={toggleDarkMode}
      >
        {darkMode ? <CiDark /> : <CiLight />}
      </button>
    </div>
  )
}

export default NavBotns