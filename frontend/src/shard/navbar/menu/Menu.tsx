"use client"
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import NavbarLinks from '../navbarLinks/NavbarLinks';
const Menu = () => {
    const [Active, setActive] = useState(false)
  return (
    <div className='lg:hidden text-2xl mr-3 cursor-pointer '>
        <FaBars onClick={()=>setActive(!Active)}/>
        {Active && 
            <div className='absolute z-50 top-[60px] shadow left-0 w-full md:w-[250px] bg-[#000000fd]'>
                <div className="">
                   <NavbarLinks onClose={() => setActive(false)}  style={"flex  flex-col py-8 gap-5"} />
                </div>
            </div>
        }
    </div>
  )
}

export default Menu