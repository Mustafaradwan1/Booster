"use client"
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import NavbarLinks from '../navbarLinks/NavbarLinks';
import Search from '../search/Search';

const Menu = () => {
    const [Active, setActive] = useState(false)
  return (
    <div className='lg:hidden text-2xl mr-3 cursor-pointer'>
        <FaBars onClick={()=>setActive(!Active)}/>
        {Active && 
            <div className='absolute z-50 top-[63px] shadow left-0 w-[100%] bg-[var(--background)]'>
                <div className="container">
                   <NavbarLinks onClose={() => setActive(false)}  style={"flex flex-col py-8 gap-5"} />
                   <div className='min-sm:hidden'><Search/></div>
                </div>
            </div>
        }
    </div>
  )
}

export default Menu